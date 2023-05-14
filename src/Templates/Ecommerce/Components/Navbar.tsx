import React from "react";
import '../../../assets/styles/templatesStyles/Ecommerce/Navbar.scss';
import Search from "./Search";
import shoppingCart from "../../../assets/svg/templates-svg/🦆 icon _shopping cart outline_.svg";


const Navbar: React.FC = () => {
  return (
    <>
      <div className="navbar">
        <h3 className="logo">LOGO</h3>
        <button className="whole-sale-button">Wholesale</button>
        <Search />
        <img src={shoppingCart} alt="shopping cart" />
        
        <div className="login-signup-buttons">
          <button className="login">Login</button>
          <button className="signup">Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
