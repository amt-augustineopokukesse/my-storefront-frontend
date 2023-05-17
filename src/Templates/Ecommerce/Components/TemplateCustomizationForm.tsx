import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store';
import {
  setTemplateName,
  setPrimaryColor,
  setSecondaryColor,
  setHeadingFont,
  setBodyFont,
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

  const handlePrimaryColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPrimaryColor(e.target.value));
  };

  const handleSecondaryColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSecondaryColor(e.target.value));
  };

  const handleHeadingFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setHeadingFont(e.target.value));
  };

  const handleBodyFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setBodyFont(e.target.value));
  };

  return (
    <div className="template-customization">
      <div className="sidebar">
        <h2>Product Upload Categories</h2>
        {/* Add your product upload categories here */}
      </div>
      <form className="form">
        <h2>Template Customization</h2>
        <label className="label">Template Name:</label>
        <input
          type="text"
          value={template.templateName}
          onChange={handleTemplateNameChange}
          className="input"
        />
        <label className="label">Primary Color:</label>
        <input
          type="color"
          value={template.primaryColor}
          onChange={handlePrimaryColorChange}
          className="input"
        />
        <label className="label">Secondary Color:</label>
        <input
          type="color"
          value={template.secondaryColor}
          onChange={handleSecondaryColorChange}
          className="input"
        />
        <label className="label">Name Font:</label>
        <select
          value={template.nameFont}
          onChange={handleHeadingFontChange}
          className="select"
        >
          <option value="Arial, sans-serif">Arial</option>
          <option value="Helvetica, sans-serif">Helvetica</option>
          <option value="Times New Roman, serif">Times New Roman</option>
          {/* Add more font options as needed */}
        </select>
        <label className="label">Body Font:</label>
        <select
          value={template.bodyFont}
          onChange={handleBodyFontChange}
          className="select"
        >
          <option value="Arial, sans-serif">Arial</option>
          <option value="Helvetica, sans-serif">Helvetica</option>
          <option value="Times New Roman, serif">Times New Roman</option>
          {/* Add more font options as needed */}
        </select>
        <button type="submit" className="button">
          Save
        </button>
      </form>
    </div>
  );
};

export default TemplateCustomizationForm;
