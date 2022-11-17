import React, { useState, useEffect} from 'react';
import classes from './EditPost.module.scss';
import {connect} from 'react-redux';
import * as actions from '../../../../store/actions/index';
import Spinner from '../../../UI/Spinner/Spinner';
import Archives from '../Archives/Archives';
import { Link, useHistory } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from '../../../UI/Modal/Modal';
import PropTypes from 'prop-types';

const EditPost = ( props ) => {
    const [modal, setModal] = useState(false);
    const modalHandler = () => { setModal(true); };
    const cancelHandler = () => { setModal(false); };
    
    const [message, setMessage] = useState(null);
    const history = useHistory();

    const fetchData = async () => { props.onFetchPosts(); };
    useEffect(() => { if (!props.posts){fetchData();};},[props.posts]);

    const loadData = async (paramId) => { 
        console.log('loadData = ', paramId);
        history.push('/blog/editpost/'+paramId);
        props.getPost(paramId);
    };

    useEffect(() => { 
        // check if item is set with post data
        if (!props.post){
            console.log('if !props.post then loadData');
            loadData(props.match.params.blogId);
            setModal(false);
            setMessage(props.message);
        };
    },[props.post]);

    const submitHandler = ( values, submitProps ) => {
        props.updatePost( values, props.match.params.blogId);
        submitProps.setSubmitting(false);
        submitProps.resetForm();
    };
    let initialValues;
    props.post
        ? initialValues = {title: props.post.title, content: props.post.content}
        : initialValues = {title: '', content: ''};

    let validationSchema = Yup.object({
        title: Yup.string()
            .required("Required!"),
        content: Yup.string()
            .required("Required!")
    });

    let form = <p style={{textAlign: 'center'}}>Something went wrong!</p>;

    if (props.loading) {form = <Spinner />;};
    if (props.post) {form = formik => 
        <Form>
            <div className={classes.MidLine}>
                <div className={classes.label}>
                Title: <Link to={'/blog/fullpost/' + props.match.params.blogId}>{props.post.title}</Link>
                </div> 
                <div className={classes.Right}>
                    <Field 
                        type="text" 
                        name="title"
                        className={classes.TitleInput}
                        placeholder="Post Title"
                    /> 
                </div>                            
            </div>
            <div className={classes.ErrorMessage}><ErrorMessage name="title" component="div" /></div>

            <div className={classes.MidLine}>
                <div className={classes.label}>Content:</div> 
                <div className={classes.Right}>
                    <Field
                        name="content" 
                        className={classes.ContentInput}
                        component="textarea" 
                        rows="8"
                    /> 
                </div>                            
            </div>
            <div className={classes.ErrorMessage}><ErrorMessage name="content" component="div" /></div>
            <Modal show={modal} modalClosed={cancelHandler}>
                <div className={classes.Modal}>
                    <h1>Update Post</h1>
                    <p>Are you sure you want to publish these changes?</p>
                    <div className="spread">
                        <button  
                            className={["btn btn-edit", classes.Btn].join(' ')}
                            type='submit'
                            disabled={!formik.isValid || formik.isSubmitting }
                        >
                            <p className={classes.BtnDiv}><b>Update</b></p>
                        </button>
                        <div onClick={cancelHandler} className={["btn btn-cancel", classes.Btn].join(' ')}>Cancel</div>
                    </div>
                </div>
            </Modal>
            <div className={[classes.EditPost, classes.DeletePost].join(' ')}>
                <div onClick={modalHandler} className={["btn btn-edit", classes.Btn].join(' ')}>
                    Update
                </div>
            </div>
        </Form>;};

    message
        ? <div className={classes.ErrorMessage}>{props.message}</div>
        : <div className={classes.ErrorMessage} />;
    
    let redirect = null;
    //redirect = <Redirect to={props.redirectPath} /> 

    let archives;
    if (props.posts) {archives = (<Archives 
        posts={props.posts}
        clicked={loadData}
    />);};
    
    return (
        <div className={['page-wrapper', classes.AddPostWrapper].join(' ')}>
            <div className={classes.AddPost}>
                <section className={classes.Content}>
                    <div className='spread'><Link to={'/blog/'}><h1>Blog Home</h1></Link></div>
                    {redirect}
                    {message}
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={submitHandler}
                        enableReinitialize> 
                        {form}
                    </Formik>
                </section>
                <section className={classes.Archives}>
                    {archives}
                </section>
            </div>
        </div>     

    );
};


const mapStateToProps = state => {
    return {
        loading             : state.blog.loading,
        posts               : state.blog.posts,
        post                : state.blog.fetchedPostsById,
        error               : state.blog.error,
        redirect            : state.blog.redirect,
        message             : state.blog.message
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updatePost  : (values, id) => dispatch(actions.updatePost(values, id)),
        getPost     : (id) => dispatch( actions.fetchPostsById(id)),
        onFetchPosts: ()   => dispatch( actions.fetchPosts()),
    };
};

EditPost.propTypes = {
    post: PropTypes.object,
    posts : PropTypes.posts,
    getPost : PropTypes.func,
    match : PropTypes.any,
    updatePost : PropTypes.func,
    loading : PropTypes.bool,
    message: PropTypes.string,
    onFetchPosts: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);