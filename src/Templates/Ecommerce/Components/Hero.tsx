import React from 'react';
import '../../../assets/styles/templatesStyles/Ecommerce/Hero.scss';

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <h1 className="hero-header">
        Lorem Emporium
      </h1>
      <p className="hero-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.
      </p>
      <div className="subscribe">
        <input
          className="subscribe-input"
          placeholder="example@gmail.com"
        />
        <button className="subscribe-button">
          Subscribe
        </button>
        
      </div>
    </div>
  );
};

export default Hero;
