import React, { useState, useEffect } from 'react';
import TextInput from './TextInput';
import '../../assets/styles/authenticationStyles/SignUpForm.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addNewUser } from '../../Redux/Authentication/authActions';
import { NewUser } from '../../Redux/Authentication/initialState';
import Email from './Email';
import Password from './Password';
import { emailPattern } from '../../staticDB/authData';
import { validateEmail, handleEmailCheck, handlePasswordCheck, handleValidPassword, validatePassword } from './AuthUtils';

const SignUpForm: React.FC = () => {
  const [businessAccount, setBusinessAccount] = useState<boolean>(false);

  const initialFormState: NewUser & { businessAccount: boolean } = {
    firstname: '',
    lastname: '',
    business: '',
    email: '',
    password: '',
    businessAccount: false,
  };

  const [formState, setFormState] = useState<NewUser & { businessAccount: boolean }>(initialFormState);
  const [password2, setPassword2] = useState<string>('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const newUser = useSelector((state: any) => state.auth.auth.newUser);

  // useEffect (() => {
  //   console.log(newUser);
  // },[newUser]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'password2') {
      setPassword2(value);
    } else if(name === 'password') {
      handleValidPassword(value);
      setFormState(prevState => ({ ...prevState, [name]: value }));
    } else if (name === 'business') {
      setFormState(prevState => ({ ...prevState, business: value, businessAccount: true }));
    } else {
      setFormState(prevState => ({ ...prevState, [name]: value }));
    }
  };
  

  useEffect(() => {
    handlePasswordCheck(formState, password2);
  },[password2])

  const valResult = validateEmail(formState.email);
  const match = validatePassword(formState.password);
  const pMatch = formState.password === password2;
  
  

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!valResult){
      handleEmailCheck(valResult);
    } else if(!match || !pMatch){
      //console.log('password mismatch or invalid password')
    } else {
      await dispatch(addNewUser(formState));
      setFormState(initialFormState);
      navigate('/login');
    }  
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
            <TextInput type="text" id="business" name="business" label='Business Name' onChange={handleInputChange} />
          </div>
        ) : (
          <div className="user-names">
            <div className='name'>
              <TextInput type="text" id="fname" name="firstname" label='First Name' onChange={handleInputChange} />
            </div>
            <div className='name'>
              <TextInput type="text" id="lname" name="lastname" label='Last Name' onChange={handleInputChange} />   
            </div>
          </div>
        )}   
        <Email onChange={handleInputChange} pattern={emailPattern}/>
        
        <div className="password">
          <Password type="password" id="pw1" name="password"  label='Password' onChange={handleInputChange} pattern='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$'/>  
          <Password type="password" id="pw2" name="password2"  label='Confirm Password' onChange={handleInputChange} disabled />
        </div>
        <button className='submit-button'>Create Account</button>    
      </form>    
      <p className="old-member"> Already A Member? <Link to='/login' className="login-text">Log In</Link> </p>
      <div className='business-signup'>Create <span className='business-signup-link' onClick={formChanger} >{businessAccount ? 'Individual' : 'Business'} Account</span></div>
    </div>
  )
}

export default SignUpForm;
