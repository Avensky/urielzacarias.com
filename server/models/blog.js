const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
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
    date : {
        type : Date,
//        required : true
    },
    updated : {type : Date}
})

// const user = mongoose.model('users', userSchema);
// module.exports = user;

//mongoose.model('Blog', blogSchema);
const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
