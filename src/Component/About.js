import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <h1 className="about-heading">
        <span className="highlight">A</span>BOUT <span className="highlight">U</span>S
      </h1>
      
      <div className="about-content">
        <img src="/images/res.jpeg" alt="About Us" className="about-image" />

        <div className="about-text">
          <p>Welcome to <strong>Yummi Restaurant</strong>, where every dish is crafted with love and fresh ingredients.</p>
          <p>Our mission is to provide an unforgettable dining experience with great food, cozy ambiance, and excellent service.</p>
          <p>From traditional favorites to modern creations, we make every meal a delight for our customers.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
