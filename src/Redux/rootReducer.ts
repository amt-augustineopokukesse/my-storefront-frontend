import { combineReducers } from "redux";
//import authReducer from "./Authentication/authReducer";
import authReducer from "./AuthSlice";


const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;