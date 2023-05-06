import React, { useState, useEffect } from 'react';
import TextInput from './TextInput';
import '../../assets/styles/authenticationStyles/SignUpForm.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store';
import { addNewUser } from '../../Redux/AuthSlice';
import { NewBusiness, NewUser } from '../../Redux/Authentication/initialState';
import Email from './Email';
import Password from './Password';
import { validateEmail, handleEmailCheck, handlePasswordCheck, handleValidPassword, validatePassword } from './AuthUtils';

const SignUpForm: React.FC = () => {
  const [businessAccount, setBusinessAccount] = useState<boolean>(false);

  const initialNewUserFormState: NewUser = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
  };

  const initialNewBusinessFormState: NewBusiness = {
    businessName: '',
    email: '',
    password: '',
    confirm_password: '',
  };



  const [formState, setFormState] = useState<NewUser | NewBusiness>( initialNewUserFormState);
  const [password2, setPassword2] = useState<string>('');

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const newUser = useAppSelector((state) => state.auth.auth.newUser);
  

  useEffect (() => {
    console.log(newUser);
  },[newUser]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'confirm_password') {
      setPassword2(value);
      setFormState(prevState => ({ ...prevState, [name]: value }));
    } else if(name === 'password') {
      handleValidPassword(value);
      setFormState(prevState => ({ ...prevState, [name]: value }));
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
      console.log('password mismatch or invalid password')
    } else {
      try {
        await dispatch(addNewUser(formState)).unwrap();
        setFormState(businessAccount ? initialNewBusinessFormState : initialNewUserFormState);
        navigate('/login');
      } catch (err) {
        console.error('Error creating new user', err);
      }
    }  
  };

  const formChanger = () => {
    setBusinessAccount(!businessAccount);
  };

  useEffect(() => {
    setFormState(businessAccount ? initialNewBusinessFormState : initialNewUserFormState);
  }, [businessAccount]);

  

  return (
    <div className='signup-container'>
      <h1 className='header-text'>Sign Up</h1>  
      <form className='FormContainer' onSubmit={handleSubmit}>
        {businessAccount ? (
          <div className='business-name'>
            <TextInput type="text" id="business" name="businessName" label='Business Name' onChange={handleInputChange} />
          </div>
        ) : (
          <div className="user-names">
            <div className='name'>
              <TextInput type="text" id="fname" name="first_name" label='First Name' onChange={handleInputChange} />
            </div>
            <div className='name'>
              <TextInput type="text" id="lname" name="last_name" label='Last Name' onChange={handleInputChange} />   
            </div>
          </div>
        )}   
        <Email onChange={handleInputChange} />
        
        <div className="password">
          <Password type="password" id="pw1" name="password"  label='Password' onChange={handleInputChange} />  
          <Password type="password" id="pw2" name="confirm_password"  label='Confirm Password' onChange={handleInputChange} disabled />
        </div>
        <button className='submit-button'>Create Account</button>    
      </form>    
      <p className="old-member"> Already A Member? <Link to='/login' className="login-text">Log In</Link> </p>
      <div className='business-signup'>Create <span className='business-signup-link' onClick={formChanger} >{businessAccount ? 'Individual' : 'Business'} Account</span></div>
    </div>
  )
}

export default SignUpForm;
