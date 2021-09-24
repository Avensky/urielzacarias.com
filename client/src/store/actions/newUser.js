import * as actionTypes from './actionTypes'
import axios from 'axios';

export const setNewUserRedirectPath  = (path) =>{
    return{
        type: actionTypes.SET_NEW_USER_REDIRECT_PATH,
        path: path
    }
}

export const newUserStart  = () =>{
    return{
        type: actionTypes.NEW_USER_START
    }
}

export const newUserFail = (error) => {
    return {
        type: actionTypes.NEW_USER_FAIL,
        error: error
    }
}

export const newUserSuccess = (userData) => {
    return {
        type: actionTypes.NEW_USER_SUCCESS,
        userData: userData
    }
}

    
export const newUser = (username, givenName, familyName, email, password, picture) => {
    return dispatch => {
        dispatch(newUserStart())
        const userData = {
            username    : username, 
            givenName   : givenName, 
            familyName  : familyName, 
            email       : email, 
            password    : password, 
            picture     : picture, 
        }
        
        axios.post('/api/addUser', userData)
            .then(response => {
                console.log(response);
//                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
//                localStorage.setItem('token', response.data.idToken);
//                localStorage.setItem('expirationDate', expirationDate);
//                localStorage.setItem('userId', response.data.localId);
//                dispatch(newUserSuccess(response.data.idToken, response.data.localId));
//                dispatch(checkLoginTimeout(response.data.expiresIn));       
                dispatch(newUserSuccess(userData))        
            })
        .catch(error => {
            console.log(error);
            dispatch(newUserFail(error))
        })    
    }
}