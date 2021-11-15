import React, { useEffect, Suspense } from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
//import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './Blog.module.scss';
import Archives from './Archives/Archives';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import { useHistory } from 'react-router-dom';
import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost';
import EditPost from './EditPost/EditPost';
import AddPost from './AddPost/AddPost';


const Blog = (props) => {
    const { posts } = props
    const history = useHistory()
    const fetchData     = async ()   => { props.onFetchPosts() }
    const loadComments  = async (id) => { props.getComments(id) }
    const loadPost      = async (id) => { props.getPost(id) }
    const loadData      = async (id) => {
        //on clicked post load data
        history.push('/blog/fullpost/'+id)
        loadPost(id)
        loadComments(id)
    }

    // load blog data
    useEffect(() => {  if (!posts){ fetchData() } },[posts])

    let routes = (
        <Switch>
          <Route path="/blog/posts"            render={ props => <Posts    loadData = {loadData} {...props} />} />
          <Route path="/blog/fullpost/:blogId" render={ props => <FullPost 
                loadData = {loadData} loadComments={loadComments} {...props} />} />
          <Route path="/blog/editpost/:blogId" render={ props => <EditPost {...props} />} />
          <Route path="/blog/addPost"          render={ props => <AddPost  {...props} />} />    
        </Switch>)

    let archives
    if (posts) {archives = (<Archives 
        posts={props.posts}
        loadData={loadData}
    />)}

    return (
        <div className={['page-wrapper', classes.BlogLayout].join(' ')}>
            <div className={classes.Blog}>
                <section className={classes.Content}>
                    <div className='spread'>
                        <Link to={'/blog/posts'} ><h1>Blog Home</h1></Link>
                        <NavLink to='/blog/addPost' className={classes.addPost}>+</NavLink>
                    </div>
                    <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
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
        loading : state.blog.loading,
        user    : state.auth.payload
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchPosts:  () => dispatch( actions.fetchPosts()),
        getPost:  (id) => dispatch( actions.fetchPostsById(id)),
        getComments     : (id)          => dispatch( actions.getComments(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Blog);