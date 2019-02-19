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
               <h1>Mappypals helps you keep track of your friend abroad.</h1>
               <div>
                  <div aria="login">
                     <i className="fas fa-mouse-pointer user-pointer"></i>
                     <i className="fas fa-user-circle"></i>
                  </div>
                  <div aria="add friends">
                     <i className="fas fa-user-plus" ></i>
                  </div>
                  <div aria="view friends">
                     <i className="fas fa-map-marked-alt" ></i>
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
