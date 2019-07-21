import React, { useState } from 'react';
import Button from '../../components/UI/Button/Button';
import Chip from '../../components/UI/Chip/Chip';
import classes from './InviteFriends.module.scss';
import isEmail from 'validator/lib/isEmail';
import { ReactComponent as Gmail } from '../../pics/gmail.svg';
export const InviteFriends = props => {
    const [emailList, setEmailList] = useState([
        'example1@mail.com',
        'example1@mail.com',
        'example1@mail.com'
    ]);
    const [text, setText] = useState('');

    const handleInputChange = event => {
        const newText = event.target.value;
        console.log(newText);
        setText(newText);
    };
    const handleKeyPressed = event => {
        const key = event.key;
        if (key === 'Enter' && isEmail(text)) {
            setEmailList([...emailList, text]);
            setText('');
        } else {
            // show validation error
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
    window.addEventListener('keypress', handleKeyPressed);

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
                        onKeyPress={handleKeyPressed}
                        required
                    />
                </label>
                <Button btnType="MultipleFriends" type="submit">
                    SEND INVITES
                </Button>
            </div>
            <div className={classes.emailList}>
                {emailList.map((email, index) => (
                    <Chip text={email} id={index} closeHandler={removeEmail} />
                ))}
            </div>
            <div className={classes.importFrom}>
                <p>Or import from:</p>
                <Gmail />
                {/* <Gmail /> */}
            </div>
        </div>
    );
};
export default InviteFriends;
