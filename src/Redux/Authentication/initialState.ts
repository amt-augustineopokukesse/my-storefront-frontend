export interface NewUser {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    business?: string;
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
  

  