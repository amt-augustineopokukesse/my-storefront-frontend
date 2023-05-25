import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import Carousel from '../Components/Carousel';
import Main from '../Components/Main';
import Footer from '../Components/Footer';
import { useAppDispatch, useAppSelector } from '../../../store';
import CustomizedMain from '../Components/CustomizedMain';
import FloatingButton from '../Components/FloatingButton';
import { applyTemplateCustomizations } from '../Components/ProductEditUtils';
import { setProject } from '../../../Redux/ProjectSlice';
import { useLocation } from 'react-router-dom';


const EcommerceHome:React.FC = () => {
  const project = useAppSelector((state) => state.project);
  const dispatch = useAppDispatch();
  const location = useLocation();


  useEffect(() => {
    applyTemplateCustomizations(project);
  }, [project]);

  useEffect(() => {
    if (location && location.state) {
      if (location.state.linkedProject !== null) {
        const incomingProject = location.state.linkedProject;
        console.log(incomingProject)
        localStorage.setItem('project', JSON.stringify(location.state.linkedProject))
      }
    }
    const storedProject = localStorage.getItem('project');
    if (storedProject) {
      const savedProject = JSON.parse(storedProject);
      dispatch(setProject(savedProject));
      //setActive(true);
    }
  }, [dispatch]);

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