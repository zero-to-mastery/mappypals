import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Form, { PasswordReqs } from './Form.js';
import './Login.css';
import axios from 'axios'

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
			firstname:"",
			lastname:"",
			email: "",
			number: "",
			password: "",
			confirmPassword:"",
			isHidden: true,
	    };
	  }
	  
	toggleHidden () {
		const {isHidden}=this.state;
		this.setState({
			isHidden: !isHidden
		})
	}	

	validateForm() { 
		const {password, confirmPassword}= this.state;
		if(password!==confirmPassword) {
			alert("Passwords do not match!");
			return false;
		}
		return true;
	}

	handleChange = event => {
		this.setState({
	  		[event.target.name]: event.target.value
		});
	}

	handleSubmit = event => {
		event.preventDefault();
        if (this.validateForm()) {
			const url = 'http://localhost:3001/users/register'
			axios({
				url: url,
				method: 'POST',
				data: JSON.stringify(this.state),
				headers: {
					"Content-Type": "application/json"
				}
			}) //TODO: Not getting any response back to redirect
				.then(res => console.log(res))
				.catch(err => {
					console.error(err);
					console.log('Error logging in please try again');
				});
			
			console.log(JSON.stringify(this.state));

			// Clear inputs.
			this.setState({name: '', email: '', password: '', confirmPassword: ''});
		}
	}

	render() {
		const { checkLoginState } = this.props;
		return (
			<div className="Login">
				<Form onSubmit={this.handleSubmit}>
				  <div className="nameContainer">
					<label className="item1" htmlFor="firstname">
					Firstname
						<input 
							type="text" 
							id="firstname"
							className="item2"
							onChange={this.handleChange} required 
							/>
					</label>
					<label className="item3" htmlFor="lastname">
					Lastname
						<input 
							type="text" 
							id="lastname"
							className="item4"
							onChange={this.handleChange} required 
							/>
					</label>
				  </div>
					<label htmlFor="email">
					Email
						<input
							type="email"
							name="email"
							onChange={this.handleChange} required 
							/>
					</label>
					<label htmlFor="password">
					Password
						<input
							type="password"
							name="password"
							onClick={this.toggleHidden.bind(this)}
							onChange={this.handleChange} required
							onBlur={this.toggleHidden.bind(this)}
						/>
					</label>
					{!this.state.isHidden && <PasswordReqs />}
					<label htmlFor="confirmPassword">
					Please confirm password
						<input 
							type="password" 
							name = "confirmPassword" 
							onChange={this.handleChange} required 
						/>
					</label>
					<div className="btnContainer">
						<button type="submit" >Create Account</button>
					</div>
					<p className = 'u-text-center'>Or connect with: </p>
					<div className="btnContainer">
						<div className="fb-login-button" display="inline-block"
							data-size="large" 
							data-button-type="login_with" 
							data-auto-logout-link="false" 
							data-use-continue-as="false"
							onClick={checkLoginState}
							>
						</div>
					</div>
					<p className = 'u-text-center'>Already have an account? 
						<Link className="nav-item" to='/login'> Login </Link>
					</p>
				</Form>
			</div>
		);
	}
}

export default Login;