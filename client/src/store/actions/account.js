import axios from 'axios'
import * as actionTypes from './actionTypes'

export const updateUserStart = () => {
    return {
        type: actionTypes.UPDATE_USER_START
    }
};

export const updateUserSuccess = (payload) => {
    return {
        type: actionTypes.UPDATE_USER_SUCCESS,
        payload: payload  
    }
};

export const updateUserFail = (error) => {
    return {
        type: actionTypes.UPDATE_USER_FAIL,
        error: error
    }
};

export const updateUser = (userId, name, givenName, familyName, email, picture) => {
    return dispatch => {
        const userData={userId, name, givenName, familyName, email, picture}
        dispatch(updateUserStart());
        axios.post('/api/updateuser', userData)
            .then( result => {
                console.log(result)
                const payload = result.data
                dispatch(updateUserSuccess(payload));
        })
            .catch( error => {
                dispatch(updateUserFail(error));
        });
    }
}
