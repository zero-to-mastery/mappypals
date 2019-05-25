import React, { Component } from 'react';
import EmailForm from './EmailForm';
import PasswordForm from './PasswordForm';

class SettingsEmailPassword extends Component {
    state = {
        email: 'test_email', // needs to be derived from user token
        newPassword: '',
        confirmPassword: '',
        emailError: false,
        emailSuccess: false,
        passwordSuccess: false,
        passwordError: true
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onEmailSubmit = event => {
        event.preventDefault();
    };

    onPasswordSubmit = event => {
        event.preventDefault();
    };

    render() {
        const {
            email,
            emailError,
            emailSuccess,
            passwordError,
            passwordSuccess
        } = this.state;
        let emailErrorMessage = emailError ? emailError.message : null;
        let passwordErrorMessage = passwordError ? passwordError.message : null;
        let emailSuccessMessage = emailSuccess ? emailSuccess.message : null;
        let passwordSuccessMessage = passwordSuccess
            ? passwordSuccess.message
            : null;
        return (
            // TODO: REMOVE INLINE STYLINGE
            <div style={{ background: 'white' }}>
                <div>
                    <EmailForm
                        value={email}
                        onChange={this.onChange}
                        onSubmit={this.onEmailSubmit}
                        successMessage={emailSuccessMessage}
                        errorMessage={emailErrorMessage}
                    />
                </div>
                <div>
                    <PasswordForm
                        onChange={this.onChange}
                        onSubmit={this.onPasswordSubmit}
                        successMessage={passwordSuccessMessage}
                        errorMessage={passwordErrorMessage}
                    />
                </div>
            </div>
        );
    }
}

export default SettingsEmailPassword;
