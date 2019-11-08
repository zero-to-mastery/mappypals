import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideInviteFriends } from '../../store/actions/modals';
import Modal from '../../components/UI/Modal/Modal';
import Button from '../../components/UI/Button/Button';
import Chip from '../../components/UI/Chip/Chip';
import classes from './InviteFriends.module.scss';
import isEmail from 'validator/lib/isEmail';
export const InviteFriends = () => {
    // react-redux hooks
    const dispatch = useDispatch();
    const { show } = useSelector(state => ({
        show: state.modals.inviteFriends
    }));
    // React hooks
    const [emailList, setEmailList] = useState([]);

    const [text, setText] = useState('');

    const handleInputChange = event => {
        const newText = event.target.value;
        setText(newText);
    };
    const handleAddEmail = event => {
        //  check if the email already exists
        if (emailList.includes(text)) {
            alert('Email already added');
            setText('');
        } else if (isEmail(text)) {
            setEmailList([...emailList, text]);
            setText('');
        }
    };
    const handleSendInvites = event => {
        if (emailList.length > 0) {
            setEmailList([]);
            dispatch(hideInviteFriends());
        } else {
            alert('No emails to send');
        }
    };
    const removeEmail = emailToRemove => {
        const index = emailList.indexOf(emailToRemove);
        if (index !== -1) {
            const newState = [...emailList];
            newState.splice(index, 1);
            setEmailList(newState);
        }
    };

    return (
        <Modal show={show}>
            <div className={`${classes.root}`}>
                <p className={`${classes.title}`}>
                    Send and invite to multiple friends
                </p>
                <div className={classes.form}>
                    <label htmlFor="email" className={classes.label}>
                        Email
                        <input
                            type="email"
                            name="email"
                            placeholder=""
                            value={text}
                            className={classes.input}
                            onChange={handleInputChange}
                        />
                    </label>
                    <Button btnType="InviteFriends" onClick={handleAddEmail}>
                        Add Email
                    </Button>
                </div>
                <div className={classes.emailList}>
                    {emailList.map((email, index) => (
                        <Chip
                            text={email}
                            key={index}
                            closeHandler={removeEmail}
                        />
                    ))}
                </div>
                <div className={classes.sendInvite}>
                    <Button
                        btnType="InviteFriends"
                        type="submit"
                        onClick={handleSendInvites}
                    >
                        Send Invites
                    </Button>
                </div>
            </div>
        </Modal>
    );
};
export default InviteFriends;
