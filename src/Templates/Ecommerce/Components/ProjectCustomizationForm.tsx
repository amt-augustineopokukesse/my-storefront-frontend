import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../store';
import { useNavigate } from 'react-router-dom';

import '../../../assets/styles/templatesStyles/Ecommerce/ProjectCustomizationForm.scss';
import { StylingForm } from './StylingForm';
import UploadForm from './UploadForm';
import ProductsForm from './ProductsForm';
import ProjectDetailsForm from './ProjectDetailsForm';
import { saveProject, setProject } from '../../../Redux/ProjectSlice';
import { AuthLoader } from '../../../components/authComponents/AuthLoader';

const ProjectCustomizationForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const project = useAppSelector((state) => state.project);
  const [activeMenu, setActiveMenu] = useState('Details');
  const [loader, setLoader] = useState<boolean>(false);
  const [active, setActive] = useState(false);

  // useEffect(() => {
  //   const storedProject = localStorage.getItem('project');
  //   if (storedProject) {
  //     const savedProject = JSON.parse(storedProject);
  //     dispatch(setProject(savedProject));
  //     setActive(true);
  //   }
  // }, [dispatch]);

  useEffect(() => {
    console.log(project);
  }, [project]);

  const renderForm = () => {
    // Render the appropriate form based on the active menu
    switch (activeMenu) {
      case 'Details':
        return <ProjectDetailsForm project={project} />;
      case 'Styling':
        return <StylingForm project={project} />;
      case 'Upload':
        return <UploadForm />;
      case 'Products':
        return <ProductsForm />;
      default:
        return null;
    }
  };

  const handleSave = async () => {
    setLoader(true);
    console.log('Saving project:', project);
    const response = await dispatch(saveProject(project));
    localStorage.setItem('project', JSON.stringify(response.payload));
    console.log('Save response:', response);
    setLoader(false);
  };

  const handleUpdate = async () => {
    setLoader(true);
    console.log('Saving project:', project);
    const localProject = localStorage.getItem('project');
    if (localProject) {
      dispatch(setProject(JSON.parse(localProject)));
    }
    const response = await dispatch(saveProject(project));
    localStorage.setItem('project', JSON.stringify(response.payload));
    console.log('Save response:', response);
    setLoader(false);
  };

  const handlePublish = async () => {
    setLoader(true);
    console.log('Publishing project:', project);
    const response = await dispatch(saveProject({ ...project, published: true }));
    console.log('Save response:', response);
    setLoader(false);
    navigate('/dashboard/project/');
  };

  return (
    <div className="customization-container">
      <h2 className="header">Customise Your Store</h2>
      <div className="template-customization">
        <div className="sidebar">
          <ul>
            <li onClick={() => setActiveMenu('Details')}>Project Details</li>
            <li onClick={() => setActiveMenu('Styling')}>Styling</li>
            <li onClick={() => setActiveMenu('Upload')}>Upload</li>
            <li onClick={() => setActiveMenu('Products')}>Products</li>
          </ul>
        </div>
        <div className="formDiv">
          {renderForm()}
          <div className="form-buttons">
            {active ? (
              <button onClick={handleUpdate} className="button update">
                Update
              </button>
            ) : (
              <button onClick={handleSave} className="button save">
                Save
              </button>
            )}
            <button disabled={!active} type="submit" className="button" onClick={handlePublish}>
              Publish
            </button>
          </div>
          {loader ? <AuthLoader /> : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectCustomizationForm;
