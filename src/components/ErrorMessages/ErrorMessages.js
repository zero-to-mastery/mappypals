import React from 'react';
import classes from './ErrorMessages.module.css';

const ErrorMessage = ({ content }) => {
    return (
        <span aria-live="polite" className={classes.warning}>
            {content}
        </span>
    );
};

export default ErrorMessage;
