import ky from 'ky';

import { setLocalData } from '../../utils/localStorage';
import { AUTH_LOGIN_FAIL, AUTH_LOGIN_START, AUTH_LOGIN_SUCCESS } from './types';

export const authLoginStart = () => ({
    type: AUTH_LOGIN_START
});

export const authLoginFailed = error => ({
    type: AUTH_LOGIN_FAIL,
    payload: {
        error
    }
});

export const authLoginSucceeded = (token, userId) => ({
    type: AUTH_LOGIN_SUCCESS,
    payload: {
        token,
        userId
    }
});

export const authLogin = (email, password) => {
    return async dispatch => {
        dispatch(authLoginStart());
 
        const url = process.env.URL || 'http://localhost:3001/';
        fetch(`${url}users/login`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(res => res.json())
		.then(res => {
            if (res.token && res.userId) {
                setLocalData(res.token, res.userId);
                dispatch(authLoginSucceeded(res.token, res.userId));
            } else {
                dispatch(authLoginFailed(`Error: ${res.statusText}`));
        }})
        .catch(err => {
            console.log(err);
            dispatch(authLoginFailed(`Uncaught Error: ${err.statusText}`))
        })
    }
};
