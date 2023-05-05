export interface NewPassword {
    password: string;
}

export interface NewUser {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    confirmpassword: string;
    businessname?: string;
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
  

  