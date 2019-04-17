 import React, { Component } from "react";
import './Login.css';

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

		console.log(`${this.state.email} ${this.state.password}`);
		
		// Clear inputs.
		this.setState({email: ''});
		this.setState({password: ''});
		
	}

	render() {
		return (
			<div className="Login">
				<form onSubmit={this.handleSubmit}>
					<input type="email" placeholder="Enter Username" name = 'email' value={this.state.email} onChange={this.handleChange} required />
					<input type="password" placeholder="Enter Password" name = "password" value={this.state.password} onChange={this.handleChange} required />
					<button type="submit" disabled={!this.validateForm()}>Login</button>
				</form>

				<p className = 'u-text-center'>Don't have an account? <a href="/signup">SignUp</a></p>
			</div>
		);
	}
}

export default Login;