import { NewUser } from "./initialState";
// import axios from 'axios';
// //import { Dispatch } from "react";
// import { AnyAction } from "redux";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";

//const API_BASE_URL = 'http://your-api-url.com';

export interface NewUserAction {
    type: "NEW_USER";
    payload: NewUser;
}

export enum LoginActionTypes {
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_FAILURE = "LOGIN_FAILURE",
}

interface LoginSuccessAction {
    type: LoginActionTypes.LOGIN_SUCCESS;
}
  
interface LoginFailureAction {
    type: LoginActionTypes.LOGIN_FAILURE;
    payload: string;
}

export type LoginAction = LoginSuccessAction | LoginFailureAction;

  
export const addNewUser = (user: NewUser): NewUserAction => ({
    type: "NEW_USER",
    payload: user,
});

// export const addNewUser = (userData: NewUser): ThunkAction<void, unknown, unknown, AnyAction> => {
//     return async (dispatch: ThunkDispatch) => {
//       try {
//         const response = await axios.post(`${API_BASE_URL}/users`, userData);
//         dispatch({ type: 'ADD_NEW_USER_SUCCESS', payload: response.data });
//       } catch (error) {
//         dispatch({ type: 'ADD_NEW_USER_FAILURE', payload: error });
//       }
//     };
//   };
  



export const loginSuccess = (): LoginSuccessAction => ({
    type: LoginActionTypes.LOGIN_SUCCESS,
});
  
export const loginFailure = (message: string): LoginFailureAction => ({
    type: LoginActionTypes.LOGIN_FAILURE,
    payload: message,
});