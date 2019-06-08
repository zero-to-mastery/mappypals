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
        const { newPassword, confirmPassword } = this.state;
        if (newPassword !== confirmPassword) {
            this.setState({
                error: 'Passwords must match'
            });
        }
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
        let errorMessage;
        let successMessage;
        if (error) {
            errorMessage = (
                <span className="form--msg form--msg__err" aria-live="polite">
                    {error}
                </span>
            );
        }
        if (success) {
            successMessage = (
                <span
                    className="form--msg form--msg__success"
                    aria-live="polite"
                >
                    {success}
                </span>
            );
        }
        return (
            <form onSubmit={this.onSubmit} className="form form--settings">
                <div className="form__section">
                    <label className="form__label form__label--settings">
                        Current Password
                        {errorMessage}
                        {successMessage}
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
                        Confirm New Passw ord
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
