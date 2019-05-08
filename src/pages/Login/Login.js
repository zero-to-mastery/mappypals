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
	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
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
				if (res.status === 200 || res.data.redirect) {
					//Write redirect logic here
					console.log("Redirect user to main page");
				}
			})
			.catch(err => {
				console.error(err);
				console.log('Error logging in please try again');
			});

		
		// Clear inputs.
		this.setState({email: ''});
		this.setState({password: ''});
		
	}
	render() {
		const { checkLoginState } = this.props;
		return (
			<div className="Login">
				<Form onSubmit={this.handleSubmit}>
					<label htmlFor="email">
					  Email
						<input
						type="email"
						name="email"
						placeholder=""
						onChange={this.handleChange}
						/>
					</label>
					<label htmlFor="password">
					  Password
						<input
						type="password"
						name="password"
						placeholder=""
						onChange={this.handleChange}
						/>
					</label>
					<div className="forgot-password">
						<Link to = '/forgotpassword'>I forgot my password</Link>
					</div>
					<div className="btnContainer">
					    <button type="submit" disabled={!this.validateForm()}>Login</button>
				  </div>
					<p className = 'u-text-center'>No account? 
						<Link className="nav-item" to='/signup'> SignUp</Link>
						&ensp;Or connect via:
					</p>
					<div className="btnContainer">
							<div className="fb-login-button" 
								data-size="large" 
								data-button-type="login_with" 
								data-auto-logout-link="false" 
								data-use-continue-as="false"
								onClick={checkLoginState}
								>
							</div>
					</div>
				</Form>
			</div>
		);
	}
}

export default Login;