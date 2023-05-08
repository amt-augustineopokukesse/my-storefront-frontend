import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthHero from '../../components/authComponents/AuthHero';
import '../../assets/styles/authenticationStyles/Login.scss';
import { User } from '../../Redux/Authentication/initialState';
import { useAppDispatch, useAppSelector } from '../../store';
import Email from '../../components/authComponents/Email';
import { validateEmail, handleEmailCheck } from '../../components/authComponents/AuthUtils';
import Password from '../../components/authComponents/Password';
import { userLogin } from '../../Redux/AuthSlice';

const Login: React.FC = () => {

  const initialFormState: User = {
      email: '',
      password: '',
  };  

  const [formState, setFormState] = useState<User>(initialFormState);

  const dispatch = useAppDispatch();
  const user : any = useAppSelector((state) => state.auth.auth.user);
  //const errorMsg : any = useAppSelector((state) => state.auth.error);

  const navigate = useNavigate();
  const valResult = validateEmail(formState.email)

  useEffect (() => {
    console.log(user);
    //console.log(errorMsg);
    if (user && user.userActivated && user.userActivated.token) {
      window.localStorage.setItem('token', user.userActivated.token)
      //window.localStorage.setItem('isLoggedIn', `${true}`);
      navigate('/homepage');
    } 
    else if (user && !user.userActivated){
      //console.log(`The error message is ${user}`);
      const errorDiv = document.getElementById('login-error') as HTMLElement;
      const pwElement = document.getElementById('pw1') as HTMLElement;
      errorDiv.textContent = user;
      pwElement.style.border = '1px solid #FF3131';
    }
  },[user, navigate]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (valResult) {
      await dispatch(userLogin(formState)).unwrap();
      //setFormState(initialFormState);
      handleEmailCheck(valResult);
    } else {
      handleEmailCheck(valResult);
    }
  };

  return (
    <div className='login-container'>
      <div className='login-form-container'>
        <h1 className='header-text'>Log In</h1>
        <div id='login-error'></div>
        <form className='login-form' onSubmit={handleSubmit}>
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
          </div>
        </form>
        <p className="not-member"> Not a member? <Link to='/signup' className="sign-up-link">Sign up</Link> </p>
      </div>  
      <AuthHero />     
    </div>
  )
}

export default Login;
