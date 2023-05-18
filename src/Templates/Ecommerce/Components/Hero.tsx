import React from 'react';
import '../../../assets/styles/templatesStyles/Ecommerce/Hero.scss';
import { useAppSelector } from '../../../store';

const Hero: React.FC = () => {
  const template = useAppSelector((state) => state.template);

  return (
    <div className="hero">
      <h1 className="hero-header">
        {template.name}
      </h1>
      <p className="hero-text">
        {template.description}
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
