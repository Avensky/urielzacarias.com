const mongoose = require('mongoose');
const user = require('../models/User');
const User = mongoose.model('users');

module.exports = app => {
    app.get('/api/users', (req,res) =>{          //get all users info from db
        User.find({},(err,doc)=>{
            if(doc)
                res.json(doc);
            else {
                res.err(err);
            }
        })
    });

    app.post('/api/addUser',(req,res)=>{        //add a new post
        console.log('user signup');
        const { username, givenName, familyName, email, password, picture} = req.body

        // VALIDATION

        User.findOne({ email: email }, (err, user) => {
            if (err) {
                console.log('User.js post error: ', err)
            } else if (user) {
                res.json({
                    error: `I'm sorry, this email already exists: ${email}`
                })
            }
            else {
                const newUser = new User({
                    username : username, 
                    givenName : givenName, 
                    familyName : familyName, 
                    email : email, 
                    password : password,
                    picture: picture,
                    date: new Date()
                })
                newUser.save((err, savedUser) => {
                    if (err) {
                        console.log(err);
                        res.send('Unable to save user data!');
                        res.json(err)
                    }
                    else
                        res.send('User data saved successfully!');
                        res.json(savedUser)
                })
            }
        })
    })
    
    app.get('/api/getuserDetails/:userid',(req,res)=>{              //get user details
        User.findOne({userId : req.body.userid},{},(err,doc)=>{
            if(doc)
                res.json(doc);
            else {
                res.status(404).send('Ops!Detail not found');
            }
        })
    });   

    app.post('/api/updateuser',(req,res)=>{          //update a post data
        User.findOneAndUpdate(
            {userId: req.body.userid},
            { $set:
                {
                    username : req.body.name,
                    givenName : req.body.givenName,
                    familyName : req.body.familyName,
                    email: req.body.email,
                    picture: req.body.picture
                }
            },(err,doc)=>{
            if(doc)
                res.send('User account updated successfully!');
            else {
                res.err(err.message);
            }
        })
    });

    app.delete('/api/deleteuser/:userid',(req,res)=>{           //delete a perticular user
        User.findOneAndRemove({_id : req.params.userid},{},(err,doc)=>{
            if(doc)
                res.json(doc);
            else {
                res.status(404).send('Ops! User not found');
            }
        })
    });
    }