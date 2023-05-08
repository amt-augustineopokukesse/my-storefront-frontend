import { AuthHeaderText } from '../../components/authComponents/AuthHeaderText';
import '../../assets/styles/authenticationStyles/SuccessfulNotification.scss';
import { Link } from 'react-router-dom';



const SuccessfulAuthNotification: React.FC = () => {
    return (
        <>
        <AuthHeaderText />
        <div className="auth-login">
            <h3 className="auth-login-header">Authentication</h3>
            <p className="auth-login-text">Authentication succesful</p>
            <Link to='/login'><button className="auth-login-button">Log in</button></Link>
        </div>
        </>
    )
}
export default SuccessfulAuthNotification;