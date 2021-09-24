import React, {Component } from 'react';
import Post from './Post/Post';
//import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
//import FullPost from '../FullPost/FullPost';
import * as actions from '../../../../store/actions/index'
import classes from './Posts.module.scss';


class Posts extends Component {
    componentDidMount() {
        console.log(this.props);
        this.props.onFetchPosts()
    }

    postClickedHandler = (id) => {
        //this.setState({clickedPostId: id})
        this.props.history.push('/posts/' + id);
    }

    render (){
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>
        if (!this.props.error) {
           posts = this.props.posts.map( post => {
               return (
                   <div className={classes.Posts}>
                       <Post
   //                    key={post.id} 
                       title={post.title} 
                       author={post.author}
                       content={post.content}
                       date={post.date}
   //                    clName={"Post"}
                       //clicked={() => this.postClickedHandler(post.id)}
                       />

                   </div>
               )
           })

        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
        {/* <Route path={this.props.match.url + '/:id'} exact component={FullPost} /> */}
            </div>

        )
    }

}
const mapStateToProps = state => {
    return {
        posts: state.blog.posts,
        featuredPost: state.blog.featuredPost,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchPosts:  () => dispatch( actions.fetchPosts())
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Posts);