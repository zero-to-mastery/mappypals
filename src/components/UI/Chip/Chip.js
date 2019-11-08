import React from 'react';
import classes from './Chip.module.scss';

export const Chip = ({ text, closeHandler }) => (
    <div className={classes.root}>
        <p className={classes.text}>{text}</p>
        <button className={classes.button} onClick={() => closeHandler(text)}>
            X
        </button>
    </div>
);

export default Chip;
