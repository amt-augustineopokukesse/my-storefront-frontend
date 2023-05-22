import { combineReducers } from "redux";
//import authReducer from "./Authentication/authReducer";
import authReducer from "./AuthSlice";
import projectReducer from "./ProjectSlice"
import templateReducer from './SelectedTemplateSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  template: templateReducer
});

export default rootReducer;