import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../../store';

import '../../../assets/styles/templatesStyles/Ecommerce/TemplateCustomizationForm.scss';
import { StylingForm } from './StylingForm';
import UploadForm from './UploadForm';
import ProductsForm from './ProductsForm';
import AddPagesForm from './AddPagesForm';

const TemplateCustomizationForm: React.FC = () => {
  //const dispatch = useAppDispatch();
  const template = useAppSelector((state) => state.template);
  const [activeMenu, setActiveMenu] = useState('Styling');


  useEffect(() => {
    console.log(template);
  }, [template]);

  const renderForm = () => {
    // Render the appropriate form based on the active menu
    switch (activeMenu) {
      case 'Styling':
        return <StylingForm template={template}/>;
      case 'Upload':
        return <UploadForm template={template}/>;
      case 'Products':
        return <ProductsForm template={template}/>;
      case 'AddPages':
        return <AddPagesForm />;
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
            <li onClick={() => setActiveMenu('Styling')}>Styling</li>
            <li onClick={() => setActiveMenu('Upload')}>Upload</li>
            <li onClick={() => setActiveMenu('Products')}>Products</li>
            <li onClick={() => setActiveMenu('AddPages')}>Pages</li>
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

export default TemplateCustomizationForm;
