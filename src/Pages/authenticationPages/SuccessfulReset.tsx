import { AuthHeaderText } from '../../components/authComponents/AuthHeaderText';
import '../../assets/styles/authenticationStyles/SuccessfulReset.scss';

const SuccessfulReset: React.FC = () => {
    return (
        <>
        <AuthHeaderText />
            <div className='password-reset'>
                <h3 className='password-reset-header'>Password reset successful</h3>
                <p className='password-reset-text'>Kindly check your email.</p>
            </div>
        </>
        
    )
}

export default SuccessfulReset;