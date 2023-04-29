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
          <TextInput type="text" id="fname" name="firstname" label='First Name'/>
          <TextInput  type="text" id="lname" name="lastname" label='Last Name'/>   
        </div>    
        <div className="email">
          <TextInput type="email" id="email" name="email"  label='Email' />  
        </div>
        <div className="password">
          <TextInput type="password" id="pw1" name="password"  label='Password'/>  
          <TextInput type="password" id="pw2" name="password"  label='Confirm Password'/>
        </div>
        <button className='submit-button'>Create Account</button>    
      </form>    
      <p className="old-member"> Already A Member? <span className="login-text">Log In</span> </p>
      <div className='business-signup'>Create <span className='business-signup-link' >Business Account</span></div>
        
    </div>
  )
}

export default SignUpForm