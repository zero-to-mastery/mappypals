import React from 'react';
import EmailForm from './EmailForm';
import PasswordForm from './PasswordForm';
import SettingsNavbar from '../SettingsNavbar/SettingsNavbar';

const SettingsEmailPassword = () => {
    return (
        <div className="container--settings">
            <SettingsNavbar />
            <div className="settings-wrapper settings-wrapper--top-pad">
                <EmailForm />
            </div>
            <div className="settings-wrapper settings-wrapper--bottom-pad">
                <PasswordForm />
            </div>
        </div>
    );
};

export default SettingsEmailPassword;
