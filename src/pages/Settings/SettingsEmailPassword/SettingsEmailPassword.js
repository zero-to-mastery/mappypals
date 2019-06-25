import React, { Component } from 'react';
import EmailForm from './EmailForm';
import PasswordForm from './PasswordForm';
import SettingsNavbar from '../SettingsNavbar/SettingsNavbar';

class SettingsEmailPassword extends Component {
    constructor(props) {
        super(props);

        this.state = {
            EmailPasswordSelected: true
        };
    }
    render() {
        return (
            <div className="container--settings">
                <SettingsNavbar
                    EmailPasswordSelected={this.state.EmailPasswordSelected}
                />
                <div className="settings-wrapper settings-wrapper--top-pad">
                    <EmailForm />
                </div>
                <div className="settings-wrapper settings-wrapper--bottom-pad">
                    <PasswordForm />
                </div>
            </div>
        );
    }
}

export default SettingsEmailPassword;
