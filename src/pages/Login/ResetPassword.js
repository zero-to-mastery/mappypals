import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form.js';
import './Login.css';
import axios from 'axios';

class ResetPassword extends Component {
    constructor(props) {
        super(props);  
    }

  // Submitted email
    handleSubmit = event => {
        event.preventDefault();
        const url = 'http://localhost:3001/users/reset'
        axios({
            url: url,
            method: 'POST',
            data: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            if (res.status === 200 || res.data.redirect) {
                //Write redirect logic here
                console.log("Redirect user to main page");
            }
        })
        .catch(err => {
            console.error(err);
            console.log('Please check entry and try again, or go back to Login to sign up');
        });
        
        // Clear inputs.
        this.setState({email: ''});
    }

  render() {
    return (
        <div className="Login">
        <Form onSubmit={this.handleSubmit}>
            <div className="text-center-wrap">
                <div className="heavy">
                    <p>Did you forget your password?</p>
                </div>
                <div className="light">
                    <p>Enter your mappypals email address, we'll send you a password reset link.</p>
                </div>
            </div>
            <label htmlFor="email" className="heavy">
                Email
                <input
                type="email"
                name="email"
                onChange={this.handleChange} required
                />
            </label>
            <div className="btnContainer">
                <button type="submit">Reset Password</button>
            </div>
            <p className = 'u-text-center'> 
                <Link className="nav-item" to='/login'> Back to Login </Link>
            </p>
        </Form>
    </div>
    )
  }
}

export default ResetPassword;

