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
            "businessname": "",
            "email": "aokesse@gmail.com",
            "password": "FirstTest@1",
            "confirmpassword": "FirstTest@1"
        }, {
            "firstname": "",
            "lastname": "",
            "businessname": "Kipfit",
            "email": "kipfit@yahoo.com",
            "password": "kipFit@2_",
            "confirmpassword": "kipFit@2_"
        }],
        user: [{
          "email": "aokesse@gmail.com",
            "password": "FirstTest@1",
            
        }, {
          "email": "kojo@yahoo.com",
            "password": "kipFit@2_",
            
        }],
        isLoggedIn: false,
      },
};
