import React, {useState}  from 'react';
import TextInput from './TextInput';
import '../../../assets/styles/authentication/SignUpForm.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { newUser } from '../../../Redux/Authentication/authActions';

const SignUpForm: React.FC = () => {
    const [businessAccount, setBusinessAccount] = useState<Boolean>(false);
    
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.auth.auth.newUser);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log(user);
    };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch(newUser({ ...user, [name]: value }));
  };



    const formChanger = () => {
        setBusinessAccount(!businessAccount);
    };

  return (
    <div className='signup-container'>
      <h1 className='header-text'>Sign Up</h1>  
      <form className='FormContainer' onSubmit={handleSubmit}>
        {businessAccount ? (
            <div className='business-name'>
              <TextInput type="text" id="business" name="business" label='Business Name' onChange={handleInputChange}/>
            </div>
        ): (
            <div className="user-names">
              <TextInput type="text" id="fname" name="firstname" label='First Name'onChange={handleInputChange} />
              <TextInput  type="text" id="lname" name="lastname" label='Last Name' onChange={handleInputChange} />   
            </div>
        )}    
        <div className="email">
          <TextInput type="email" id="email" name="email"  label='Email' onChange={handleInputChange}/>  
        </div>
        <div className="password">
          <TextInput type="password" id="pw1" name="password"  label='Password' onChange={handleInputChange}/>  
          <TextInput type="password" id="pw2" name="password"  label='Confirm Password' onChange={handleInputChange}/>
        </div>
        <button className='submit-button'>Create Account</button>    
      </form>    
      <p className="old-member"> Already A Member? <Link to='/login' className="login-text">Log In</Link> </p>
      <div className='business-signup'>Create <span className='business-signup-link' onClick={formChanger} >{businessAccount ? 'Individual' : 'Business'} Account</span></div>
        
    </div>
  )
}

export default SignUpForm