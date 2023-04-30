import React from 'react';
import '../../../assets/styles/authentication/ResetPw.scss';
import TextInput from '../Auth-Components/TextInput';

const ResetPw2: React.FC = () => {
  return (
    <div className='password-reset-container'>
      <div className='password-reset'>
        <h1 className='container-header'>New Password</h1>
        <p className='request-text'>Enter new password</p>
        <form className='passwordForm'>
          <div className="password">
            <TextInput type="password" id="new-pw1" name="password"  label='New Password'/>  
            <TextInput type="password" id="new-pw2" name="password"  label='Confirm Password'/>
          </div>
          <button className='send-button'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ResetPw2;