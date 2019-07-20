import { handleError, handleResponse } from './apiHelpers';

// we should use .env variables for constants and keys
const url = process.env.URL || 'http://localhost:3002/friends/';

export const getFriends = async () => {
    try {
        const response = await fetch(url);
        return handleResponse(response);
    } catch (error) {
        return handleError(error);
    }
};

export default getFriends;
