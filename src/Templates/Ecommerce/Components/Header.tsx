import React from 'react';
import '../../../assets/styles/templatesStyles/Ecommerce/Header.scss';

const Header: React.FC = () => {
  return (
    <>
      <div className="header">
        <ul className="menu">
          <li className="menu-item">Women</li>
          <li className="menu-item">Men</li>
          <li className="menu-item">Kids</li>
          <li className="menu-item">Accessories</li>
          <li className="menu-item">Wishlist</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
