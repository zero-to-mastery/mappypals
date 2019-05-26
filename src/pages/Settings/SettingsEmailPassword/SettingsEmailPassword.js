import React from 'react';
import EmailForm from './EmailForm';
import PasswordForm from './PasswordForm';

const SettingsEmailPassword = () => {
    return (
        // TODO: REMOVE INLINE STYLING
        // #root has background image that remains on all pages
        // needs to be addressed or need to find work-around
        <div style={{ background: 'white' }}>
            <div>
                <EmailForm />
            </div>
            <div>
                <PasswordForm />
            </div>
        </div>
    );
};

export default SettingsEmailPassword;
