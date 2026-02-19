import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-slide">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/shawon.png`}
          alt="আতিকুল আলম শাওন"
          className="hero-img"
        />
      </div>
    </section>
  );
};

export default Hero;
