import React from 'react';
import '../../../assets/styles/templatesStyles/Ecommerce/Hero.scss';
import { useAppSelector } from '../../../store';

const Hero: React.FC = () => {
  const templateName = useAppSelector((state) => state.template.name);

  return (
    <div className="hero">
      <h1 className="hero-header">
        {templateName}
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
