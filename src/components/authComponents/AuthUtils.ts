import { NewUser, NewPassword } from "../../Redux/Authentication/initialState";
//import { useLocation } from "react-router-dom";

export const validateEmail = (email: string): boolean => {
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailPattern.test(email);
};

export const validatePassword = (password: string): boolean => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*?])[A-Za-z\d@#$%^&*?]{8,}$/;
    return passwordPattern.test(password);
};

export const handleValidPassword = (password:string) => {
  const validPassword = validatePassword(password);
  const password1Id = (location.pathname === '/signup') ? 'pw1' : 'new-pw1';
  const pw1Element = document.getElementById(password1Id) as HTMLElement;

  const password2Id = (location.pathname === '/signup') ? 'pw2' : 'new-pw2';
  const pw2Element = document.getElementById(password2Id) as HTMLElement;

  if (!validPassword){
    pw1Element.style.border = '1px solid #FF3131';
    pw2Element.style.border = '1px solid transparent';
  } else {
    pw1Element.style.border = '1px solid transparent';
  }
}

export const handleEmailCheck = (valResult:boolean) => {
    const emailMisMatch = document.querySelector('.email-mismatch') as HTMLElement;
    const textInput = document.getElementById('email') as HTMLElement;
    if(!valResult){
      emailMisMatch.style.display = 'block';
      textInput.style.border = '1px solid #FF3131';
    } else {
      emailMisMatch.style.display = 'none';
      textInput.style.border = '1px solid transparent';
    }
}


export const handlePasswordCheck = (formState:NewUser | NewPassword, confirmPassword:string) => {
  const pw1Id = (location.pathname === '/signup') ? 'pw1' : 'new-pw1';
  const pw1 = document.getElementById(pw1Id) as HTMLElement;
    
  const pw2Id = (location.pathname === '/signup') ? 'pw2' : 'new-pw2';
  const pw2 = document.getElementById(pw2Id) as HTMLElement;

  if (formState.password === confirmPassword ) {
    pw1.style.border = '1px solid #62EA5F';
    pw2.style.border = '1px solid #62EA5F';
  } else {
     pw1.style.border = '1px solid transparent';
     pw2.style.border = '1px solid transparent';
  }
}
