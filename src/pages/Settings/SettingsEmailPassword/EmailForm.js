import React, { Component } from 'react';
import SettingsBtn from '../SettingsBtn';
import { SuccessMessage, ErrorMessage } from '../Messages';

class EmailForm extends Component {
    state = {
        email: 'test@email.com', // needs to be derived from props or jsonToken
        success: false,
        error: false
    };

    onSubmit = event => {
        event.preventDefault();
        // if ( email is not valid)
        // then setState({ emailError: 'please enter valid email'})
        // if ( email === jsonToke email)
        // the setState({ emailError: 'email already up-to-date'})
        // else
        // fetch PUT/PATCH call w/ email
        // normalize response
        // res.json()
        // setState({ emailSuccess, emailError: null})
        // .catch( error => setState({emailError: error}))
    };

    onChange = event => {
        this.setState({ email: event.target.value });
    };

    render() {
        const { email, error, success } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <div>
                    <label>Change Email</label>
                    <input
                        type="text"
                        onChange={this.onChange}
                        value={email}
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
    }
}

export default EmailForm;
