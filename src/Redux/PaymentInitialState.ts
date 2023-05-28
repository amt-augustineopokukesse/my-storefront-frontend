import { ProductState } from "./ProjectInitialState";


export interface PaymentDetails {
    paymentMethod: 'visa';
    bank: string;
    accountHolder: string;
    branch: string;
    cardNumber: string;
    cvc: string;
    expiryDate: string;
  
}

export interface PaymentState {
    orderDetails: OrderState;
    paymentDetails: PaymentDetails;
  
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

const storedProject = localStorage.getItem('project');
  let savedProject;
  if (storedProject) {
    savedProject = JSON.parse(storedProject);
}

export const initialOrderState = {
    shipping_reciepient_names: '',
    shipping_reciepient_contacts: 'No contact added for Delivery',
    shipping_reciepient_address: 'No address added for Delivery',
    pickupMode: 'No pickup mode included',
    project_id: savedProject.id,
    products: [],
    userId: '',
    amount: 0,
    payment_method: 'visa',
    associated_account_number: '',
}
