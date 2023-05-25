import React, {useState} from 'react';
import '../../../assets/styles/templatesStyles/Ecommerce/CustomizationModal.scss';

const ShippingAddressEditModal: React.FC<{
  onClose: () => void;
  initialData: any;
  onSubmit: (data: any) => void;
}> = ({ onClose, initialData, onSubmit }) => {
  const [name, setName] = useState(initialData.name);
  const [phoneNumber, setPhoneNumber] = useState(initialData.phoneNumber);
  const [address, setAddress] = useState(initialData.address);
  const [pickupMode, setPickupMode] = useState(initialData.pickupMode);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      name,
      phoneNumber,
      address,
      pickupMode
    };
    onSubmit(data);
  };  
  
  return (
    <div className="customization-modal">
      <div className="shipping-address-content">
      <h2>Edit Shipping Address</h2>
      <form onSubmit={handleFormSubmit} className='shipping-info-form'>
        <div className='shipping-form-item'>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='shipping-form-item'>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className='shipping-form-item'>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className='shipping-form-item'>
          <label htmlFor="pickupMode">Mode of Pickup:</label>
          <input
            type="text"
            id="pickupMode"
            value={pickupMode}
            onChange={(e) => setPickupMode(e.target.value)}
          />
        </div>

        <button className='save-shipping-info' type="submit">Save</button>
      </form>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ShippingAddressEditModal;

