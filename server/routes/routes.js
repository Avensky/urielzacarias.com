
const mongoose  = require('mongoose');
const Users     = mongoose.model('Users');
const AppError              = require('./../utils/appError');
const Email                 = require('./../utils/email');
const crypto                = require('crypto');
// load the auth variables

module.exports  = function(app, passport) {
    // =============================================================================
    // normal routes ===============================================================
    // =============================================================================
    
    // Get all users
    app.get('/api/v1/fetchUsers', (req,res) =>{
        Users.find({},(err,doc)=>{
            if(doc)
                res.json(doc);
            else {
                res.err(err);
            }
        })
    });

	app.get('/api/fetchUser', async (req, res, next) => {
        if (req.user){
			res.send(req.user);
			next();
			return
		}
		res.status(401).send('Not authorized');
	});

	
	app.get('/ping', (req, res) => {
        res.status(200).send("pong!");
	});

	app.get('/api/ping', (req, res) => {
        res.status(200).send("api pong!");
	});

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/api/logout', function(req, res) {
        req.logout();
        res.redirect('/authentication');
    });
    
    // =============================================================================
    // AUTHENTICATION ==============================================================
    // =============================================================================
        // =====================================
        // LOGIN ===============================
        // =====================================
        app.post('/api/login', function(req, res, next) {
            passport.authenticate('local-login', function(err, user, info) {
                if (err) { return next(err); }
                if (!user) { return res.send(info); }
                req.logIn(user, function(err) {
                if (err) { return next(err); }
                //return res.redirect('/profile/' + user.username);
                return res.send(200)
                });
            })(req, res, next);
        })

        const createSendToken = (user, statusCode, req, res) => {
            console.log('createSendToken user',user)
            console.log('statusCode',statusCode)
        
            req.logIn(user, function(err) {
                if (err) { return res.err }
                //return res.redirect('/profile/' + user.username);
                //return res.send(200)
                return res.send(200)
            })
        };
        
        // =====================================
        // REGISTER ============================
        // =====================================
            // process the signup form
            app.post('/api/signup', function(req, res, next) {
                passport.authenticate('local-signup', function(err, user, info) {
                  if (err) { return next(err); }
                  if (!user) { return res.send(info); }
                  req.logIn(user, function(err) {
                    if (err) { return next(err); }
                    // return res.redirect('/profile/' + user.username);
                    return res.send(200)
                  });
                })(req, res, next);
            });

        // =====================================
        // RESET PASSWORD ======================
        // =====================================
            app.post('/api/forgotPassword', async (req, res, next) =>  {
                // 1) Get user based on POSTed email
                const user = await Users.findOne({ 'local.email': req.body.email });
                if (!user) {
                    return next(new AppError('There is no user with email address.', 404));
                }
                //console.log('user', user)
                // 2) Generate the random reset token
                const resetToken = user.createPasswordResetToken();
                //console.log('resetToken', resetToken)
                await user.save({ validateBeforeSave: false });

                //console.log('user token', user)
                // 3) Send it to user's email
                try {
                    //const resetURL = `${req.protocol}://${req.get('host')}/api/v1/users/resetPassword/${resetToken}`;
                    const resetURL = `${req.protocol}://${req.get('host')}/authentication/${resetToken}`;
                    console.log('resetURL', resetURL)
                    console.log('user', user)
                    const email = user.local.email
                    await new Email(user, email, resetURL).sendPasswordReset();

                    res.status(200).json({
                        status: 'success',
                        message: 'Password reset token sent to email! Link is valid for 10 minutes!'
                    });
                } catch (err) {
                    console.log('err', err)
                    user.local.passwordResetToken = undefined;
                    user.local.passwordResetExpires = undefined;
                    await user.save({ validateBeforeSave: false });

                    return next(
                        new AppError('There was an error sending the email. Try again later!'),
                        500
                    );
                }
            })

            app.patch('/api/resetPassword/:token', async (req, res, next) => {
                console.log('resetPassword start')
                // 1) Get user based on the token
                console.log('resetPassword start')
                console.log('req.params.token',req.params.token)
                const hashedToken = crypto
                    .createHash('sha256')
                    .update(req.params.token)
                    .digest('hex');
                console.log('hashedToken',hashedToken)
                const user = await Users.findOne({ 
                    'local.passwordResetToken': hashedToken, 
                    'local.passwordResetExpires': { $gt: Date.now() }
                })
                console.log('passwordResetToken user',user)
                // 2) If token has not expired, and there is user, set the new password
                if (!user) {
                    return next(new AppError('Token is invalid or has expired', 400));
                }
        
                user.correctPassword(req.body.password,req.body.confirm_password)
                console.log('req',req.body)
                user.local.password = user.generateHash(req.body.password);
                user.local.passwordConfirm = user.generateHash(req.body.confirm_password);
                user.local.passwordResetToken = undefined;
                user.local.passwordResetExpires = undefined;
                await user.save();
        
                const url = `${req.protocol}://${req.get('host')}/authentication`;
                console.log(url);
                const email = user.local.email
                new Email(user, email, url).sendResetComfirmation();
        
                // 3) Update changedPasswordAt property for the user
                // 4) Log the user in, send JWT
                createSendToken(user, 200, req, res);
            })
        // =====================================
        // =====================================
        // FACEBOOK ROUTES =====================
        // route for facebook authentication and login
            app.get('/api/facebook', 
            passport.authenticate('facebook', { 
                scope : ['public_profile', 'email'] 
            }));
    
            // handle the callback after facebook has authenticated the user
            app.get('/api/facebook/callback',
                passport.authenticate('facebook', {
                    successRedirect : '/profile',
                    failureRedirect : '/'
                }));
    
        // =====================================
        // TWITTER ROUTES ======================
        // =====================================
        // route for twitter authentication and login
            app.get('/api/twitter', 
                passport.authenticate('twitter', { 
                scope : 'email' 
                }));

            // handle the callback after twitter has authenticated the user
            app.get('/api/twitter/callback',
                passport.authenticate('twitter', {
                    successRedirect : '/profile',
                    failureRedirect : '/'
                }));
    
    
        // =====================================
        // GOOGLE ROUTES =======================
        // =====================================
        // send to google to do the authentication
        // profile gets us their basic information including their name
        // email gets their emails
            app.get('/api/google', passport.authenticate('google', { scope : ['profile', 'email'] }));
    
            // the callback after google has authenticated the user
            app.get('/api/google/callback',
                passport.authenticate('google', {
                    successRedirect : '/profile',
                    failureRedirect : '/'
                }));
    
    // =============================================================================
    // AUTHORIZE (ALREADY LOGGED IN / CONNECTING OTHER SOCIAL ACCOUNT) =============
    // =============================================================================
    
        // locally --------------------------------
	app.post('/api/connect/local', function(req, res, next) {
		passport.authenticate('local-signup', function(err, user, info) {
			if (err) { return next(err); }
			if (!user) { return res.send(info); }
			req.logIn(user, function(err) {
			if (err) { return next(err); }
			//return res.redirect('/profile');
			return res.send(200)
			});
		})(req, res, next);
	});

        // facebook -------------------------------
    
            // send to facebook to do the authentication
            app.get('/api/connect/facebook', passport.authorize('facebook', { scope : 'email' }));
    
            // handle the callback after facebook has authorized the user
            app.get('/api/connect/facebook/callback',
                passport.authorize('facebook', {
                    successRedirect : '/profile',
                    failureRedirect : '/'
                }));
    
        // twitter --------------------------------
    
            // send to twitter to do the authentication
            app.get('/api/connect/twitter', passport.authorize('twitter', { scope : 'email' }));
    
            // handle the callback after twitter has authorized the user
            app.get('/api/connect/twitter/callback',
                passport.authorize('twitter', {
                    successRedirect : '/profile',
                    failureRedirect : '/'
                }));
    
    
        // google ---------------------------------
    
            // send to google to do the authentication
            app.get('/api/connect/google', passport.authorize('google', { scope : ['profile', 'email'] }));
    
            // the callback after google has authorized the user
            app.get('/api/connect/google/callback',
                passport.authorize('google', {
                    successRedirect : '/profile',
                    failureRedirect : '/'
                }));
    
    // =============================================================================
    // UNLINK ACCOUNTS =============================================================
    // =============================================================================
    // used to unlink accounts. for social accounts, just remove the token
    // for local account, remove email and password
    // user account will stay active in case they want to reconnect in the future
    
        // local -----------------------------------
        app.get('/api/unlink/local', function(req, res) {
            var user            = req.user;
            user.local.email    = undefined;
            user.local.password = undefined;
            user.save(function(err) {
                res.redirect('/profile');
            });
        });

        // facebook -------------------------------
        request = require('superagent');
	    function facebookDisconnect(req, res, next) {
            request
                .post('https://graph.facebook.com/' + req.user.facebook.id + '/permissions')
                .send({ 
                'method': 'DELETE',
                'format': 'json', 
                'access_token': req.user.facebook.token
                })
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .end(function() {
                    back = req.header('Referer') || '/';
                    res.redirect(back);
                });
        }

        app.get('/api/unlink/facebook', function(req, res) {
            facebookDisconnect(req, res)
            var user            = req.user;
            user.facebook       = undefined;
            user.save(function(err) {
                res.redirect('/profile');
            });
        });

        // twitter --------------------------------
        app.get('/api/unlink/twitter', function(req, res) {
            var user           = req.user;
            user.twitter       = undefined;
            user.save(function(err) {
                res.redirect('/profile');
            });
        });

        // google ---------------------------------
        app.get('/api/unlink/google', function(req, res) {
            var user          = req.user;
            user.google       = undefined;
            user.save(function(err) {
                res.redirect('/profile');
            });
        });
    
    
    };
    
    // route middleware to ensure user is logged in
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
    
        res.redirect('/');
    }
