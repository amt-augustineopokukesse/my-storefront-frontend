import { AuthState, NewUser, User } from "./Authentication/initialState";

export interface RootState {
  auth: AuthState & {
    newUser: NewUser;
    user: User;
  };
}

export const rootInitialState: RootState = {
  auth: {
    newUser: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    user: {
      email: "",
      password: "",
    },
  },
};
