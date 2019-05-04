import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'
import {ReactComponent as AboutUs} from '../../pics/AboutUs.svg';
import {ReactComponent as Logo} from '../../pics/Logo.svg';
import {ReactComponent as Team} from '../../pics/Team.svg';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state={
      hamburger: "",
      navbar: "",
      navbarRight: ""
    }
  }
  showNav=()=>{
    if(this.state.navbar.length) this.setState({navbar:"", navbarRight:"300px"})
    else this.setState({navbar:"none", navbarRight:""})
  }
  componentDidMount(){
    if(window.innerWidth<500) this.setState({hamburger: "block", navbar: "none"})
    else this.setState({hamburger: "",navbar:""})
    window.addEventListener("resize",()=>{
      console.log(window.innerWidth)
      if(window.innerWidth<500 && !this.state.hamburger.length) this.setState({hamburger: "block", navbar: "none"})
      else if(window.innerWidth>=500 && this.state.hamburger.length) this.setState({hamburger: "",navbar:""})
    })
  }
  render(){
    const {onLogin}=this.props;
    return(
    <React.Fragment>
        {(this.state.hamburger.length)?(<div className="hamburger" onClick={this.showNav} style={{right: this.state.navbarRight}}><span className="hamburger-icon">☰</span></div>):("")}
        <div id="nav-bar" style={{display: this.state.navbar}}>
          <div className="item-wrapper" onClick={this.showNav}>
            <Link className="nav-item" to='/' > <Logo /> <p>MappyPals</p> </Link>
          </div>
          <hr />
          <div className="item-wrapper" onClick={this.showNav}>
            <Link className="nav-item" to='/about' > <Team /> <p>TEAM</p> </Link>
          </div>
          <hr />
          <div className="item-wrapper" onClick={this.showNav}>
            <Link className="nav-item" to='/contact'> <AboutUs /> <p>ABOUT</p> </Link>
          </div>
          <hr />
          <div className="item-wrapper">
            <Link to='/login'> <p className="main-btn shadow"  onClick={()=>{onLogin(); this.showNav()}}> LOGIN </p> </Link>
            <Link to='/signup'> <p className="main-btn shadow" onClick={()=>{ this.showNav()}}> SIGN UP </p> </Link>
          </div>
          <hr />
          <div className="item-wrapper">
            <p className="nav-item">Copyright - Team Members - ZtM URL</p>
          </div>
        </div>
      </React.Fragment>
      ) 
  }
}

export default Navbar