import React, { useState, useEffect} from 'react';
import {connect} from 'react-redux'
import Archives from '../Archives/Archives';
import * as actions from '../../../../store/actions/index'
import Post from '../Posts/Post/Post';
import classes from './FullPost.module.scss';
import Spinner from '../../../../components/UI/Spinner/Spinner'
import { Link, useHistory } from 'react-router-dom';


const FullPost = props => {
    const [message, setMessage] = useState(null)
    const [item, setItem] = useState(null);
    //const [token, setToken] = useState(null);
    const history = useHistory()
    
    const { posts, post } = props
    const fetchData = async () => { props.onFetchPosts() }
    
    useEffect(() => { 
        if (!posts){
            fetchData()
        } 
    },[posts])

    const loadData = async (paramId) => { 
        history.push('/blog/fullpost/'+paramId)
        props.getPost(paramId)
        setItem(props.post)
        console.log('getPost ', post)
    }
    useEffect(() => { 

        //if (token !== props.match.params.blogId) {
            //console.log('set token')
            //setToken(props.match.params.blogId)
            //console.log('token', token)
        //}
        if (!props.post){
//            console.log('if !item loadData')
            loadData(props.match.params.blogId)
            setMessage(props.message)
        } 
    },[props.post])

    // useEffect(()=>{
    //     if (token !== props.match.params.blogId) {
    //         console.log('set token')
    //         setToken(props.match.params.blogId)
    //     }
    // },[])

    const deletePostHandler = () => {
        //props.history.push('/blog');
        props.deletePost(props.match.params.blogId);
    }
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
        postById = ( 
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
                edit={true}
                delete={deletePostHandler}
            /> 
        )
    }

    let archives
    if (posts) {archives = <Archives 
        posts={props.posts} 
        clicked={loadData}
        //click={()=> loadData()}
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
                    {messages}
                    {postById}
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
        error               : state.blog.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchPosts    : ()   => dispatch( actions.fetchPosts()),
        getPost         : (id) => dispatch( actions.fetchPostsById(id)),
        deletePost      : (id) => dispatch( actions.deletePost(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FullPost);