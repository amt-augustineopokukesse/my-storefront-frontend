import React from 'react';
import { Link } from 'react-router-dom';
import AuthHero from '../Auth-Components/AuthHero';
import TextInput from '../Auth-Components/TextInput';
import '../../../assets/styles/authentication/Login.scss';

const Login: React.FC = () => {
  return (
    <div className='login-container'>
      <div className='login-form-container'>
        <h1 className='header-text'>Log In</h1>
        <form className='login-form'>
            <TextInput type="email" id="email" name="email"  label='Email' />
            <TextInput type="password" id="pw1" name="password"  label='Password'/> 
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