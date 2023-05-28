import React, { useEffect, useState } from 'react';
import AddToCart from './AddToCart';
import { useAppSelector } from '../../../store';
import '../../../assets/styles/templatesStyles/Ecommerce/CustomizedMain.scss';
import { ProductState } from '../../../Redux/ProjectInitialState';
import { Link } from 'react-router-dom';

interface GroupedProducts {
  [category: string]: ProductState[];
}

interface cb {
  searchValue: string;
}

const CustomizedMain: React.FC<cb> = (props) => {

  const { searchValue } = props;

  const [ search, setSearch ] = useState('');

  useEffect(() => {
    setSearch(searchValue);
  }, [searchValue])

  const project = useAppSelector((state) => state.project);

  // Group products by category
  const groupedProducts: GroupedProducts = project.products.reduce((grouped: GroupedProducts, product: ProductState) => {
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
          <div id={category}  key={category} className='customised-section'>
            <div className="section">
              <h2 className="section-name">{category}</h2>
              <p className="more">more...</p>
            </div>

            <div className="section-items">
              {products.filter((item) => item.productName.toLowerCase().includes(search)).map((product) => (
                <div className="tile">
                  <Link to={`/product/${product.id}`} key={product.id} className='link'>
                    <div className="image">
                      <img src={product.image} alt="" className="item-image" />
                    </div>
                    <p>{product.productName}</p>
                    <div className="price">
                      GH&#8373; {product.price}
                    </div>
                    <div className="available">
                      <p className="number-available">{product.initialStock} Available</p>
                    </div>
                  </Link>
                  <AddToCart product={product}/>
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
