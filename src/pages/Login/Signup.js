import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form.js';
import { IsPasswordValid, IsPasswordIdentical } from '../../components/helper';
import PasswordMessage from '../../components/ErrorMessages/PasswordMessage/PasswordMessage';
import './Login.css';
import ky from 'ky';
import Button from '../../components/UI/Button/Button';

class Signup extends Component {
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
            passwordValidError: false
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
                const url = 'http://localhost:3001/users/register';
                await ky.post(url, { json: this.state }).then(res => {
                    console.log(res);
                    if (res.status === 200) {
                        this.props.history.push('/login');
                    }
                });
            })();
        }
    };
    validatePassword = () => this.setState({ passwordValidError: true });

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
