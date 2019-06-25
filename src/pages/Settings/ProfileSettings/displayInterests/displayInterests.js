import React from 'react';
import classes from './displayInterests.module.css';
import XButton from '../../../../components/UI/XButton/XButton';

const displayInterests = props => {
    return (
        <React.Fragment>
            <div className={classes.element}>
                <span>{props.info}</span>
                <XButton
                    btnType="DisplayInterests"
                    className={classes.buttonX}
                    onClick={props.removeInterest}
                >
                    X
                </XButton>
            </div>
        </React.Fragment>
    );
};

export default displayInterests;
