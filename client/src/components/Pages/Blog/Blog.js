import React, { useEffect } from 'react';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './Blog.module.scss';
import Archives from './Archives/Archives';
import Post from './Posts/Post/Post';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import { Link, NavLink, useHistory } from 'react-router-dom';

const Blog =(props)=> {
    const { posts } = props
    const history = useHistory()
    const fetchData = async () => { props.onFetchPosts() }
    useEffect(() => { if (!posts){fetchData()}},[posts])


    const loadData = async (paramId) => { 
        console.log('blog getPost')
        history.push('/blog/fullpost/'+paramId)
        //props.getPost(paramId)
    }

    let blog = <p style={{textAlign: 'center'}}>Something went wrong!</p>
    if (props.loading) { blog = <Spinner /> }
    if (posts) {
        blog = props.posts.map( post => {
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
            return (
                <div key={post._id} className={classes.Posts}>
                    <Post
                        id={post._id}
                        author={post.author}
                        content={post.content}
                        date={date}
                        lines={4}
                        title={post.title} 
                        time={time}
                        //clName={classes.BlogPost}
                        //klName={classes.EditOff}
                        // clicked={() => postClickedHandler(post._id)}
                    />
                </div>
            )
        })
    }
    let archives
    if (posts) {archives = (<Archives 
        posts={props.posts}
        clicked={loadData}
    />)}

    return (
        <div className={['page-wrapper', classes.BlogLayout].join(' ')}>
            <div className={classes.Blog}>
                <section className={classes.Content}>
                    <div className='spread'>
                        <Link to={'/blog/'} ><h1>Blog Home</h1></Link><NavLink to='/blog/addPost' className={classes.addPost}>+</NavLink>
                    </div>
                    {//featuredPost
                    }
                    {blog}
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
        posts   : state.blog.posts,
        loading : state.blog.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchPosts:  () => dispatch( actions.fetchPosts()),
        getPost:  (id) => dispatch( actions.fetchPostsById(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Blog);