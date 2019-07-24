export default {
    auth: {
        token: null,
        userId: null,
        redirect: false,
        loading: false,
        error: null
    },
    user: {
        id: undefined,
        avatar: undefined,
        name: '',
        lastName: '',
        settings: {},
        friends: [] // other users
    },
    apiCallsInProgress: [] // ['LOAD_USER_FRIENDS_API_CALL']
};
