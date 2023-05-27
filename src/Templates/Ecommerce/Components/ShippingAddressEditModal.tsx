import React, { useState } from 'react';
import '../../../assets/styles/templatesStyles/Ecommerce/CustomizationModal.scss';
import { OrderState } from '../../../Redux/PaymentInitialState';

const ShippingAddressEditModal: React.FC<{
  onClose: () => void;
  initialData: OrderState;
  onSubmit: (data: OrderState) => void;
}> = ({ onClose, initialData, onSubmit }) => {
  const [name, setName] = useState(initialData.shipping_reciepient_names);
  const [phoneNumber, setPhoneNumber] = useState(initialData.shipping_reciepient_contacts);
  const [address, setAddress] = useState(initialData.shipping_reciepient_address);
  const [pickupMode, setPickupMode] = useState('Self Pickup');
  const [paymentMethod, setPaymentMethod] = useState('visa');
  const [associatedAccountNumber, setAssociatedAccountNumber] = useState('');

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data: OrderState = {
      shipping_reciepient_names: name,
      shipping_reciepient_contacts: phoneNumber,
      shipping_reciepient_address: address,
      pickupMode: pickupMode,
      payment_method: paymentMethod,
      associated_account_number: associatedAccountNumber,
      products: initialData.products,
      amount: initialData.amount,
      userId: initialData.userId,
      project_id: initialData.project_id,
    };
    onSubmit(data);
  };

  return (
    <div className="customization-modal">
      <div className="shipping-address-content">
        <h2>Edit Shipping Address</h2>
        <form onSubmit={handleFormSubmit} className="shipping-info-form">
          <div className="shipping-form-item">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="shipping-form-item">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="shipping-form-item">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="shipping-form-item">
            <label htmlFor="pickupMode">Mode of Pickup:</label>
            <select
              id="pickupMode"
              value={pickupMode}
              onChange={(e) => setPickupMode(e.target.value)}
            >
              <option value="Self Pickup">Self Pickup</option>
              <option value="Delivery">Delivery</option>
            </select>
          </div>
          <div className="shipping-form-item">
            <label htmlFor="paymentMethod">Payment Method:</label>
            <select
              id="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="visa">Visa</option>
            </select>
          </div>
          <div className="shipping-form-item">
            <label htmlFor="associatedAccountNumber">Associated Account Number:</label>
            <input
              type="text"
              id="associatedAccountNumber"
              value={associatedAccountNumber}
              onChange={(e) => setAssociatedAccountNumber(e.target.value)}
            />
          </div>
          <button className="save-shipping-info" type="submit">
            Save
          </button>
        </form>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ShippingAddressEditModal;
