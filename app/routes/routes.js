module.exports = function(app, passport) {

    // =============================================================================
    // normal routes ===============================================================
    // =============================================================================
        // show the home page (will also have our login links)
        // app.get('/', function(req, res) {
        //     res.render('index.ejs');
        // });
    
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
        // =====================================
        // PROFILE SECTION =====================
        // =====================================
        // app.get('/profile', isLoggedIn, function(req, res) {
        //     res.render('profile.ejs', {
        //         user : req.user
        //     });
        // });
    
        // =====================================
        // LOGOUT ==============================
        // =====================================
        app.get('/auth/logout', function(req, res) {
            req.logout();
            res.redirect('/authentication');
        });
    
        // when login failed, send failed msg
        app.get("/login/failed", (req, res) => {
            res.status(401).json({
            success: false,
            message: "user failed to authenticate."
            });
        });
    
    // =============================================================================
    // AUTHENTICATE (FIRST LOGIN) ==================================================
    // =============================================================================
    
        // locally --------------------------------
            // LOGIN ===============================
            // show the login form
            //    app.get('/login', function(req, res) {
            //        res.render('login.ejs', { message: req.flash('loginMessage') });
            //    });
    
    // =====================================
    // LOCAL ===============================
    // =====================================
            // =====================================
            // LOGIN ===============================
            // =====================================
            app.post('/auth/login', function(req, res, next) {
                passport.authenticate('local-login', function(err, user, info) {
                  if (err) { return next(err); }
                  if (!user) { return res.send(info); }
                  req.logIn(user, function(err) {
                    if (err) { return next(err); }
                    //return res.redirect('/profile/' + user.username);
                    return res.send(200)
                  });
                }
                )(req, res, next);
            })  
            // =====================================
            // SIGNUP ==============================
            // =====================================
            // show the signup form
            // app.get('/signup', function(req, res) {
            //     res.render('signup.ejs', { message: req.flash('loginMessage') });
            // });
        // =====================================
        // REGISTER ============================
        // =====================================
            // process the signup form
            app.post('/auth/signup', function(req, res, next) {
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
    
    
            // process the signup form
            // app.post('/api/signup', passport.authenticate('local-signup', {
            //     successRedirect : '/profile', // redirect to the secure profile section
            //     failureRedirect : '/signup', // redirect back to the signup page if there is an error
            //     failureFlash : true // allow flash messages
            // }));
    
    
        // =====================================
        // FACEBOOK ROUTES =====================
        // =====================================
        // route for facebook authentication and login
            app.get('/auth/facebook', 
            passport.authenticate('facebook', { 
                scope : ['public_profile', 'email'] 
            }));
    
            // handle the callback after facebook has authenticated the user
            app.get('/auth/facebook/callback',
                passport.authenticate('facebook', {
                    successRedirect : '/profile',
                    //failureRedirect : '/'
                }));
    
        // =====================================
        // TWITTER ROUTES ======================
        // =====================================
        // route for twitter authentication and login
            app.get('/auth/twitter', passport.authenticate('twitter', { scope : 'email' }));
    
            // handle the callback after twitter has authenticated the user
            app.get('/auth/twitter/callback',
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
            app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));
    
            // the callback after google has authenticated the user
            app.get('/auth/google/callback',
                passport.authenticate('google', {
                    successRedirect : '/profile',
                    failureRedirect : '/'
                }));
    
    // =============================================================================
    // AUTHORIZE (ALREADY LOGGED IN / CONNECTING OTHER SOCIAL ACCOUNT) =============
    // =============================================================================
    
        // locally --------------------------------
            app.get('/connect/local', function(req, res) {
                res.render('connect-local.ejs', { message: req.flash('loginMessage') });
            });
            app.post('/connect/local', passport.authenticate('local-signup', {
                successRedirect : '/profile', // redirect to the secure profile section
                failureRedirect : '/connectlocal', // redirect back to the signup page if there is an error
                failureFlash : true // allow flash messages
            }));
    
        // facebook -------------------------------
    
            // send to facebook to do the authentication
            app.get('/connect/facebook', passport.authorize('facebook', { scope : 'email' }));
    
            // handle the callback after facebook has authorized the user
            app.get('/connect/facebook/callback',
                passport.authorize('facebook', {
                    successRedirect : '/profile',
                    failureRedirect : '/'
                }));
    
        // twitter --------------------------------
    
            // send to twitter to do the authentication
            app.get('/connect/twitter', passport.authorize('twitter', { scope : 'email' }));
    
            // handle the callback after twitter has authorized the user
            app.get('/connect/twitter/callback',
                passport.authorize('twitter', {
                    successRedirect : '/profile',
                    failureRedirect : '/'
                }));
    
    
        // google ---------------------------------
    
            // send to google to do the authentication
            app.get('/connect/google', passport.authorize('google', { scope : ['profile', 'email'] }));
    
            // the callback after google has authorized the user
            app.get('/connect/google/callback',
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
        app.get('/unlink/local', function(req, res) {
            var user            = req.user;
            user.local.email    = undefined;
            user.local.password = undefined;
            user.save(function(err) {
                res.redirect('/profile');
            });
        });
    
        // facebook -------------------------------
        app.get('/unlink/facebook', function(req, res) {
            var user            = req.user;
            user.facebook.token = undefined;
            user.save(function(err) {
                res.redirect('/profile');
            });
        });
    
        // twitter --------------------------------
        app.get('/unlink/twitter', function(req, res) {
            var user           = req.user;
            user.twitter.token = undefined;
            user.save(function(err) {
                res.redirect('/profile');
            });
        });
    
        // google ---------------------------------
        app.get('/unlink/google', function(req, res) {
            var user          = req.user;
            user.google.token = undefined;
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