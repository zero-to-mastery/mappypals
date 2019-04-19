import React, { Component } from "react";
import './Login.css';
import axios from 'axios'

class Login extends Component {
	 constructor(props) {
	    super(props);

	    this.state = {
		name:"",
		email: "",
		number: "",
		password: "",
		confirmPassword:"",
	    };
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
		this.setState({name: '', email: '', number: '' , password: '', confirmPassword: ''});
	}

	render() {
		return (
			<div className="Login">
				<form onSubmit={this.handleSubmit}>
					<input type="text" id="name" name = "name" placeholder="Enter Name" value={this.state.name} onChange={this.handleChange} required />
					<input type="email" id="email" name = "email" placeholder="Enter Email" value={this.state.email} onChange={this.handleChange} required />
					<input type = 'number' id = 'number' name = 'number' placeholder = "Enter Number" value = {this.state.number} onChange = {this.handleChange} required />
					<input type="password" id="password" name = "password" placeholder="Enter Password" value={this.state.password} onChange={this.handleChange} required />
					<input type="password" id="confirmPassword" name = "confirmPassword" placeholder="Confirm Password" 
						value={this.state.confirmPassword}
						onChange={this.handleChange} required />
					<button type="submit" disabled={!this.validateForm()}>Login</button>
				</form>
			</div>
		);
	}
}

export default Login;