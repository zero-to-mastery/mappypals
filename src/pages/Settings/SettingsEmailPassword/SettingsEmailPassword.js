import React, { Component } from 'react';
import EmailForm from './EmailForm';
import PasswordForm from './PasswordForm';

class SettingsEmailPassword extends Component {
    // right now assuming that the response
    // will contain object with message about success or failure
    // of PUT/PATCH request
    state = {
        email: 'test_email', // needs to be derived from user token
        newPassword: '',
        confirmPassword: '',
        emailError: false,
        emailSuccess: false,
        passwordSuccess: false,
        passwordError: false
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onEmailSubmit = event => {
        event.preventDefault();
        // fetch call to server
        // on success setState({ emailSuccess })
        // on failure/error setState({ emailError })
    };

    onPasswordSubmit = event => {
        event.preventDefault();
        // fetch call to server
        // on success setState({ passwordSuccess })
        // on failure setState({ passwordError })
    };

    render() {
        const {
            email,
            emailError,
            emailSuccess,
            passwordError,
            passwordSuccess,
            newPassword,
            confirmPassword
        } = this.state;
        let passwordMatch = newPassword !== confirmPassword ? true : false;
        return (
            // TODO: REMOVE INLINE STYLING
            // #root has background image that remains on all pages
            // needs to be addressed or need to find work-around
            <div style={{ background: 'white' }}>
                <div>
                    <EmailForm
                        value={email}
                        onChange={this.onChange}
                        onSubmit={this.onEmailSubmit}
                        success={emailSuccess}
                        error={emailError}
                    />
                </div>
                <div>
                    <PasswordForm
                        onChange={this.onChange}
                        onSubmit={this.onPasswordSubmit}
                        success={passwordSuccess}
                        error={passwordError}
                        passwordMatch={passwordMatch}
                    />
                </div>
            </div>
        );
    }
}

export default SettingsEmailPassword;
