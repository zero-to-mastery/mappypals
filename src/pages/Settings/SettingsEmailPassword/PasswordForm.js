import React from 'react';
import SettingsBtn from '../SettingsBtn';

const PasswordForm = props => {
    const { onChange } = props;
    return (
        <form>
            <div>
                <label>Current Password</label>
                <input type="password" name="password" required />
            </div>
            <div>
                <label>New Password</label>
                <input
                    type="password"
                    name="newPassword"
                    onChange={onChange}
                    required
                />
            </div>
            <div>
                <label>Confirm New Password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    onChange={onChange}
                    required
                />
            </div>
            <SettingsBtn
                text={'change password'}
                containerClass={'SForm-btn--container'}
                buttonClass={'SForm-btn'}
            />
        </form>
    );
};

export default PasswordForm;
