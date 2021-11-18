//==============================================================================
// set up ======================================================================
//==============================================================================
const mongoose      = require('mongoose');
const { Schema }    = mongoose;
const bcrypt        = require('bcrypt');
const crypto        = require('crypto');

// define the schema for our user model
const userSchema    = new Schema({
    local : {
        email                 : String,
        password              : String,
        passwordConfirm: {
            type          : String,
        },
        passwordChangedAt     : Date,
        passwordResetToken    : String,
        passwordResetExpires  : Date,
        active: {
            type    : Boolean,
            default : true,
            select  : false
        }
    },
    facebook : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    twitter : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },
    google : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    }
});

userSchema.pre('save', async function(next) {
    // Only run this function if password was actually modified
    if (!this.isModified('password')) return next();//  
    console.log('isModified - Only run this function if password was actually modified')
  
    // Hash the password with cost of 12
    this.password = await bcrypt.hash(this.password, 12);// 
  
    // Delete passwordConfirm field
    this.passwordConfirm = undefined;
    next();
  });// 
  
  
  userSchema.pre('save', function(next) {
    
    if (!this.isModified('password') || this.isNew) return next();//  
    console.log('!isModified')
    this.passwordChangedAt = Date.now() - 1000;
    next();
  });// 
  
  
  userSchema.pre(/^find/, function(next) {
    // this points to the current query
    this.find({ active: { $ne: false } });
    next();
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

// create reset token
userSchema.methods.createPasswordResetToken = function() {
    console.log('resetToken started');
    const resetToken = crypto.randomBytes(32).toString('hex');
  
    this.local.passwordResetToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex'); 
  
    console.log('resetToken', resetToken);
  
    this.local.passwordResetExpires = Date.now() + 10 * 60 * 1000;
  
    return resetToken;
  };

// check if passwords match
userSchema.methods.correctPassword = async function(candidatePassword,userPassword) {
    console.log('correct password check')
    return await bcrypt.compare(candidatePassword, userPassword);
  };


  userSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
    console.log('passwordChangedAt')
    if (this.passwordChangedAt) {
      const changedTimestamp = parseInt(
        this.passwordChangedAt.getTime() / 1000,
        10
      );
  
      return JWTTimestamp < changedTimestamp;
    }
  
    // False means NOT changed
    return false;
  };
  
  userSchema.methods.createPasswordResetToken = function() {
    console.log('resetToken started');
    const resetToken = crypto.randomBytes(32).toString('hex');
  
    this.local.passwordResetToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex'); 
  
    console.log('resetToken', resetToken);
  
    this.local.passwordResetExpires = Date.now() + 10 * 60 * 1000;
  
    return resetToken;
  };
  
  // generating a hash
  userSchema.methods.generateHash = function(password) {
    console.log('generateHash')
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };
  
  // checking if password is valid
  userSchema.methods.validPassword = function(password) {
  //  console.log("local password check = " + password);
  //  //  console.log("local user check = " + this.local);
  //  console.log("local this.pass check = " + this.local.password);
  //  console.log("local email check = " + this.local.email);
    return bcrypt.compareSync(password, this.local.password);
  };

// create the model for users and expose it to our app
//module.exports = mongoose.model('User', userSchema);
mongoose.model('Users', userSchema);

