import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PaymentState {
  shippingAddress: ShippingAddress;
  paymentDetails: PaymentDetails;
//   loading: boolean;
//   error: string | null;
}

interface ShippingAddress {
  name: string;
  phoneNumber: string;
  address: string;
  pickupMode: string;
}

export interface PaymentDetails {
  paymentMethod: 'visa';
  bank: string;
  accountHolder: string;
  branch: string;
  cardNumber: string;
  cvc: string;
  expiryDate: string;

}

const initialState: PaymentState = {
  shippingAddress: {
    name: '',
    phoneNumber: '',
    address: '',
    pickupMode: '',
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
//   loading: false,
//   error: null,
};

const PaymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
      setCustomerShippingAddress: (state, action: PayloadAction<ShippingAddress>) => {
        state.shippingAddress = action.payload;
      },
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
});

export const { setCustomerShippingAddress, setCustomerPaymentDetails } = PaymentSlice.actions;

export default PaymentSlice.reducer;

  