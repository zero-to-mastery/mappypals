import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main'
import Layout  from './components/Layout'



class App extends Component {
	constructor(){
		super()
		this.state=({
			isUserLogged: false,
			user: {},
			isFBMounted: false,
		})

	}
	loadFB=()=>{
	  window.fbAsyncInit = function() {
	    window.FB.init({
	      appId      : '298824577401793',
	      cookie     : true,
	      xfbml      : true,
	      version    : 'v3.2'
	    });
	      
	    window.FB.AppEvents.logPageView();   
	      
	  };

	  (function(d, s, id){
	     var js, fjs = d.getElementsByTagName(s)[0];
	     if (d.getElementById(id)) {return;}
	     js = d.createElement(s); js.id = id;
	     js.src = "https://connect.facebook.net/en_US/sdk.js";
	     fjs.parentNode.insertBefore(js, fjs);
	   }(document, 'script', 'facebook-jssdk'));
	}
	componentWillMount(){
		this.loadFB();
	}
	getFBLoginStatus=()=>{
		window.FB.getLoginStatus(response=> {
			if(response.status==="connected"){
				this.setState({isUserLogged: true, user: response.authResponse.userID})
			}
		});
	}
	render() {
		return (
				<React.Fragment>
					<Navbar user={this.state.isUserLogged} onLogin={this.getFBLoginStatus}/>
					<Layout>
					<Main />
					</Layout>	
				</React.Fragment>
		);
	}
}

export default App;