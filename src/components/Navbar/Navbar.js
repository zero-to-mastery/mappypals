/*
  Hamburger icon is disabled until I reach Tablet 769px min-width
  Tablet 768:
  1) Hamburger icon is enabled.
  2) menu is hidden.

  If I click on Hamburger icon menu appears slides from right side to left.

*/

import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'
import NavLogo from "../../pics/Logo.svg";
import Team from "../../pics/Team.svg";
import About from "../../pics/AboutUs.svg";


const Navbar=({isUserLogged, onLogin})=>{
  return(
  <React.Fragment>
    
    <header>
      <div className="nav-wrapper">
      <div className = "hamburger-icon hamburger-display">
        <div className = "hamburger-middle"></div>
        <div className = "hamburger-end"></div>
      </div>
          <div className='nav-item'>
              <img src={NavLogo} alt="Logo" />
              <div className = "mainTitle">MappyPals</div>
          </div>
          <div className='nav-item' >
                <img src={Team} alt="Team"  />
                <div className = "title">Team</div>
          </div>
          <div className='nav-item'>
                <img src={About} alt="About"  />
                <div className = "title">About</div>
          </div>
          <div className='nav-item'>
                <div className='login'>
                  <Link className = "button" to='/Login' >Login</Link>
                </div>
                <div className='signup'>
                  <Link className='button' to='/SignUp' >Sign Up</Link>
                </div>
          </div>
          <p>Copyright - Team <br/> Members - ZTM Link <br/> etc</p>
      </div>
    </header>
  </React.Fragment>
    ) 
}

export default Navbar