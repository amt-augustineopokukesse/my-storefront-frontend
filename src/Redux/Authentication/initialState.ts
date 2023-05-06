export interface NewPassword {
    password: string;
}

export interface NewUser {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    confirm_password: string;
    businessName?: string;
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
  

  