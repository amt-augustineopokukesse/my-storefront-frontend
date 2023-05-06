import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import AuthHero from '../../components/authComponents/AuthHero';
import '../../assets/styles/authenticationStyles/Login.scss';
import { User } from '../../Redux/Authentication/initialState';
//import { useSelector, useDispatch } from 'react-redux';
//import { loginSuccess, loginFailure } from '../../Redux/Authentication/authActions';
import Email from '../../components/authComponents/Email';
//import { emailPattern } from '../../staticDB/authData';
import { validateEmail, handleEmailCheck } from '../../components/authComponents/AuthUtils';
import Password from '../../components/authComponents/Password';

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

    //const dispatch = useDispatch();
    //const users = useSelector((state: any) => state.auth.auth.newUser);

    // const login = (formState: User) => {
    //     const user = users.find((user: User) => {
    //         return user.email === formState.email && user.password === formState.password
    //     });
    //     // console.log(user)
    //     if (user) {
    //       // console.log("login successful");
    //       dispatch(loginSuccess());
    //     } else {
    //       // console.log("login failed");
    //       dispatch(loginFailure("Invalid email or password"));
    //     }
    // }

    const valResult = validateEmail(formState.email)
    

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (valResult) {
          //console.log(formState)
          //login(formState);
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