import axios from 'axios'
import * as actionTypes from './actionTypes'

export const fetchPostsSuccess = (fetchedPosts) => {
    return {
        type:  actionTypes.FETCH_POSTS_SUCCESS,
        posts: fetchedPosts.slice(0, fetchedPosts.length-1).reverse(),
        featuredPost: fetchedPosts.slice(fetchedPosts.length - 1, fetchedPosts.length),
        fetchedPosts: fetchedPosts
    }
}
export const fetchPostsFail = (error) => {
    return {
        type:  actionTypes.FETCH_POSTS_FAIL, 
        error: error
    }
}
export const fetchPostsStart = () => {
    return {
        type:  actionTypes.FETCH_POSTS_START
    }
}
export const fetchPosts = () => {
    return dispatch => {
        dispatch(fetchPostsStart());
        axios.get( '/api/posts')
        .then( result => {
            console.log(result)
            const posts = result.data
//            const fetchedPosts = []
//                for ( let key in posts ) {
//                    fetchedPosts.push( {
//                        ...result.data[key],
//                        id: key
//                    } );
//                }
                dispatch(fetchPostsSuccess(posts));
            } )
            .catch( error => {
                dispatch(fetchPostsFail(error));
            } );
    };
}

export const fetchPostsByIdSuccess = (fetchedPostsById) => {
    return {
        type:  actionTypes.FETCH_POSTS_BY_ID_SUCCESS,
        fetchedPostsById: fetchedPostsById,
    }
}
export const fetchPostsByIdFail = (error) => {
    return {
        type:  actionTypes.FETCH_POSTS_BY_ID_FAIL, 
        error: error
    }
}
export const fetchPostsByIdStart = () => {
    return {
        type:  actionTypes.FETCH_POSTS_BY_ID_START
    }
}
export const fetchPostsById = (id) => {
    return dispatch => {
        dispatch(fetchPostsByIdStart());
        axios.get( '/api/getpostDetails/' + id)
        .then( result => {
            console.log(result)
            const fetchedPostsById = result.data
//            const fetchedPostsById = {id: id}
//            const obj = {...post, ...fetchedPostsById}
            dispatch(fetchPostsByIdSuccess(fetchedPostsById));
        })
        .catch( error => {
            dispatch(fetchPostsByIdFail(error));
        });
    };
}


export const deletePostSuccess = () => {
    return {
        type:  actionTypes.DELETE_POST_SUCCESS, 
    }
}
export const deletePostFail = (error) => {
    return {
        type:  actionTypes.DELETE_POST_FAIL, 
        error: error
    }
}
export const deletePostStart = () => {
    return {
        type:  actionTypes.DELETE_POST_START
    }
}

export const deletePost = (id) => {
    return dispatch => {
        dispatch(deletePostStart());
        axios.delete( '/api/deletepost/' + id)
        .then( result => {
            console.log(result);
            dispatch(deletePostSuccess());
        })
        .catch( error => {
            dispatch(deletePostFail(error));
        });
    };
}


export const fetchPostsByYearSuccess = (fetchedPostsByYear) => {
    return {
        type: actionTypes.FETCH_POSTS_BY_YEAR_SUCCESS,
        fetchedPostsByYear: fetchedPostsByYear,
    }
}
export const fetchPostsByYearFail = (error) => {
    return {
        type:  actionTypes.FETCH_POSTS_BY_YEAR_FAIL, 
        error: error
    }
}
export const fetchPostsByYearStart = () => {
    return {
        type:  actionTypes.FETCH_POSTS_BY_YEAR_START
    }
}
export const fetchPostsByYear = (year) => {
    return dispatch => {
        dispatch(fetchPostsByYearStart());
        axios.get( '/api/archive/' + year)
        .then( result => {
            console.log(result)
            const fetchedPostsByYear = result.data
//            const fetchedPostsById = {id: id}
//            const obj = {...post, ...fetchedPostsById}
            dispatch(fetchPostsByYearSuccess(fetchedPostsByYear));
        })
        .catch( error => {
            dispatch(fetchPostsByYearFail(error));
        });
    };
}


export const fetchPostsByMonthSuccess = (fetchedPostsByMonth) => {
    return {
        type: actionTypes.FETCH_POSTS_BY_MONTH_SUCCESS,
        fetchedPostsByMonth: fetchedPostsByMonth,
    }
}
export const fetchPostsByMonthFail = (error) => {
    return {
        type:  actionTypes.FETCH_POSTS_BY_MONTH_FAIL, 
        error: error
    }
}
export const fetchPostsByMonthStart = () => {
    return {
        type:  actionTypes.FETCH_POSTS_BY_MONTH_START
    }
}
export const fetchPostsByMonth = () => {
    return dispatch => {
        dispatch(fetchPostsByMonthStart());
        axios.get( '/api/archive/month')
        .then( result => {
            console.log(result)
            const fetchedPostsByMonth = result.data
//            const fetchedPostsById = {id: id}
//            const obj = {...post, ...fetchedPostsById}
            dispatch(fetchPostsByMonthSuccess(fetchedPostsByMonth));
        })
        .catch( error => {
            dispatch(fetchPostsByMonthFail(error));
        });
    };
}