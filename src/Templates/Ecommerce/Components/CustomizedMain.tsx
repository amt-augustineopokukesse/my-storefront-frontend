import React from 'react';
import AddToCart from './AddToCart';
import { useAppSelector } from '../../../store';
import '../../../assets/styles/templatesStyles/Ecommerce/CustomizedMain.scss';
import { ProductState } from '../../../Redux/ProjectInitialState';

interface GroupedProducts {
  [category: string]: ProductState[];
}

const CustomizedMain: React.FC = () => {
  const project = useAppSelector((state) => state.project);

  // Group products by category
  const groupedProducts: GroupedProducts = project.products.reduce((grouped, product) => {
    if (!grouped[product.category]) {
      grouped[product.category] = [];
    }
    grouped[product.category].push(product);
    return grouped;
  }, {} as GroupedProducts); // Specify the type assertion here

  return (
    <section className="main-container">
      <div className="main-content">
        <h2 className="content-header">Available Products</h2>

        {/* Display products by categories */}
        {Object.entries(groupedProducts).map(([category, products]) => (
          <div key={category} className='customised-section'>
            <div className="section">
              <h2 className="section-name">{category}</h2>
              <p className="more">more...</p>
            </div>

            <div className="section-items">
              {products.map((product) => (
                <div className="tile" key={product.productName}>
                  <div className="image">
                    <img src={product.image} alt="" className="item-image" />
                    <p>{product.productName}</p>
                  </div>
                  <div className="price">
                    GH&#8373; {product.price}
                  </div>
                  <div className="available">
                    <p className="number-available">{product.initialStock} Available</p>
                    <AddToCart />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomizedMain;
