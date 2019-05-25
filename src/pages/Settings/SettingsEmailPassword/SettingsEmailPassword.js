import React, { Component } from 'react';
import EmailForm from './EmailForm';
import PasswordForm from './PasswordForm';

class SettingsEmailPassword extends Component {
    state = {
        email: 'test_email', // needs to be derived from user token
        newPassword: '',
        confirmPassword: ''
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value})
    }

    render() {
        const { email } = this.state;
        return (
            <div>
                <div>
                    <EmailForm value={ email } onChange={ this.onChange }/>
                </div>
                <div>
                    <PasswordForm onChange={ this.onChange } />
                </div>
            </div>
        )
    }
}

export default SettingsEmailPassword