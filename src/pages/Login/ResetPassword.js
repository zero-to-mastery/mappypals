import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios';

import Button from '../../components/UI/Button/Button';
import PasswordMessage from '../../components/ErrorMessages/PasswordMessage/PasswordMessage';
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
            passwordValidError: false,
            email: '',
            updated: false,
            isLoading: true,
            error: false,
            waitForRedirect: true,
            redirectToLogin: false
        };
    }

    async componentDidMount() {
        const url = 'http://localhost:3001/users/updatePasswordViaEmail';
        await axios
            .get(`${url}users/resetpassword`, {
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

        if (IsPasswordIdenticalVar && isPasswordValidVar) {
            const url =
                (process.env.URL || 'http://localhost:3001/') +
                'users/updatePasswordViaEmail';
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

    validatePassword = () => this.setState({ passwordValidError: true });

    render() {
        const {
            password,
            confirmPassword,
            error,
            isLoading,
            updated
        } = this.state;

        let passwordValidErrorVar = '';
        if (this.state.passwordValidError) {
            passwordValidErrorVar = (
                <PasswordMessage
                    password={this.state.password}
                    confirmPassword={this.state.confirmPassword}
                />
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
                        <img alt="loading-spinner" src={spinner} />
                    </div>
                </div>
            );
        } else {
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
                                value={password}
                                onChange={this.handleChange}
                                onBlur={this.validatePassword}
                                required
                            />
                        </label>
                        <label htmlFor="confirmPassword">
                            Confirm password
                            <input
                                type="password"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={this.handleChange}
                                onBlur={this.validatePassword}
                                required
                            />
                        </label>

                        {!updated ? passwordValidErrorVar : null}

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
