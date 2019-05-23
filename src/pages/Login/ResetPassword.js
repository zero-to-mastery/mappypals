import React, { Component } from 'react';
import './Login.css';
import Form, { PasswordReqs } from './Form';
import ky from 'ky';

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            confirmPassword: '',
            passwordMatch: true
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    passwordLengthError = () => {
        if (this.state.password.length < 6) {
            alert('Password is not at least 6 characters');
        }
    };

    handleSubmit = event => {
        const { password, confirmPassword } = this.state;
        event.preventDefault();

        if (password !== confirmPassword) {
            this.setState({ passwordMatch: false });
            return;
        }

        (async () => {
            const token = window.location.pathname;
            const url = `http://localhost:3001/users${token}`;
            await ky.post(url, { json: this.state }).then(res => {
                if (res.status === 200) {
                    console.log(
                        'Redirect user to home page, successfull login'
                    );
                }
            });
        })();

        this.setState({ password: '', confirmPassword: '' });
    };

    render() {
        let passwordMatchError = '';
        if (!this.state.passwordMatch) {
            passwordMatchError = (
                <span className="errorMessage" aria-live="polite">
                    Password doesn't match
                </span>
            );
        }
        return (
            <div className="Login">
                <Form onSubmit={this.handleSubmit}>
                    <p className="heavy">Reset your password</p>
                    <label htmlFor="password">
                        Password
                        <input
                            type="password"
                            name="password"
                            aria-describedby="newPassword"
                            value={this.state.password}
                            onClick={this.toggleHidden}
                            onChange={this.handleChange}
                            required
                            onBlur={this.passwordLengthError}
                        />
                    </label>
                    {!this.state.isHidden && <PasswordReqs />}
                    <label htmlFor="confirmPassword">
                        Please confirm password {passwordMatchError}
                        <input
                            type="password"
                            name="confirmPassword"
                            value={this.state.checkPassword}
                            onChange={this.handleChange}
                            required
                        />
                    </label>
                    <div className="btnContainer">
                        <button type="submit">Reset Password</button>
                    </div>
                </Form>
            </div>
        );
    }
}
export default ResetPassword;
