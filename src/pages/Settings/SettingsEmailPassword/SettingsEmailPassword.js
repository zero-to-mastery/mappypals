import React, { Component } from 'react';
import EmailForm from './EmailForm';

class SettingsEmailPassword extends Component {
    state = {
        email: 'test_email'
    }

    render() {
        const { email } = this.state;
        return (
            <div>
                <EmailForm value={ email } />
            </div>
        )
    }
}

export default SettingsEmailPassword