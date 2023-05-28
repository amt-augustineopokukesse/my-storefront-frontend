// import React, { useEffect, useState } from 'react'
// import Navbar from '../Components/Navbar';
// import '../../../assets/styles/templatesStyles/Ecommerce/Checkout.scss';
// import '../../../assets/styles/templatesStyles/Ecommerce/Cart.scss';
// import { useAppDispatch, useAppSelector } from '../../../store';
// import { applyTemplateCustomizations } from '../Components/ProductEditUtils';
// //import { decreaseQuantity, increaseQuantity, removeFromCart } from '../../../Redux/CartSlice';
// import { setProject } from '../../../Redux/ProjectSlice';
// import { Link } from 'react-router-dom';
// import ShippingAddressEditModal from '../Components/ShippingAddressEditModal.tsx';
// import { OrderState, initialOrderState } from '../../../Redux/PaymentInitialState.ts';

// interface ShippingAddressState {
//   name: string;
//   phoneNumber: string;
//   address: string;
//   pickupMode: string;
// }

// const Checkout:React.FC = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [shippingAddress, setShippingAddress] = useState<OrderState>(initialOrderState);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const dispatch = useAppDispatch();
  
//   useEffect(() => {
//     const storedProject = localStorage.getItem('project');
//     if (storedProject) {
//       const savedProject = JSON.parse(storedProject);
//       dispatch(setProject(savedProject));
//       //setActive(true);
//     }
//   }, [dispatch]);

//   const project = useAppSelector((state) => state.project);
//   const cartProducts = useAppSelector((state) => state.cart.products);
//   const payment = useAppSelector((state) => state.payment);

//   console.log(payment);
  
//   useEffect(() => {
//     applyTemplateCustomizations(project);
//   }, [project]);

//   // const handleQuantityIncrement = (id: string) => {
//   //   dispatch(increaseQuantity(id));
//   // };
  
//   // const handleQuantityDecrement = (id: string) => {
//   //   dispatch(decreaseQuantity(id));
//   // };
//   // const handleRemove = (id: string) => {
//   //   dispatch(removeFromCart(id));
//   // };

//   const totalAmount = cartProducts.reduce((total, product) => total + (product.price * product.quantity), 0);

//   const handleAddressSubmit = (data: ShippingAddressState) => {
//     setShippingAddress(data);
//     closeModal();
//     dispatch(setCustomerShippingAddress(data));
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="checkout-container">
//         <div className="process-stages">Payment process stages</div>
//         <h2 className="address-header">Shipping Address</h2>
//         <div className="shipping-info">
//           <div className="information">
//             <div className="name-and-number">
//               <h2>{shippingAddress.name}</h2>
//               <p>{shippingAddress.phoneNumber}</p>
//             </div>
//             <div className="address">
//               <p>{shippingAddress.address}</p>
//               <p>{shippingAddress.pickupMode}</p>
//             </div>
//           </div>
//           <div className="change">
//             <button className="change-button" onClick={openModal}>
//               Change
//             </button>
//             {isModalOpen && (
//               <ShippingAddressEditModal
//                 onClose={closeModal}
//                 initialData={shippingAddress}
//                 onSubmit={handleAddressSubmit}
//               />
//             )}
//           </div>
//         </div>
//       </div>
        
//         <div className="checkout">
//           <div className="checkout-amount">
//             GH&#8373; {totalAmount.toLocaleString()}
//           </div>
//           <Link to='/payment' className="checkout-button">
//             Checkout
//           </Link>
//         </div>
//     </>
//   )
// }

// export default Checkout;