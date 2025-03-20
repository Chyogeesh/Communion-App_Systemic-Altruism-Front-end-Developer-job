import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Communion App</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
      </nav>
    </header>
  );
};

export default Header;
