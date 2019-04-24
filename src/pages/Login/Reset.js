import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Form, { Msg } from './Form.js';
import './Login.css';
import axios from 'axios';

class Reset extends Component {
    constructor(props) {
    super(props);

    this.state = {
        email: "",
        isHidden: true,
    };
  }
  
toggleHidden () {
    const {isHidden}=this.state;
    this.setState({
        isHidden: !isHidden
    });
}	  
    // Submitted email
	handleSubmit = event => {
        const { toggleHidden } = this.state;
		event.preventDefault();
        this.toggleHidden();
        //axios
        // axios({
		// 	...
		// })

		// .then(res => {
        //     if(res.status === 200) {
        //         console.log("Redirect user to main page");
                   // Clear inputs.
		            //this.setState({email: ''});
        //     }
        // })
        // .catch(err => {
        //     console.error(err);
        //     console.log('Email not found: Please check entry or Register');
        //       this.toggleHidden();
        // });
	}
    render() {
        return (
            <div className="Login">
                <Form onSubmit={this.handleSubmit}>
                    <div className="text-center-wrap">
                        <div className="heavy">
                            <p>Did you forget your password?</p>
                        </div>
                        <div className="light">
                            <p>Enter your mappypals account address, and we'll send you a password reset link.</p>
                        </div>
                    </div>
                    {!this.state.isHidden && <Msg />}
                    <label htmlFor="email" className="heavy">
                        Email
                        <input
                        type="email"
                        name="email"
						onChange={this.handleChange} required
                        />
                    </label>
                    <div className="btnContainer">
                        <button type="submit">Reset Password</button>
					</div>
                    <p className = 'u-text-center'> 
						<Link className="nav-item" to='/login'> Back to Login </Link>
					</p>
                </Form>
            </div>
        );
    }
}
export default Reset; 