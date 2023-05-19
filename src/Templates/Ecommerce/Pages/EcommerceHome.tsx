import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import Carousel from '../Components/Carousel';
import Main from '../Components/Main';
import Footer from '../Components/Footer';
import FloatingButton from '../Components/FloatingButton';
import { useAppSelector } from '../../../store';
import { ProjectState } from '../../../Redux/ProjectSlice';


const EcommerceHome:React.FC = () => {
  const project = useAppSelector((state) => state.project);

  useEffect(() => {
    console.log(project);
  }, [project]);

  const applyTemplateCustomizations = (project: ProjectState) => {
    const root = document.documentElement;

    root.style.setProperty('--primary-color', project.template.primaryColor);
    root.style.setProperty('--secondary-color', project.template.secondaryColor);
    root.style.setProperty('--body-font-color', project.template.bodyFontColor);
    root.style.setProperty('--name-font', project.template.nameFontFamily);
    root.style.setProperty('--body-font', project.template.bodyFontFamily );
    root.style.setProperty('--project-name', project.name);
    root.style.setProperty('--project-description', project.description);
    root.style.setProperty('--project-banner', project.bannerUrl);
    root.style.setProperty('--name-font-size', project.template.nameFontSize);
    root.style.setProperty('--body-font-size', project.template.bodyFontSize);
    root.style.setProperty('--other-font-size', project.template.otherFontSize);
  };

  useEffect(() => {
    applyTemplateCustomizations(project);
  }, [project]);

  return (
    <div>
        <Navbar />
        <Header />
        <Hero />
        <Carousel />
        <Main />
        <Footer />
        <FloatingButton />
    </div>
  )
}

export default EcommerceHome