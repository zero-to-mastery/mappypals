
import React, { Component } from 'react'
import './Login.css';
import Form from './Form';
import './ResetPassword.css';
import ky from 'ky';


class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            checkPassword: "",
            passwordMatch: false,
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.password !== this.state.checkPassword) {
            this.setState({ passwordMatch: true });
        } else {
            this.setState({ passwordMatch: false });
        }

        (async () => {
            const token = window.location.pathname;
                const url = `http://localhost:3001/users${token}`;
                await ky.post(
                    url,
                    { json: this.state }

                )
                    .then(res => {
                        if (res.status === 200) {
                            console.log("Redirect user to home page, successfull login");
                        }
                    })
            }
        )();

        this.setState({ password: '', checkPassword: '' })

    }

    render() {

        let passwordMatchError = ''
        if (this.state.passwordMatch) {
            passwordMatchError = <span className="errorMessage">Password doesn't match</span>;
        }
        return (
            <div className="Login">
                <Form onSubmit={this.handleSubmit}>
                    <h5 className="title">Reset your password</h5>
                    <label htmlFor="password">
                        Password
                        <input
                            type="password"
                            name="password"
                            onChange={this.handleChange} required
                            value={this.state.password}
                        />
                    </label>
                    <label htmlFor="checkPassword">
                        Check Password {passwordMatchError}
                        <input
                            type="password"
                            name="checkPassword"
                            onChange={this.handleChange} required
                            value={this.state.checkPassword}
                        />
                    </label>
                    <div className="btnContainer">
                        <button type="submit">Reset Password</button>
                    </div>
                </Form>
            </div>
        )
    }
}
export default ResetPassword;
