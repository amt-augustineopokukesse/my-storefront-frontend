import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductState } from './ProjectInitialState';

// interface CartProduct {
//   productName: string;
//   description: string;
//   price: number;
//   image: string;
//   quantity: number;
// }

interface ProductQuantity {
    quantity: number;
}

interface CartState {
    products: (ProductState & ProductQuantity)[];
}

const initialState: CartState = {
  products: [],
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductState>) => {
      const productToAdd = action.payload;
      const existingProduct = state.products.find(
        (product) => product.productName === productToAdd.productName
      );

      if (existingProduct) {
        // If the product already exists in the cart, update its quantity
        existingProduct.quantity += 1;
      } else {
        // Otherwise, add the product to the cart
        state.products.push({...productToAdd, quantity:1});
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const productName = action.payload;
      state.products = state.products.filter(
        (product) => product.productName !== productName
      );
    },
    clearCart: (state) => {
      state.products = [];
    },
  },
});

// Actions
export const { addToCart, removeFromCart, clearCart } = CartSlice.actions;

// Reducer
export default CartSlice.reducer;
