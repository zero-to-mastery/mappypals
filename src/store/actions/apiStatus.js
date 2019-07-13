import { BEGIN_API_CALL, API_CALL_ERROR } from './types';
export const beginApiCall = call => ({ type: BEGIN_API_CALL, call });
export const apiCallError = call => ({ type: API_CALL_ERROR, call });
