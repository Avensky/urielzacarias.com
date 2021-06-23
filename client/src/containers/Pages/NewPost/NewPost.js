import React, { Component } from 'react';
//import {Redirect} from 'react-router-dom';
import Layout from '../../Layout/Layout';
import Header from '../../Layout/Header/Header';
import './NewPost.scss';
import classes from '../Pages.module.scss';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';
// import axios from '../../../axios';

class NewPost extends Component {
    state = {
        postForm:{
            title: {
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                }
            },
            content: {
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                }
            },
            author: {
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                }
            },
            date: {
                value: '',
                validation: {
                    required: false
                }
            }
        },
        error: null
    }

    componentDidMount () {
        console.log(this.props);
    }

    newPostHandler = (event) => {
        event.preventDefault();
        //this.props.onSetAuthRedirectPath('/checkout');
        this.props.history.push('/blog');
        const author =  this.props.payload.username;
        this.props.onNewPost(
            this.state.postForm.title.value, 
            this.state.postForm.content.value, 
            author, 
            this.state.postForm.date.value
        );
    }

    inputChangedHandler = ( event, controlName ) => {
        const updatedControls = {
            ...this.state.postForm,
            [controlName]: {
                ...this.state.postForm[controlName],
                value: event.target.value,
//                valid: this.checkValidity( event.target.value, this.state.postForm[controlName].validation ),
                touched: true
            },
            date: {
                ...this.state.postForm.date,
                value: new Date()
            }
        };
        this.setState( { postForm: updatedControls } );
    }

    render () {
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }

        let form = (
            <form className={classes.Pages} onSubmit={this.newPostHandler}>
                <legend>Add a Post</legend>
                {errorMessage}
                <label>Title</label>
                <input 
                    type="text" 
                    onChange={(event) => this.inputChangedHandler( event, "title")}
                    placeholder="Blog Title"/>
                <label>Content</label>
                <textarea
                    type="textarea"
                    rows="4" 
                    onChange={(event) => this.inputChangedHandler( event, "content")}/>
                <button className={classes.btn}>Add Post
                </button>
            </form>
        )
        
        return (
            <Layout grid="new">
                <Header />
                {errorMessage}
                {form}
            </Layout>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        error: state.newPost.error,
        isLoggedIn: state.auth.payload !== null,
        payload: state.auth.payload,
        userId: state.auth.userId,
        newPostRedirectPath: state.newPost.newPostRedirectPath, 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onNewPost: (title, content, author, date) => dispatch(actions.newPost(title, content, author, date)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewPost);