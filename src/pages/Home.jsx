import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>LifeStream Blood Donation</h1>
        <h2>Give Blood, Give Life</h2>
        
        <div className="intro-text">
          <p>
            Welcome to Hemofy, where your contribution can save lives. Blood donation is a simple
            yet powerful act of kindness that directly impacts patients in critical need.
          </p>
          <p>
            Every donation can help up to three people in need. Whether it's for surgery patients, 
            accident victims, or those battling serious illnesses, your blood donation makes a difference.
          </p>
        </div>
        
        <div className="action-buttons">
          <Link to="/donate" className="primary-button">
            Donate Now
          </Link>
          <Link to="/drives" className="secondary-button">
            View Donation Drives
          </Link>
        </div>
        
        <div className="stats-container">
          <div className="stat-box">
            <h3>5,000+</h3>
            <p>Lives Saved</p>
          </div>
          <div className="stat-box">
            <h3>1,200+</h3>
            <p>Regular Donors</p>
          </div>
          <div className="stat-box">
            <h3>150+</h3>
            <p>Donation Drives</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 