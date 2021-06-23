  
// app/models/User.js
// set up ======================================================================
const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

// define the schema for our user model
const userSchema = new Schema({

    local            : {
        email        : String,
        password     : String,
        username     : String,
        givenName    : String,
        familyName   : String,
        password     : String,
        picture      : String,
        date         : Date,

    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        username     : String,
        givenName    : String,
        familyName   : String,
        password     : String,
        picture      : String,
        date         : Date,
    }

//    googleId: String,
//    username: { 
//        type: String, 
//        unique: false, 
//        required: false 
//    },
//    givenName: String,
//    familyName: String,
//    email: String,
//    password: { 
//        type: String, 
//        unique: false, 
//        required: false 
//    },
//    picture: String,
//    date : Date
})

// methods ==================================================================================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// const user = mongoose.model('users', userSchema);
// module.exports = user;


mongoose.model('User', userSchema);

// create the model for users and expose it to our app
// mongoose.model('User', userSchema);