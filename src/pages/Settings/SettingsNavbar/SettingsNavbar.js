import React from 'react';
import classes from './SettingsNavbar.module.css';

const SettingsNavbar = props => {
    return (
        <div className={classes.navbar}>
            <span
                className={
                    props.profileSelected ? classes.active : classes.item
                }
            >
                Profile Settings
            </span>
            <span className={classes.item}>Email and Password</span>
        </div>
    );
};
export default SettingsNavbar;
