import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../store';

import '../../../assets/styles/templatesStyles/Ecommerce/TemplateCustomizationForm.scss';
import { StylingForm } from './StylingForm';
import UploadForm from './UploadForm';
import ProductsForm from './ProductsForm';
import ProjectDetailsForm from './ProjectDetailsForm';
import { saveProject } from '../../../Redux/ProjectSlice';
import { AuthLoader } from '../../../components/authComponents/AuthLoader';
//import AddPagesForm from './AddPagesForm';

const ProjectCustomizationForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const project = useAppSelector((state) => state.project);
  const [activeMenu, setActiveMenu] = useState('Details');
  const [loader, setLoader] = useState<boolean>(false);



  useEffect(() => {
    console.log(project);
  }, [project]);

  const renderForm = () => {
    // Render the appropriate form based on the active menu
    switch (activeMenu) {
      case 'Details':
        return <ProjectDetailsForm project={project}/>;
      case 'Styling':
        return <StylingForm project={project}/>;
      case 'Upload':
        return <UploadForm project={project}/>;
      case 'Products':
        return <ProductsForm project={project}/>;
      // case 'AddPages':
      //   return <AddPagesForm />;
      default:
        return null;
    }
  };

  const handleSave = async () => {
    setLoader(true);
    console.log('Saving project:', project); // Check the project data before dispatching
    const response = await dispatch(saveProject(project));
    console.log('Save response:', response); // Check the response data after the API call
    setLoader(false);
  }
  
  

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
            {/* <li onClick={() => setActiveMenu('AddPages')}>Pages</li> */}
          </ul>
        </div>
        <div className='formDiv'>
          {renderForm()}
        <div className='form-buttons'>
          <button onClick={handleSave} className="button save">
            Save
          </button>

          <button type="submit" className="button">
            Publish
          </button>
        </div>
        {loader ? <AuthLoader /> : ''}
        </div>
      
      
      </div>
    </div>
  );
};

export default ProjectCustomizationForm;
