import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';

const initialState = {
    posts:[],
    featuredPost: [],
    fetchedPosts: [],
    fetchedPostsById: [],
    fetchedPostsByYear: [],
    fetchedPostsByMonth: [],        
    loading: false,
}

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
        featuredPost: action.featuredPost,
        fetchedPosts: action.fetchedPosts,
    })
}

const fetchPostsByIdStart = (state, action) => {
    return updateObject( state, {
        loading: true
    })
}

const fetchPostsByIdFail = (state, action) => {
    return updateObject( state, {
        loading: false
    })
}
const fetchPostsByIdSuccess = (state, action) => {
    return updateObject( state, {
        fetchedPostsById: action.fetchedPostsById,
        loading: false,
    })
}

const deletePostStart = (state, action) => {
    return updateObject( state, {
        loading: true
    })
}

const deletePostFail = (state, action) => {
    return updateObject( state, {
        loading: false
    })
}
const deletePostSuccess = (state, action) => {
    return updateObject( state, {
        fetchedPostsById: null,
        loading: false,
    })
}
 
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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_POSTS_START: return fetchPostsStart(state, action);
        case actionTypes.FETCH_POSTS_FAIL: return fetchPostsFail(state, action);
        case actionTypes.FETCH_POSTS_SUCCESS: return fetchPostsSuccess(state, action);
        case actionTypes.FETCH_POSTS_BY_ID_START: return fetchPostsByIdStart(state, action);
        case actionTypes.FETCH_POSTS_BY_ID_FAIL: return fetchPostsByIdFail(state, action);
        case actionTypes.FETCH_POSTS_BY_ID_SUCCESS: return fetchPostsByIdSuccess(state, action);
        case actionTypes.FETCH_POSTS_BY_YEAR_START: return fetchPostsByYearStart(state, action);
        case actionTypes.FETCH_POSTS_BY_YEAR_FAIL: return fetchPostsByYearFail(state, action);
        case actionTypes.FETCH_POSTS_BY_YEAR_SUCCESS: return fetchPostsByYearSuccess(state, action);
        case actionTypes.FETCH_POSTS_BY_MONTH_START: return fetchPostsByMonthStart(state, action);
        case actionTypes.FETCH_POSTS_BY_MONTH_FAIL: return fetchPostsByMonthFail(state, action);
        case actionTypes.FETCH_POSTS_BY_MONTH_SUCCESS: return fetchPostsByMonthSuccess(state, action);
        case actionTypes.DELETE_POST_START: return deletePostStart(state, action);
        case actionTypes.DELETE_POST_FAIL: return deletePostFail(state, action);
        case actionTypes.DELETE_POST_SUCCESS: return deletePostSuccess(state, action);
        default: return state;     
    }
}

export default reducer;