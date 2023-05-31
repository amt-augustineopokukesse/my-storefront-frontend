import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store';
import { setProject } from '../../../Redux/ProjectSlice';
import { useLocation } from 'react-router-dom';
import { applyTemplateCustomizations } from '../../../Templates/Ecommerce/Components/ProductEditUtils';
import Navbar from '../../../Templates/Ecommerce/Components/Navbar';
import Header from '../../../Templates/Ecommerce/Components/Header';
import Hero from '../../../Templates/Ecommerce/Components/Hero';
import { Footer } from '../../../Templates/Finance/Components/Footer';
import Carousel from '../../../Templates/Ecommerce/Components/Carousel';
import CustomizedMain from '../../../Templates/Ecommerce/Components/CustomizedMain';
import '../../../assets/styles/templatesStyles/Ecommerce/OtherPages.scss';



const EcommerceStoreHome:React.FC = () => {
  const project = useAppSelector((state) => state.project);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const [search, setSearch] = useState("");
  const [ pages, setPages ] = useState({ home: "flex", about: "none", contact: "none"});

  const handleSearchValue = (value: string) => {
    setSearch(String(value).toLowerCase());
  }

  const handlePagesValue = (value: { home: string; about: string, contact: string}) => {
    setPages(value)
  }


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
        <Navbar sendSearchValue={handleSearchValue} />
        <Header sendPagesValue={handlePagesValue} />
        <div style={{display: `${pages.home}`, flexFlow: "column"}}>
          <Hero />
          {project.template.carouselInclude ? <Carousel /> : ''}
          {project.products.length > 0 ? <CustomizedMain searchValue={search} /> : ""}
        </div>
        <div style={{display: `${pages.contact}`}} className='other-pages' >
          <h1 className='other-header'>Contact Us</h1>
        </div>
        <div style={{display: `${pages.about}`}} className='other-pages' >
          <h1 className='other-header'>About Us</h1>
        </div>
        <Footer />
    </div>
  )
}

export default EcommerceStoreHome