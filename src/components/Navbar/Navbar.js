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
            <Link className="nav-item nonLogin" to='/'> HOME </Link>
            <Link className="nav-item nonLogin" to='/about'> ABOUT </Link>
            <Link className="nav-item nonLogin" to='/contact'> CONTACT </Link>
            <Link className="nav-item login" to='/login'> <p onClick={onLogin}> SIGN IN </p> </Link>
          </div>
      </header>
    </React.Fragment>
    ) 
}

export default Navbar