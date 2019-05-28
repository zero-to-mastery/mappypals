const setLocalData = (token, userId) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
};

const getLocalData = () => {
    return {
        token: localStorage.getItem('token'),
        userId: localStorage.getItem('userId')
    };
};

export { setLocalData, getLocalData };
