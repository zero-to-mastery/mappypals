import React from 'react';
import classes from './displayInterests.module.css';

const displayInterests = props => {
    return (
        <React.Fragment>
            <div className={classes.element}>
                <span>{props.info}</span>
                <button
                    className={classes.buttonX}
                    onClick={props.removeInterest}
                >
                    X
                </button>
            </div>
        </React.Fragment>
    );
};

export default displayInterests;
