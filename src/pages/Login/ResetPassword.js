import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import axios from 'axios';

import Button from '../../components/UI/Button/Button';
import ErrorMessage from '../../components/ErrorMessages/ErrorMessages';
import { IsPasswordValid, IsPasswordIdentical } from '../../components/helper';
import Form from './Form';

import './Login.css';
import './ForgotPassword.styles.scss';
import './ResetPassword.styles.scss';

import spinner from './tail-spin.svg';

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            confirmPassword: '',
            passwordMatchError: false,
            PasswordValidError: false,
            email: '',
            updated: false,
            isLoading: true,
            error: false,
            waitForRedirect: true,
            redirectToLogin: false
        };
    }

    async componentDidMount() {
        const url = 'http://localhost:3001/users/resetpassword';
        await axios
            .get(url, {
                params: {
                    resetPasswordToken: this.props.match.params.token
                }
            })
            .then(response => {
                if (response.data.message === 'password reset link a-ok') {
                    this.setState({
                        email: response.data.email,
                        isLoading: false
                    });
                } else {
                    this.setState({
                        isLoading: false,
                        error: true
                    });
                }
            })
            .catch(error =>
                alert('Oops. Something went wrong. Please try again')
            );
    }

    componentDidUpdate() {
        if (this.state.updated === true) {
            this.first_delay = setTimeout(
                () => this.setState({ waitForRedirect: false }),
                3000
            );
        }
        if (this.state.waitForRedirect === false) {
            this.second_delay = setTimeout(
                () => this.setState({ redirectToLogin: true }),
                2000
            );
        }
        if (this.state.redirectToLogin === true) {
            this.props.history.push('/login');
        }
    }

    componentWillUnmount() {
        clearTimeout(this.first_delay);
        clearTimeout(this.second_delay);
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        const { email, password, confirmPassword } = this.state;
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

            const url = 'http://localhost:3001/users/updatePasswordViaEmail';
            axios
                .put(url, {
                    email,
                    password
                })
                .then(response => {
                    if (response.data.message === 'password-updated') {
                        this.setState({
                            updated: true,
                            error: false,
                            loading: false
                        });
                    }
                })
                .catch(error =>
                    alert('Oops. Something went wrong. Please try again')
                );

            this.setState({ password: '', confirmPassword: '' });
        }
    };

    displayPasswordMatchError = () =>
        this.setState({ passwordMatchError: true });
    hidePasswordMatchError = () => this.setState({ passwordMatchError: false });

    displayPasswordValidError = () =>
        this.setState({ PasswordValidError: true });
    hidePasswordValidError = () => this.setState({ PasswordValidError: false });

    render() {
        const {
            password,
            confirmPassword,
            error,
            isLoading,
            updated
        } = this.state;

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

        if (error) {
            return (
                <div className="Login error">
                    <div className="container">
                        <p className="headline">Oops. Something went wrong</p>
                        <p className="sub-headline">
                            Your reset password token has expired.
                        </p>
                        <div className="group">
                            <Link to="/forgotpassword" className="link">
                                {' '}
                                {'Try again?'}
                            </Link>
                            <span className="divider" />
                            <Link to="/" className="link">
                                {' '}
                                {'Home'}
                            </Link>
                        </div>
                    </div>
                </div>
            );
        } else if (isLoading || this.state.waitForRedirect === false) {
            return (
                <div className="Login loading">
                    <div className="container">
                        <img src={spinner} />
                    </div>
                </div>
            );
        } else {
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
                                value={password}
                                onChange={this.handleChange}
                                required
                            />
                        </label>
                        <label htmlFor="confirmPassword">
                            Confirm password {passwordMatchErrorVar}
                            <input
                                type="password"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={this.handleChange}
                                required
                            />
                        </label>
                        <div className="btnContainer">
                            <Button btnType="Submit" type="submit">
                                Reset Password
                            </Button>
                        </div>
                        {updated && (
                            <div className="success-alert">
                                Your password has been reset. Please try logging
                                in again.
                            </div>
                        )}
                    </Form>
                </div>
            );
        }
    }
}

export default ResetPassword;
