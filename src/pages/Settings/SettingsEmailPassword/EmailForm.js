import React, { Component } from 'react';
import { SuccessMessage, ErrorMessage } from '../Messages';
import './SettingsEmailPassword.css';

class EmailForm extends Component {
    state = {
        // if user sees current email in input box then
        // needs to be derived from web token or props
        email: 'testemail@gmail.com',
        success: null,
        error: null
    };

    onSubmit = event => {
        event.preventDefault();
        // fetch made here
    };

    onChange = event => {
        this.setState({ email: event.target.value });
    };

    render() {
        const { email, error, success } = this.state;
        return (
            <form onSubmit={this.onSubmit} className="form form--settings">
                <div className="form__section">
                    <label className="form__label form__label--settings">
                        Email
                    </label>
                    <input
                        className="form__input form__input--settings"
                        type="text"
                        onChange={this.onChange}
                        value={email}
                        name="email"
                        required
                    />
                    {error ? <ErrorMessage message={error} /> : null}
                    {success ? <SuccessMessage message={success} /> : null}
                </div>
                <div>
                    <button
                        type="submit"
                        className="btn btn--settings btn--purple"
                    >
                        Change Email
                    </button>
                </div>
            </form>
        );
    }
}

export default EmailForm;
