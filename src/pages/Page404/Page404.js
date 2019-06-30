import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/UI/Button/Button';
import './Page404.css';
import { ReactComponent as Emoji } from '../../pics/404Icon.svg';

const Page404 = () => {
  return (
    <div className="t-c p404-container">
      <h1 className="p404-header">404 Error - Page not found</h1>
      <Emoji className="p404-emoji"></Emoji>
      <p className="p404-text">Sorry, we couldn't find what you are looking for</p>
      <Link to="/">
        <Button btnType="Page404">Go back</Button>
      </Link>
    </div>
  );
};

export default Page404;