export interface ResetPwEmail {
    email: string;
}
export interface NewPassword {
    id?: string;
    password: string;
}

export interface NewUser {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    confirm_password: string;
}

export interface NewBusiness {
    business_name: string;
    email: string;
    password: string;
    confirm_password: string;
}

export interface User {
    email: string;
    password: string;
    
}
  
export interface AuthState {
    newUser: NewUser[],
    user: User[],
    isLoggedIn: boolean,
    
}
  

  