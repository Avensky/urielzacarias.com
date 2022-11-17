import React, { useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../../store/actions/index';
import Post from '../Posts/Post/Post';
import classes from './FullPost.module.scss';
import Spinner from '../../../../components/UI/Spinner/Spinner';
import AddComment from './AddComment/AddComment';
import Comments from './Comments/Comments';
import PropTypes from 'prop-types';

const FullPost = props => {
    const { post } = props;
    // load post data
    useEffect(() => { 
        // if no post load one
        if (!props.post){ 
            props.loadData(props.match.params.blogId); 
        } 

        if (props.post){
            // check it loaded post matches params
            if (props.post._id !== props.match.params.blogId){
                props.loadData(props.match.params.blogId);
            };
        };
    },[]);

    // load comment data
    useEffect(() => { 
        // On new items being loaded check if comments match the blog id
        if (props.post){
            if (!props.comments){
                props.loadComments(props.match.params.blogId);
            };
        };
    },[props.comments]);

    let commentMessages;
    props.commentsMessage && (props.commentsError !== null)
        ? commentMessages = <div className={classes.ErrorMessage}>{props.commentsMessage}</div>
        : commentMessages = <div className={classes.ErrorMessage} />;

    const deletePostHandler     = ()            => { props.deletePost(props.match.params.blogId);};
    const deleteCommentHandler  = (replyTo, id) => { props.deleteComment(replyTo, id); };
    const postCommentHandler    = (values)      => { props.postComment(values);};

    let postById = <p style={{textAlign: 'center'}}>Nothing to Show.</p>;
    if (props.loading) {postById = <Spinner />;};
    if (post) {
        const d = new Date(post.date);
        const months = [ "January", "February", "March", "April", "May", "June", 
            "July", "August", "September", "October", "November", "December" ];
        const month = (d.getMonth());
        const selectedMonth = months[month];
        const days = [ "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday" ];
        const day = d.getDay();
        const selectedDay = days[day];
        const date = selectedDay + ', ' + selectedMonth  + " " + (d.getDate()) + ", " + d.getFullYear();
        const time = d.toLocaleTimeString('en-US');

        let edit = false;

        if (props.user){
            if  (post.author === props.user._id) {edit = true;};
        } else {
            if  (post.author === "Anonymous") {edit = true;};
        };

        let comments; 
        props.comments
        ? comments = <Comments
            user={props.user}
            comments={props.comments}
            delete={(replyTo, id)=> deleteCommentHandler(replyTo, id)}
        />
        : comments = null;
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
                    loadData  = {props.loadData}
                /> 
                {comments}
                {commentMessages}
                <AddComment 
                    replyTo={post._id}
                    postComment={(values)=> postCommentHandler(values)}
                />
            </div>

        );
    };

    let messages;
    props.message && (props.error !== null)
        ? messages = <div className={classes.ErrorMessage}>{props.message}</div>
        : messages = <div className={classes.ErrorMessage} />;

    return( <div className={classes.FullPost}>
                {postById}
                {messages}
                {commentMessages}
            </div>);
};

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
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getPost         : (id)          => dispatch( actions.fetchPostsById(id)),
        deletePost      : (id)          => dispatch( actions.deletePost(id)),
        postComment     : (id)          => dispatch( actions.postComment(id)),
        getComments     : (id)          => dispatch( actions.getComments(id)),
        deleteComment   : (replyTo, id) => dispatch( actions.deleteComment(replyTo, id))
    };
};

FullPost.propTypes = {
    post : PropTypes.object,
    loadData : PropTypes.func,
    comments : PropTypes.object,
    commentsMessage : PropTypes.string,
    commentsError : PropTypes.string,
    deletePost : PropTypes.func,
    match : PropTypes.any,
    deleteComment : PropTypes.func,
    postComment : PropTypes.func,
    loadComments : PropTypes.func,
    loading : PropTypes.bool,
    user : PropTypes.string,
    message : PropTypes.string,
    error : PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(FullPost);