import {
    AUTH_LOGIN_FAIL,
    AUTH_LOGIN_START,
    AUTH_LOGIN_SUCCESS
} from '../actions/types';
import { updateObject } from '../../utils/helpers';

const initialState = {
    token: null,
    userId: null,
    redirect: false,
    loading: false,
    error: null
};

const failedLogin = (state, action) => {
    return updateObject(state, {
        error: action.payload.error,
        loading: false
    });
};

const startLoginProcess = state => {
    return updateObject(state, {
        error: false,
        loading: true
    });
};

const loginSucceeded = (state, action) => {
    const { token, userId } = action.payload;
    return updateObject(state, {
        error: false,
        loading: false,
        redirect: true,
        token,
        userId
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_LOGIN_START:
            return startLoginProcess(state);
        case AUTH_LOGIN_FAIL:
            return failedLogin(state, action);
        case AUTH_LOGIN_SUCCESS:
            return loginSucceeded(state, action);
        default:
            return state;
    }
};

export default reducer;
