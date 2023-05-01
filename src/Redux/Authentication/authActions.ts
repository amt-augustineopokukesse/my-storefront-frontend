import { NewUser } from "./initialState";

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

export const loginSuccess = (): LoginSuccessAction => ({
    type: LoginActionTypes.LOGIN_SUCCESS,
});
  
export const loginFailure = (message: string): LoginFailureAction => ({
    type: LoginActionTypes.LOGIN_FAILURE,
    payload: message,
});