import React, { useEffect } from 'react';
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import leatherJacket from '../../../assets/images/Templates/Ecommerce/leather-jacket.png';
import '../../../assets/styles/templatesStyles/Ecommerce/ProductDescription.scss';
import Rating from '../Components/Rating';
import { useAppDispatch, useAppSelector } from '../../../store';
import { applyTemplateCustomizations } from '../Components/ProductEditUtils';
import { setProject } from '../../../Redux/ProjectSlice';

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
  return (
    <>
      <Navbar />
      <section className="container">
        <div className="product">
          <div className='product-image'>
            <img src={leatherJacket} />
          </div>
          <div className="product-specs">
            <h2 className="product-name">Leather Jacket with polished cotton</h2>
            <div className='rating'>
              <Rating />
              <p className='rating-text'>2 Available</p>
              <p className='rating-text'>Seller: James cottage</p>
            </div>
            <div className="price">
                GH&#8373; 2,093.00
            </div>
            <div className="colors">
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
            </div>
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
            <li>100% New Brand and High Quality</li>
            <li>Main Material:Imitation Leather</li>
            <li>Color:Brown,Black</li>
            <li>Size:M/L/XL/2XL/3XL</li>
            <li>M=shoulder=42cm=16.38 in=chest=92cm=35.88 in=length=57cm=22.23 in=sleeve=58cm=22.62 in</li>
            <li>L=shoulder=43cm=16.77 in=chest=96cm=37.44 in=length=58cm=22.62 in=sleeve=59cm=23.01 in</li>
            <li>XL=shoulder=44cm=17.16 in=chest=100cm=39 in=length=60cm=23.4 in=sleeve=61cm=23.79 in</li>
            <li>2XL=shoulder=45cm=17.55 in=chest=104cm=40.56 in=length=61cm=23.79 in=sleeve=62cm=24.18 in</li>
            <li>3XL=shoulder=46cm=17.94 in=chest=108cm=42.12 in=length=63cm=24.57 in=sleeve=64cm=24.96 in</li>
            <li>Package:1 x Jacket</li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDescription;
