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
	  		[event.target.id]: event.target.value
		});
	}

	handleSubmit = event => {
		event.preventDefault();
	}

	render() {
		return (
			<div className="Login">
				<form onSubmit={this.handleSubmit}>
					<input type="email" placeholder="Enter Username" value={this.state.email} onChange={this.handleChange} required />
					<input type="password" placeholder="Enter Password" value={this.state.password} onChange={this.handleChange} required />
					<button type="submit" disabled={!this.validateForm()}>Login</button>
				</form>
			</div>
		);
	}
}

export default Login;