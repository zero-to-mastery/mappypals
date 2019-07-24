import { USER_GET_FRIENDS_SUCCESS } from '../actions/types';
import initialState from './initialState';

export const userReducer = (state = initialState.user, action) => {
    switch (action.type) {
        case USER_GET_FRIENDS_SUCCESS:
            return { ...state, friends: action.friends };
        default:
            return state;
    }
};

export default userReducer;
