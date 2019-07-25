import {
    SHOW_INVITE_FRIENDS_MODAL,
    HIDE_INVITE_FRIENDS_MODAL
} from '../actions/types';

const showInviteFriends = () => ({ type: SHOW_INVITE_FRIENDS_MODAL });
const hideInviteFriends = () => ({ type: HIDE_INVITE_FRIENDS_MODAL });

export { showInviteFriends, hideInviteFriends };
