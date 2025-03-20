import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="hero-section">
        <h1>Connecting People Across Faiths & Interests</h1>
        <p>Connecting people of all faiths through events and community support.</p>
        <Link to="/events" className="cta-button">Explore Events</Link>
      </div>
    </div>
  );
};

export default Home;
