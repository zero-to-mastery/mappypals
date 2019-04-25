import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import localIcon from '../../pics/LogoInverted.svg'
import Map from "./Map";




const Home = (user) => {
	return(
		(false)?
		(
			<section id="not-logged-in">
				<div className='local-icon'>
					<img src={localIcon} alt='local icon' height="100px"/>
					<h2>MappyPals</h2>
				</div>
				<div>
					<h1>MappyPals</h1>
				</div>
				<div>
					<h3>Connect to your friends accross the world!</h3>
				 {/* <div>
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
				</div> */}
				</div>
				<div>
					<p>Do not have and account yet?<Link to="/signup"><span id="signup"> Sign up </span> </Link></p>
				</div>
			</section>
		):
		(

			<section>
				<Map />
			</section>
		)
	)
}

export default Home
