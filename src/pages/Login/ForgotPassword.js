import React, { Component } from 'react';
import axios from 'axios';

import Form from './Form';
import Button from '../../components/UI/Button/Button';

import './Login.css';
import './ForgotPassword.styles.scss';

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            message: '',
            hasEmailSent: false
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        const url = process.env.URL || 'https://mappypals-api.herokuapp.com/';
        axios({
            url: `${url}users/reset`,
            method: 'POST',
            data: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    this.setState({
                        message:
                            'We have emailed your password reset link. Check your inbox',
                        hasEmailSent: true
                    });
                }
            })
            .catch(err => {
                alert(
                    'Ooops. Something went wrong. Please check if your email is correct'
                );
            });

        console.log(JSON.stringify(this.state));

        // Clear inputs.
        this.setState({ email: '' });
    };

    render() {
        const { email, message, hasEmailSent } = this.state;

        return (
            <div className="Login">
                <Form onSubmit={this.handleSubmit} className="container">
                    <p className="headline">Did you forget your password?</p>
                    <p className="sub-headline">
                        Enter the email address from your account below and we
                        will send your password reset link.
                    </p>
                    <div className="group">
                        <label className="form-input-label" htmlFor="Email">
                            Email
                        </label>
                        <input
                            className="form-input"
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Your email address"
                            onChange={this.handleChange}
                            required
                        />
                    </div>

                    <Button btnType="ForgotPassword" type="submit">
                        RESET PASSWORD
                    </Button>
                    {hasEmailSent && (
                        <div className="success-alert">{message}</div>
                    )}
                </Form>
            </div>
        );
    }
}

export default ForgotPassword;
