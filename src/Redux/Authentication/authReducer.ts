//import { AuthState } from "./initialState";
import { NewUserAction } from "./authActions";
import { rootInitialState, RootState } from "../rootState";

const authReducer = (state: RootState = rootInitialState, action: NewUserAction): RootState => {
  switch (action.type) {
    case "NEW_USER":
      return {
        ...state,
        auth: {
          ...state.auth,
          newUser: [...state.auth.newUser, action.payload],
        },
      };
    default:
      return state;
  }
};

export default authReducer;
