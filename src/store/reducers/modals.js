import initialState from './initialState';
import {
    SHOW_INVITE_FRIENDS_MODAL,
    HIDE_INVITE_FRIENDS_MODAL
} from '../actions/types';
export const modalsReducer = (state = initialState.modals, action) => {
    switch (action.type) {
        case SHOW_INVITE_FRIENDS_MODAL:
            return { ...state, inviteFriends: true };
        case HIDE_INVITE_FRIENDS_MODAL:
            return { ...state, inviteFriends: false };
        default:
            return state;
    }
};

export default modalsReducer
