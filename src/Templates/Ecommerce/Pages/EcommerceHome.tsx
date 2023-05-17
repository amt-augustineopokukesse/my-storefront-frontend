import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import Carousel from '../Components/Carousel';
import Main from '../Components/Main';
import Footer from '../Components/Footer';
import FloatingButton from '../Components/FloatingButton';
import { useAppSelector } from '../../../store';
import { TemplateState } from '../../../Redux/TemplateSlice';


const EcommerceHome:React.FC = () => {
  const template = useAppSelector((state) => state.template);

  useEffect(() => {
    console.log(template);
  }, [template]);

  const applyTemplateCustomizations = (template: TemplateState) => {
    const root = document.documentElement;

    root.style.setProperty('--primary-color', template.colors.primary);
    root.style.setProperty('--secondary-color', template.colors.secondary);
    root.style.setProperty('--body-font-color', template.colors.bodyFontColor);
    root.style.setProperty('--name-font', template.fonts.nameFont);
    root.style.setProperty('--body-font', template.fonts.bodyFont);
    root.style.setProperty('--template-name', template.name);
  };

  useEffect(() => {
    applyTemplateCustomizations(template);
  }, [template]);

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