import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrderState, PaymentDetails, PaymentState } from './PaymentInitialState';
import axios, { AxiosError } from 'axios';

export const initialPaymentState: PaymentState = {
  orderDetails: {
    shipping_reciepient_names: '',
    shipping_reciepient_contacts: '',
    shipping_reciepient_address: '',
    pickupMode: '',
    //project_id: savedProject ? savedProject.id || '' : '',
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
  "payment/makeOrder",
  async (order: OrderState) => {
    try {
      const response = await axios.post('https://reqres.in/api/users', order);
      //const response = await api.post(`/api/${usertype}/signup`, user);
      if (response.data) return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response) {
          return error.response.data.message;
        }
      }
      return "An error occurred";
    }
  }
);

export const PaymentSlice = createSlice({
    name: 'payment',
    initialState: initialPaymentState,
    reducers: {
      // setCustomerOrderDetails: (state, action: PayloadAction<OrderState>) => {
      //   state.orderDetails = action.payload;
      // },
      setCustomerPaymentDetails: (state, action: PayloadAction<PaymentDetails>) => {
        state.paymentDetails = action.payload;
      },
    //   setLoading: (state, action: PayloadAction<boolean>) => {
    //     state.loading = action.payload;
    //   },
    //   setError: (state, action: PayloadAction<string | null>) => {
    //     state.error = action.payload;
    //   },
    },
    extraReducers: (builder) => {
      builder.addCase(makeOrder.fulfilled, (state, action) => {
        state.orderDetails = action.payload;
      });
    }
});

export const { setCustomerPaymentDetails } = PaymentSlice.actions;

export default PaymentSlice.reducer;

  