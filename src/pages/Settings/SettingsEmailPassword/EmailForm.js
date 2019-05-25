import React from 'react';
import SettingsBtn from '../SettingsBtn';
import { SuccessMessage, ErrorMessage } from '../Messages';

const EmailForm = props => {
    const { onSubmit, onChange, value, error, success } = props;
    // w/out message components structure will be similar to below code
    // for displaying the messages

    // let success = successMessage ? <div>{successMessage}</div> : null;
    // let error = errorMessage ? <div>{errorMessage}</div> : null;

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
                {error ? <ErrorMessage message={error} /> : null}
                {success ? <SuccessMessage message={success} /> : null}
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
