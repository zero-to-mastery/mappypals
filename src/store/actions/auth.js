
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
    return dispatch => {
        dispatch(authLoginStart());
        const url = process.env.URL || 'http://localhost:3001/';
        fetch(`${url}users/login`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: email,
                password: password,
                token: '',
                userId: '',
            })
        })
        .then(res => {
            if (res.status === 200) {
                return res.json()
            } else {
                return dispatch(authLoginFailed(`Error: ${res.statusText}`));
        }})
        .then(res => {
            if (res.token && res.userId) {
                setLocalData(res.token, res.userId);
                dispatch(authLoginSucceeded(res.token, res.userId));
        }})
        .catch(err => {
            dispatch(authLoginFailed(`Uncaught Error: ${err.statusText}`))
        })
    }
};
