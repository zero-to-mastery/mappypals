export default {
    user: {
        id: undefined,
        avatar: undefined,
        firstName: '',
        lastName: '',
        settings: {},
        friends: [] // other users
    },
    apiCallsInProgress: [], // ['LOAD_USER_FRIENDS_API_CALL']
    modals: { inviteFriends: false, contactUs: false }
};
