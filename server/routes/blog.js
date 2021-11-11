const mongoose = require('mongoose');
const Post = mongoose.model('Blog');

module.exports = app => {
    app.get('/api/archive/month',(req,res) => {
        Post.find({date: { $gte:'2020-05-01', $lte:'2020-05-11'}},(err,doc)=>{
            if(doc)
                res.json(doc);
            else {
                res.err(err);
            }
        })
    })
    
    app.get('/api/archive/:year',(req,res) => {
        const year = req.params.year
        const start = year + '-01-01';
        const end = new Date
        Post.find({date: { $gte:start, $lte:end}},(err,doc)=>{
            if(doc)
                res.json(doc);
            else {
                res.err(err);
            }
        })
    })
/*******************************************
********************************************
 * Get Blog Posts
********************************************
*******************************************/
    app.get('/api/posts', (req,res) =>{          //get all posts info from db
        Post.find({},(err,doc)=>{
            if(doc)
                res.json(doc);
            else {
                res.status(404).send('Ops!'+err)
            }
        })
    });
/*******************************************
********************************************
 * Post Blog Posts
********************************************
*******************************************/
  app.post('/api/addPost',(req,res) => {        //add a new post
//    const { title, author, content} = req.body;
    const postObj = new Post({
        title : req.body.title,
        author : req.user._id,
        content : req.body.content,
        date : new Date()
    })
    postObj.save((err)=>{
        if(err){
            res.send('Unable to publish post!');
        }
        else
            res.send('Post published successfully!');
    })
  });
/*******************************************
********************************************
 * Get Blog Post By Id
********************************************
*******************************************/
  app.get('/api/getpost/:postid',(req,res)=>{
    Post.findOne({_id : req.params.postid},{},(err,doc)=>{
        if(doc)
            res.json(doc);
        else {
            res.status(404).send('Ops! Details not found');
        }
    })
  });   

/*******************************************
********************************************
 * Update Blog Posts
********************************************
*******************************************/
  app.post('/api/updatepost/:postid',(req,res)=>{          //update a post data
    console.log('updatepost ',req.params.postid)
    console.log('updatepost ',req.body)
    Post.findOneAndUpdate({
        _id : req.params.postid
    },{
        $set:{
            title   : req.body.title,
            content : req.body.content,
            updated : new Date()
        }},
        (err,doc)=>{
            if(doc)
                res.send('Post updated successfully!');
            else {
                res.status(404).send('Ops!'+err);
            }
    })
  });

/*******************************************
********************************************
 * Delete Blog Post
********************************************
*******************************************/
  app.delete('/api/deletepost/:postid',(req,res)=>{           //delete a perticular post
    Post.findOneAndRemove({_id : req.params.postid},{},(err,doc)=>{
        if(doc)
            res.send('Post deleted successfully!');
        else {
            res.status(404).send('Ops! Post not found');
        }
    })
  });
}