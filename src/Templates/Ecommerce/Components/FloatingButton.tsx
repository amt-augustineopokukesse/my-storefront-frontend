import React, { useState } from 'react';
import CustomizationModal from '../../CustomizationModal';
import '../../../assets/styles/templatesStyles/Ecommerce/FloatingButton.scss';

const FloatingButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  //const project = useAppSelector((state) => state.project);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // const handleSave = async () => {
  //   setLoader(true);
  //   console.log('Saving project:', project); // Check the project data before dispatching
  //   const response = await dispatch(saveProject(project));
  //   console.log('Save response:', response); // Check the response data after the API call
  //   setLoader(false);
  // }

  return (
    <div className="floating-button-container">
      <button className="floating-button" onClick={openModal}>
        Customize
      </button>
      {isModalOpen && <CustomizationModal onClose={closeModal} />}
    </div>
  );
};

export default FloatingButton;
