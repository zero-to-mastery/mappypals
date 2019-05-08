/*
    Password doesn't match hidden is false.
    submits if password does not matches it became true
*/
import React, { Component } from 'react'
import Form from './Form';
import './ResetPassword.css';
import axios from 'axios'


class ResetPasswordEmail extends Component {
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

        const token = window.location.pathname;
        console.log(window.location.pathname);
        const url = `http://localhost:3001/users${token}`;

        axios({
            url: url,
            method: 'POST',
            data: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            if (res.status === 200) {
                console.log("Successfully changed password");
                this.setState({
                  message: res.data.message
                })
                console.log(JSON.stringify(this.state.message));
            }
        })
        .catch(err => {
            console.error(err);
            console.log('Error logging in please try again');
        });


        // Clear inputs. Inputs won't clear for some reason.
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
export default ResetPasswordEmail;