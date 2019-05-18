import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Login.css';
import Form from './Form.js';
import ky from 'ky';

class Login extends Component {
	constructor(props) {
		super(props);
		window.FB.init({
			appId      : '298824577401793',
			cookie     : true,
			xfbml      : true,
			version    : 'v3.2'
			});
			
		this.state = {
	    	email: "",
			password: "",
			message: "",
			redirect: false
	    };
	}

	confirmAccount() {
		(async () => {
			const token = window.location.pathname;
			const length = (token.match(new RegExp("/", "g")).length);

			if(length > 1) {
				const url = `http://localhost:3001/users${token}`;
				await ky.post(
					url,
					{ json: this.state }

				)
					.then(res => {
						if (res.status === 200) {
							this.setState({
								redirect: res.redirect
							})
							console.log("Account successfully confirmed");
						}
					})
			}
			else{
				console.log("Welcome back")
			}
			
		})();
		
	}

	validateForm() {
		return this.state.email.length > 0 && this.state.password.length > 5;
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	// Submited values
	handleSubmit = event => {
		event.preventDefault();	

		(async () => {
			const url = 'http://localhost:3001/users/login'

			await ky.post(
				url,
				{ json: this.state }

			)
				.then(res => {
					if (res.status === 200) {
						this.setState({
							redirect: res.redirect
						})
						console.log("Redirect user to home page, successfull login");
					}
				})
		})();
	
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
						onChange={this.handleChange} required
						/>
					</label>
					<label htmlFor="password">
					  Password
						<input
						type="password"
						name="password"
						placeholder=""
						onChange={this.handleChange} required
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
					<label htmlFor="fb-login-button" aria-label="Login with Facebook">
							<div className="fb-login-button" 
								data-size="large" 
								data-button-type="login_with" 
								data-auto-logout-link="false" 
								data-use-continue-as="false"
								onClick={checkLoginState}
								>
							</div>
						</label>
					</div>
				</Form>
			</div>
		);
	}

	componentDidMount() {
		this.confirmAccount();
	}

};

export default Login;