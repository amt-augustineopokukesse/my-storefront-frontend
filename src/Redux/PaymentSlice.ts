import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductState } from './ProjectInitialState';

interface PaymentState {
  orderDetails: OrderState;
  paymentDetails: PaymentDetails;
//   loading: boolean;
//   error: string | null;
}

export interface OrderState {
  shipping_reciepient_names?: string;
  shipping_reciepient_contacts?: string;
  shipping_reciepient_address?: string;
  pickupMode?: string;
  project_id?: string;
  products?: ProductState[];
  userId?: string;
  amount?: number;
  payment_method?: string;
  associated_account_number?: string;
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

const storedProject = localStorage.getItem('project');
let savedProject;
if (storedProject) {
  savedProject = JSON.parse(storedProject);
}

const initialState: PaymentState = {
  orderDetails: {
    shipping_reciepient_names: '',
    shipping_reciepient_contacts: '',
    shipping_reciepient_address: '',
    pickupMode: '',
    project_id: savedProject ? savedProject.id || '' : '',
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
//   loading: false,
//   error: null,
};

const PaymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
      setCustomerShippingAddress: (state, action: PayloadAction<OrderState>) => {
        state.orderDetails = action.payload;
      },
      setCustomerPaymentDetails: (state, action: PayloadAction<PaymentDetails>) => {
        state.paymentDetails = action.payload;
      },
    }
})

export const { setCustomerShippingAddress, setCustomerPaymentDetails } = PaymentSlice.actions;

export default PaymentSlice.reducer;

  