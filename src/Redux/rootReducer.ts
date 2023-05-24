import { combineReducers } from "redux";
//import authReducer from "./Authentication/authReducer";
import authReducer from "./AuthSlice";
import projectReducer from "./ProjectSlice";
import cartReducer from "./CartSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  cart: cartReducer,
});

export default rootReducer;