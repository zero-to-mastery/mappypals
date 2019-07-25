import { combineReducers } from 'redux';

import authReducer from './auth';
import userReducer from './user';
import apiStatusReducer from './apiStatus';
import modalsReducer from './modals';
const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    apiStatus: apiStatusReducer,
    modals: modalsReducer
});

export default rootReducer;
