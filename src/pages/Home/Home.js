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
					<img className='icon' src={localIcon} alt='local icon' height="100px"/>
					<p>MappyPals</p>
				</div>
				<div className='title'>
					<p>MappyPals</p>
				</div>
				<div className='intro'>
					<p>Connect to your friends <br/> across the world!</p>
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
				<div className='signup-btn'>
					<Link to="/signup"><button className="signup"> Get Started </button> </Link>
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
