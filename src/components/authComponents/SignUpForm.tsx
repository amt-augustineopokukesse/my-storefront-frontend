import React, { useState, useEffect, useRef } from 'react';
import TextInput from './TextInput';
import '../../assets/styles/authenticationStyles/SignUpForm.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store';
import { addNewUser } from '../../Redux/AuthSlice';
import { NewBusiness, NewUser } from '../../Redux/Authentication/initialState';
import Email from './Email';
import Password from './Password';
import { validateEmail, handleEmailCheck, handlePasswordCheck, handleValidPassword, validatePassword } from './AuthUtils';
import PasswordInfo from './PasswordInfo';
import { AuthLoader } from './AuthLoader';

const SignUpForm: React.FC = () => {
  const [businessAccount, setBusinessAccount] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);


  const initialNewUserFormState: NewUser = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
  };

  const initialNewBusinessFormState: NewBusiness = {
    business_name: '',
    email: '',
    password: '',
    confirm_password: '',
  };



  const [formState, setFormState] = useState<NewUser | NewBusiness>( initialNewUserFormState);
  const [password2, setPassword2] = useState<string>('');

  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);

  const dispatch = useAppDispatch();
  const newUser: any = useAppSelector((state) => state.auth.auth.newUser);
  

  useEffect (() => {
    console.log(loader);
    console.log(newUser);
  },[newUser]);

  const errorDiv = document.getElementById('error-div') as HTMLElement;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'confirm_password') {
      setPassword2(value);
      setFormState(prevState => ({ ...prevState, [name]: value }));
      if (errorDiv) {
        errorDiv.style.display = 'none';
      }
    } else if(name === 'password') {
      handleValidPassword(value);
      setFormState(prevState => ({ ...prevState, [name]: value }));
      if (errorDiv) {
        errorDiv.style.display = 'none';
      }
    }
      else if (name === 'email'){
        if (errorDiv) {
          errorDiv.style.display = 'none';
          const emailDiv = document.getElementById('email') as HTMLElement;
          emailDiv.style.border = '1px solid transparent';
        }
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
      errorDiv.style.display = 'block';
      errorDiv.textContent = 'Invalid Email format. Kindly check.'
    } else if(!match || !pMatch){
      errorDiv.style.display = 'block';
      errorDiv.textContent = 'password mismatch or invalid password'
    } else {
      try {
        setLoader(true);
        await dispatch(addNewUser(formState)).unwrap();
        formRef.current?.reset();
        setFormState(businessAccount ? initialNewBusinessFormState : initialNewUserFormState);
        
      } catch (err) {
        //event.preventDefault();
        console.error('Error creating new user', err);
        //setFormError('Error creating new user');
      }
    }  
  };

  useEffect(() => {
    if (newUser && newUser.success){
      //if (newUser && newUser.createdAt){
      navigate('/authnotification');
      setLoader(false);
     } else if (newUser && !newUser.success){
    //} else if (newUser && !newUser.createdAt){
      errorDiv.style.display = 'block';
      errorDiv.textContent = newUser;
      setLoader(false);
    }
    
  }, [newUser, navigate]);

  const formChanger = () => {
    setBusinessAccount(!businessAccount);
  };

  useEffect(() => {
    setFormState(businessAccount ? initialNewBusinessFormState : initialNewUserFormState);
  }, [businessAccount]);

  

  return (
    <div className='signup-container'>
      <h1 className='header-text'>Sign Up</h1>  
      <div id='error-div'></div>
      <form className='FormContainer' onSubmit={handleSubmit} ref={formRef}>
        {businessAccount ? (
          <div className='business-name'>
            <TextInput type="text" id="business" name="business_name" label='Business Name' onChange={handleInputChange} />
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
        <PasswordInfo />
        <div className="password">
          <Password type="password" id="pw1" name="password"  label='Password' onChange={handleInputChange} />  
          <Password type="password" id="pw2" name="confirm_password"  label='Confirm Password' onChange={handleInputChange} disabled />
        </div>
        <button className='submit-button'>Create Account</button>
        {loader ? <AuthLoader /> : ''}    
      </form>    
      <p className="old-member"> Already A Member? <Link to='/login' className="login-text">Log In</Link> </p>
      <div className='business-signup'>Create <span className='business-signup-link' onClick={formChanger} >{businessAccount ? 'Individual' : 'Business'} Account</span></div>
    </div>
  )
}

export default SignUpForm;
