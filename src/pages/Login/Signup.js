import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Form, { PasswordReqs } from "./Form.js";
import './Login.css';

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

  	verifiedEmail(){
  		const {email}=this.state;
  		if(!email.includes("@") )return false
  		else if(!email.split("@")[1].includes(".")) return false
  		return true
  	}
	validateForm() {
		const {name, email, number, password, confirmPassword}= this.state;
		if(name==="" || email==="" || number === ""|| password==="" || confirmPassword==="") return false
		else if(password!==confirmPassword) return false
		else if(!this.verifiedEmail) return false
		return true;
	}

	handleChange = event => {
		this.setState({
	  		[event.target.name]: event.target.value
		});
	}

	handleSubmit = event => {
		event.preventDefault();
		
		console.log(`${this.state.name} ${this.state.email} ${this.state.number} ${this.state.password} ${this.state.confirmPassword}`)

		// Clear inputs.
		this.setState({name: '', email: '', number: '' , password: '', confirmPassword: ''});
	}

	render() {
		const { onSignUp, checkLoginState } = this.props;
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
						<button type="submit" disabled={!this.validateForm()} onClick={onSignUp}>Create Account</button>
					</div>
					<p className = 'u-text-center'>Or connect with: </p>
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
					<p className = 'u-text-center'>Already have an account? 
						<Link className="nav-item" to='/login'> Login </Link>
					</p>
				</Form>
			</div>
		);
	}
}

export default Login;