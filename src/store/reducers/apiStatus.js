import { BEGIN_API_CALL, API_CALL_ERROR } from '../actions/types';
import initialState from './initialState';

const actionTypeEndsInSuccess = type => {
    return type.substring(type.length - 8) === '_SUCCESS';
};

const apiStatus = (state = initialState.apiCallsInProgress, action) => {
    if (action.type === BEGIN_API_CALL) {
        return [...state, action.call];
    } else if (
        // api call failed
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
