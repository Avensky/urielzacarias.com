import axios from 'axios'
import * as actionTypes from './actionTypes'

/*******************************************
********************************************
 * Get Comments
********************************************
*******************************************/

export const getCommentsSuccess = (data) => {
    return {
        type:  actionTypes.GET_COMMENTS_SUCCESS,
        comments: data,
    }
}
export const getCommentsFail = (error) => {
    return {
        type:  actionTypes.GET_COMMENTS_FAIL, 
        error: error
    }
}
export const getCommentsStart = () => {
    return {
        type:  actionTypes.GET_COMMENTS_START
    }
}
export const getComments = (id) => {
    return dispatch => {
        dispatch(getCommentsStart());
        axios.get( '/api/comments/' + id)
        .then( result => {
            const data = result.data
            //console.log('getComments ', data)
                dispatch(getCommentsSuccess(data));
            } )
            .catch( error => {
                dispatch(getCommentsFail(error));
            } );
    };
}

/*******************************************
********************************************
 * Post Comment
********************************************
*******************************************/

export const postCommentStart  = () =>{ 
return { 
        type: actionTypes.POST_COMMENT_START 
    } }

export const postCommentFail = (error) => {
    return {
        type: actionTypes.POST_COMMENT_FAIL,
        error: error
    }}

export const postCommentSuccess = (data) => {
    return {
        type: actionTypes.POST_COMMENT_SUCCESS,
        message: data,
    }}

export const postComment = (values) => {
    return dispatch => {
        dispatch(postCommentStart())
        axios.post('/api/postComment', values)
            .then(response => {
                dispatch(postCommentSuccess(response.data))
        })
        .catch(error => {
            dispatch(postCommentFail(error))
        })    
    }}

/*******************************************
********************************************
 * Delete comment
********************************************
*******************************************/
export const deleteCommentSuccess = (data) => {
    return {
        message : data,
        type:  actionTypes.DELETE_COMMENT_SUCCESS, 
    }
}
export const deleteCommentFail = (error) => {
    return {
        type:  actionTypes.DELETE_COMMENT_FAIL, 
        error: error
    }
}
export const deleteCommentStart = () => {
    //console.log("delete Comment start")
    return {
        type:  actionTypes.DELETE_COMMENT_START
    }
}

export const deleteComment = (replyTo, id) => {
    //const values = {replyTo:replyTo, id:id}
    const values = {replyTo, id}

    //JSON.stringify(values)
    
    //console.log("delete Comment", values)
    return dispatch => {
        dispatch(deleteCommentStart());
        axios.post('/api/deletecomment/', values)
        .then( result => {
            dispatch(deleteCommentSuccess(result.data));
        })
        .catch( error => {
            dispatch(deleteCommentFail(error));
        });
    };
}

/*******************************************
********************************************
 * Update Blog Post
********************************************
*******************************************/
export const updateCommentSuccess = (data) => {
    return {
        message : data,
        type    : actionTypes.UPDATE_COMMENT_SUCCESS, 
    }
}
export const updateCommentFail = (error) => {
    return {
        type    : actionTypes.UPDATE_COMMENT_FAIL, 
        error   : error
    }
}
export const updateCommentStart = () => {
    return {
        type    : actionTypes.UPDATE_COMMENT_START
    }
}

export const updateComment = (values,id) => {
    return dispatch => {
        dispatch(updateCommentStart());
        axios.post( '/api/updatepost/' + id, values)
        .then( result => {
            dispatch(updateCommentSuccess(result.data));
        })
        .catch( error => {
            dispatch(updateCommentFail(error));
        });
    };
}