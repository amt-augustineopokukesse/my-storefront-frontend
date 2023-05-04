import React, {useState} from 'react';
import '../../assets/styles/authenticationStyles/ResetPw.scss';
import { emailPattern } from '../../staticDB/authData';
import Email from '../../components/authComponents/Email';
import { validateEmail, handleEmailCheck } from '../../components/authComponents/AuthUtils';
import { useNavigate } from 'react-router-dom';
interface EmailProp {
  email: string;
}

const ResetPw1: React.FC = () => {

  const initialFormState: EmailProp = {
    email: '',
  };
  const [formState, setFormState] = useState<EmailProp>(initialFormState)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };
  const navigate = useNavigate();
  const valResult = validateEmail(formState.email)  

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (valResult){
      //console.log(valResult);
      setFormState(initialFormState);
      navigate('/resetpw2')
     } else {
      handleEmailCheck(valResult);
     }
  };

  return (
    <div className='password-reset-container'>
      <div className='password-reset'>
        <h1 className='container-header'>Password Reset</h1>
        <p className='request-text'>Kindly enter your email</p>
        <form className='emailForm' onSubmit={handleSubmit}>
            <div className='email-div'>
              <Email onChange={handleInputChange} pattern={emailPattern}/>
            </div>
            <button className='send-button'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ResetPw1;