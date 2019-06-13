import React, { Component } from 'react';
import './Login.css';
import Form from './Form';
import ky from 'ky';
import ErrorMessage from '../../components/ErrorMessages/ErrorMessages';
import { IsPasswordValid, IsPasswordIdentical } from '../../components/helper';

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            confirmPassword: '',
            passwordMatchError: false,
            PasswordValidError: false
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        const { password, confirmPassword } = this.state;
        event.preventDefault();

        let IsPasswordIdenticalVar = IsPasswordIdentical(
            password,
            confirmPassword
        );
        let isPasswordValidVar = IsPasswordValid(password);

        if (!IsPasswordIdenticalVar) {
            this.displayPasswordMatchError();
        } else if (!isPasswordValidVar) {
            this.hidePasswordMatchError();
            this.displayPasswordValidError();
        } else {
            this.hidePasswordMatchError();
            this.hidePasswordValidError();
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
        }

        this.setState({ password: '', confirmPassword: '' });
    };
    displayPasswordMatchError = () =>
        this.setState({ passwordMatchError: true });
    hidePasswordMatchError = () => this.setState({ passwordMatchError: false });

    displayPasswordValidError = () =>
        this.setState({ PasswordValidError: true });
    hidePasswordValidError = () => this.setState({ PasswordValidError: false });

    render() {
        let passwordMatchErrorVar = '';
        if (this.state.passwordMatchError) {
            passwordMatchErrorVar = (
                <ErrorMessage content=" Password doesn't match" />
            );
        }
        let passwordValidErrorVar = '';
        if (this.state.PasswordValidError) {
            passwordValidErrorVar = (
                <ErrorMessage content="At least 6 characters, a number or a symbol, at least 1 letter" />
            );
        }
        return (
            <div className="Login">
                <Form onSubmit={this.handleSubmit}>
                    <p className="heavy">Reset your password</p>
                    <label htmlFor="password">
                        Password {passwordValidErrorVar}
                        <input
                            type="password"
                            name="password"
                            aria-describedby="newPassword"
                            value={this.state.password}
                            onClick={this.toggleHidden}
                            onChange={this.handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="confirmPassword">
                        Confirm password {passwordMatchErrorVar}
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
