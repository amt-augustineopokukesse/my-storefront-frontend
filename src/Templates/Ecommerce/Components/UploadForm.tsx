import React, { ChangeEvent, useState } from 'react';
import { setBannerUrl } from '../../../Redux/ProjectSlice';
import axios from 'axios';
import { useAppDispatch } from '../../../store';
import { AuthLoader } from '../../../components/authComponents/AuthLoader';

const IMAGE_UPLOAD_API_KEY = import.meta.env.VITE_IMAGE_UPLOAD_URL_KEY;

const UploadForm: React.FC = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loader, setLoader] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        // Set the image preview URL
        setImagePreview(reader.result as string);
      };

      // Read the image file as a data URL
      reader.readAsDataURL(file);

      setSelectedFile(file);
    }
  };

  const handleUploadButtonClick = async () => {
    
    if (selectedFile) {
      setLoader(true);
      try {
        const formData = new FormData();
        formData.append('key', IMAGE_UPLOAD_API_KEY);
        formData.append('image', selectedFile);

        const response = await axios.post('https://api.imgbb.com/1/upload', formData);
        const imageUrl = response.data.data.url;
        console.log(imageUrl);
        setLoader(false);
        dispatch(setBannerUrl(imageUrl));
      } catch (error) {
        setLoader(false);
        console.log('An error occurred:', error);
      }
    }
  };

  return (
    
      <form className="form">
        <div className="input-containers">
          <label className="label">Hero Background Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileInputChange}
            className="file-input"
          />
          {imagePreview && (
            <div className="image-preview-container">
              <h4>Image Preview:</h4>
              <div className="image-preview">
                <img src={imagePreview} alt="Preview" />
              </div>
            </div>
          )}
        </div>
        {loader ? <AuthLoader /> : ''}
        <button type="button" onClick={handleUploadButtonClick}>
          Upload
        </button>
      </form>
  );
};

export default UploadForm;


//New code

// import axios from "axios";
// import React, { ChangeEvent, useState } from "react";
// import { setBannerUrl } from "../../../Redux/ProjectSlice";
// import { useAppDispatch } from "../../../store";

// const UploadForm: React.FC = () => {
//   const [imagePreview, setImagePreview] = useState<string | null>(null);
//   // const [selectedFile, setSelectedFile] = useState<string | null>("");
//   const dispatch = useAppDispatch();

//   const handleFileInput = async (e: ChangeEvent<HTMLInputElement>) => {
//     e.preventDefault()
//     if (e.target.files && e.target.files.length > 0) {
      
//       const file = e.target.files[0];
//       previewFile(file);
      
//     }
//   };

//   const previewFile = (file: File) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onloadend = () => {
//       setImagePreview(reader.result as string);
//     };
//   };

//   const handleSubmit = async(e:any) => {
//     e.preventDefault()
//     if (!imagePreview) return;
    
//     const imageData = {
//       imagePreview:imagePreview
//     }
    
//    const sendData = await axios.post(
//      `http://localhost:4000/api/merchant/upload/3samkus@gmail.com`,
//      imageData
//    );
//    const response = sendData?.data;
//    dispatch(setBannerUrl(response?.imgURL));
    
//   };


//   return (
//     <div>
//       <form className="form" onSubmit={handleSubmit}>
//         <div className="input-containers">
//           <label className="label">Hero Background Image:</label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleFileInput}
//             className="file-input"
//           />
//         </div>
//         <button type="submit">button yea</button>
//       </form>
//       {imagePreview && (
//         <div className="image-preview-container">
//           <h4>Image Preview:</h4>
//           <div className="image-preview">
//             <img src={imagePreview} alt="Preview" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UploadForm;
