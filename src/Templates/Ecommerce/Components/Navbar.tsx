import React from "react";
import '../../../assets/styles/templatesStyles/Ecommerce/Navbar.scss';
import Search from "./Search";
import shoppingCart from "../../../assets/svg/templates-svg/🦆 icon _shopping cart outline_.svg";
import { useAppSelector } from "../../../store";
import { Link } from "react-router-dom";


const Navbar: React.FC = () => {
  const cartProducts = useAppSelector((state) => state.cart.products);

  //const cartItemCount = cartProducts.reduce((total, product) => total + product.quantity, 0);
  const cartItemCount = cartProducts.length;

  return (
    <>
      <div className="navbar">
        <h3 className="logo">LOGO</h3>
        <button className="whole-sale-button">Wholesale</button>
        <Search />
        <Link to="/cart" className="cart-link">
          <img src={shoppingCart} alt="shopping cart" />
          {cartItemCount > 0 && <span className="cart-indicator">{cartItemCount}</span>}
        </Link>
        
        <div className="login-signup-buttons">
          <button className="login">Login</button>
          <button className="signup">Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
