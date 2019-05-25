import React from 'react';
import SettingsBtn from '../SettingsBtn';
import { SuccessMessage, ErrorMessage } from '../Messages';

const PasswordForm = props => {
    const { onChange, success, error, passwordMatch } = props;
    return (
        <form>
            <div>
                <label>Current Password</label>
                <input type="password" name="password" required />
                {success ? <SuccessMessage message={success} /> : null}
                {error ? <ErrorMessage message={error} /> : null}
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
                {!passwordMatch ? (
                    <ErrorMessage message={'passwords must match'} />
                ) : null}
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
