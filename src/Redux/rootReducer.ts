import { combineReducers } from "redux";
//import authReducer from "./Authentication/authReducer";
import authReducer from "./AuthSlice";
import projectReducer from "./ProjectSlice"

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
});

export default rootReducer;