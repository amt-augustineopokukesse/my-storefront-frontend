import React from 'react';
import { useAppDispatch } from '../../../store';
import { ProjectState, setDescription, setName, setPhoneNumber, setCategory, setCurrency, setFacebookURL, setInstagramURL, setTwitterURL } from '../../../Redux/ProjectSlice';

const ProjectDetailsForm: React.FC<{ project: ProjectState }> = ({ project }) => {
  const dispatch = useAppDispatch();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDescription(e.target.value));
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPhoneNumber(e.target.value));
  };

  const handleCategoryChange = () => {
    dispatch(setCategory(project.category === 'Ecommerce' ? '' : 'Ecommerce'));
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
          value={project.name}
          onChange={handleNameChange}
          className="input"
        />
      </div>

      <div className='input-containers'>
        <label className="label">Store Description:</label>
        <input
          type="text"
          value={project.description}
          onChange={handleDescriptionChange}
          className="input"
        />
      </div>

      <div className='input-containers'>
        <label className="label">Phone Number:</label>
        <input
          type="tel"
          value={project.phoneNumber}
          onChange={handlePhoneNumberChange}
          className="input"
        />
      </div>

      <div className='input-containers'>
        <label className="label">Template Category:</label>
        <input
          type="checkbox"
          checked={project.category === 'Ecommerce'}
          onChange={handleCategoryChange}
          className="input"
        />
      </div>

      <div className='input-containers'>
        <label className="label">Currency:</label>
        <select
          value={project.currency}
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
          value={project.facebookURL}
          onChange={handleFacebookURLChange}
          className="input"
        />
      </div>

      <div className='input-containers'>
        <label className="label">Instagram URL:</label>
        <input
          type="text"
          value={project.instagramURL}
          onChange={handleInstagramURLChange}
          className="input"
        />
      </div>

      <div className='input-containers'>
        <label className="label">Twitter URL:</label>
        <input
          type="text"
          value={project.twitterURL}
          onChange={handleTwitterURLChange}
          className="input"
        />
      </div>
    </form>
  );
};

export default ProjectDetailsForm;
