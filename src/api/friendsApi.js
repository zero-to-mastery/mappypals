import { handleError, handleResponse } from './apiHelpers';

// we should use .env variables for this
const url = 'http://localhost:3002/friends/';

const getFriends = async () => {
    try {
        const response = await fetch(url);
        return handleResponse(response);
    } catch (error) {
        return handleError(error);
    }
};

export default getFriends;
