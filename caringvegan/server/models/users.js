//==============================================================================
// set up ======================================================================
//==============================================================================
const mongoose      = require('mongoose');
const { Schema }    = mongoose;
const bcrypt        = require('bcrypt');

// define the schema for our user model
const userSchema    = new Schema({

    local            : {
        email        : String,
        password     : String,
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
        name         : String
    }

});

//==============================================================================
// methods =====================================================================
//==============================================================================

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
//module.exports = mongoose.model('User', userSchema);
mongoose.model('Users', userSchema);

