import React, { useEffect, useState } from 'react';
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import '../../../assets/styles/templatesStyles/Ecommerce/Checkout.scss';
import '../../../assets/styles/templatesStyles/Ecommerce/Cart.scss';
import { useAppDispatch, useAppSelector } from '../../../store';
import { applyTemplateCustomizations } from '../Components/ProductEditUtils';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../../../Redux/CartSlice';
import { setProject } from '../../../Redux/ProjectSlice';
import { MdCancel } from "react-icons/md";
import ShippingAddressEditModal from '../Components/ShippingAddressEditModal';
import { setCustomerShippingAddress } from '../../../Redux/PaymentSlice';

interface ShippingAddressState {
  name: string;
  phoneNumber: string;
  address: string;
  pickupMode: string;
}

type user = {
  [key: string]: any;
}

const Cart:React.FC<user> = (props) => {
  const dispatch = useAppDispatch();

  const { custUser } = props;
  const [ customerExists, setCustomerExists ] = useState(custUser)

  useEffect(() => {
    const customer = localStorage.getItem("customer");
    if (customer) {
        setCustomerExists(JSON.parse(customer));
    }
  }, [])
  

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shippingAddress, setShippingAddress] = useState<ShippingAddressState>({
    name: '',
    phoneNumber: '',
    address: '',
    pickupMode: '',
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddressSubmit = (data: ShippingAddressState) => {
    setShippingAddress(data);
    closeModal();
    dispatch(setCustomerShippingAddress(data));
  };

  
  useEffect(() => {
    const storedProject = localStorage.getItem('project');
    if (storedProject) {
      const savedProject = JSON.parse(storedProject);
      dispatch(setProject(savedProject));
      //setActive(true);
    }
  }, [dispatch]);

  const project = useAppSelector((state) => state.project);
  const cartProducts = useAppSelector((state) => state.cart.products);
  const payment = useAppSelector((state) => state.payment);

  console.log(payment);
  
  useEffect(() => {
    applyTemplateCustomizations(project);
  }, [project]);

  
  useEffect(() => {
    const storedProject = localStorage.getItem('project');
    if (storedProject) {
      const savedProject = JSON.parse(storedProject);
      dispatch(setProject(savedProject));
      //setActive(true);
    }
  }, [dispatch]);

  
  useEffect(() => {
    applyTemplateCustomizations(project);
  }, [project]);

  const handleQuantityIncrement = (id: string) => {
    dispatch(increaseQuantity(id));
  };
  
  const handleQuantityDecrement = (id: string) => {
    dispatch(decreaseQuantity(id));
  };
  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const cartItemCount = cartProducts.reduce((total, product) => total + product.quantity, 0);
  const totalAmount = cartProducts.reduce((total, product) => total + (product.price * product.quantity), 0);

  return (
    <>
      <Navbar />
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
            {/* <img src={product.image} className='cart-product-image'/>
            <div className="cart-product-info">
              <h2 className="cart-product-name">{product.productName}</h2>
              <p className="cart-product-seller">Seller: {project.name}</p>
              <p className="product-number-available">{product.initialStock} available</p>
            </div>
            <div className="cart-product-price">
              {project.currency} {(product.price * product.quantity).toLocaleString()}
            </div>
            <div className="quantity">
              <div className="number-selector">
                <p className="minus" onClick={() => handleQuantityDecrement(product.id)}>
                  -
                </p>
                <p className="number">{product.quantity}</p>
                <p className="plus" onClick={() => handleQuantityIncrement(product.id)}>
                  +
                </p>
              </div>
            </div>
            
             */}
             
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
              <h2>{ customerExists? customerExists.first_name + " " +  customerExists.last_name : "Customer"}</h2>
              <p>No contact added for Delivery</p>
            </div>
            <div className="address">
              <p>No address added for delivery</p>
              <p>No pickup mode set for delivery</p>
            </div>
          </div>
          <div className="change">
            <button className="change-button" onClick={openModal}>
              Change
            </button>
            {isModalOpen && (
              <ShippingAddressEditModal
                onClose={closeModal}
                initialData={shippingAddress}
                onSubmit={handleAddressSubmit}
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
