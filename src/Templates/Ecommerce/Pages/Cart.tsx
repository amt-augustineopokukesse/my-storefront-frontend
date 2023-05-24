import React, { useEffect } from 'react';
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
//import leatherJacketSmall from '../../../assets/images/Templates/Ecommerce/leatherJacketSmall.png';
import '../../../assets/styles/templatesStyles/Ecommerce/Cart.scss';
import { useAppDispatch, useAppSelector } from '../../../store';
import { applyTemplateCustomizations } from '../Components/ProductEditUtils';
import StaticCart from '../../../staticDB/StaticCart';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../../../Redux/CartSlice';
import { setProject } from '../../../Redux/ProjectSlice';
import { Link } from 'react-router-dom';

const Cart:React.FC = () => {
  const dispatch = useAppDispatch();
  
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
      {cartProducts.length > 0 ? (<section className="container">
        <h2 className="container-header">Cart ({cartItemCount})</h2>
        {cartProducts.map(product => (
          <div className="cart-info">
            <img src={product.image} className='cart-product-image'/>
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
            <div className="cart-buttons">
              <button className="remove" onClick={() => handleRemove(product.id)}>Remove</button>
              <button className="buy">Buy Now</button>
            </div>
          </div>
        ))}
        
        <div className="checkout">
          <div className="checkout-amount">
            GH&#8373; {totalAmount.toLocaleString()}
          </div>
          <Link to='/checkout' className="checkout-button">
            Checkout
          </Link>
        </div>
      </section>) : (
        <StaticCart />
      )}
      <Footer />
    </>
  );
};

export default Cart;
