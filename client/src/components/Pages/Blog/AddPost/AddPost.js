import React from 'react';
import classes from './AddPost.module.scss';
import {connect} from 'react-redux';
import * as actions from '../../../../store/actions/index';
import Spinner from '../../../UI/Spinner/Spinner';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

const NewItem = ( props ) => {

    const submitHandler = ( values, submitProps ) => {
        props.onAddPost( values);
        submitProps.setSubmitting(false);
        submitProps.resetForm();
    };

    let initialValues = {title: '', content: ''};

    let validationSchema = Yup.object({
        title: Yup.string()
            .required("Required!"),
        content: Yup.string()
            .required("Required!")
    });

    let form = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
    props.loading
        ? form = <Spinner />
        : form = <div>
            <div className={classes.MidLine}>
                <div className={classes.label}>Title:</div> 
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
    </div>;

let messages;
props.message && (props.error !== null)
    ? messages = <div className={classes.ErrorMessage}>{props.message}</div>
    : messages = <div className={classes.ErrorMessage} />;



    return  (<div className={classes.AddPost}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={submitHandler}
                    enableReinitialize> 
                    { formik => 
                    <Form>
                        {messages}
                        {form}
                        <button  
                            className={['btn', classes.Btn].join(' ')}
                            type='submit'
                            disabled={!formik.isValid || formik.isSubmitting }
                        >
                            <p className={classes.BtnDiv}><b>Publish</b></p>
                        </button>
                    </Form>}
                </Formik>
            </div>);
};


const mapStateToProps = state => {
    return {
        post                : state.blog.fetchedPostsById,
        posts               : state.blog.posts,
        message             : state.blog.message,
        loading             : state.blog.loading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddPost: (values) => dispatch(actions.newPost(values)),
        onFetchPosts:  () => dispatch( actions.fetchPosts()),
        getPost:  (id) => dispatch( actions.fetchPostsById(id)),
    };
};

NewItem.propTypes = {
    onAddPost: PropTypes.func,
    loading: PropTypes.bool,
    message: PropTypes.string,
    error: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(NewItem);