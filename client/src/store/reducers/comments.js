import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';

const initialState = {
    comments : null,
    comment  : null,
    loading  : false,
    error    : null,
    message  : null
};
/*******************************************************************************
********************************************************************************
 * Get  Comments
********************************************************************************
*******************************************************************************/
const getCommentsStart = (state, action) => {
    return updateObject( state, {
        loading: true,
        error: null
        //message: null
    });
};

const getCommentsFail = (state, action) => {
    return updateObject( state, {
        loading: false,
        error: action.error,
        //message: action.message,
    });
};

const getCommentsSuccess = (state, action) => {
    return updateObject( state, {
        comments: action.comments,
        loading: false,
        error: null
        //error: null,
        //message: action.message,
    });
};

/*******************************************************************************
********************************************************************************
 * Delete Comment
********************************************************************************
*******************************************************************************/
const deleteCommentStart = (state, action) => {
    return updateObject( state, {
        loading: true,
        error: null,
        message: null
    });
};

const deleteCommentFail = (state, action) => {
    return updateObject( state, {
        loading: false,
        error: action.error,
        message: action.message
    });
};
const deleteCommentSuccess = (state, action) => {
    return updateObject( state, {
        loading: false,
        message: action.message,
        comments: null,
        error: null
    });
};


/*******************************************************************************
********************************************************************************
 * Post Comment
********************************************************************************
*******************************************************************************/

const postCommentStart = (state, action) => {
    return updateObject( state, { 
        loading: true,
        error: null,
        message: null
    });
};
    
const postCommentFail = (state, action) => {
    return updateObject( state, { 
        loading: false,
        error: action.error,
        message: action.message,
    });
};

const postCommentSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        message: action.message,
        comments: null,
        error: null
    });
};

/*******************************************************************************
********************************************************************************
 * Update Post
********************************************************************************
*******************************************************************************/

const updateCommentStart = (state, action) => {
    return updateObject( state, { 
        loading: true,
        error: null
    });
};

const updateCommentFail = (state, action) => {
    return updateObject( state, { 
        loading: false,
        error: action.error,
        message: action.message,
    });
};
    
const updateCommentSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        message: action.message,
        comments:null,
        error: null
    });
};


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.GET_COMMENTS_START                : return getCommentsStart(state, action);
        case actionTypes.GET_COMMENTS_FAIL                 : return getCommentsFail(state, action);
        case actionTypes.GET_COMMENTS_SUCCESS              : return getCommentsSuccess(state, action);    
        
        case actionTypes.DELETE_COMMENT_START              : return deleteCommentStart(state, action);
        case actionTypes.DELETE_COMMENT_FAIL               : return deleteCommentFail(state, action);
        case actionTypes.DELETE_COMMENT_SUCCESS            : return deleteCommentSuccess(state, action);
        
        case actionTypes.POST_COMMENT_SUCCESS              : return postCommentSuccess(state, action);
        case actionTypes.POST_COMMENT_FAIL                 : return postCommentFail(state, action);
        case actionTypes.POST_COMMENT_START                : return postCommentStart(state, action);
       
        case actionTypes.UPDATE_COMMENT_SUCCESS            : return updateCommentSuccess(state, action);
        case actionTypes.UPDATE_COMMENT_FAIL               : return updateCommentFail(state, action);
        case actionTypes.UPDATE_COMMENT_START              : return updateCommentStart(state, action);

        default: return state;     
    }
};

export default reducer;
