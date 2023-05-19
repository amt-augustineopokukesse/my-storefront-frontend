import React from 'react';
// import '../../../assets/styles/projectsStyles/Ecommerce/Hero.scss';
import '../../../assets/styles/templatesStyles/Ecommerce/Hero.scss';
import { useAppSelector } from '../../../store';

const Hero: React.FC = () => {
  const project = useAppSelector((state) => state.project);

  return (
    <div className="hero" style={{backgroundImage: `url(${project.bannerUrl})`}}>
      <h1 className="hero-header">
        {project.name}
      </h1>
      <p className="hero-text">
        {project.description}
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
