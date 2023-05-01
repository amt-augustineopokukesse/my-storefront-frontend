import { AuthState, initialState } from "./initialState";
import { NewUserAction } from "./authActions";

// const initialState = {
//   newUser: AuthState
// }
const authReducer = (state: AuthState = initialState, action: NewUserAction): AuthState => {
  switch (action.type) {
    case "NEW_USER":
      return {
        ...state,
        newUser: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
