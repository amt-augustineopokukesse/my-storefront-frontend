import React from 'react';
import '../../../assets/styles/authentication/ResetPw1.scss';
import TextInput from '../Auth-Components/TextInput';

const ResetPw1: React.FC = () => {
  return (
    <div className='password-reset-container'>
      <div className='password-reset'>
        <h1 className='container-header'>Password Reset</h1>
        <p className='request-text'>Kindly enter your email</p>
        <form className='emailForm'>
            <div className='email-div'>
              <TextInput type="email" id="email" name="email"  label='Email' />
            </div>
          <button className='send-button'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ResetPw1;