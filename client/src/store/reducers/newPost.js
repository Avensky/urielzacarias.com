import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';

const initialState = {
    posts: [],
    loading: false,
};

//const newPostInit = (state, action) => {
//    return updateObject( state, { posted: false });}

const newPostStart = (state, action) => {
    return updateObject( state, { loading: true });}
    
const newPostSuccess = (state, action) => {
    const newPost = updateObject(action.postData, { id: action.postId })
    return updateObject(state, {
        loading: false,
        posts: state.posts.concat( newPost )
    })
}
const newPostFail = (state, action) => {
    return updateObject( state, { loading: false } );}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.NEW_POST_SUCCESS: return newPostSuccess(state, action);
        case actionTypes.NEW_POST_FAIL: return newPostFail(state, action);
        case actionTypes.NEW_POST_START: return newPostStart(state, action);
        
        default: return state;
    }
};

export default reducer;
