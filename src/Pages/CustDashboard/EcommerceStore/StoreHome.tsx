import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store';
//import { ProjectState } from '../../../Redux/ProjectSlice';
import { setProject } from '../../../Redux/ProjectSlice';
import { useLocation } from 'react-router-dom';
import { applyTemplateCustomizations } from '../../../Templates/Ecommerce/Components/ProductEditUtils';
import Navbar from '../../../Templates/Ecommerce/Components/Navbar';
import Header from '../../../Templates/Ecommerce/Components/Header';
import Hero from '../../../Templates/Ecommerce/Components/Hero';
import { Footer } from '../../../Templates/Finance/Components/Footer';
import Carousel from '../../../Templates/Ecommerce/Components/Carousel';
import CustomizedMain from '../../../Templates/Ecommerce/Components/CustomizedMain';
import Main from '../../../Templates/Ecommerce/Components/Main';


const EcommerceStoreHome:React.FC = () => {
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
        {project.products.length > 0 ? <CustomizedMain/> : ""}
        <Footer />
    </div>
  )
}

export default EcommerceStoreHome