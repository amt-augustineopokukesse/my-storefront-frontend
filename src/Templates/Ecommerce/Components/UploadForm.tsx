import React, { ChangeEvent, useState } from 'react';
import { setBannerUrl } from '../../../Redux/ProjectSlice';
import axios from 'axios';
import { useAppDispatch } from '../../../store';


const IMAGE_UPLOAD_API_KEY = import.meta.env.VITE_IMAGE_UPLOAD_URL_KEY;


const UploadForm: React.FC = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const dispatch = useAppDispatch();
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
  
      try {
        const formData = new FormData();
        formData.append('key', IMAGE_UPLOAD_API_KEY);
        formData.append('image', file);
  
        const response = await axios.post('https://api.imgbb.com/1/upload', formData);
        const imageUrl = response.data.data.url;
        console.log(imageUrl);
        dispatch(setBannerUrl(imageUrl));
      } catch (error) {
        console.log('An error occurred:', error);
      }
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
