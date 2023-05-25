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
        <ul className="menu">
          <Link to={"."}><li className="menu-item">Home</li></Link>
          {
            project.products.length !== 0 ?
                categories.map(category => (
                  <a href={`#${category}`}><li key={category} className="menu-item">{category}</li></a>
                ))
            : ""
          }
        </ul>
      </div>
    </>
  );
};

export default Header;
