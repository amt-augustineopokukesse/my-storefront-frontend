import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import Carousel from '../Components/Carousel';
import Main from '../Components/Main';
import Footer from '../Components/Footer';
import { useAppSelector } from '../../../store';
//import { ProjectState } from '../../../Redux/ProjectSlice';
import CustomizedMain from '../Components/CustomizedMain';
import FloatingButton from '../Components/FloatingButton';
import { applyTemplateCustomizations } from '../Components/ProductEditUtils';


const EcommerceHome:React.FC = () => {
  const project = useAppSelector((state) => state.project);

  useEffect(() => {
    console.log(project);
  }, [project]);

  

  useEffect(() => {
    applyTemplateCustomizations(project);
  }, [project]);

  return (
    <div>
        <Navbar />
        <Header />
        <Hero />
        {project.template.carouselInclude ? <Carousel /> : ''}
        {project.products.length > 0 ? <CustomizedMain/> : <Main />}
        <Footer />
        <FloatingButton/>
    </div>
  )
}

export default EcommerceHome