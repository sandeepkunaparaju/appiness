import {SET_LOGIN_PENDING, SET_LOGIN_SUCCESS, SET_LOGIN_ERROR} from './loginConstants';
import {history} from '../_helpers/history';

function setLoginPending(isLoginPending) {
    return {
      type: SET_LOGIN_PENDING,
      isLoginPending
    };
}
  
function setLoginSuccess(isLoginSuccess) {
    return {
      type: SET_LOGIN_SUCCESS,
      isLoginSuccess
    };
}
  
function setLoginError(loginError) {
    return {
      type: SET_LOGIN_ERROR,
      loginError
    }
}

function callLoginApi(email, password, callback) {
  setTimeout(() => {
    if (email === 'hruday@gmail.com' && password === 'hruday123') {
      return callback(null);
    } else {
      return callback(new Error('Invalid email and password'));
    }
  }, 1000);
}

export function login(email, password) {
    return dispatch => {
      dispatch(setLoginPending(true));
      dispatch(setLoginSuccess(false));
      dispatch(setLoginError(null));
  
      callLoginApi(email, password, error => {
        dispatch(setLoginPending(false));
        if (!error) {
          dispatch(setLoginSuccess(true));
          history.push('/dashboard');
        } else {
          dispatch(setLoginError(error));
        }
      });
    }
}