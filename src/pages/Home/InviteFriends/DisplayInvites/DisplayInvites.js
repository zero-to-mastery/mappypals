import React from 'react';
import classes from './DisplayInvites.module.css';

const DisplayInvites = () => {
    return (
        <React.Fragment>
            <div className={classes.element}>
                <span>Display Invites</span>
                <button className={classes.buttonX}>X</button>
            </div>
        </React.Fragment>
    );
};

export default DisplayInvites;
