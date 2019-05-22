import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form, { PasswordReqs } from './Form.js';
import './Login.css';
import ky from 'ky';

class Login extends Component {
    constructor(props) {
        super(props);
        window.FB.init({
            appId: '298824577401793',
            cookie: true,
            xfbml: true,
            version: 'v3.2'
        });

        this.state = {
            name: '',
            lastname: '',
            email: '',
            number: '',
            password: '',
            confirmPassword: '',
            passwordMatch: true,
            isHidden: true
        };
    }

    toggleHidden = () => {
        const { isHidden } = this.state;
        this.setState({
            isHidden: !isHidden
        });
    };

    passwordLengthError = () => {
        if (this.state.password.length < 6) {
            alert('Password is not at least 6 characters');
        }
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        const { password, confirmPassword } = this.state;
        event.preventDefault();
        if (password !== confirmPassword) {
            this.setState({ passwordMatch: false });
            return;
        }
        (async () => {
            const url = 'http://localhost:3001/users/register';
            await ky.post(url, { json: this.state }).then(res => {
                if (res.status === 200) {
                    console.log('Redirect user to home page, successful login');
                }
            });
        })();

        // Clear inputs.
        this.setState({
            name: '',
            email: '',
            number: '',
            password: '',
            confirmPassword: ''
        });
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
        const { checkLoginState } = this.props;
        return (
            <div className="Login">
                <Form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <div className="nameContainer">
                            <label className="item1" htmlFor="firstname">
                                Firstname
                                <input
                                    type="text"
                                    id="firstname"
                                    className="item2"
                                    name="name"
                                    onChange={this.handleChange}
                                    required
                                />
                            </label>
                            <label className="item3" htmlFor="lastname">
                                Lastname
                                <input
                                    type="text"
                                    id="lastname"
                                    className="item4"
                                    name="lastname"
                                    onChange={this.handleChange}
                                    required
                                />
                            </label>
                        </div>
                        <label htmlFor="email">
                            Email
                            <input
                                type="email"
                                name="email"
                                onChange={this.handleChange}
                                required
                            />
                        </label>
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
                            <button type="submit">Create Account</button>
                        </div>
                    </fieldset>
                    <p className="u-text-center">Or connect with: </p>
                    <div className="btnContainer">
                        <label
                            htmlFor="fb-login-button"
                            aria-label="Login with Facebook"
                        >
                            <div
                                className="fb-login-button"
                                display="inline-block"
                                data-size="large"
                                data-button-type="login_with"
                                data-auto-logout-link="false"
                                data-use-continue-as="false"
                                onClick={checkLoginState}
                            />
                        </label>
                    </div>
                    <p className="u-text-center">
                        Already have an account?
                        <Link className="nav-item" to="/login">
                            {' '}
                            Login{' '}
                        </Link>
                    </p>
                </Form>
            </div>
        );
    }
}

export default Login;
