import React  from 'react';
import TextInput from './TextInput';
import '../../../assets/styles/authentication/SignUpForm.scss';
//import { Link } from 'react-router-dom';

// interface User {
//     firstName: string;
//     lastName: string;
//     email: string;
//     password: string;
// }

  

const SignUpForm: React.FC = () => {
    // const [user, setUser] = useState<User>({
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     password: "",
    //   });
    
    //   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     console.log(user);
    //   };
    
    //   const handleInputChange = (
    //     event: React.ChangeEvent<HTMLInputElement>
    //   ) => {
    //     const { name, value } = event.target;
    //     setUser((prevState) => ({
    //       ...prevState,
    //       [name]: value,
    //     }));
    //   };  
  return (
    <div className='container'>
      <h1 className='header-text'>Sign Up</h1>  
      <form className='FormContainer'>
        <div className="user-names">
          <TextInput />
          <TextInput  />   
        </div>    
        <div className="email">
          <TextInput />  
        </div>
        <div className="password">
          <TextInput />  
          <TextInput />
        </div>
        <button className='submit-button'>Create Account</button>    
      </form>    
      <p className="old-member"> Already A Member? <span className="login-text">Log In</span> </p>
      <div className='business-signup'>Create <span className='business-signup-link' >Business Account</span></div>
        
    </div>
  )
}

export default SignUpForm