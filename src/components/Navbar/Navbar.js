/*
  Hamburger icon is disabled until I reach Tablet 769px min-width
  Tablet 768:
  1) Hamburger icon is enabled.
  2) menu is hidden.

  If I click on Hamburger icon menu appears slides from right side to left.

*/

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import NavLogo from "../../pics/Logo.svg";
import Team from "../../pics/Team.svg";
import About from "../../pics/AboutUs.svg";

 class Navbar extends Component {
   constructor(props){
     super(props);
     this.state = {
       navbarActive: false,
     };
   };
   toggleClass = () => {
     this.setState({
       navbarActive: !this.state.navbarActive
     })
   }
  render() {
    return (
    <React.Fragment>
      <header>
        <div className="nav-wrapper">
          <div className = "hamburger-icon" onClick = {this.toggleClass}>
            <div className = "hamburger-middle"></div>
            <div className = "hamburger-end"></div>
          </div>
          <div className = {this.state.navbarActive === true ? "navbar navbarToggle" : "navbar"}>
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
        </div>
      </header>
    </React.Fragment>
    )
  }
}

export default Navbar;


/*
const Navbar=({isUserLogged, onLogin})=>{
  return(
  <React.Fragment>
    
    <header>
      <div className="nav-wrapper">
        <div className = "hamburger-icon" onClick = {}>
          <div className = "hamburger-middle"></div>
          <div className = "hamburger-end"></div>
        </div>
        <div class = 'navbar'>
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
      </div>
    </header>
  </React.Fragment>
    ) 
}

export default Navbar
*/