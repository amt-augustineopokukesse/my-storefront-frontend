import React, { useEffect } from 'react';
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
//import leatherJacket from '../../../assets/images/Templates/Ecommerce/leather-jacket.png';
import '../../../assets/styles/templatesStyles/Ecommerce/ProductDescription.scss';
//import Rating from '../Components/Rating';
import { useAppDispatch, useAppSelector } from '../../../store';
import { applyTemplateCustomizations } from '../Components/ProductEditUtils';
import { setProject } from '../../../Redux/ProjectSlice';
import { useParams } from 'react-router-dom';
import StaticProductDescription from '../../../staticDB/StaticProductDescription';

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
  console.log(project);

  useEffect(() => {
    applyTemplateCustomizations(project);
  }, [project]);

  const { productName } = useParams<{ productName: string }>();
  const [product] = project.products.filter(item => item.productName === productName);
  console.log(product);

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
                  GH&#8373; {product.price}
              </div>
              {/* <div className="colors">
                <button className="color-button black">Black</button>
                <button className="color-button brown">Brown</button>
                <button className="color-button grey">Grey</button>
              </div>
              <p className="size-text">Size</p>
              <div className="sizes">
                <button className="size medium">M</button>
                <button className="size large">L</button>
                <button className="size extra">X</button>
                <button className="size xlarge">XL</button>
                <button className="size xxlarge">XXL</button>
              </div> */}
              <div className='number-selector'>
                <p className="minus">-</p>
                <p className='number'>1</p>
                <p className="plus">+</p>
              </div>
              <div className="buttons">
                <button className="buy">Buy Now</button>
                <button className="cart">Add to cart</button>
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
          <StaticProductDescription />
        )}
      <Footer />
    </>
  );
};

export default ProductDescription;
