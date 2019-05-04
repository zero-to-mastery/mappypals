import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from "../../pics/mappyPals.svg";

const Navbar=({isUserLogged, onLogin})=>{
  return(
  <React.Fragment>
      <header>
        <Link to="/">
          <div id="logo_title">
            <span id="logo-wrapper">            
              {/*<p id="logo"> <span>Mappy&nbsp; als  &nbsp;</span> </p>
              <i className="fas fa-map-marker-alt pin"></i>*/}
              <img src={logo} alt="Mappy Pals"/>
            </span>
            <span id="title">
              <span>mappypals</span>
            </span>
          </div>
        </Link>
          <div id="nav-wrapper">
              <div id="nonLogin">
                <Link className="nav-item " to='/'> <div className="underline-hover">HOME</div> </Link>
                <Link className="nav-item " to='/about'> <div className="underline-hover">ABOUT</div> </Link>
                <Link className="nav-item " to='/contact'> <div className="underline-hover">CONTACT</div> </Link>
              </div>
            <Link className="nav-item login" to='/login'> <p onClick={onLogin}> SIGN IN </p> </Link>
          </div>
      </header>
    </React.Fragment>
    ) 
}

export default Navbar