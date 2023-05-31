import React from "react";
import '../../../assets/styles/templatesStyles/Ecommerce/Navbar.scss';
import shoppingCart from "../../../assets/svg/templates-svg/🦆 icon _shopping cart outline_.svg";
import { useAppDispatch, useAppSelector } from "../../../store";
import { Link } from "react-router-dom";
import '../../../assets/styles/templatesStyles/Ecommerce/Search.scss';
import searchLogo from '../../../assets/svg/templates-svg/icon-search.svg';
import { MdKeyboardBackspace } from "react-icons/md";

interface cb {
  sendSearchValue: (value: string) => void;
}

const Navbar: React.FC<cb> = ({ sendSearchValue }) => {

  const customerRole = window.localStorage.getItem('customer');

  const project = useAppSelector((state) => state.project);

  const cartProducts = useAppSelector((state) => state.cart.products);

  const cartItemCount = cartProducts.length;

  let loggedIn = window.localStorage.getItem('token');
  const dispatch = useAppDispatch();


  const sendData = (value: string) => {
    sendSearchValue(value);
  }

  return (
    <>
      <div className="navbar">
      <div className="login-signup-buttons">
          <Link to={ loggedIn && customerRole ? "/custdashboard/" : loggedIn && !customerRole ? "/dashboard/" : "."}><button className="signup"><MdKeyboardBackspace />Dashboard</button></Link>
        </div>
        <Link to={"."}><h3 className="logo">{project.name}</h3></Link>
        <form className='search'>
          <input
            type="text"
            placeholder="Search any product..."
            onChange={(e) => sendData(e.target.value)}            
          />
          <img className="button" src={searchLogo} alt="Search Logo" />
        </form>
        <Link to="/cart" className="cart-link">
          <img src={shoppingCart} alt="shopping cart" />
          {cartItemCount > 0 && <span className="cart-indicator">{cartItemCount}</span>}
        </Link>
      </div>
    </>
  );
};

export default Navbar;
