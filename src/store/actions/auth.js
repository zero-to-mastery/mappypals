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

        try {
            const url = 'https://mappypals-api.herokuapp.com/users/login';
            const response = await ky.post(url, { json: { email, password } });
            const data = await response.json();

            if (data.token && data.userId) {
                setLocalData(data.token, data.userId);
                dispatch(authLoginSucceeded(data.token, data.userId));
            } else {
                // error message here
                dispatch(authLoginFailed('Something went wrong!'));
            }
        } catch (err) {
            dispatch(authLoginFailed(err.message));
        }
    };
};
