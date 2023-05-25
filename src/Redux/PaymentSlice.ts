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

interface PaymentDetails {
  paymentMethod: 'visa' | 'mobileMoney';
  // Add more properties for payment details (e.g., card information, mobile money details)
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

  