import { BEGIN_API_CALL, API_CALL_ERROR } from '../actions/types';
import initialState from './initialState';

const actionTypeEndsInSuccess = type => {
    return type.substring(type.length - 8) === '_SUCCESS';
};
// Every time an api call is made, add it to the  global state
// and when it fail or succeed remove it from the global state
// Use the apiCallsInProgress to render spinners while the data is being fetched
// Also this approach simplifies redux actions
// (no need to create XXX_START, XXX_FAIL, XXX_SUCCESS for each action)
const apiStatus = (state = initialState.apiCallsInProgress, action) => {
    if (action.type === BEGIN_API_CALL) {
        return [...state, action.caller];
    } else if (
        // if api call failed or succeeded, remove it from the
        // global state holding api calls in progress
        action.type === API_CALL_ERROR ||
        actionTypeEndsInSuccess(action.type)
    ) {
        const apiCallIndex = state.findIndex(
            apiCall => apiCall === action.caller
        );
        console.log(state.splice(apiCallIndex, 1));
        // remove from apiCallInProgress array
        if (apiCallIndex !== -1) {
            return state.slice(apiCallIndex, apiCallIndex + 1);
        }
        return state;
    }

    return state;
};

export default apiStatus;
