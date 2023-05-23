import React from 'react';
import '../../../assets/styles/templatesStyles/Ecommerce/Header.scss';
import { useAppSelector } from '../../../store';
import { extractCategories } from './ProductEditUtils';

const Header: React.FC = () => {
  const project = useAppSelector((state) => state.project);

  const categories = extractCategories(project);

  return (
    <>
      <div className="header">
        {project.products.length !== 0 ? (
          <ul className="menu">
            {categories.map(category => (
              <li key={category} className="menu-item">{category}</li>
            ))}
        </ul>
        ) : (
          <ul className="menu">
            <li className="menu-item">Women</li>
            <li className="menu-item">Men</li>
            <li className="menu-item">Kids</li>
            <li className="menu-item">Accessories</li>
            <li className="menu-item">Wishlist</li>
        </ul>
        )}
        
      </div>
    </>
  );
};

export default Header;
