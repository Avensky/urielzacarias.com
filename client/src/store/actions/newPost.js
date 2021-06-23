import * as actionTypes from './actionTypes'
import axios from 'axios';

export const setNewPostRedirectPath  = (path) =>{
    return{
        type: actionTypes.SET_NEW_POST_REDIRECT_PATH,
        path: path
    }
}

export const newPostStart  = () =>{
    return{
        type: actionTypes.NEW_POST_START
    }
}

export const newPostFail = (error) => {
    return {
        type: actionTypes.NEW_POST_FAIL,
        error: error
    }
}

export const newPostSuccess = (postData) => {
    return {
        type: actionTypes.NEW_POST_SUCCESS,
        postData: postData
    }
}

export const newPost = (title, content, author, date) => {
    return dispatch => {
        const postData={title, content, author, date}
        dispatch(newPostStart())
        axios.post('/api/addPost', postData)
            .then(response => {
                console.log(response);
                dispatch(newPostSuccess(postData))
        })
        .catch(error => {
            console.log(error);
            dispatch(newPostFail(error))
        })    
    }
}