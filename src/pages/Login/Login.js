import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Login.css';
import Form from './Form.js';
import axios from 'axios'

class Login extends Component {
	 constructor(props) {
	    super(props);

	    this.state = {
	      email: "",
	      password: ""
	    };
  	}

	validateForm() {
		return this.state.email.length > 0 && this.state.password.length > 0;
	}

	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value})
	}

	// Submited values
	handleSubmit = event => {
		event.preventDefault();

		const url = 'http://localhost:3001/users/login'
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
					this.props.history.push('/');
				}
			})

		console.log(`${this.state.email} ${this.state.password}`);
		
		// Clear inputs.
		this.setState({email: ''});
		this.setState({password: ''});
		
	}

	render() {
		const { onSignUp } = this.props;
		return (
			<div className="Login">
				<Form onSubmit={this.handleSubmit}>
					<label htmlFor="email">
					  Email
						<input
						type="email"
						name="email"
						placeholder=""
						onChange={this.onEmailChange}
						/>
					</label>
					<label htmlFor="password">
					  Password
						<input
						type="password"
						name="password"
						placeholder=""
						onChange={this.onPasswordChange}
						/>
					</label>
					<div className="forgot-password">
						<a href="url">I forgot my password</a>
					</div>
					<div className="btnContainer">
					    <button type="submit" disabled={!this.validateForm()}>Login</button>
				    </div>

					<p className = 'u-text-center'>No account? 
						<Link className="nav-item" to='/signup'> <span onClick={onSignUp}> SignUp </span> </Link>
						&emsp;Or sign up with:
					</p>
				<div>
					<p>FACEBOOK LOGIN BUTTON</p>
				</div>
				</Form>
			</div>
		);
	}
}

export default Login;