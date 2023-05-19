import React, { ChangeEvent, useState } from 'react';
//import { setBannerUrl } from '../../../Redux/ProjectSlice';
//import axios from 'axios';

const UploadForm: React.FC = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleBackgroundImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        // Set the image preview URL
        setImagePreview(reader.result as string);
      };

      // Read the image file as a data URL
      reader.readAsDataURL(file);
      //const imageUrl  = await axios.post('https://storefrontsmes-api.amalitech-dev.net/api/merchant/upload', file);
      
      //dispatch(setBannerUrl(file));
    }
  };

  return (
    <div>
      <form className="form">
        <div className="input-containers">
          <label className="label">Hero Background Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleBackgroundImageChange}
            className="file-input"
          />
        </div>
      </form>
      {imagePreview && (
        <div className="image-preview-container">
          <h4>Image Preview:</h4>
          <div className="image-preview">
            <img src={imagePreview} alt="Preview" />
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadForm;
