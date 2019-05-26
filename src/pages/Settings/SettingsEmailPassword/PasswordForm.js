import React, { Component } from 'react';
import SettingsBtn from '../SettingsBtn';
import { SuccessMessage, ErrorMessage } from '../Messages';

class PasswordForm extends Component {
    state = {
        password: '',
        newPassword: '',
        confirmPassword: '',
        success: null,
        error: null
    };

    onSubmit = event => {
        event.preventDefault();
        // if (newPassword !== confirmPassword)
        // setState({ passwordError })
        // else
        // fetch PUT/PATCH call w/ password && newPassword
        // normalize response
        // res.json()
        // setState({ passwordSuccess, passwordError: null }) --> could be better of with redux
        // .catch ( error => setState({ passwordError: error }))
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const {
            password,
            newPassword,
            confirmPassword,
            error,
            success
        } = this.state;
        const passwordMatch = newPassword === confirmPassword ? true : false;
        return (
            <form onSubmit={this.onSubmit}>
                <div>
                    <label>Current Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={this.onChange}
                        value={password}
                        required
                    />
                    {success ? <SuccessMessage message={success} /> : null}
                    {error ? <ErrorMessage message={error} /> : null}
                </div>
                <div>
                    <label>New Password</label>
                    <input
                        type="password"
                        name="newPassword"
                        onChange={this.onChange}
                        value={newPassword}
                        required
                    />
                </div>
                <div>
                    <label>Confirm New Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        onChange={this.onChange}
                        value={confirmPassword}
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
                    disabled={!passwordMatch}
                />
            </form>
        );
    }
}

export default PasswordForm;
