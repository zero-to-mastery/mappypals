import React from 'react';
import classes from './ErrorMessages.module.css';

const PasswordNoMatch = () => {
    return (
        <span aria-live="polite" className={classes.warning}>
            Password doesn't match
        </span>
    );
};

const PasswordRequirements = () => {
    return (
        <span aria-live="polite" className={classes.warning}>
            At least 6 characters, a number or a symbol, at least 1 letter
        </span>
    );
};

export { PasswordNoMatch, PasswordRequirements };
