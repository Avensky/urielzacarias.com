import React, { Component} from 'react';
//import axios from 'axios';
import {connect} from 'react-redux'
import Layout from '../../../Layout/Layout';
import Header from '../../../Layout/Header/Header';
import Archives from '../../../Archives/Archives';
import * as actions from '../../../../store/actions/index'
import Post from '../Posts/Post/Post';
import classes from './FullPost.module.scss';
import myClasses from '../Posts/Post/Post.module.scss';
//import { Redirect } from 'react-router-dom'
import Spinner from '../../../../components/UI/Spinner/Spinner'
//import user from '../../../../assets/images/user.jpg'
class FullPost extends Component {
    componentDidMount() {
        console.log(this.props.fetchPostsById)
        if (!this.props.fetchedPostsById){
            this.props.history.push('/blog');
        }
    }

    deletePostHandler = (id) => {
        this.props.history.push('/blog');
        this.props.onDeletePost(id);
    }


    render () {
        let postsById = <p style={{textAlign: 'center'}}>Something went wrong!</p>
        
        if (this.props.loading) {
            postsById = <Spinner />;
        }
        
        if (!this.props.fetchedPostsById.error) {

            const d = new Date(this.props.fetchedPostsById.date);
            const date = (d.getMonth()+1)  + "-" + (d.getDate()) + "-" + d.getFullYear();
            postsById = ( 
                <Post
                    key={this.props.fetchedPostsById._id} 
                    title={this.props.fetchedPostsById.title} 
                    author={this.props.fetchedPostsById.author}
                    content={this.props.fetchedPostsById.content}
                    date={date}
                    lines={20}
                    clName={classes.FullPost}
                    click={()=> this.deletePostHandler(this.props.fetchedPostsById._id)}
                /> 
            )
        }
            

//        if (this.props.match.params.id) {
//            post = <p style={{textAlign: 'center'}}>Loading...!</p>;
//        }

        let nopostRedirect = null;
        if (this.props.fetchPostsById) {
            this.props.history.push('/blog');
        }

        return( 
            <Layout grid="blog">
                <Header />
                <section className={myClasses.Blog}>
                    {nopostRedirect}
                    {postsById}
                </section>
                <Archives 
//                        key={archive.id} 
//                        title={archive.title} 
//                        author={archive.author}
//                        content={archive.content}
//                        clicked={() => this.postClickedHandler(archive.id)}
                    />
            </Layout>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.blog.loading,
        posts: state.blog.posts,
        featuredPost: state.blog.featuredPost,
        fetchedPosts: state.blog.fetchedPosts,
        fetchedPostsById: state.blog.fetchedPostsById,
        newPostRedirectPath: state.newPost.newPostRedirectPath, 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchPosts:  () => dispatch( actions.fetchPosts()),
        onFetchPostsById:  (id) => dispatch( actions.fetchPostsById(id)),
        onDeletePost: (id) => dispatch( actions.deletePost(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FullPost);