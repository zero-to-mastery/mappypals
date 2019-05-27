import React from 'react';
import EmailForm from './EmailForm';
import PasswordForm from './PasswordForm';

const SettingsEmailPassword = () => {
    return (
        // TODO: REMOVE INLINE STYLING
        // #root has background image that remains on all pages
        // needs to be addressed or need to find work-around
        <div className="container--white">
            <div className="settings-wrapper settings-wrapper--top-pad">
                <EmailForm />
            </div>
            <div className="settings-wrapper">
                <PasswordForm />
            </div>
        </div>
    );
};

export default SettingsEmailPassword;
