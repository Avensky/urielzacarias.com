import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/',
    payload: null,
    message: null,

};

const authLogout = (state, action) => {
    return updateObject(state, { token: null, userId: null, payload: null});
};

const authStart = ( state, action ) => {
    return updateObject( state, { 
        error: null, 
        loading: true, 
        authRedirectPath: '/'
    });
};

const authSuccess = (state, action) => {
    return updateObject( state, { 
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false,
        authRedirectPath: "/profile"
     });
};

const authFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        message: action.error.message,
        loading: false,
    });
};

const connectStart = ( state, action ) => {
    return updateObject( state, { 
        error: null, 
        loading: true, 
        authRedirectPath: '/'
    });
};

const connectSuccess = (state, action) => {
    console.log(action.idToken)
    if (action.idToken === 'OK'){
        return updateObject( state, { 
            token: action.idToken,
            error: null,
            loading: false,
            authRedirectPath: '/profile'
         });
    } else {
        return updateObject( state, { 
            token: action.idToken,
            error: null,
            loading: false,
            authRedirectPath:"/"
     });
    }
};

const connectFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        message: action.error.message,
        loading: false,
    });
};

const fbAuthStart = ( state, action ) => {
    return updateObject( state, { 
        error: null, 
        loading: true 
    });
};

const fbAuthSuccess = (state, action) => {
    return updateObject( state, { 
        error: null,
        loading: false,
    });
};

const fbAuthFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const fetchUserStart = (state, action) => {
    return updateObject(state, {error: null, loading:true,})
}

const fetchUserSuccess = (state, action) => {
    console.log(action);
    return updateObject(state, {
        payload: action.payload,
        error: null,
        loading: false
    })
}
const fetchUserFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false,
    });
}


const loginStart = (state, action) => {
    return updateObject( state, {error: null, loading: true })
}

const loginSuccess = (state, action) => {
    return updateObject( state, {
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false
    })
}

const loginFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const logout = (state, action) => {
    return updateObject(state, { 
        token: null, 
        userId: null, 
        payload: null, 
    });
};

const newAddressStart = (state, action) => {
    return updateObject( state, {        
        error: null, 
        loading: true,
        addressData: null 
    })
}

const newAddressFail = (state, action) => {
    return updateObject( state, { 
        loading: false, 
        error: action.error,
    })
}
  
const newAddressSuccess = (state, action) => {
    //const newAddress = updateObject(action.addressData, { id: action.addressId })
    return updateObject(state, {
        loading: false,
        addressData: action.addressData 
    })}

const setAuthRedirectPath = (state, action) => {
    return updateObject(state, { authRedirectPath: action.path })
}

const setLoginRedirectPath = (state, action) => {
    return updateObject(state, { loginRedirectPath: action.path })
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_USER_START           : return fetchUserStart(state, action);
        case actionTypes.FETCH_USER_SUCCESS         : return fetchUserSuccess(state, action);
        case actionTypes.FETCH_USER_FAIL            : return fetchUserFail(state, action);
        case actionTypes.LOGIN_START                : return loginStart(state, action);
        case actionTypes.LOGIN_SUCCESS              : return loginSuccess(state, action);
        case actionTypes.LOGIN_FAIL                 : return loginFail(state, action);
        case actionTypes.LOGOUT                     : return logout(state, action);
        case actionTypes.FB_AUTH_START              : return fbAuthStart(state, action);
        case actionTypes.FB_AUTH_SUCCESS            : return fbAuthSuccess(state, action);
        case actionTypes.FB_AUTH_FAIL               : return fbAuthFail(state, action);
        case actionTypes.AUTH_START                 : return authStart(state, action);
        case actionTypes.AUTH_SUCCESS               : return authSuccess(state, action);
        case actionTypes.AUTH_FAIL                  : return authFail(state, action);
        case actionTypes.AUTH_LOGOUT                : return authLogout(state, action);
        case actionTypes.CONNECT_START              : return connectStart(state, action);
        case actionTypes.CONNECT_SUCCESS            : return connectSuccess(state, action);
        case actionTypes.CONNECT_FAIL               : return connectFail(state, action);
        case actionTypes.SET_AUTH_REDIRECT_PATH     : return setAuthRedirectPath(state,action);
        case actionTypes.SET_LOGIN_REDIRECT_PATH    : return setLoginRedirectPath(state, action);
        case actionTypes.NEW_ADDRESS_START          : return newAddressStart(state, action);
        case actionTypes.NEW_ADDRESS_SUCCESS        : return newAddressSuccess(state, action);     
        case actionTypes.NEW_ADDRESS_FAIL           : return newAddressFail(state, action);     
        case actionTypes.SET_LOGIN_REDIRECT_PATH    : return setLoginRedirectPath(state, action);
        default:
            return state;
    }
};

export default reducer;