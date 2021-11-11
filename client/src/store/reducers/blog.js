import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';

const initialState = {
    posts:null,
    featuredPost: [],
    fetchedPosts: [],
    fetchedPostsById: null,
    fetchedPostsByYear: [],
    fetchedPostsByMonth: [],        
    loading: false,
    error: null,
    redirect:null,
    message:null
}
/*******************************************************************************
********************************************************************************
 * Get Posts
********************************************************************************
*******************************************************************************/
const fetchPostsStart = (state, action) => {
    return updateObject( state, {
        loading: true
    })
}

const fetchPostsFail = (state, action) => {
    return updateObject( state, {
        loading: false
    })
}
const fetchPostsSuccess = (state, action) => {
    return updateObject( state, {
        posts: action.posts,
        loading: false,
    })
}



/*******************************************************************************
********************************************************************************
 * Get Post By ID
********************************************************************************
*******************************************************************************/
const fetchPostsByIdStart = (state, action) => {
    return updateObject( state, {
        //fetchedPostsById: null,
        error: null,
        loading: true,
    })
}

const fetchPostsByIdFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    })
}
const fetchPostsByIdSuccess = (state, action) => {
    return updateObject( state, {
        fetchedPostsById: action.fetchedPostsById,
        loading: false,
        error: null,
    })
}
/*******************************************************************************
********************************************************************************
 * Delete Post
********************************************************************************
*******************************************************************************/
const deletePostStart = (state, action) => {
    return updateObject( state, {
        loading: true,
        message: null
    })
}

const deletePostFail = (state, action) => {
    return updateObject( state, {
        loading: false,
        message: action.error
    })
}
const deletePostSuccess = (state, action) => {
    return updateObject( state, {
        loading: false,
        message: action.message,
        fetchedPostsById: null,
        posts:null
    })
}

/*******************************************************************************
********************************************************************************
 * Get Post By Year
********************************************************************************
*******************************************************************************/

const fetchPostsByYearStart = (state, action) => {
    return updateObject( state, {
        loading: true
    })
}

const fetchPostsByYearFail = (state, action) => {
    return updateObject( state, {
        loading: false
    })
}
const fetchPostsByYearSuccess = (state, action) => {
    return updateObject( state, {
        fetchedPostsByYear: action.fetchedPostsByYear,
        loading: false,
    })
}

/*******************************************************************************
********************************************************************************
 * Get Post By Month
********************************************************************************
*******************************************************************************/
const fetchPostsByMonthStart = (state, action) => {
    return updateObject( state, {
        loading: true
    })
}

const fetchPostsByMonthFail = (state, action) => {
    return updateObject( state, {
        loading: false
    })
}
const fetchPostsByMonthSuccess = (state, action) => {
    return updateObject( state, {
        fetchedPostsByMonth: action.fetchedPostsByMonth,
        loading: false,
    })
}

/*******************************************************************************
********************************************************************************
 * New Post
********************************************************************************
*******************************************************************************/

const newPostStart = (state, action) => {
    return updateObject( state, { 
        loading: true,
        message: null
    })
}
    
const newPostSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        message: action.message,
        posts:null
    })
}

const newPostFail = (state, action) => {
    return updateObject( state, { 
        loading: false,
        message: action.error
    })
}
/*******************************************************************************
********************************************************************************
 * Update Post
********************************************************************************
*******************************************************************************/

const updatePostStart = (state, action) => {
    return updateObject( state, { 
        loading: true,
        message: null
//        redirect:null
    })
}
    
const updatePostSuccess = (state, action) => {
//    const newPost = updateObject(action.postData, { id: action.postId })
    return updateObject(state, {
        loading: false,
        message: action.message,
        fetchedPostsById: null,
        posts:null
//        redirect: '/blog/editpost/' + action.id
//        posts: state.posts.concat( newPost )
    })
}

const updatePostFail = (state, action) => {
    return updateObject( state, { 
        loading: false,
        message: action.error
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.FETCH_POSTS_START              : return fetchPostsStart(state, action);
        case actionTypes.FETCH_POSTS_FAIL               : return fetchPostsFail(state, action);
        case actionTypes.FETCH_POSTS_SUCCESS            : return fetchPostsSuccess(state, action);
        
        case actionTypes.FETCH_POSTS_BY_ID_START        : return fetchPostsByIdStart(state, action);
        case actionTypes.FETCH_POSTS_BY_ID_FAIL         : return fetchPostsByIdFail(state, action);
        case actionTypes.FETCH_POSTS_BY_ID_SUCCESS      : return fetchPostsByIdSuccess(state, action);
       
        case actionTypes.FETCH_POSTS_BY_YEAR_START      : return fetchPostsByYearStart(state, action);
        case actionTypes.FETCH_POSTS_BY_YEAR_FAIL       : return fetchPostsByYearFail(state, action);
        case actionTypes.FETCH_POSTS_BY_YEAR_SUCCESS    : return fetchPostsByYearSuccess(state, action);
       
        case actionTypes.FETCH_POSTS_BY_MONTH_START     : return fetchPostsByMonthStart(state, action);
        case actionTypes.FETCH_POSTS_BY_MONTH_FAIL      : return fetchPostsByMonthFail(state, action);
        case actionTypes.FETCH_POSTS_BY_MONTH_SUCCESS   : return fetchPostsByMonthSuccess(state, action);
        
        case actionTypes.DELETE_POST_START              : return deletePostStart(state, action);
        case actionTypes.DELETE_POST_FAIL               : return deletePostFail(state, action);
        case actionTypes.DELETE_POST_SUCCESS            : return deletePostSuccess(state, action);
        
        case actionTypes.NEW_POST_SUCCESS               : return newPostSuccess(state, action);
        case actionTypes.NEW_POST_FAIL                  : return newPostFail(state, action);
        case actionTypes.NEW_POST_START                 : return newPostStart(state, action);
       
        case actionTypes.UPDATE_POST_SUCCESS            : return updatePostSuccess(state, action);
        case actionTypes.UPDATE_POST_FAIL               : return updatePostFail(state, action);
        case actionTypes.UPDATE_POST_START              : return updatePostStart(state, action);

        default: return state;     
    }
}

export default reducer;
