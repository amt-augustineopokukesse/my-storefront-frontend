import { combineReducers } from "redux";
//import authReducer from "./Authentication/authReducer";
import authReducer from "../Redux/Authentication/AuthSlice";
import projectReducer from "./ProjectSlice";
import cartReducer from "./CartSlice";
import paymentReducer from './PaymentSlice';


const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  cart: cartReducer,
  payment: paymentReducer
});

export default rootReducer;