import React, { useEffect, useState } from 'react';
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
//import leatherJacket from '../../../assets/images/Templates/Ecommerce/leather-jacket.png';
import '../../../assets/styles/templatesStyles/Ecommerce/ProductDescription.scss';
//import Rating from '../Components/Rating';
import { useAppDispatch, useAppSelector } from '../../../store';
import { applyTemplateCustomizations } from '../Components/ProductEditUtils';
import { setProject } from '../../../Redux/ProjectSlice';
import { useParams } from 'react-router-dom';
//import StaticProductDescription from '../../../staticDB/StaticProductDescription';
import AddToCart from '../Components/AddToCart';
import { decreaseQuantity, increaseQuantity } from '../../../Redux/CartSlice';
import { InitialProductState, ProductState } from '../../../Redux/ProjectInitialState';

const ProductDescription: React.FC = () => {
  const [product, setProduct] = useState<ProductState>(InitialProductState);
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
  const [storeProduct] = products.filter(item => item.id === id);
  const [projectProduct] = project.products.filter(item => item.id === id);
  console.log(projectProduct);

  useEffect(() => {
    if(storeProduct){
      setProduct(storeProduct)
    } else {
      setProduct(projectProduct);
    }
  });
  
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
        </section>): "" }
      <Footer />
    </>
  );
};

export default ProductDescription;
