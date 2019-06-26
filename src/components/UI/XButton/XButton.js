import React from 'react';
import classes from './XButton.module.css';

const Xbutton = props => {
    return (
        <button
            className={[classes.XButton, classes[props.btnType]].join(' ')}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default Xbutton;
