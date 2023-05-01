import { NewUser } from "./initialState";

export interface NewUserAction {
    type: "NEW_USER";
    payload: NewUser;
}
  
export const newUser = (user: NewUser): NewUserAction => ({
    type: "NEW_USER",
    payload: user,
});
  