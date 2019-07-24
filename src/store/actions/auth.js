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
        (async () => {
            const url = 'http://localhost:3001/users/login';
            await ky
                .post(url, { json: { email, password } })
                .json()
                .then((res, err) => {
                    if (res.token && res.userId) {
                        setLocalData(res.token, res.userId);
                        dispatch(authLoginSucceeded(res.token, res.userId));
                    } else {
                        // error message here
                        dispatch(authLoginFailed(`Error: ${err.statusText}`));
                    }
                })
                .catch(err =>
                    dispatch(
                        authLoginFailed(`Uncaught Error: ${err.statusText}`)
                    )
                );
        })();
    };
};
