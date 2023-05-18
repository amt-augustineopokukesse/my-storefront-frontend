import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store';
import {
  setTemplateName,
  setTemplateDescription,
  setPrimaryColor,
  setSecondaryColor,
  setHeadingFont,
  setBodyFont,
  setBodyFontColor,
} from '../../../Redux/TemplateSlice';
import '../../../assets/styles/templatesStyles/Ecommerce/TemplateCustomizationForm.scss';

const TemplateCustomizationForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const template = useAppSelector((state) => state.template);

  useEffect(() => {
    console.log(template);
  }, [template]);

  const handleTemplateNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTemplateName(e.target.value));
  };
  const handleTemplateDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTemplateDescription(e.target.value));
  };

  const handlePrimaryColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPrimaryColor(e.target.value));
  };

  const handleSecondaryColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSecondaryColor(e.target.value));
  };

  const handleBodyFontColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setBodyFontColor(e.target.value));
  };

  const handleHeadingFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setHeadingFont(e.target.value));
  };

  const handleBodyFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setBodyFont(e.target.value));
  };

  return (
    <div className="customization-container">
      <h2>Customise Your Store</h2>
      <div className='template-customization'>
      <div className="sidebar">
        {/* <h2>Product Upload Categories</h2> */}
        <ul>
          <li>Styling</li>
          <li>Upload</li>
          <li>Products</li>
        </ul>
      </div>
      <div className='formDiv'>
      <form className="form">
        
        <div className='input-containers'>
          <label className="label">Store Name:</label>
          <input
            type="text"
            value={template.name}
            onChange={handleTemplateNameChange}
            className="input"
          />
        </div>
        <div className='input-containers'>
          <label className="label">Store description:</label>
          <input
            type="text"
            value={template.description}
            onChange={handleTemplateDescriptionChange}
            className="input"
          />
        </div>
        <div className='input-containers'>
          <label className="label">Primary Color:</label>
          <input
            type="color"
            value={template.colors.primary}
            onChange={handlePrimaryColorChange}
            className="color-input"
          />
        </div>
        <div className='input-containers'>
          <label className="label">Secondary Color:</label>
          <input
            type="color"
            value={template.colors.secondary}
            onChange={handleSecondaryColorChange}
            className="color-input"
          />
        </div>
        <div className='input-containers'>
          <label className="label">Body Font Color:</label>
          <input
            type="color"
            value={template.colors.bodyFontColor}
            onChange={handleBodyFontColorChange}
            className="color-input"
          />
        </div>
        <div className='input-containers'>
          <label className="label">Name Font:</label>
          <select
            value={template.fonts.nameFont}
            onChange={handleHeadingFontChange}
            className="select"
          >
            <option value="Poppins, sans-serif">Poppins</option>
            <option value="Helvetica, sans-serif">Helvetica</option>
            <option value="Times New Roman, serif">Times New Roman</option>
            {/* Add more font options as needed */}
          </select>
        </div>
        <div className='input-containers'>
          <label className="label">Body Font:</label>
          <select
            value={template.fonts.bodyFont}
            onChange={handleBodyFontChange}
            className="select"
          >
            <option value="Roboto, sans-serif">Roboto</option>
            <option value="Helvetica, sans-serif">Helvetica</option>
            <option value="Times New Roman, serif">Times New Roman</option>
            {/* Add more font options as needed */}
          </select>
        </div>        
      </form>
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
