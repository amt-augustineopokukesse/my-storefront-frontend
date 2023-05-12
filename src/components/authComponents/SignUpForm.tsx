import React, { useState, useEffect, useRef } from 'react';
import TextInput from './TextInput';
import '../../assets/styles/authenticationStyles/SignUpForm.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { addNewUser } from '../../Redux/AuthSlice';
import { NewBusiness, NewUser } from '../../Redux/Authentication/initialState';
import Email from './Email';
import Password from './Password';
import facebookButton from '../../assets/svg/fb.svg';
import googleButton from '../../assets/svg/google.svg';
import '../../assets/styles/authenticationStyles/Login.scss';
import { validateEmail, handleEmailCheck, handlePasswordCheck, handleValidPassword, validatePassword, handleValidName } from './AuthUtils';
import PasswordInfo from './PasswordInfo';
import { AuthLoader } from './AuthLoader';
import { toast } from 'react-toastify';


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


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
  // const newUser: any = useAppSelector((state) => state.auth.auth.newUser);
  

  // useEffect (() => {
  //   console.log(loader);
  //   console.log(newUser);
  // },[newUser]);
  const handleFacebook = () =>{
    window.open(`${API_BASE_URL}/auth/facebook`,'_self')    
    }
  
  const handleGoogle = () =>{
    window.open(`${API_BASE_URL}/auth/google`,'_self')     
    }

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
    } else if(name === 'first_name' || name === 'last_name') {
      handleValidName(name, value);
      setFormState(prevState => ({ ...prevState, [name]: value }));
    }
      else if (name === 'email'){
        setFormState(prevState => ({ ...prevState, [name]: value }));
        if (errorDiv) {
          errorDiv.style.display = 'none';
          const emailDiv = document.getElementById('email') as HTMLElement;
          emailDiv.style.border = '1px solid transparent';
        }
    } else {
      setFormState(prevState => ({ ...prevState, [name]: value }));
    }
  };
  

  useEffect(() => {
    handlePasswordCheck(formState, password2);
  },[password2])

  const validEmail = validateEmail(formState.email);
  const validPassword = validatePassword(formState.password);
  const matchedPasswords = formState.password === password2;
  
  
  

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formRef.current?.reset();
    console.log("line 100", formState)
    if (!validEmail){
      handleEmailCheck(validEmail);
      errorDiv.style.display = 'block';
      errorDiv.textContent = 'Invalid Email format. Kindly check.'
      setFormState(businessAccount ? initialNewBusinessFormState : initialNewUserFormState);
      console.log("line 106", formState)
      return;
    } else if(!validPassword || !matchedPasswords){
      errorDiv.style.display = 'block';
      errorDiv.textContent = 'password mismatch or invalid password';
      setFormState(businessAccount ? initialNewBusinessFormState : initialNewUserFormState);
      return;
    } else {
      try {
        setLoader(true);
        const userSignupSuccessOrError = await dispatch(addNewUser(formState)).unwrap();
        setFormState(businessAccount ? initialNewBusinessFormState : initialNewUserFormState);
        
        if (userSignupSuccessOrError && userSignupSuccessOrError.success) {
          toast.success(userSignupSuccessOrError.message);
          setLoader(false);
          navigate("/authnotification");
        } else if (userSignupSuccessOrError && !userSignupSuccessOrError.success) {
          toast.error(userSignupSuccessOrError);
          errorDiv.style.display = 'block';
          errorDiv.textContent = userSignupSuccessOrError;
          setLoader(false);
        }
        return;
      } catch (err) {
        //event.preventDefault();
        setLoader(false);
        setFormState(businessAccount ? initialNewBusinessFormState : initialNewUserFormState);
        toast.error('Oops!! Error logging. Try again or contact Storefront Administrator');
        return;
        //setFormError('Error creating new user');
      }
    }  
  };

  // const userSignupSuccessOrError = (user: any) => {
  //   if (user && user.success){
  //     toast.success(user.message);
  //     setLoader(false);
  //     navigate("/authnotification");
  //    } else if (user && !user.success){
  //   //} else if (newUser && !newUser.createdAt){
  //     toast.error(user);
  //     errorDiv.style.display = 'block';
  //     errorDiv.textContent = user;
  //     setLoader(false);
  //   }
  //   return;
  // }

  // useEffect(() => {
    
    
  // }, [newUser, navigate]);

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
      <form id='signup-form' className='FormContainer' onSubmit={handleSubmit} ref={formRef}>
        {businessAccount ? (
          <div className='business-name'>
            <TextInput type="text" id="business" name="business_name" label='Business Name' onChange={handleInputChange} />
          </div>
        ) : (
          <div className="input-names">
            <div className='name-box'>
              <TextInput type="text" id="fname" name="first_name" label='First Name' onChange={handleInputChange} />
            </div>
            <div className='name-box'>
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
      
      <p className='sm-text'>Signup in with</p>
      <div className='sm-buttons'>
          <img src={googleButton} alt="google icon" className='sm-icon' onClick={handleGoogle} />
          <img src={facebookButton} alt="facebook icon" className='sm-icon' onClick={handleFacebook}/>
      </div>

      <p className="old-member"> Already A Member? <Link to='/login' className="login-text">Log In</Link> </p>
      <div className='business-signup'>Create <span className='business-signup-link' onClick={formChanger} >{businessAccount ? 'Individual' : 'Business'} Account</span></div>
    </div>
  )
}

export default SignUpForm;
