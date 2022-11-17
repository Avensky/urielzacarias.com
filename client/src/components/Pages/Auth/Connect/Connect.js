import React, {useState} from 'react';
import {connect} from 'react-redux';
//import Auxiliary from '../../../hoc/Auxiliary';
import classes from './Connect.module.scss';
import Spinner from '../../../UI/Spinner/Spinner';
import { Redirect } from 'react-router-dom';
import * as actions from '../../../../store/actions/index';
//import { Redirect } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
//import { Persist } from 'formik-persist'
import * as Yup from 'yup';
import PropTypes from 'prop-types';

const ConnectLocal = props => {

    const [passwordComfirmShown, setPasswordComfirmShown] = useState(false);    
    const togglePasswordComfirmVisiblity = () => {setPasswordComfirmShown(passwordComfirmShown ? false : true);};
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {setPasswordShown(passwordShown ? false : true);};


    const submitHandler = ( values, submitProps ) => {
        props.onConnect(values);
        submitProps.setSubmitting(false);
        submitProps.resetForm();
    };

    let message = false;
    props.token 
        ? message = <div className={classes.Message}>{props.token.message}</div>
        : message = <div className={classes.Message} />;


    let authRedirect = null;
    if (props.authRedirectPath !== '/') {
         authRedirect = <Redirect to={props.authRedirectPath} />;
    }
    
    const initialValues = {
        email: '', 
        password: '',
        confirm_password: ''
    };
    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email format")
            .required("Required!"),
        password: Yup.string()
            .min(8, "Minimum 8 characters")
            .max(15, "Maximum 15 characters")
            .required("Password is required!")  
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            ),                       
        confirm_password: Yup.string()
            .oneOf([Yup.ref("password")], "Passwords  must match")
            .required("Password confirm is required!")
    });
    
    let loader;
    if ( props.loading || (props.submitted && props.userLoading)) {
        //form = <Spinner />
        loader = <Spinner />;

    };
    
    return(
        <div className='page-wrapper'>
            <div className={classes.Auth}>
                <div className={classes.AuthNav}>
                    <button className={[classes.AuthToggle, classes.AuthSelected].join(' ')}>
                        <h1 className='pointer'>
                            <span className="fa fa-sign-in" /> Connect Local
                        </h1>
                    </button>
                </div>
                {authRedirect}
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={submitHandler}
                    enableReinitialize> 
                    { formik => 
                    <Form>
                        {message}
                        <div className={classes.InputWrapper}>
                            <Field 
                                type="email" 
                                name="email" 
                                placeholder="Email Address"
                                className={classes.AuthInput}
                            />                        
                        </div>
                        <div className={classes.ErrorMessage}><ErrorMessage name="email" component="div" /></div>
                        <div className={classes.InputWrapper}>
                            <Field 
                                type={passwordShown ? "text" : "password"}
                                name="password" 
                                placeholder="Password"
                                className={classes.AuthInput}
                            /><span className={passwordShown ? "fa fa-eye-slash" : "fa fa-eye"}  onClick={togglePasswordVisiblity} ></span>
                        </div>
                        <div className={classes.ErrorMessage}><ErrorMessage name="password" component="div" /></div>
                        <div className={classes.InputWrapper}>
                            <Field 
                                type={passwordComfirmShown ? "text" : "password"}
                                name="confirm_password" 
                                placeholder="Confirm Password"
                                className={classes.AuthInput}
                            /><span className={passwordComfirmShown ? "fa fa-eye-slash" : "fa fa-eye"} onClick={togglePasswordComfirmVisiblity} ></span>
                        </div>
                        <div className={classes.ErrorMessage}><ErrorMessage name="confirm_password" component="div" /></div>              
                        
                        <h3 className='text-left'>Password requirements: </h3>
                        <ul className='text-left'>
                            <li>Must Contain 8 Characters</li>
                            <li>One special case Character</li> 
                            <li>One Uppercase</li>    
                            <li>One Lowercase</li>    
                            <li>One Number</li>    
                        </ul>   
                        <button  
                            className={[classes.Btn, classes.AuthBtn, 'auth-btn' ].join(' ')}
                            type='submit'
                            disabled={!formik.isValid || formik.isSubmitting }
                        >
                            <div className={classes.BtnDiv}>
                                <span className="fa fa-user" /> Connect Local
                            </div>
                        </button>
                    </Form>}
                </Formik>
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    return {
        loading             : state.auth.loading,
        error               : state.auth.error,
        isLoggedIn          : state.auth.user,
        isAuthenticated     : state.auth.payload,
        authRedirectPath    : state.auth.authRedirectPath,
        token               : state.auth.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onConnect              : (values)   => dispatch(actions.connect(values)),
    };
};

ConnectLocal.propTypes = {
    onConnect : PropTypes.func,
    token: PropTypes.string,
    authRedirectPath: PropTypes.string,
    loading: PropTypes.bool,
    submitted: PropTypes.bool,
    userLoading: PropTypes.bool
};

export default connect (mapStateToProps, mapDispatchToProps)(ConnectLocal);
