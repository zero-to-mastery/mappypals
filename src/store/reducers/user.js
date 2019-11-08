import * as ACTION from '../actions/types';
import initialState from './initialState';

export const userReducer = (state = initialState.user, action) => {
    switch (action.type) {
        case ACTION.USER_GET_FRIENDS_SUCCESS:
            return { ...state, friends: action.friends };
        case ACTION.USER_SIGN_IN_SUCCESS:
        case ACTION.USER_SIGN_UP_SUCCESS:
            return { ...state, ...action.user };
        case ACTION.USER_SIGN_OUT_SUCCESS:
            return initialState.user;
        case ACTION.USER_UPDATE_PROFILE_SUCCESS:
            return { ...state, ...action.updates };
        default:
            return state;
    }
};

export default userReducer;
