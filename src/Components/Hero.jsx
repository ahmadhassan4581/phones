import React from 'react';
import '../styles/hero.css';

const Hero = () => {
  return (
    <div className="hero-banner">
      <img
        src="https://cdn.mos.cms.futurecdn.net/4hU7T5fQYWbnU5vxHZnAZE-1200-80.jpg"
        alt="Bluetooth Headphones"
        className="hero-image"
      />
      <div className="hero-content">
        <h1>FLASH SALE</h1>
        <h2>BLUETOOTH HEADPHONES</h2>
        <p className="price">
          Rs 33,599 <span className="old-price">Rs 35,000</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
