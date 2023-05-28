import React from "react";
import '../../../assets/styles/templatesStyles/Ecommerce/Navbar.scss';
import shoppingCart from "../../../assets/svg/templates-svg/🦆 icon _shopping cart outline_.svg";
import { useAppDispatch, useAppSelector } from "../../../store";
import { Link } from "react-router-dom";
import { resetAuthState } from "../../../Redux/AuthSlice";
import '../../../assets/styles/templatesStyles/Ecommerce/Search.scss';
import searchLogo from '../../../assets/svg/templates-svg/icon-search.svg';

interface cb {
  sendSearchValue: (value: string) => void;
}
const Navbar: React.FC<cb> = ({ sendSearchValue }) => {

  // const { sendSearchValue } = props;

  const project = useAppSelector((state) => state.project);

  const cartProducts = useAppSelector((state) => state.cart.products);

  //const cartItemCount = cartProducts.reduce((total, product) => total + product.quantity, 0);
  const cartItemCount = cartProducts.length;

  let loggedIn = window.localStorage.getItem('token');
    const dispatch = useAppDispatch();

    const signOut = () => {
        window.localStorage.clear();
        loggedIn = ""
        dispatch(resetAuthState());
        // navigate('/');
        window.location.href = '/';
    }

  const sendData = (value: string) => {
    sendSearchValue(value);
  }

  return (
    <>
      <div className="navbar">
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
        
        <div className="login-signup-buttons">
        { !loggedIn && <Link to='/login'><button className="login">Login</button> </Link>}
        { !loggedIn && <Link to='/signup'><button className="signup">Sign Up</button></Link>}
        {loggedIn &&  <button className="signup" onClick={signOut}>Logout</button>}
        </div>
      </div>
    </>
  );
};

export default Navbar;
