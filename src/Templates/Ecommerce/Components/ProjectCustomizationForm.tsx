import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../../store';
import '../../../assets/styles/templatesStyles/Ecommerce/TemplateCustomizationForm.scss';
import { StylingForm } from './StylingForm';
import UploadForm from './UploadForm';
import ProductsForm from './ProductsForm';
import ProjectDetailsForm from './ProjectDetailsForm';

const ProjectCustomizationForm: React.FC = () => {
  //const dispatch = useAppDispatch();
  const project = useAppSelector((state) => state.project);
  const [activeMenu, setActiveMenu] = useState('Styling');


  useEffect(() => {
    console.log(project);
  }, [project]);

  const renderForm = () => {
    // Render the appropriate form based on the active menu
    switch (activeMenu) {
      case 'Details':
        return <ProjectDetailsForm project={project} />;
      case 'Styling':
        return <StylingForm project={project}/>;
      case 'Upload':
        return <UploadForm project={project}/>;
      case 'Products':
        return <ProductsForm project={project}/>;
      default:
        return null;
    }
  };
  

  return (
    <div className="customization-container">
      <h2>Customise Your Store</h2>
      <div className='template-customization'>
        <div className="sidebar">
          {/* <h2>Product Upload Categories</h2> */}
          <ul>
            <li onClick={() => setActiveMenu('Details')}>Project Details</li>
            <li onClick={() => setActiveMenu('Styling')}>Styling</li>
            <li onClick={() => setActiveMenu('Upload')}>Upload</li>
            <li onClick={() => setActiveMenu('Products')}>Products</li>
          </ul>
        </div>
        <div className='formDiv'>
          {renderForm()}
        <div className='form-buttons'>
          <button type="submit" className="button save">
            Save
          </button>

          <button type="submit" className="button">
            Publish
          </button>
        </div>
        </div>
      
      
      </div>
    </div>
  );
};

export default ProjectCustomizationForm;
