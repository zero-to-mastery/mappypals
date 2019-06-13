import React from 'react';
import classes from './DisplayInvites.module.css';

const DisplayInvites = props => {
    return (
        <React.Fragment>
            <div className={classes.element}>
                <span>{props.data}</span>
                <button className={classes.buttonX}>X</button>
            </div>
        </React.Fragment>
    );
};

export default DisplayInvites;
