import React, {useState, useEffect, useRef } from 'react';
import '../../assets/styles/authenticationStyles/ResetPw.scss';
import Password from '../../components/authComponents/Password';
import { NewPassword } from '../../Redux/Authentication/initialState';
import { handlePasswordCheck, handleValidPassword, validatePassword } from '../../components/authComponents/AuthUtils';
import { useAppDispatch, useAppSelector } from '../../store';
import { resetPassword } from '../../Redux/AuthSlice';
import { useNavigate, useParams } from 'react-router-dom';

const initialPasswordState: NewPassword = {
  id: '',
  password: '',
};

const ResetPw2: React.FC = () => {
  const [newPassword, setNewPassword] = useState<NewPassword>(initialPasswordState);
  const [newPassword2, setNewPassword2] = useState<string>('');
  const { id } = useParams();
  //const [successfulReset, setSuccessfulReset] = useState({});

  const dispatch = useAppDispatch();
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const newPwd: any = useAppSelector((state) => state.auth.auth.newPassword);
  

  useEffect (() => {
    console.log(newPwd);
    console.log(id);
    if (newPwd && newPwd.success && newPwd.message){
      //if (newPwd && newPwd.updatedAt){
      navigate('/successful-reset');
    }
  },[newPwd, navigate]);

  useEffect(() => {
    handlePasswordCheck(newPassword, newPassword2);
  },[newPassword2])

  const errorDiv = document.getElementById('pw-error') as HTMLElement;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'password2') {
      setNewPassword2(value);  
    } else if(name === 'password') {
      handleValidPassword(value);
      setNewPassword(prevState => ({ ...prevState, [name]: value }));
      newPassword.id = id;

      if (errorDiv) {
        errorDiv.style.display = 'none';
      }
    }  else {
      setNewPassword(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const match = validatePassword(newPassword.password);
  const pMatch = newPassword.password === newPassword2;
  
  const errorText = 'Password mismatch or invalid password. Kindly re-enter'

  const throwError = () => {
    errorDiv.style.display = 'block';
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(!match || !pMatch){
      throwError();
      formRef.current?.reset();
    } else {
      await dispatch(resetPassword(newPassword));
      formRef.current?.reset();
      setNewPassword(initialPasswordState);
      
    }  
  };

  
  return (
    <div className='password-reset-container'>
        <div className='password-reset'>
        <h1 className='container-header'>New Password</h1>
        <p className='request-text'>Enter new password</p>
        <div id='pw-error'>{errorText}</div>
        <form className='passwordForm' onSubmit={handleSubmit} ref={formRef}>
          <div className="password">
            <Password type="password" id="new-pw1" name="password"  label='New Password' onChange={handleInputChange}/>  
            <Password type="password" id="new-pw2" name="password2"  label='Confirm Password' onChange={handleInputChange}/>
          </div>
          <button className='send-button'>Send</button>
        </form>        
      </div>
    </div>
  )}

export default ResetPw2;