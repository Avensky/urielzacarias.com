const post = require('../models/Post');
const mongoose = require('mongoose');
const Post = mongoose.model('posts');

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

    app.get('/api/posts', (req,res) =>{          //get all posts info from db
        Post.find({},(err,doc)=>{
            if(doc)
                res.json(doc);
            else {
                res.err(err);
            }
        })
    });

  app.post('/api/addPost',(req,res) => {        //add a new post
//    const { title, author, content} = req.body;
    const postObj = new Post({
        title : req.body.title,
        author : req.body.author,
//        postId : req.body.postid,
        content : req.body.content,
        date : new Date()
    })
    postObj.save((err)=>{
        if(err){
        console.log(err);
        res.send('Unable to save post data!');
        }
        else
        res.send('post data saved successfully!');
    })
  });

  app.get('/api/getpostDetails/:postid',(req,res)=>{              //get a post details
    Post.findOne({_id : req.params.postid},{},(err,doc)=>{
        if(doc)
            res.json(doc);
        else {
            res.status(404).send('Ops!Detail not found');
        }
    })
  });   

  app.post('/api/update',(req,res)=>{          //update a post data
    Post.findOneAndUpdate({postId : req.body.postid},{$set:{publisher : req.body.publisher}},(err,doc)=>{
        if(doc)
            res.send('Post updated successfully!');
        else {
            res.err(err.message);
        }
    })
  });

  app.delete('/api/deletepost/:postid',(req,res)=>{           //delete a perticular post
    Post.findOneAndRemove({_id : req.params.postid},{},(err,doc)=>{
        if(doc)
            res.json(doc);
        else {
            res.status(404).send('Ops! Post not found');
        }
    })
  });
}