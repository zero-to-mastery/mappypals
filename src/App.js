import React, { Component } from 'react';
import './App.css';

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
                  <div className="nav-item"> Home </div>
                  <div className="nav-item"> About </div>
                  <div className="nav-item"> Contact us </div>
                  <div className="nav-item"> Login </div>
                  <div className="nav-item"> Signup</div>
               </div>
            </header>
            <section>
               <h1>Mappypals helps you keep track of your friend aboard.</h1>
               <div>
                  <div>
                  <i className="fas fa-mouse-pointer user-pointer" aria="login"></i>
                     <i className="fas fa-user-circle" aria="login"></i>
                  </div>
                  <div>
                     <i className="fas fa-user-plus" aria="add friends"></i>
                  </div>
                  <div>
                     <i className="fas fa-map-marked-alt" aria="view friends"></i>
                  </div>
               </div>
            </section>
            <footer>
            </footer>
         </React.Fragment>
      );
   }
}

export default App;
