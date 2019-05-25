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
        // if ( email is not valid)
        // then setState({ emailError: 'please enter valid email'})
        // if ( email === jsonToke email)
        // the setState({ emailError: 'email already up-to-date'})
        // else
        // fetch PUT/PATCH call w/ email
        // normalize response
        // res.json()
        // setState({ emailSuccess})
        // .catch( error => setState({emailError: error}))
    };

    onPasswordSubmit = event => {
        event.preventDefault();
        // if (newPassword !== confirmPassword)
        // then passwordMatch = false && button disabled
        // setState({ passwordError })
        // else
        // fetch PUT/PATCH call w/ password && newPassword
        // normalize response
        // res.json()
        // setState({ passwordSuccess })
        // .catch ( error => setState({ passwordError: error }))
    };

    // need email validator
    // need password validators

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
        let passwordMatch =
            newPassword === confirmPassword && newPassword.length >= 1
                ? true
                : false;
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
