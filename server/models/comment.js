const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    title : {
        type : String,
//        uppercase : true,   //it will always covert firstName to Uppercase
//        required : true
    },
    author : {
        type : String,
        required : false  
    },
//    postId : {
//        type : String,
//        required : true,
//        unique : true      //ensures this will have always unique value
//    },
    content : {
        type : String,
//        required : true
    },
    replyTo : {
        type : String,
//        required : true
    },
    date : {
        type : Date,
//        required : true
    },
    updated : {type : Date}
})

// const user = mongoose.model('users', userSchema);
// module.exports = user;

//mongoose.model('Comment', commentSchema);
const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
