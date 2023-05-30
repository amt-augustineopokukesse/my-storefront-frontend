import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductState } from '../Templates/ProjectInitialState';

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
        (product) => product.id === productToAdd.id
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
      const productId = action.payload;
      state.products = state.products.filter(
        (product) => product.id !== productId
      );
    },
    clearCart: (state) => {
      state.products = [];
    },
    increaseQuantity(state, action: PayloadAction<string>) {
        const productId = action.payload;
        const product = state.products.find((p) => p.id === productId);
        if (product) {
          product.quantity += 1;
        }
    },
      decreaseQuantity(state, action: PayloadAction<string>) {
        const productId = action.payload;
        const product = state.products.find((p) => p.id === productId);
        if (product && product.quantity > 0) {
          product.quantity -= 1;
        }
    },
  },
});

// Actions
export const { addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = CartSlice.actions;

// Reducer
export default CartSlice.reducer;
