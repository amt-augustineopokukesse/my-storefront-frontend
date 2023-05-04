import React, {useState, useEffect} from 'react';
import '../../assets/styles/authenticationStyles/ResetPw.scss';
import Password from '../../components/authComponents/Password';
import { NewPassword } from '../../Redux/Authentication/initialState';
import { handlePasswordCheck, handleValidPassword, validatePassword } from '../../components/authComponents/AuthUtils';

const initialPasswordState: NewPassword = {
  password: '',
};

const ResetPw2: React.FC = () => {
  const [newPassword, setNewPassword] = useState<NewPassword>(initialPasswordState);
  const [newPassword2, setNewPassword2] = useState<string>('');

  useEffect(() => {
    handlePasswordCheck(newPassword, newPassword2);
  },[newPassword2])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'password2') {
      setNewPassword2(value);
      
    } else if(name === 'password') {
      handleValidPassword(value);
      setNewPassword(prevState => ({ ...prevState, [name]: value }));
    }  else {
      setNewPassword(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const match = validatePassword(newPassword.password);
  const pMatch = newPassword.password === newPassword2;
  
  

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(!match || !pMatch){
      //console.log('password mismatch or invalid password')
    } else {
      //console.log('Password change successful');
      setNewPassword(initialPasswordState);
      
    }  
  };

  
  return (
    <div className='password-reset-container'>
      <div className='password-reset'>
        <h1 className='container-header'>New Password</h1>
        <p className='request-text'>Enter new password</p>
        <form className='passwordForm' onSubmit={handleSubmit}>
          <div className="password">
            <Password type="password" id="new-pw1" name="password"  label='New Password' onChange={handleInputChange}/>  
            <Password type="password" id="new-pw2" name="password2"  label='Confirm Password' onChange={handleInputChange}/>
          </div>
          <button className='send-button'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ResetPw2;