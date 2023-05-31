import React, { useEffect, useState } from 'react';
import Footer from "../Components/Footer";
//awaiting ..../import Navbar from "../Components/Navbar";
import '../../../assets/styles/templatesStyles/Ecommerce/Checkout.scss';
import '../../../assets/styles/templatesStyles/Ecommerce/Cart.scss';
import { useAppDispatch, useAppSelector } from '../../../store';
import { applyTemplateCustomizations } from '../Components/ProductEditUtils';
import { MdCancel } from "react-icons/md";
import ShippingAddressEditModal from '../Components/ShippingAddressEditModal';
import { OrderState, initialOrderState } from '../../../Redux/PaymentInitialState';
import { makeOrder } from '../../../Redux/PaymentSlice';
import { setProject } from '../../../Redux/ProjectSlice';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../../../Redux/CartSlice';

const Cart:React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storedProject = localStorage.getItem('project');
    if (storedProject) {
      const savedProject = JSON.parse(storedProject);
      dispatch(setProject(savedProject));
    }
  }, [dispatch]);

  const project = useAppSelector((state) => state.project);

  useEffect(() => {
    applyTemplateCustomizations(project);
  }, [project]);
  
  const cartProducts = useAppSelector((state) => state.cart.products);
  const cartItemCount = cartProducts.length;
  const totalAmount = cartProducts.reduce((total, product) => total + (product.price * product.quantity), 0);


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState<OrderState>({
    ...initialOrderState, 
    shipping_reciepient_names: '',
    products: cartProducts,
    amount: totalAmount,
    userId: '',
  });

  useEffect(() => {
    const fetchCustomer = () => {
      const customer = localStorage.getItem("customer");
      if (customer) {
        const parsedCustomer = JSON.parse(customer);
        setOrderDetails((prevOrderDetails) => ({
          ...prevOrderDetails,
          shipping_reciepient_names: `${parsedCustomer.first_name} ${parsedCustomer.last_name}`,
          userId: parsedCustomer.id || '',
        }));
      }
    };
  
    fetchCustomer();
  }, []);

  useEffect(() => {
    setOrderDetails(prevOrderDetails => ({
      ...prevOrderDetails,
      amount: totalAmount,
      products: cartProducts
    }));
  }, [totalAmount, cartProducts]);
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOrderSubmit = async (data: OrderState) => {
    const updatedOrderDetails = {
      ...orderDetails,
      ...data
    };
    setOrderDetails(updatedOrderDetails);
    closeModal();
    await dispatch(makeOrder(updatedOrderDetails));
    
  };
  

  const handleQuantityIncrement = (id: string) => {
    dispatch(increaseQuantity(id));
  };
  
  const handleQuantityDecrement = (id: string) => {
    dispatch(decreaseQuantity(id));
  };
  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };
  

  return (
    <>
      {/* <Navbar/> */}
      <section className="container">
        <h2 className="container-header">Cart ({cartItemCount})</h2>
        {cartProducts.map(product => (
          <div className="cart-info">
            <div className='cart-div-one'>
              <div style={{backgroundImage: `url(${product.image})`}} className='cart-image-div'></div>
              <div className='cart-product-detail'>
                <h5 className='product-name'><b>Name: </b>{product.productName}</h5>
                <p className='product-seller'><b>Seller: </b>{project.name}</p>
                <p className='stock-available'><b>Stock: </b>{product.initialStock} Available</p>
              </div>
            </div>
            <div className='cart-div-two'>
              <div className='math-calc'>
                <p className='math-calc-sign' onClick={() => handleQuantityDecrement(product.id)}>—</p>
                <p className='math-space'>{product.quantity}</p>
                <p className='math-calc-sign' onClick={() => handleQuantityIncrement(product.id)}>+</p>
              </div>
              <h4 className='product-value'>{project.currency} {(product.price * product.quantity).toLocaleString()}</h4>
            </div>
             
              <MdCancel onClick={() => handleRemove(product.id)} />
            
          </div>
        ))}
        
        <div className="checkout">
          <div className="checkout-amount">
            {project.currency} {totalAmount.toLocaleString()}
          </div>
          <div onClick={openModal} className="checkout-button">
            Order Now
          </div>
        </div>
        <div className="shipping-info">
          <div className="information">
            <div className="name-and-number">
              <h2>{orderDetails.shipping_reciepient_names}</h2>
              <p>{orderDetails.shipping_reciepient_contacts}</p>
            </div>
            <div className="address">
              <p>{orderDetails.shipping_reciepient_address}</p>
              <p>{orderDetails.pickupMode}</p>
            </div>
          </div>
          <div className="change">
            <button className="change-button" onClick={openModal}>
              Change
            </button>
            {isModalOpen && (
              <ShippingAddressEditModal
                onClose={closeModal}
                initialData={orderDetails}
                onSubmit={handleOrderSubmit}
              />
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cart;
