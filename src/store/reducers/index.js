import { combineReducers } from 'redux';

import authReducer from './auth';
import userReducer from './user';
import apiStatusReducer from './apiStatus';
const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    apiStatus: apiStatusReducer
});

export default rootReducer;
