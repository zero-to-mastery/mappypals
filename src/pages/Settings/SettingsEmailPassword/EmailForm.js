import React from 'react';
import SettingsBtn from '../SettingsBtn'

const EmailForm = props => {
    const { onSubmit, onChange, value } = props;
    return (
        <form onSubmit={ onSubmit }>
            <div>
                <input type="text" 
                onChange={onChange}
                value={value}
                name="email"
                required 
                />
            </div>
            <SettingsBtn text={'change email'} containerClass={'SForm-btn--container'} buttonClass={'SForm-btn'} />
        </form>
    )
}

export default EmailForm;