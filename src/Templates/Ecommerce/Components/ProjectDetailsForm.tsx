import React from 'react';
import { useAppDispatch } from '../../../store';
import { ProjectState,
     setDescription, 
     setName, 
     setPhoneNumber, 
     setCategory, 
     setCurrency, 
     setFacebookURL, setInstagramURL, setTwitterURL, setLocation, setAddress } from '../../../Redux/ProjectSlice';

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

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAddress(e.target.value));
  };
  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setLocation(e.target.value));
  };
//   const handleBannerUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     dispatch(setBannerUrl(e.target.value));
//   };

  return (
    <form className='form'>
      <div className='input-containers'>
        <label className="label">Add Store Name:</label>
        <input
          required
          type="text"
          value={project.name}
          onChange={handleNameChange}
          className="input"
        />
      </div>

      <div className='input-containers'>
        <label className="label">Add Store Description:</label>
        <input
          type="text"
          value={project.description}
          onChange={handleDescriptionChange}
          className="input"
        />
      </div>

      <div className='input-containers'>
        <label className="label">Store Contact Number:</label>
        <input
          type="tel"
          value={project.phoneNumber}
          onChange={handlePhoneNumberChange}
          className="input"
        />
      </div>

      <div className='input-containers'>
        <label className="label">Store Category:</label>
        <select
          defaultValue={'Ecommerce'}          
          onChange={handleCategoryChange}
          className="input"
        >
          <option value="Ecommerce">Ecommerce</option>
        </select>
      </div>

      <div className='input-containers'>
        <label className="label">Currency:</label>
        <select
          defaultValue="US$"
          value={project.currency}
          onChange={handleCurrencyChange}
          className="select"
        >
          <option value="GHC">Ghanaian Cedi</option>
          <option value="€">Euro</option>
          <option value="£">Pounds</option>
          <option selected value="US$">US Dollar</option>
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

      <div className='input-containers'>
        <label className="label">Your Store Address:</label>
        <input
          type="text"
          value={project.address}
          onChange={handleAddressChange}
          className="input"
        />
      </div>

      <div className='input-containers'>
        <label className="label">Location:</label>
        <input
          type="text"
          value={project.location}
          onChange={handleLocationChange}
          className="input"
        />
      </div>

      {/* <div className='input-containers'>
        <label className="label">Hero Image:</label>
        <input
          type="file"
          // value={project.bannerUrl}
          onChange={handleBannerUrlChange}
          className="input"
        />
      </div> */}
    </form>
  );
};

export default ProjectDetailsForm;
