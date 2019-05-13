
/*
    Password doesn't match hidden is false.

    submits if password does not matches it became true
*/
import React, { Component } from 'react'
import Form from './Form';
import './ResetPasswordEmail.css';

class ResetPassword extends Component {
    constructor(props){
        super(props);
        this.state = {
            password: "",
            checkPassword: "",
            passwordMatch: false,
        };
    }

    handleSubmit = event => {
        event.preventDefault();
       
        if(this.state.password !== this.state.checkPassword){
            this.setState({passwordMatch: true});
        }else{
            this.setState({passwordMatch: false});
        }

       // Clear inputs. Inputs won't clear for some reason.
       	this.setState({password: ""})
		this.setState({checkPassword: ""});
        console.log(this.state.password);
        console.log(this.state.checkPassword);
 
      
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

  render() {

      let passwordMatchError = ''
      if(this.state.passwordMatch){
          passwordMatchError = <span className = "errorMessage" aria-live="polite">Password doesn't match</span>;
      }
    return (
    <div className="Login">
        <Form onSubmit={this.handleSubmit}>
        <h5 className = "title">Reset your password</h5>
            <label  htmlFor="password">
            Password
                <input 
                    type="password" 
                    name = "password"
                    onChange={this.handleChange} required 
                    value = {this.state.password}
                    />
            </label>
            <label htmlFor="checkPassword">
            Check Password {passwordMatchError}
                <input 
                    type="password" 
                    name = "checkPassword"
                    onChange={this.handleChange} required 
                    value = {this.state.checkPassword}
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


