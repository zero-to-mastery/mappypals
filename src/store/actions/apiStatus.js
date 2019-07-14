import { BEGIN_API_CALL, API_CALL_ERROR } from './types';
export const beginApiCall = caller => ({ type: BEGIN_API_CALL, caller });
export const apiCallError = caller => ({ type: API_CALL_ERROR, caller });
