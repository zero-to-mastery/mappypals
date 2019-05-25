import React from 'react';
import SettingsBtn from '../SettingsBtn';

const EmailForm = props => {
    const { onSubmit, onChange, value, successMessage, errorMessage } = props;
    let success = successMessage ? <div>{successMessage}</div> : null;
    let error = errorMessage ? <div>{errorMessage}</div> : null;

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Change Email</label>
                <input
                    type="text"
                    onChange={onChange}
                    value={value}
                    name="email"
                    required
                />
                {success}
                {error}
            </div>
            <SettingsBtn
                text={'change email'}
                containerClass={'SForm-btn--container'}
                buttonClass={'SForm-btn'}
            />
        </form>
    );
};

export default EmailForm;
