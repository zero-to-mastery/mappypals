import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => (
	<section>
		<h1>Mappypals helps you keep track of your friend abroad.</h1>
		<div>
			<div  aria="login">
				<i className="fas fa-mouse-pointer user-pointer"></i>
				<i className="fas fa-user-circle"></i>
			</div>
			<div aria="add friends">
				<i className="fas fa-user-plus"></i>
			</div>
			<div aria="map your pals">
				<i className="fas fa-map-marked-alt"></i>
			</div>
		</div>
		<div>
			Do not have and account yet?<Link to="/signup"><span id="signup"> Sign up </span> </Link>
		</div>
	</section>
)

export default Home
