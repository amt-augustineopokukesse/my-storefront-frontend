import { AuthState, NewUser, User } from "./Authentication/initialState";


export interface RootState {
    auth: AuthState & {
      newUser: NewUser[];
      user: User[];
      isLoggedIn: boolean;
    };
  }

export const rootInitialState: RootState = {
    auth: {
        newUser: [{
            "firstname": "Augustine",
            "lastname": "Opoku-Kesse",
            "business": "",
            "email": "aokesse@gmail.com",
            "password": "firsttest"
        }, {
            "firstname": "Kojo",
            "lastname": "Agyei",
            "business": "",
            "email": "kojo@yahoo.com",
            "password": "kojo2"
        }],
        user: [{
          "email": "aokesse@gmail.com",
            "password": "firsttest",
            
        }, {
          "email": "kojo@yahoo.com",
            "password": "kojo2",
            
        }],
        isLoggedIn: false,
      },
};
