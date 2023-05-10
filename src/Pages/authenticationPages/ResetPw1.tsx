import React, {useState, useEffect, useRef} from 'react';
import '../../assets/styles/authenticationStyles/ResetPw.scss';
import Email from '../../components/authComponents/Email';
import { validateEmail, handleEmailCheck } from '../../components/authComponents/AuthUtils';
import { useNavigate } from 'react-router-dom';
import { ResetPwEmail } from '../../Redux/Authentication/initialState';
import { useAppDispatch, useAppSelector } from '../../store';
import { sendEmail } from '../../Redux/AuthSlice';
import { AuthLoader } from '../../components/authComponents/AuthLoader';



const ResetPw1: React.FC = () => {
  const [loader, setLoader] = useState<boolean>(false);


  const initialFormState: ResetPwEmail = {
    email: '',
  };
  const [formState, setFormState] = useState<ResetPwEmail>(initialFormState);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);

  const userEmail: any = useAppSelector((state) => state.auth.auth.rpdEmail);
  
  const errorDiv = document.getElementById('email-error') as HTMLElement;


  useEffect (() => {
    console.log(userEmail);
    if (userEmail && userEmail.success) {
      setLoader(false);
      setFormState(initialFormState);
      formRef.current?.reset();
      navigate('/authnotification')
    }

    

  },[userEmail, navigate]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (errorDiv) {
      errorDiv.style.display = 'none';
      const emailDiv = document.getElementById('email') as HTMLElement;
      emailDiv.style.border = '1px solid transparent';
    }
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };
  
  const valResult = validateEmail(formState.email)  

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (valResult){
      setLoader(true);
      await dispatch(sendEmail(formState)).unwrap();
      
     } else {
      handleEmailCheck(valResult);
      errorDiv.style.display = 'block';
      errorDiv.textContent = 'Invalid Email format. Kindly check.'
     }
  };

  return (
    <div className='password-reset-container'>
      <div className='password-reset'>
        <h1 className='container-header'>Password Reset</h1>
        <p className='request-text'>Kindly enter your email</p>
        <div id='email-error'></div>
        <form className='emailForm' onSubmit={handleSubmit} ref={formRef}>
            <div className='email-div'>
              <Email onChange={handleInputChange} />
            </div>
            <button className='send-button'>Send</button>
            {loader ? <AuthLoader /> : ''}
        </form>
      </div>
    </div>
  )
}

export default ResetPw1;