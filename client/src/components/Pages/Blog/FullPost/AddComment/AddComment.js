import React from 'react';
import classes from './AddComment.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Spinner from '../../../../UI/Spinner/Spinner';
import PropTypes from 'prop-types';

const AddComment = props => {
    const submitHandler = ( values, submitProps ) => {
        props.postComment( values);
        submitProps.setSubmitting(false);
        submitProps.resetForm();
    };

    let initialValues = {content: '', replyTo:props.replyTo};

    let validationSchema = Yup.object({
        content: Yup.string()
            .required("Required!")
    });

    let form = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
    props.loading
        ? form = <Spinner />
        : form = <div>
            <div className={classes.MidLine}>
                <div className={classes.Right}>
                    <Field
                        name="content" 
                        className={classes.ContentInput}
                        component="textarea" 
                        placeholder="Enter your comment"
                        rows="8"
                    /> 
                </div>                            
            </div>
            <div className={classes.ErrorMessage}><ErrorMessage name="content" component="div" /></div>
        </div>;
    let message;
    props.message
        ? message = <div className={classes.Message}>{props.message}</div>
        : message = <div className={classes.Message} />;

    return (
            <div className={classes.AddPost}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={submitHandler}
                    enableReinitialize> 
                    { formik => 
                    <Form>
                        {message}
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
            </div>
    );
};

AddComment.propTypes = {
    postComment: PropTypes.func,
    replyTo: PropTypes.func,
    loading: PropTypes.bool,
    message: PropTypes.string
};

export default AddComment;