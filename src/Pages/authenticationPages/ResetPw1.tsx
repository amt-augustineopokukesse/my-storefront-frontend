import React, {useState, useEffect} from 'react';
import '../../assets/styles/authenticationStyles/ResetPw.scss';
import Email from '../../components/authComponents/Email';
import { validateEmail, handleEmailCheck } from '../../components/authComponents/AuthUtils';
import { useNavigate } from 'react-router-dom';
import { ResetPwEmail } from '../../Redux/Authentication/initialState';
import { useAppDispatch, useAppSelector } from '../../store';
import { sendEmail } from '../../Redux/AuthSlice';


const ResetPw1: React.FC = () => {

  const initialFormState: ResetPwEmail = {
    email: '',
  };
  const [formState, setFormState] = useState<ResetPwEmail>(initialFormState);

  const dispatch = useAppDispatch();
    const userEmail = useAppSelector((state) => state.auth.auth.rpdEmail);
  

    useEffect (() => {
      console.log(userEmail);
    },[userEmail]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };
  const navigate = useNavigate();
  const valResult = validateEmail(formState.email)  

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (valResult){
      await dispatch(sendEmail(formState)).unwrap();
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
              <Email onChange={handleInputChange} />
            </div>
            <button className='send-button'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ResetPw1;