import { AuthHeaderText } from '../../components/authComponents/AuthHeaderText';
import '../../assets/styles/authenticationStyles/SuccessfulReset.scss';
//import { useAppSelector } from '../../store';
//import {useEffect} from 'react';
import { Link } from 'react-router-dom';

const SuccessfulReset: React.FC = () => {

  //const newPwd: any = useAppSelector((state) => state.auth.auth.newPassword);
  //const navigate = useNavigate();

  //const textDiv = document.getElementById('successText') as HTMLElement;

    // useEffect (() => {
    //   console.log(newPwd);
    //   //if (newPwd && newPwd.success && newPwd.message){
    //     if (textDiv && newPwd && newPwd.updatedAt){
    //         //textDiv.textContent = newPwd.message;
    //             textDiv.textContent = newPwd.password;
            
    //     }
    // });
    return (
        <>
        <AuthHeaderText />
            <div className='password-reset-success'>
                <h3 className='success-header'> Success</h3>
                <p className='success-text' id='successText'>🎊 Your password reset was successful 🎊</p>
                <div className='button'>
                    <Link to='/login'>
                        <button className='login-button'>Log In</button>
                    </Link>
                    
                </div>
            </div>
        </>
        
    )
}

export default SuccessfulReset;