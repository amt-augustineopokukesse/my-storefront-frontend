import React from 'react';
import '../../../assets/styles/templatesStyles/Ecommerce/Header.scss';
import { useAppSelector } from '../../../store';
import { extractCategories } from './ProductEditUtils';
import { Link } from 'react-router-dom';

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
            <li className="menu-item"><Link to="/stores/ecommerce">Home</Link></li>
        </ul>
        )}
        
      </div>
    </>
  );
};

export default Header;
