import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'
import {ReactComponent as AboutUs} from '../../pics/AboutUs.svg';
import {ReactComponent as Logo} from '../../pics/Logo.svg';
import {ReactComponent as Team} from '../../pics/Team.svg';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.navRef=React.createRef();
    this.state={
      hamburger: "",
      navbar: "",
      navbarRight: "",
      navbarWidth: ""
    }
  }
  showNav=()=>{
    if(this.state.hamburger.length){
      if(this.state.navbar.length) this.setState({navbar:"", navbarRight:(this.state.navbarWidth*1+10)+"px"})
      else this.setState({navbar:"none", navbarRight:""})
    }
  }
  componentDidMount(){
    if(window.innerWidth<500) this.setState({hamburger: "block", navbar: "none"})
    else this.setState({hamburger: "",navbar:""})
    window.addEventListener("resize",()=>{
      if(window.innerWidth<500 && !this.state.hamburger.length) this.setState({hamburger: "block", navbar: "none"})
      else if(window.innerWidth>=500 && this.state.hamburger.length) this.setState({hamburger: "",navbar:""})
    })
  //get computed width of navbar (helps with resposive width change for navbar)
    const node=this.navRef.current
    let navWidth;
    if(node)navWidth=window.getComputedStyle(node).width.split("px")[0];
    if(node && navWidth!==this.state.navbarWidth)
      this.setState({navbarWidth: navWidth})
  }
  render(){
    const {onLogin}=this.props;
    return(
    <React.Fragment>
        {(this.state.hamburger.length)?(<div className="hamburger" onClick={this.showNav} style={{right: this.state.navbarRight}}><span className="hamburger-icon">☰</span></div>):("")}
        <div id="nav-bar" ref={this.navRef} style={{display: this.state.navbar}}>
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
          <div className="item-wrapper no-hover scale">
            <Link to='/login'> <p className="main-btn shadow"  onClick={()=>{onLogin(); this.showNav()}}> LOGIN </p> </Link>
            <Link to='/signup'> <p className="main-btn shadow" onClick={()=>{ this.showNav()}}> SIGN UP </p> </Link>
          </div>
          <hr />
          <div className="item-wrapper no-hover">
            <p className="nav-item">Copyright - Team Members - ZtM URL</p>
          </div>
        </div>
      </React.Fragment>
      ) 
  }
}

export default Navbar