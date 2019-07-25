import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form.js';
import { IsPasswordValid, IsPasswordIdentical } from '../../components/helper';
import ErrorMessage from '../../components/ErrorMessages/ErrorMessages';
import PasswordMessage from '../../components/ErrorMessages/PasswordMessage/PasswordMessage';
import './Login.css';
import ky from 'ky';
import Button from '../../components/UI/Button/Button';

class Signup extends Component {
    constructor(props) {
        super(props);
        window.FB.init({
            appId: process.env.REACT_APP_ID,
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
            passwordValidError: false,
            emailAlreadyExists: false
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
        const isPasswordValidVar = IsPasswordValid(password);
        const IsPasswordIdenticalVar = IsPasswordIdentical(
            password,
            confirmPassword
        );

        if (IsPasswordIdenticalVar && isPasswordValidVar) {
            (async () => {
                const url = process.env.URL || 'http://localhost:3001/';
                await ky
                    .post(`${url}users/register`, { json: this.state })
                    .json()
                    .then((res, err) => {
                        //if error msg is one that we catch
                        if (res.status === 401) {
                            this.setState({ error: String(err.statusText) });
                        } else if (res.status === 200) {
                            this.props.history.push('/login');
                        } else {
                            this.setState({
                                error: `Server Error: Unable to register. Please try again.`
                            });
                        }
                    })
                    .catch(err => alert(`Uncaught Error: ${err.statusText}`));
            })();
        }
    };
    validatePassword = () => this.setState({ passwordValidError: true });
    // check if email already exists
    // in the background, after user leaves the email input field
    checkEmail = () => {
        fetch('http://localhost:3001/users/validate-email', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: this.state.email })
        })
            .then(res => {
                if (res.status === 200) {
                    return this.setState({ emailAlreadyExists: false });
                } else {
                    return this.setState({ emailAlreadyExists: true });
                }
            })
            .catch(err => console.log);
    };

    render() {
        let PasswordValidError = '';
        if (this.state.passwordValidError) {
            PasswordValidError = (
                <PasswordMessage
                    password={this.state.password}
                    confirmPassword={this.state.confirmPassword}
                />
            );
        }
        //This message will come from the back end - along with any other possible errors, the catch
        //is displayed below the button.
        let EmailValidError = '';
        if (this.state.emailAlreadyExists) {
            EmailValidError = (
                <ErrorMessage content="This email is already in use." />
            );
        }

        const { checkLoginState, error, loading } = this.props;
        return (
            <div className="Login" style={{ minHeight: `87.8vh` }}>
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
                                onBlur={this.checkEmail}
                                required
                            />
                            {EmailValidError}
                        </label>
                        <label htmlFor="password">
                            Password
                            <input
                                type="password"
                                name="password"
                                aria-describedby="newPassword"
                                value={this.state.password}
                                onBlur={this.validatePassword}
                                onChange={this.handleChange}
                                required
                            />
                        </label>
                        <label htmlFor="confirmPassword">
                            Confirm password
                            <input
                                type="password"
                                name="confirmPassword"
                                value={this.state.checkPassword}
                                onBlur={this.validatePassword}
                                onChange={this.handleChange}
                                required
                            />
                        </label>
                        {PasswordValidError}
                        <div className="btnContainer">
                            <Button btnType="Submit" type="submit">
                                Create Account
                            </Button>
                        </div>
                        {loading && (
                            <div className="u-text-center">Loading...</div>
                        )}
                        {error && (
                            <div className="u-text-center">
                                <ErrorMessage content={error} />
                            </div>
                        )}
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

export default Signup;
