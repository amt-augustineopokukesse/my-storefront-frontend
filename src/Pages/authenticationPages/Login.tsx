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
    const user: any = useAppSelector((state) => state.auth.auth.user);
  

    useEffect (() => {
      console.log(user);
    },[user]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormState(prevState => ({ ...prevState, [name]: value }));
    };

    const navigate = useNavigate();
    const valResult = validateEmail(formState.email)
    

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (valResult) {
        await dispatch(userLogin(formState)).unwrap();
        //window.localStorage.setItem('token', user.token)
        window.localStorage.setItem('isLoggedIn', `${true}`);
        navigate('/homepage')
        setFormState(initialFormState);
        handleEmailCheck(valResult)
      } else {
        handleEmailCheck(valResult)
      }
    };

  return (
    <div className='login-container'>
      <div className='login-form-container'>
        <h1 className='header-text'>Log In</h1>
        <form className='login-form' onSubmit={handleSubmit}>
          <Email onChange={handleInputChange} />
            <Password type="password" id="pw1" name="password"  label='Password' onChange={handleInputChange}/> 
            <div className='check'>
              <input className='check-box' type="checkbox" name="" id="check" />
              <label  className='check-label' htmlFor='check' > Remember me </label>
            </div>
            <div className='buttons'>
            <Link to='/resetpw1'><button className='forgot-password'>Forgot Password</button></Link>
              <button className='login-button'>Log In</button>
            </div>
        </form>
        <p className="not-member"> Not a member? <Link to='/signup' className="sign-up-link">Sign up</Link> </p>
      </div>  
      <AuthHero />     
    </div>
  )
}

export default Login;