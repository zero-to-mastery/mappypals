import React from 'react';
import classes from './SettingsNavbar.module.css';
import { Link } from 'react-router-dom';

const SettingsNavbar = props => {
    return (
        <div className={classes.navbar}>
            <Link
                className={
                    props.profileSelected ? classes.active : classes.item
                }
                to="/settings/profilesettings"
            >
                <span>Profile Settings</span>
            </Link>
            <Link
                className={
                    props.EmailPasswordSelected ? classes.active : classes.item
                }
                to="/settings/email_&_password"
            >
                <span>Email and Password</span>
            </Link>
        </div>
    );
};
export default SettingsNavbar;
