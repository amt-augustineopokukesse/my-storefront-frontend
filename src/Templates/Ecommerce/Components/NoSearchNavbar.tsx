import React from "react";
import '../../../assets/styles/templatesStyles/Ecommerce/Navbar.scss';
import '../../../assets/styles/templatesStyles/Ecommerce/Search.scss';
import shoppingCart from "../../../assets/svg/templates-svg/🦆 icon _shopping cart outline_.svg";
import { useAppDispatch, useAppSelector } from "../../../store";
import { Link, useLocation } from "react-router-dom";
import { resetAuthState } from "../../../Redux/Authentication/AuthSlice";
import Search from "./Search";

const NoSearchNavbar: React.FC = () => {

  const project = useAppSelector((state) => state.project);

  const cartProducts = useAppSelector((state) => state.cart.products);

  //const cartItemCount = cartProducts.reduce((total, product) => total + product.quantity, 0);
  const cartItemCount = cartProducts.length;

  let loggedIn = window.localStorage.getItem('token');
  const dispatch = useAppDispatch();
  const location = useLocation();

  const isHomePage = location.pathname === '/dashboard/project/templates/edit-template-page' || location.pathname === '/stores/ecommerce';

  const signOut = () => {
    window.localStorage.clear();
    loggedIn = ""
    dispatch(resetAuthState());
    window.location.href = '/';
  }

  return (
    <>
      <div className="navbar">
        <Link to={"."}><h3 className="logo">{project.name}</h3></Link>
        <div className="search-component">
          {isHomePage && <Search />}
        </div>
      
        <Link to="/cart" className="cart-link">
          <img src={shoppingCart} alt="shopping cart" />
          {cartItemCount > 0 && <span className="cart-indicator">{cartItemCount}</span>}
        </Link>
        
        <div className="login-signup-buttons">
        { !loggedIn && <Link to='/login'><button className="login">Login</button> </Link>}
        { !loggedIn && <Link to='/signup'><button className="signup">Sign Up</button></Link>}
        {loggedIn &&  <button className="signup" onClick={signOut}>Logout</button>}
        </div>
      </div>
    </>
  );
};

export default NoSearchNavbar;
