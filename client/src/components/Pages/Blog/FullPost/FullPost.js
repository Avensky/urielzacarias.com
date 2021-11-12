import React, { useState, useEffect} from 'react';
import {connect} from 'react-redux'
import Archives from '../Archives/Archives';
import * as actions from '../../../../store/actions/index'
import Post from '../Posts/Post/Post';
import classes from './FullPost.module.scss';
import Spinner from '../../../../components/UI/Spinner/Spinner'
import { Link, useHistory } from 'react-router-dom';
import AddComment from './AddComment/AddComment';
import Comments from './Comments/Comments';

const FullPost = props => {
    const history = useHistory()
    const { posts, post } = props

    const fetchData = async () => { props.onFetchPosts() }
    useEffect(() => {  if (!posts){ fetchData() } },[posts])

    const loadComments = async (id) => { props.getComments(id) }
    const loadData = async (id) => { 
        history.push('/blog/fullpost/'+id)
        props.getPost(id)

    }
    useEffect(() => { 
        // On Initial Load

        // if !post load one
        if (!props.post){ 
            loadData(props.match.params.blogId) 
            if (!props.comments){ 
                loadComments(props.match.params.blogId)
            } 
        } 

        // if post is loaded check if comments reply to id matches the blog id
        if (props.post){
            // only check if comments are loaded
            if(props.comments){
                if (props.comments.replyTo !== props.match.params.blogId){
                    loadComments(props.match.params.blogId)
                }
            }
        }
    },[])

    useEffect(() => { 
        // On new items being loaded check if comments match the blog id
        if (props.post){
            if(props.comments != null){
                if (props.comments.replyTo !== props.match.params.blogId){
                    loadComments(props.match.params.blogId)
                }
            }
        }
    },[props.post])

    useEffect(() => { 
        //On new items being loaded check if comments match the blog id
        if (props.post){
        if (!props.comments){
            loadComments(props.match.params.blogId) 
        }
    }

    },[props.commentsMessage])

    let commentMessages;
    props.commentsMessage && (props.commentsError !== null)
        ? commentMessages = <div className={classes.ErrorMessage}>{props.commentsMessage}</div>
        : commentMessages = <div className={classes.ErrorMessage} />

    const deletePostHandler     = ()            => { props.deletePost(props.match.params.blogId);}
    const deleteCommentHandler  = (replyTo, id) => { props.deleteComment(replyTo, id); }
    const postCommentHandler    = (values)      => { props.postComment(values);}

    let postById = <p style={{textAlign: 'center'}}>Nothing to Show.</p>
    if (props.loading) {postById = <Spinner />;}
    if (post) {
        const d = new Date(post.date);
        const months = [ "January", "February", "March", "April", "May", "June", 
            "July", "August", "September", "October", "November", "December" ];
        const month = (d.getMonth()+1);
        const selectedMonth = months[month]
        const days = [ "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday" ]
        const day = d.getDay()
        const selectedDay = days[day]
        const date = selectedDay + ', ' + selectedMonth  + " " + (d.getDate()) + ", " + d.getFullYear();
        const time = d.toLocaleTimeString('en-US')

        let edit = false

        if (props.user){
            if  (post.author === props.user._id) {edit = true}
        } else {
            if  (post.author === "Anonymous") {edit = true}
        }

        let comments 
        props.comments
        ? comments = <Comments
            user={props.user}
            comments={props.comments}
            delete={(replyTo, id)=> deleteCommentHandler(replyTo, id)}
        />
        : comments = null
        postById = ( 
            <div>            
                <Post
                    key={post._id} 
                    id={post._id}
                    title={post.title} 
                    author={post.author}
                    content={post.content}
                    date={date}
                    time={time}
                    lines={20}
                    clName={classes.FullPost}
                    click={()=> deletePostHandler(post._id)}
                    edit={edit}
                    delete={deletePostHandler}
                    comments={props.comments || []}
                /> 
                {comments}
                {commentMessages}
                <AddComment 
                    replyTo={post._id}
                    postComment={(values)=> postCommentHandler(values)}
                />
            </div>

        )
    }

    let archives
    if (posts) {archives = <Archives 
        posts={props.posts} 
        clicked={loadData}
    />}

    let messages;
    props.message && (props.error !== null)
        ? messages = <div className={classes.ErrorMessage}>{props.message}</div>
        : messages = <div className={classes.ErrorMessage} />

    return( 
        <div className={['page-wrapper', classes.BlogLayout].join(' ')}>
            <div className={classes.Blog}>
                <section className={classes.Content}>
                    <Link to={'/blog/'}><h1>Blog Home</h1></Link>
                    {postById}
                    {messages}
                    {commentMessages}
                    
                </section>
                <section className={classes.Archives}>
                    {archives}
                </section>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loading             : state.blog.loading,
        posts               : state.blog.posts,
        post                : state.blog.fetchedPostsById,
        message             : state.blog.message,
        error               : state.blog.error,
        user                : state.auth.payload,
        comments            : state.comments.comments, 
        commentsMessage     : state.comments.message,
        commentsError       : state.comments.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchPosts    : ()            => dispatch( actions.fetchPosts()),
        getPost         : (id)          => dispatch( actions.fetchPostsById(id)),
        deletePost      : (id)          => dispatch( actions.deletePost(id)),
        postComment     : (id)          => dispatch( actions.postComment(id)),
        getComments     : (id)          => dispatch( actions.getComments(id)),
        deleteComment   : (replyTo, id) => dispatch( actions.deleteComment(replyTo, id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FullPost);