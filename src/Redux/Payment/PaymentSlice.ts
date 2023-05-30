import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrderState, PaymentDetails, PaymentState } from './PaymentInitialState';
import axios, { AxiosError } from 'axios';

export const initialPaymentState: PaymentState = {
  orderDetails: {
    shipping_reciepient_names: '',
    shipping_reciepient_contacts: '',
    shipping_reciepient_address: '',
    pickupMode: '',
    project_id: '',
    products: [],
    userId: '',
    amount: 0,
    payment_method: '',
    associated_account_number: '',
  },
  paymentDetails: {
    paymentMethod: 'visa',
    bank: '',
    accountHolder: '', 
    branch: '',
    cardNumber: '', 
    cvc: '',
    expiryDate: '',
  },
};

export const makeOrder = createAsyncThunk(
  'payment/makeOrder',
  async (order: OrderState) => {
    try {
      const response = await axios.post('https://reqres.in/api/users', order);
      if (response.data) return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response) {
          return error.response.data.message;
        }
      }
      return 'An error occurred';
    }
  }
);

export const makePayment = createAsyncThunk(
  'payment/makePayment',
  async (payment: PaymentDetails) => {
    try {
      const response = await axios.post('https://reqres.in/api/users', payment);
      if (response.data) return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response) {
          return error.response.data.message;
        }
      }
      return 'An error occurred';
    }
  }
);

export const PaymentSlice = createSlice({
  name: 'payment',
  initialState: initialPaymentState,
  reducers: {
    setCustomerPaymentDetails: (state, action: PayloadAction<PaymentDetails>) => {
      state.paymentDetails = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(makeOrder.fulfilled, (state, action) => {
      state.orderDetails = action.payload;
    });
    builder.addCase(makePayment.fulfilled, (state, action) => {
      state.paymentDetails = action.payload;
    });
  },
});

export const { setCustomerPaymentDetails } = PaymentSlice.actions;

export default PaymentSlice.reducer;
