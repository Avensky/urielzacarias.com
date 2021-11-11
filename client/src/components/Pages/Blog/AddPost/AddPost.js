import React, {useState, useEffect} from 'react';
import classes from './AddPost.module.scss'
import {connect} from 'react-redux';
import * as actions from '../../../../store/actions/index';
import Spinner from '../../../UI/Spinner/Spinner'
import { Link, useHistory } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import Archives from '../Archives/Archives';

const NewItem = ( props ) => {
    const [message, setMessage] = useState(null)
    const fetchData = async () => { props.onFetchPosts() }
    useEffect(() => { if (!props.posts){fetchData()}},[props.posts])

    const history = useHistory()
    const loadData = async (paramId) => { 
        console.log('blog getPost')
        history.push('/blog/fullpost/'+paramId)
        //props.getPost(paramId)
    }
    useEffect(() => { 
        if (!props.posts){
            console.log('if !props.posts then message')
            setMessage(props.message)
        } 
    },[props.posts])


    const submitHandler = ( values, submitProps ) => {
        props.onAddPost( values)
        submitProps.setSubmitting(false)
        submitProps.resetForm()
    } 

    let initialValues = {title: '', content: ''};

    let validationSchema = Yup.object({
        title: Yup.string()
            .required("Required!"),
        content: Yup.string()
            .required("Required!")
    });

    let form = <p style={{textAlign: 'center'}}>Something went wrong!</p>
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
    </div>

    message
        ? <div className={classes.Message}>{props.message}</div>
        : <div className={classes.Message} />
    

    let redirect = null;
    //redirect = <Redirect to={props.redirectPath} /> 
    
    let archives
    if (props.posts) {archives = (<Archives 
        posts={props.posts}
        clicked={loadData}
    />)}

    return (
        <div className={['page-wrapper', classes.AddPostWrapper].join(' ')}>
            <div className={classes.AddPost}>
                <section className={classes.Content}>
                    <div className='spread'><Link to={'/blog/'}><h1>Blog Home</h1></Link></div>
                    {redirect}
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
                </section>
                <section className={classes.Archives}>
                    {archives}
                </section>
            </div>
        </div>     
    );
}


const mapStateToProps = state => {
    return {
        post                : state.blog.fetchedPostsById,
        posts                : state.blog.posts,
        message             : state.blog.message,
        loading             : state.blog.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPost: (values) => dispatch(actions.newPost(values)),
        onFetchPosts:  () => dispatch( actions.fetchPosts()),
        getPost:  (id) => dispatch( actions.fetchPostsById(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewItem);