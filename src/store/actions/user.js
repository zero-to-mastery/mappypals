import { USER_GET_FRIENDS_SUCCESS, LOAD_USER_FRIENDS_API_CALL } from './types';
import { getFriends } from '../../api/userApi';
import { beginApiCall, apiCallError } from './apiStatus';

// synchronous actions
const getUserFriendsSuccess = (friends, caller) => ({
    type: USER_GET_FRIENDS_SUCCESS,
    friends,
    caller
});

// thunks (async actions)
export const getUserFriends = () => async dispatch => {
    dispatch(beginApiCall(LOAD_USER_FRIENDS_API_CALL));
    // make asynchronous call to server
    try {
        const response = await getFriends();
        return dispatch(
            getUserFriendsSuccess(response, LOAD_USER_FRIENDS_API_CALL)
        );
    } catch (error) {
        dispatch(apiCallError(LOAD_USER_FRIENDS_API_CALL));
        throw error;
    }
};
