import React, { useEffect } from 'react';
import '../../../assets/styles/templatesStyles/Ecommerce/AddToCart.scss';
import { ProductState } from '../../../Redux/ProjectInitialState';
import { useAppDispatch, useAppSelector } from '../../../store';
import { addToCart } from '../../../Redux/CartSlice';
interface AddToCartProps {
  product: ProductState;
}

const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector(state => state.cart);

  useEffect(() => {
    console.log(cartProducts);
  }, [cartProducts]);
  

  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(addToCart(product));
  }

  return (
    <>
      <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
    </>
  );
};

export default AddToCart;
