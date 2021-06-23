import axios from 'axios'
import * as actionTypes from './actionTypes'

export const auth = (values, auth, token) => {
    console.log('values = '+JSON.stringify(values));
    //console.log('authLogin = '+authLogin);
    return dispatch => {
        dispatch(authStart());
        let url
        switch (auth) {
            case auth='login':
                url = '/auth/login'
                break;
            case auth='register':
                url = '/auth/signup'
                break;
            case auth='forgot-password':
                url = '/auth/forgotPassword'
                break;
            case auth='reset-password':
                url = ('/auth/resetPassword/'+token)
                console.log('url',url)
                break;
        }
        let method
        auth === 'reset-password'
            ? method = axios.patch
            : method = axios.post
        method(url, values)
            .then(response => {dispatch(authSuccess(response.data)) })
            .catch(err => {dispatch(authFail(err));});
    }
}

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type    : actionTypes.AUTH_SUCCESS,
        idToken : token,
        userId  : userId
    };
};

export const authFail = (error) => {
    return {
        type    : actionTypes.AUTH_FAIL,
        error   : error,
    };
};




export const connect = (values) => {
    //console.log('values = '+values);
    //console.log('connect = '+connect);
    return dispatch => {
        dispatch(connectStart());
        let url = '/connect/local';     
        axios.post(url, values)
            .then(response => {
                //console.log('response = '+JSON.stringify(response));
                //console.log('response = '+response);
                dispatch(connectSuccess(response.data)) 
             })
             .catch(err => {
                 //console.log('err = '+err);
                 dispatch(connectFail(err));
             });
    }
}

export const connectStart = () => {
    return {
        type: actionTypes.CONNECT_START
    };
};

export const connectSuccess = (token, userId) => {
    return {
        type    : actionTypes.CONNECT_SUCCESS,
        idToken : token,
        userId  : userId
    };
};

export const connectFail = (error) => {
    return {
        type    : actionTypes.CONNECT_FAIL,
        error   : error,
    };
};











export const fbAuth = () => {
    return dispatch => {
        dispatch(fbAuthStart());
        dispatch(fbAuthSuccess()) 
        //dispatch(fbAuthFail(err));
    }
}

export const fbAuthStart = () => {
    return {
        type    : actionTypes.FB_AUTH_START
    };
};

export const fbAuthSuccess = () => {
    return {
        type    : actionTypes.FB_AUTH_SUCCESS,
    };
};

export const fbAuthFail = (error) => {
    return {
        type    : actionTypes.FB_AUTH_FAIL,
        error   : error
    };
};




export const newAddressStart  = () =>{
    return{
        type: actionTypes.NEW_ADDRESS_START
    }
}

export const newAddressFail = (error) => {
    return {
        type: actionTypes.NEW_ADDRESS_FAIL,
        error: error
    }
}

export const newAddressSuccess = (addressData) => {
    return {
        type: actionTypes.NEW_ADDRESS_SUCCESS,
        addressData: addressData
    }
}

export const newAddress = (values) => {
    return dispatch => {
        dispatch(newAddressStart())
       //console.log('New Address Start');
        axios.post('/api/addAddress', values)
            .then(response => {
               //console.log('Axios Start');
               //console.log(response);
                const data = response.data;
               //console.log(data);
                dispatch(newAddressSuccess(data))
        })
        .catch(error => {
           //console.log(error);
            dispatch(newAddressFail(error))
        })    
    }
}




export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};

export const fetchUserStart = () => {
    return {
        type: actionTypes.FETCH_USER_START
    }
};

export const fetchUserSuccess = (payload) => {
    return {
        type: actionTypes.FETCH_USER_SUCCESS,
        payload: payload
        
    }
};

export const fetchUserFail = (error) => {
    return {
        type: actionTypes.FETCH_USER_FAIL,
        error: error
    }
};

export const fetchUser = () => {
    return dispatch => {
        dispatch(fetchUserStart());
        axios.get('/api/fetchUser')
        .then( result => {
            console.log(result)
            const payload = result.data
            dispatch(fetchUserSuccess(payload));
        })
        .catch( error => {
                dispatch(fetchUserFail(error));
        });
    }
}

export const loginStart = () => {
    return {
        type: actionTypes.LOGIN_START
    }
}

export const loginSuccess = (token, userId) => {
    return {
        type: actionTypes.LOGIN_SUCCESS, 
        idToken: token,
        userId: userId
    }
}

export const loginFail = (error) => {
    return {
        type: actionTypes.LOGIN_FAIL,
        error: error
    }
}

export const logout = () => {
    axios.get('/api/logout')
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.LOGOUT
    }
}

export const checkLoginTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const login = (email, password, isSignup) => {
    return dispatch => {
        dispatch(loginStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }        
        axios.post('/api/login', authData)
            .then(response => {
                console.log(response);
                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', response.data.localId); 
                dispatch(loginSuccess(response.data.idToken, response.data.localId));
                dispatch(checkLoginTimeout(response.data.expiresIn));
                dispatch(loginSuccess(response)) 
})
            .catch(err => {
                console.log(err);
                dispatch(loginFail(err));
            });
    }
}

export const setLoginRedirectPath = (path) => {
    return {
        type: actionTypes.SET_LOGIN_REDIRECT_PATH,
        path: path
    };
};

export const loginCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            console.log(expirationDate)
            if (expirationDate <= new Date()){
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(loginSuccess(token, userId));
                dispatch(checkLoginTimeout((expirationDate.getTime() -new Date().getTime()) / 1000 ))
            }
        }
    }
}



export const getUserStart = () => {
    return {
        type: actionTypes.GET_USER_START
    }
};

export const getUserSuccess = (payload) => {
    return {
        type: actionTypes.GET_USER_SUCCESS,
        payload: payload
        
    }
};

export const getUserFail = (error) => {
    return {
        type: actionTypes.GET_USER_FAIL,
        error: error
    }
};

export const getUser = () => {
    return dispatch => {
        dispatch(getUserStart());
        axios.get('/api/user/')
        .then(result => {
            console.log('Get user response: ' + result);
            const payload = result.data
            dispatch(getUserSuccess(payload));
        })
        .catch( error => {
            dispatch(getUserFail(error));
        })
    }
}
