

import React, { Component } from 'react'
import './Login.css';
import Form from './Form';
import './ResetPassword.css';

 class ResetPassword extends Component {
     
  render() {
    return (
    <div className = "Login">
        <Form onSubmit = {this.handleSubmit} className = "max-width600">
            <p className = "text-center text-large">Did you forget your password?</p>
            <p className = "text-center text-medium">Enter the email address from your account below and 
                we will send your password reset link.
            </p>
            <div>
                <label htmlFor="Email">Email
                    <input 
                        type="email" 
                        name = "email"
                        placeholder = ""
                        onChange={this.handleChange} required 
                    />
                </label>
            </div>
            <div className="btnContainer">
                <button className = "buttonReset" type="submit" >RESET PASSWORD</button>
            </div>
        </Form>
    </div>
    )
  }
}

export default ResetPassword;

