import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar';
import '../../../assets/styles/templatesStyles/Ecommerce/Checkout.scss';
import leatherJacketSmall from '../../../assets/images/Templates/Ecommerce/leatherJacketSmall.png';
import { useAppSelector } from '../../../store';
import { applyTemplateCustomizations } from '../Components/ProductEditUtils';


const Checkout:React.FC = () => {
  const project = useAppSelector((state) => state.project);
  console.log(project);

  useEffect(() => {
    applyTemplateCustomizations(project);
  }, [project]);
  
  return (
    <>
      <Navbar />
      <div className='checkout-container'>
        <div className='process-stages'>
          Payment process stages
        </div>
        <h2 className='address-header'>Shipping Address</h2>
        <div className='shipping-info'>
            <div className='information'>
              <div className='name-and-number'>
                <h2>Robert Elinam</h2>
                <p>0240 000 000</p>
              </div>
              <div className='address'>
                <p>Western Region Sekondi Takoradi Metro Takoradi 17/8 old john saba road.</p>
                <p>Self-pick: Takoradi office</p>
              </div>
            </div>
            <div className='change'>
              <button className='change-button'>change</button>
            </div>
          
        </div>
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
      </div>
      
    </>
  )
}

export default Checkout;