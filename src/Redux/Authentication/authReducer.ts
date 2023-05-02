//import { AuthState } from "./initialState";
import { NewUserAction, LoginAction, LoginActionTypes } from "./authActions";
import { rootInitialState, RootState } from "../rootState";

const authReducer = (state: RootState = rootInitialState, action: NewUserAction | LoginAction): RootState => {
  switch (action.type) {
    case "NEW_USER":
      return {
        ...state,
        auth: {
          ...state.auth,
          newUser: [...state.auth.newUser, action.payload],
        },
      };
      case LoginActionTypes.LOGIN_SUCCESS:
        return {
          ...state,
          auth: {
            ...state.auth,
            isLoggedIn: true,
          },
        };
      case LoginActionTypes.LOGIN_FAILURE:
        return { ...state };  
      default:
        return state;
    }
};

export default authReducer;
