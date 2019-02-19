 import React, { Component } from "react";
import './Login.css';

class Login extends Component {
	 constructor(props) {
	    super(props);

	    this.state = {
		name:"",
		zip:"",
		email: "",
		password: "",
		confrimPassword:"",
	    };
  	}
  	verifiedEmail(){
  		const {email}=this.state;
  		if(!email.includes("@") )return false
  		else if(!email.split("@")[1].includes(".")) return false
  		return true
  	}
	validateForm() {
		const {name, zip, email, password, confrimPassword}=this.state;
		if(name==="" || zip==="" || email==="" || password==="" || confrimPassword==="") return false
		else if(password!==confrimPassword) return false
		else if(!this.verifiedEmail) return false
		return true;
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
					<input type="text" id="name" placeholder="Entrer Name" value={this.state.name} onChange={this.handleChange} required />
					<input type="text" id="zip" placeholder="Entrer Zip/Postcode" value={this.state.zip} onChange={this.handleChange} required />
					<input type="email" id="email" placeholder="Enter Username" value={this.state.email} onChange={this.handleChange} required />
					<input type="password" id="password" placeholder="Enter Password" value={this.state.password} onChange={this.handleChange} required />
					<input type="password" id="confirmPassword" placeholder="Confirm Password" value={this.state.confirmPassword} onChange={this.handleChange} required />
					<button type="submit" disabled={!this.validateForm()}>Login</button>
				</form>
			</div>
		);
	}
}

export default Login;