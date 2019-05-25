import React, { Component } from 'react';
import EmailForm from './EmailForm';
import PasswordForm from './PasswordForm';

class SettingsEmailPassword extends Component {
    state = {
        email: 'test_email', // needs to be derived from user token
        newPassword: '',
        confirmPassword: '',
        errorMessage: null, // recieved from backend upon error/failure
        successMessage: null // recieved from backed upon success
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
        const { email, successMessage, errorMessage } = this.state;
        return (
            <div style={{ background: 'white' }}>
                <div>
                    <EmailForm
                        value={email}
                        onChange={this.onChange}
                        onSubmit={this.onEmailSubmit}
                        successMessage={successMessage}
                        errorMessage={errorMessage}
                    />
                </div>
                <div>
                    <PasswordForm
                        onChange={this.onChange}
                        onSubmit={this.onPasswordSubmit}
                        successMessage={successMessage}
                        errorMessage={errorMessage}
                    />
                </div>
            </div>
        );
    }
}

export default SettingsEmailPassword;
