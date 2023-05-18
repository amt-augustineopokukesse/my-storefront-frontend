import { combineReducers } from "redux";
//import authReducer from "./Authentication/authReducer";
import authReducer from "./AuthSlice";
import templateReducer from "./TemplateSlice"

const rootReducer = combineReducers({
  auth: authReducer,
  template: templateReducer,
});

export default rootReducer;