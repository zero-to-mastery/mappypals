import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from "../../pics/mappyPals.svg";

const Navbar=({isUserLogged, onLogin})=>{
  return(
  <React.Fragment>
      <header>
          <div id="logo-wrapper">
          <Link to="/">
            {/*<p id="logo"> <span>Mappy&nbsp; als  &nbsp;</span> </p>
            <i className="fas fa-map-marker-alt pin"></i>*/}
            <img src={logo} alt="Mappy Pals"/>
          </Link>
          </div>
          <div id="nav-wrapper">
            <Link className="nav-item" to='/'> Home </Link>
            <Link className="nav-item" to='/about'> About </Link>
            <Link className="nav-item" to='/contact'> Contact us </Link>
            <Link className="nav-item" to='/login'> <p onClick={onLogin}> Login </p> </Link>
          </div>
      </header>
    </React.Fragment>
    ) 
}

export default Navbar