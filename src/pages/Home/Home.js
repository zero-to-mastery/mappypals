import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Map from './Map';

const Home = user => {
  return false ? (
    <section id="not-logged-in">
      <h1>Mappypals helps you keep track of your friend abroad.</h1>
      <div>
        <div aria="login">
          <i className="fas fa-mouse-pointer user-pointer" />
          <i className="fas fa-user-circle" />
        </div>
        <div aria="add friends">
          <i className="fas fa-user-plus" />
        </div>
        <div aria="map your pals">
          <i className="fas fa-map-marked-alt" />
        </div>
      </div>
      <div>
        Do not have and account yet?
        <Link to="/signup">
          <span id="signup"> Sign up </span>{' '}
        </Link>
      </div>
    </section>
  ) : (
    <section>
      <Map />
    </section>
  );
};

export default Home;
