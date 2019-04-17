import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'
import navLogo from "../../pics/Logo.svg";
import team from "../../pics/Team.svg";
import about from "../../pics/AboutUs.svg";
const Navbar=({isUserLogged, onLogin})=>{
  return(
  <React.Fragment>
      <header>
          
         
          <div id="nav-wrapper">
            <div className='nav-item'style={{display:'block',textAlign:'center'}}>
                <img src={navLogo} alt="" />
                <div style={{color:'#E03BFB'}}>MappyPal</div>
            </div>
          <div className='nav-item' style={{display:'block',textAlign:'center'}}>
                <img src={team} alt=""  />
                <div style={{color:'#E03BFB'}}>Team</div>
          </div>
          <div className='nav-item' style={{display:'block',textAlign:'center'}}>
                <img src={about} alt=""  />
                <div style={{color:'#E03BFB'}}>About</div>
          </div>
          <div className='nav-item' style={{display:'flex', justifyContent: 'center', flexDirection: 'column', width:'200px', borderBottom: '1px solid grey'}}>
                <div className='login'>
                <Link to='/Login' >Login</Link>
                </div>
                <div className='signup'>
                <Link to='/SignUp' >Sign Up</Link>
                </div>
          </div>
          <div  style={{display:'block',textAlign:'center', paddingTop: '20px', marginBottom: '10px'}}>
               
                <div>Copyright - Team Members - ZTM Link etc</div>
          </div>

          </div>
         
      </header>
    </React.Fragment>
    ) 
}

export default Navbar