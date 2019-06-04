import React, { Component } from 'react';

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
        // fetch made here
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { password, newPassword, confirmPassword } = this.state;

        const passwordMatch = newPassword === confirmPassword ? true : false;

        return (
            <form onSubmit={this.onSubmit} className="form form--settings">
                <div className="form__section">
                    <label className="form__label form__label--settings">
                        Current Password
                    </label>
                    <input
                        className="form__input form__input--settings"
                        type="password"
                        name="password"
                        onChange={this.onChange}
                        value={password}
                        required
                    />
                </div>
                <div className="form__section">
                    <label className="form__label form__label--settings">
                        New Password
                    </label>
                    <input
                        className="form__input form__input--settings"
                        type="password"
                        name="newPassword"
                        onChange={this.onChange}
                        value={newPassword}
                        required
                    />
                </div>
                <div className="form__section">
                    <label className="form__label form__label--settings">
                        Confirm New Password
                    </label>
                    <input
                        className="form__input form__input--settings"
                        type="password"
                        name="confirmPassword"
                        onChange={this.onChange}
                        value={confirmPassword}
                        required
                    />
                </div>
                <div>
                    <button
                        className="btn btn--settings btn--purple"
                        type="submit"
                        disabled={!passwordMatch || newPassword.length < 1}
                    >
                        Change Password
                    </button>
                </div>
            </form>
        );
    }
}

export default PasswordForm;
