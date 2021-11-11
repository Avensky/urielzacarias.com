import axios from 'axios'
import * as actionTypes from './actionTypes'

/*******************************************
********************************************
 * Get Blog Posts
********************************************
*******************************************/

export const fetchPostsSuccess = (posts) => {
    return {
        type:  actionTypes.FETCH_POSTS_SUCCESS,
        posts: posts,
        //posts: fetchedPosts.slice(0, fetchedPosts.length-1).reverse(),
        //featuredPost: fetchedPosts.slice(fetchedPosts.length - 1, fetchedPosts.length),
        //fetchedPosts: fetchedPosts
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
            const posts = result.data
                dispatch(fetchPostsSuccess(posts));
            } )
            .catch( error => {
                console.log('blog error = ', error)
                dispatch(fetchPostsFail(error));
            } );
    };
}
/*******************************************
********************************************
 * Get Blog Post
********************************************
*******************************************/

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
        axios.get( '/api/getpost/' + id)
        .then( result => {
            //console.log(result)
            const post = result.data
            dispatch(fetchPostsByIdSuccess(post));
        })
        .catch( error => {
            dispatch(fetchPostsByIdFail(error));
        });
    };
}

/*******************************************
********************************************
 * New Blog Post
********************************************
*******************************************/
export const setNewPostRedirectPath  = (path) =>{
    return{
        type: actionTypes.SET_NEW_POST_REDIRECT_PATH,
        path: path
    }
}

export const newPostStart  = () =>{ 
    console.log('newPostStart')
    return { 
        type: actionTypes.NEW_POST_START 
    } }

export const newPostFail = (error) => {
    return {
        type: actionTypes.NEW_POST_FAIL,
        error: error
    }}

export const newPostSuccess = (message) => {
    return {
        type: actionTypes.NEW_POST_SUCCESS,
        message: message,
    }}

export const newPost = (values) => {
    return dispatch => {
        dispatch(newPostStart())
        axios.post('/api/addPost', values)
            .then(response => {
                console.log('addPost',response.data);
                dispatch(newPostSuccess(response.data))
        })
        .catch(error => {
            console.log('addPost', error);
            dispatch(newPostFail(error))
        })    
    }}

/*******************************************
********************************************
 * Delete Blog Post
********************************************
*******************************************/
export const deletePostSuccess = (message) => {
    return {
        message : message,
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
            dispatch(deletePostSuccess(result.data));
        })
        .catch( error => {
            dispatch(deletePostFail(error));
        });
    };
}

/*******************************************
********************************************
 * Update Blog Post
********************************************
*******************************************/
export const updatePostSuccess = (message) => {
    return {
        //id: id,
        message : message,
        type    : actionTypes.UPDATE_POST_SUCCESS, 
    }
}
export const updatePostFail = (error) => {
    return {
        type    : actionTypes.UPDATE_POST_FAIL, 
        error   : error
    }
}
export const updatePostStart = () => {
    return {
        type    : actionTypes.UPDATE_POST_START
    }
}

export const updatePost = (values,id) => {
    console.log('updatePost values',values)
    console.log('updatePost id',id)
    return dispatch => {
        dispatch(updatePostStart());
        axios.post( '/api/updatepost/' + id, values)
        .then( result => {
            console.log(result);
            const message = result.data
            dispatch(updatePostSuccess(message));
        })
        .catch( error => {
            dispatch(updatePostFail(error));
        });
    };
}

/*******************************************
********************************************
 * Get Blog Posts
********************************************
*******************************************/
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
        axios.get('/api/archive/' + year)
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

/*******************************************
********************************************
 * Get Blog Posts
********************************************
*******************************************/
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
