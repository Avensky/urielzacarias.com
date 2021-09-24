import * as actionTypes from './actionTypes'
import axios from 'axios';

export const deleteUserStart  = () =>{
    return{
        type: actionTypes.DELETE_USER_START
    }
}

export const deleteUserFail = (error) => {
    return {
        type: actionTypes.DELETE_USER_FAIL,
        error: error
    }
}

export const deleteUserSuccess = () => {
    return {
        type: actionTypes.DELETE_USER_SUCCESS,
    }
}
    
export const deleteUser = (id) => {
    return dispatch => {
        dispatch(deleteUserStart())
        axios.delete('/api/deleteuser/'+ id)
            .then(response => {
                console.log(response);
                dispatch(deleteUserSuccess())
        })
        .catch(error => {
            console.log(error);
            dispatch(deleteUserFail(error))
        })    
    }
}