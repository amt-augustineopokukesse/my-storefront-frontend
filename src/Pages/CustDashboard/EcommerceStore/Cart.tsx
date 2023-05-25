import React, { useEffect } from 'react';
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import leatherJacketSmall from '../../../assets/images/Templates/Ecommerce/leatherJacketSmall.png';
import '../../../assets/styles/templatesStyles/Ecommerce/Cart.scss';
import { useAppSelector } from '../../../store';
import { applyTemplateCustomizations } from '../Components/ProductEditUtils';

const Cart:React.FC = () => {
  const project = useAppSelector((state) => state.project);
  const cartProducts = useAppSelector((state) => state.cart);
  console.log(cartProducts);

  useEffect(() => {
    applyTemplateCustomizations(project);
  }, [project]);

  return (
    <>
      <Navbar />
      <section className="container">
        <h2 className="container-header">Cart (1)</h2>
        <div className="cart-info">
          <img src={leatherJacketSmall} className='cart-product-image'/>
          <div className="cart-product-info">
            <h2 className="cart-product-name">Leather Jacket with polished cotton</h2>
            <p className="cart-product-seller">Seller: James Cottage</p>
            <p className="product-number-available">2 Available</p>
          </div>
          <div className="cart-product-price">
            GH&#8373; 2,093.00
          </div>
          <div className="quantity">
            <div className='number-selector'>
              <p className="minus">-</p>
              <p className='number'>1</p>
              <p className="plus">+</p>
            </div>
          </div>
          <div className="cart-buttons">
            <button className="remove">Remove</button>
            <button className="buy">Buy Now</button>
          </div>
        </div>
        <div className="checkout">
          <div className="checkout-amount">
            GH&#8373; 2,093.00
          </div>
          <button className="checkout-button">
            Checkout
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cart;
