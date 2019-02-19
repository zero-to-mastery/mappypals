import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import Main from "./components/Main.js";

class App extends Component {
   render() {
      return (
         <React.Fragment>
            <header>
               <div id="logo-wrapper">
                  <p id="logo"> <span>Mappy&nbsp; als  &nbsp;</span> </p>
                  <i className="fas fa-map-marker-alt pin"></i>
                  <i className="fas fa-users"></i>
               </div>
               <div id="nav-wrapper">
                  <Link className="nav-item" to='/'> Home </Link>
                  <Link className="nav-item" to='/about'> About </Link>
                  <Link className="nav-item" to='/contact'> Contact us </Link>
                  <Link className="nav-item" to='/login'> Login </Link>
               </div>
            </header>
            <Main />
            <footer>
            </footer>
         </React.Fragment>
      );
   }
}

export default App;
