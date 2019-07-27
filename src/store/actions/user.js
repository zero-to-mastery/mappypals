import * as ACTION from './types';
import { getFriends } from '../../api/userApi';
import { beginApiCall, apiCallError } from './apiStatus';
import firebase from '../../components/Firebase';
// synchronous actions
const getUserFriendsSuccess = (friends, caller) => ({
    type: ACTION.USER_GET_FRIENDS_SUCCESS,
    friends,
    caller
});

const signInSuccess = (user, caller) => ({
    type: ACTION.USER_SIGN_IN_SUCCESS,
    user,
    caller
});

const signUpSuccess = (user, caller) => ({
    type: ACTION.USER_SIGN_UP_SUCCESS,
    user,
    caller
});

const singOutSuccess = caller => ({
    type: ACTION.USER_SIGN_OUT_SUCCESS,
    caller
});
const updateProfileSuccess = (updates, caller) => ({
    type: ACTION.USER_UPDATE_PROFILE_SUCCESS,
    updates,
    caller
});
// TODO
// const changePasswordSuccess = (password, caller) => ({
//     type: ACTION.USER_CHANGE_PASSWORD_SUCCESS,
//     password,
//     caller
// });

// thunks (async actions)
export const userSignIn = (email, password) => async dispatch => {
    dispatch(beginApiCall(ACTION.USER_SIGN_IN_API_CALL));
    // asynchronous call to firebase
    try {
        const { user } = await firebase.signInEmailPassword(email, password);
        const user__ = {
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
        };
        return dispatch(signInSuccess(user__, ACTION.USER_SIGN_IN_SUCCESS));
    } catch (error) {
        dispatch(apiCallError(ACTION.USER_SIGN_IN_API_CALL));
        throw error;
    }
};

export const userUpdateProfile = updates => async dispatch => {
    dispatch(beginApiCall(ACTION.USER_UPDATE_PROFILE_API_CALL));
    try {
        await firebase.updateProfile(updates);
        return dispatch(
            updateProfileSuccess(updates, ACTION.USER_UPDATE_PROFILE_API_CALL)
        );
    } catch (error) {
        dispatch(apiCallError(ACTION.USER_UPDATE_PROFILE_API_CALL));
        throw error;
    }
};
export const userSignOut = () => async dispatch => {
    dispatch(beginApiCall(ACTION.USER_SIGN_OUT_API_CALL));
    try {
        await firebase.signOut();
        window.location.assign('/');
        return dispatch(singOutSuccess(ACTION.USER_SIGN_OUT_API_CALL));
    } catch (error) {
        dispatch(apiCallError(ACTION.USER_SIGN_OUT_API_CALL));
        throw error;
    }
};
export const userSignUp = (email, password) => async dispatch => {
    dispatch(beginApiCall(ACTION.USER_SIGN_UP_API_CALL));
    // asynchronous call to firebase
    try {
        const { user } = await firebase.createUserEmailAndPassword(
            email,
            password
        );
        // send email verification link
        firebase.auth.currentUser.sendEmailVerification();
        const user__ = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL
        };
        return dispatch(signUpSuccess(user__, ACTION.USER_SIGN_UP_API_CALL));
    } catch (error) {
        dispatch(apiCallError(ACTION.USER_SIGN_UP_API_CALL));
        throw error;
    }
};
export const getUserFriends = () => async dispatch => {
    dispatch(beginApiCall(ACTION.LOAD_USER_FRIENDS_API_CALL));
    // make asynchronous call to server
    try {
        const response = await getFriends();
        return dispatch(
            getUserFriendsSuccess(response, ACTION.LOAD_USER_FRIENDS_API_CALL)
        );
    } catch (error) {
        dispatch(apiCallError(ACTION.LOAD_USER_FRIENDS_API_CALL));
        throw error;
    }
};
