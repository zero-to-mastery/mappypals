import React from 'react';
import classes from './LinkTag.module.css';
const LinkTag = props => {
    return (
        <a
            className={[classes.ALink, classes[props.ALinkType]].join(' ')}
            href={props.href}
            target={props.target}
            rel={props.rel}
        >
            {props.children}
        </a>
    );
};

export default LinkTag;
