const handleResponse = async response => {
    if (response.ok) return response.json();
    // server side validation error
    if (response.status === 400) {
        const error = await response.text();
        console.log(error);
        throw new Error(error);
    }
    // network error
    throw new Error('Network response error');
};
// Log errors
const handleError = error => {
    console.error(`API call error ${error}`);
    throw error;
};
export { handleResponse, handleError };
