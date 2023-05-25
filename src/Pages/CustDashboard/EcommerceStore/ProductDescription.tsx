import React, { useEffect } from 'react';
import '../../../assets/styles/templatesStyles/Ecommerce/ProductDescription.scss';
import { useAppDispatch, useAppSelector } from '../../../store';
import { setProject } from '../../../Redux/ProjectSlice';
import { useParams } from 'react-router-dom';
//import StaticProductDescription from '../../../staticDB/StaticProductDescription';
import { decreaseQuantity, increaseQuantity } from '../../../Redux/CartSlice';
import { applyTemplateCustomizations } from '../../../Templates/Ecommerce/Components/ProductEditUtils';
import Navbar from '../../../Templates/Ecommerce/Components/Navbar';
import AddToCart from '../../../Templates/Ecommerce/Components/AddToCart';
import { Footer } from '../../../Templates/Finance/Components/Footer';

const ProductDescription: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storedProject = localStorage.getItem('project');
    if (storedProject) {
      const savedProject = JSON.parse(storedProject);
      dispatch(setProject(savedProject));
      //setActive(true);
    }
  }, [dispatch]);

  const project = useAppSelector((state) => state.project);
  const products = useAppSelector((state) => state.cart.products);
  // console.log(project);

  useEffect(() => {
    applyTemplateCustomizations(project);
  }, [project]);

  const { id } = useParams<{ id: string }>();
  const [product] = products.filter(item => item.id === id);
  const [projectProduct] = project.products.filter(item => item.id === id);
  console.log(projectProduct);
  
  const handleQuantityIncrement = () => {
    dispatch(increaseQuantity(product.id));
  };

  const handleQuantityDecrement = () => {
    dispatch(decreaseQuantity(product.id));
  };

  return (
    <>
      <Navbar />
      {product ? (
        <section className="container">
          <div className="product">
            <div className='product-image'>
              <img src={product.image} />
            </div>
            <div className="product-specs">
              <h2 className="product-name">{product.productName}</h2>
              <div className='rating'>
                {/* <Rating /> */}
                <p className='rating-text'>{product.initialStock} Available</p>
                <p className='rating-text'>Seller: James cottage</p>
              </div>
              <div className="price">
                  {project.currency} {(product.price * product.quantity).toLocaleString()}
              </div>
              
              <div className='number-selector'>
                <p className="minus" onClick={handleQuantityDecrement}>-</p>
                <p className='number'>{product.quantity}</p>
                <p className="plus" onClick={handleQuantityIncrement}>+</p>
              </div>
              <div className="buttons">
                <button className="buy">Buy Now</button>
                <AddToCart product={product}/>
              </div>
            </div>
          </div>
          <div className="details-container">
            <h2 className="details-header">Product Details</h2>
            <ul className='details-text'>
              <li>{product.description}</li>
              
            </ul>
          </div>
        </section>) : (
          'Sorry page unavailable'
        )}
      <Footer />
    </>
  );
};

export default ProductDescription;
