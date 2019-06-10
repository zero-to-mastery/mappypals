import React from 'react';
import classes from './SettingsNavbar.module.css';
import { Link } from 'react-router-dom';

const SettingsNavbar = () => {
    return (
        <div className={classes.navbar}>
            <Link className={classes.item} to="/settings/profilesettings">
                <span>Profile Settings</span>
            </Link>
            <Link className={classes.item} to="/settings/email_&_password">
                <span>Email and Password</span>
            </Link>
        </div>
    );
};
export default SettingsNavbar;
