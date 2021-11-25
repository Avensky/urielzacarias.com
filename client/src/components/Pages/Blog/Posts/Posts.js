import React from 'react';
import Spinner from '../../../../components/UI/Spinner/Spinner';
import classes from './Posts.module.scss';
import Post from '../Posts/Post/Post';
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions/index';

const Posts = ( props ) => {
    let posts 
    props.posts
        ? posts = props.posts.sort((a,b)=>{return new Date(b.date)-new Date(a.date)})
        : posts = props.posts
//    console.log('posts = ',posts)
    let blog = <p style={{textAlign: 'center'}}>Something went wrong!</p>
    if (props.loading) { blog = <Spinner /> }
    if (posts) {
        blog = posts.map( post => {
            const d = new Date(post.date);
            const months = [ "January", "February", "March", "April", "May", "June", 
                "July", "August", "September", "October", "November", "December" ];
            const month = (d.getMonth());
            const selectedMonth = months[month]
            const days = [ "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday" ]
            const day = d.getDay()
            const selectedDay = days[day]
            const date = selectedDay + ', ' + selectedMonth  + " " + (d.getDate()) + ", " + d.getFullYear();
            const time = d.toLocaleTimeString('en-US')
            return (
                <Post
                    key      = {post._id}
                    id       = {post._id}
                    author   = {post.author}
                    content  = {post.content}
                    date     = {date}
                    lines    = {4}
                    title    = {post.title} 
                    time     = {time}
                    blog     = {true}
                    loadData  = {props.loadData}
                    //comments = {props.comments || []}
                />
            )
        })
    }

    return (<div className={classes.Posts}>
                    {blog}
                </div>            
    )
}
const mapStateToProps = state => {
    return {
        posts   : state.blog.posts,
        loading : state.blog.loading,
        user    : state.auth.payload
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchPosts    :  ()   => dispatch( actions.fetchPosts()),
        getPost         :  (id) => dispatch( actions.fetchPostsById(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Posts);