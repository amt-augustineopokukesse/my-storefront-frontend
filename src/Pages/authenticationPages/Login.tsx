import React, {useState, useEffect, useRef} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthHero from '../../components/authComponents/AuthHero';
import '../../assets/styles/authenticationStyles/Login.scss';
import { User } from '../../Redux/Authentication/initialState';
import { useAppDispatch, useAppSelector } from '../../store';
import Email from '../../components/authComponents/Email';
import { validateEmail, handleEmailCheck } from '../../components/authComponents/AuthUtils';
import Password from '../../components/authComponents/Password';
import { userLogin } from '../../Redux/AuthSlice';
import facebookButton from '../../assets/svg/fb.svg';
import googleButton from '../../assets/svg/google.svg';
import { AuthLoader } from '../../components/authComponents/AuthLoader';
import { toast } from 'react-toastify';


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


const Login: React.FC = () => {
  const [loader, setLoader] = useState<boolean>(false);


  const initialFormState: User = {
      email: '',
      password: '',
  };  

  const [formState, setFormState] = useState<User>(initialFormState);

  const dispatch = useAppDispatch();
  const formRef = useRef<HTMLFormElement>(null);

  const user : any = useAppSelector((state) => state.auth.auth.user);
  //const errorMsg : any = useAppSelector((state) => state.auth.error);

  const navigate = useNavigate();
  const valResult = validateEmail(formState.email);
  const errorDiv = document.getElementById('login-error') as HTMLElement;


  useEffect (() => {
    // console.log(user);
    //console.log(errorMsg);
    if (user && user.data && user.data.token) {
      window.localStorage.setItem('token', user.data.token)
      window.localStorage.setItem("merchant", JSON.stringify(user.data));
      toast.success(user.message);
      setLoader(false);
      formRef.current?.reset();
      setFormState(initialFormState);
      navigate(user.data.role === "customer" ? "/landing" : user.data.role === "merchant" ? "/dashboard" : "/login");
    } 
    else if (user && !user.userActivated){
      //else if (user && !user.createdAt){
      toast.warn(user.message);
      //console.log(`The error message is ${user}`);
      setLoader(false);
      const pwElement = document.getElementById('pw1') as HTMLElement;
      errorDiv.textContent = user;
      pwElement.style.border = '1px solid #FF3131';
    }
  },[user, navigate]);



  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      if (name === 'email'){
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

  const handleFacebook = () =>{
    window.open(`${API_BASE_URL}/auth/facebook`,'_self')    
    }
  
  const handleGoogle = () =>{
    window.open(`${API_BASE_URL}/auth/google`,'_self')     
    }

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (valResult) {
      setLoader(true);
      await dispatch(userLogin(formState)).unwrap();
      setFormState(initialFormState);
      handleEmailCheck(valResult);
    } else {
      handleEmailCheck(valResult);
      errorDiv.style.display = 'block';
      errorDiv.textContent = 'Invalid Email format. Kindly check.'
    }
  };

  return (
    <div className='login-container'>
      <div className='login-form-container'>
        <h1 className='header-text'>Log In</h1>
        <div id='login-error'></div>
        <form className='login-form' onSubmit={handleSubmit} ref={formRef}>
          <Email onChange={handleInputChange} />
          <Password type="password" id="pw1" name="password"  label='Password' onChange={handleInputChange}/> 
          <div className='check'>
            <input className='check-box' type="checkbox" name="" id="check" />
            <label  className='check-label' htmlFor='check' > Remember me </label>
          </div>
          <div className='buttons'>
            <div className='button'>
              <Link to='/resetpw1'><button className='forgot-password'>Forgot Password</button></Link>
            </div>
            <div className='button'>
              <button className='login-button'>Log In</button>
            </div>
            {loader ? <AuthLoader /> : ''}
          </div>
        </form>
        <div className='or'>
          <span className='text'>OR</span>
          
        </div>
        <p className='sm-text'>Log in with</p>
        <div className='sm-buttons'>
            <img src={googleButton} alt="google icon" className='sm-icon' onClick={handleGoogle} />
            <img src={facebookButton} alt="facebook icon" className='sm-icon' onClick={handleFacebook}/>
        </div>

        <p className="not-member"> Not a member? <Link to='/signup' className="sign-up-link">Sign up</Link> </p>
      </div>  
      <AuthHero />     
    </div>
  )
}

export default Login;
