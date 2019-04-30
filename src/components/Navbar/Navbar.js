
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
        <span className = "hamburger-icon" onClick = {this.toggleClass}>
            <span className = "hamburger-middle"></span>
            <span className = "hamburger-end"></span>
        </span>
        <div className="nav-wrapper">
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
            <p></p>
            <Link className="button login" to='/Login' onClick = {this.toggleClass} >Login</Link>
            <br/>
            <Link className='button ' to='/SignUp' onClick = {this.toggleClass} >Sign Up</Link>
            
            <p>Copyright - Team <br/> Members - ZTM Link <br/> etc</p>
          </div>
        </div>
      </header>
    </React.Fragment>
    )
  }
}

export default Navbar;
