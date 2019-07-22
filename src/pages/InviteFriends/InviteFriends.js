import React, { useState } from 'react';
import Button from '../../components/UI/Button/Button';
import Chip from '../../components/UI/Chip/Chip';
import classes from './InviteFriends.module.scss';
import isEmail from 'validator/lib/isEmail';
export const InviteFriends = ({ handleClose }) => {
    const [emailList, setEmailList] = useState([
        'example1@mail.com',
        'example1@mail.com',
        'example1@mail.com'
    ]);
    const [text, setText] = useState('');

    const handleInputChange = event => {
        const newText = event.target.value;
        setText(newText);
    };
    const handleAddEmail = event => {
        if (isEmail(text)) {
            setEmailList([...emailList, text]);
            setText('');
        }
    };
    const handleSendInvites = event => {
        if (emailList.length > 0) {
            setEmailList([]);
            handleClose();
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
                    <Chip text={email} key={index} closeHandler={removeEmail} />
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
    );
};
export default InviteFriends;
