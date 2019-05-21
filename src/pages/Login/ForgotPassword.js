import React, { Component } from 'react';
import './Login.css';
import Form from './Form';
import './ForgotPassword.css';
import axios from 'axios';

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            message: '',
            link: ''
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        const url = 'http://localhost:3001/users/reset';
        axios({
            url: url,
            method: 'POST',
            data: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    //Write redirect logic here
                    this.setState({
                        message: res.data.message,
                        link: res.data.link
                    });
                    console.log(JSON.stringify(this.state.message));
                }
            })
            .catch(err => {
                console.error(err);
                console.log('Error logging in please try again');
            });

        console.log(JSON.stringify(this.state));

        // Clear inputs.
        this.setState({ email: '' });
    };

    render() {
        return (
            <div className="Login">
                <Form onSubmit={this.handleSubmit} className="max-width600">
                    <p className="text-center text-large">
                        Did you forget your password?
                    </p>
                    <p className="text-center text-medium">
                        Enter the email address from your account below and we
                        will send your password reset link.
                    </p>
                    <p className="text-center text-medium message">
                        {this.state.message}{' '}
                    </p>
                    <a className="message" href={this.state.link}>
                        {this.state.link}
                    </a>
                    <div>
                        <label htmlFor="Email">
                            Email
                            <input
                                type="email"
                                name="email"
                                placeholder=""
                                onChange={this.handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="btnContainer">
                        <button className="buttonReset" type="submit">
                            RESET PASSWORD
                        </button>
                    </div>
                </Form>
            </div>
        );
    }
}

export default ForgotPassword;
