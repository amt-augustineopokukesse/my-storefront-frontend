import React from 'react';
import { useAppDispatch } from '../../../store';
import { TemplateState, setTemplateDescription, setTemplateName, setPhoneNumber, setTemplateCategory, setCurrency, setFacebookURL, setInstagramURL, setTwitterURL } from '../../../Redux/TemplateSlice';

const ProjectDetailsForm: React.FC<{ template: TemplateState }> = ({ template }) => {
  const dispatch = useAppDispatch();

  const handleTemplateNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTemplateName(e.target.value));
  };

  const handleTemplateDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTemplateDescription(e.target.value));
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPhoneNumber(e.target.value));
  };

  const handleTemplateCategoryChange = () => {
    dispatch(setTemplateCategory(template.templateCategory === 'Ecommerce' ? '' : 'Ecommerce'));
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCurrency(e.target.value));
  };

  const handleFacebookURLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFacebookURL(e.target.value));
  };

  const handleInstagramURLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInstagramURL(e.target.value));
  };

  const handleTwitterURLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTwitterURL(e.target.value));
  };

  return (
    <form className='form'>
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
        <label className="label">Store Description:</label>
        <input
          type="text"
          value={template.description}
          onChange={handleTemplateDescriptionChange}
          className="input"
        />
      </div>

      <div className='input-containers'>
        <label className="label">Phone Number:</label>
        <input
          type="tel"
          value={template.phoneNumber}
          onChange={handlePhoneNumberChange}
          className="input"
        />
      </div>

      <div className='input-containers'>
        <label className="label">Template Category:</label>
        <input
          type="checkbox"
          checked={template.templateCategory === 'Ecommerce'}
          onChange={handleTemplateCategoryChange}
          className="input"
        />
      </div>

      <div className='input-containers'>
        <label className="label">Currency:</label>
        <select
          value={template.currency}
          onChange={handleCurrencyChange}
          className="select"
        >
          <option value="Ghanaian Cedi">Ghanaian Cedi</option>
          <option value="Euro">Euro</option>
          <option value="Pounds">Pounds</option>
          <option value="Dollar">Dollar</option>
        </select>
      </div>

      <div className='input-containers'>
        <label className="label">Facebook URL:</label>
        <input
          type="text"
          value={template.facebookURL}
          onChange={handleFacebookURLChange}
          className="input"
        />
      </div>

      <div className='input-containers'>
        <label className="label">Instagram URL:</label>
        <input
          type="text"
          value={template.instagramURL}
          onChange={handleInstagramURLChange}
          className="input"
        />
      </div>

      <div className='input-containers'>
        <label className="label">Twitter URL:</label>
        <input
          type="text"
          value={template.twitterURL}
          onChange={handleTwitterURLChange}
          className="input"
        />
      </div>
    </form>
  );
};

export default ProjectDetailsForm;
