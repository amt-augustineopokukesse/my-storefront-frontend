import React, {useState} from 'react';
import { Link } from 'react-router-dom';
//import AuthHero from '../Auth-Components/AuthHero';
import AuthHeroNew from '../Auth-Components/authHeroNew';
import TextInput from '../Auth-Components/TextInput';
import '../../../assets/styles/authentication/Login.scss';
import { User } from '../../../Redux/Authentication/initialState';
import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess, loginFailure } from '../../../Redux/Authentication/authActions';
const Login: React.FC = () => {

    const initialFormState: User = {
        email: '',
        password: '',
    };  

    const [formState, setFormState] = useState<User>(initialFormState);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormState(prevState => ({ ...prevState, [name]: value }));
    };

    const dispatch = useDispatch();
    const users = useSelector((state: any) => state.auth.auth.newUser);

    const login = (formState: User) => {
        console.log(formState);
        const user = users.find((user: User) => {
            return user.email === formState.email && user.password === formState.password
        });
        console.log(user)
        if (user) {
          console.log("login successful");
          dispatch(loginSuccess());
        } else {
          console.log("login failed");
          dispatch(loginFailure("Invalid email or password"));
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formState)
        login(formState);
        setFormState(initialFormState);
      };

  return (
    <div className='login-container'>
      <div className='login-form-container'>
        <h1 className='header-text'>Log In</h1>
        <form className='login-form' onSubmit={handleSubmit}>
            <TextInput type="email" id="email" name="email"  label='Email' onChange={handleInputChange}/>
            <TextInput type="password" id="pw1" name="password"  label='Password' onChange={handleInputChange}/> 
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
      <AuthHeroNew />     
    </div>
  )
}

export default Login;