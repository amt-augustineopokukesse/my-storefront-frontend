import { AuthHeaderText } from '../../components/authComponents/AuthHeaderText'
import '../assets/styles/authenticationStyles/SuccessfulAuthNotification.scss'



export const SuccessfulAuthNotification: React.FC = () => {
    return (
        <>
        <AuthHeaderText />
        <div className="auth-login">
            <h3 className="auth-login-header">Authentication</h3>
            <p className="auth-login-text">Authentication succesful</p>
            <button className="auth-login-button">Log in</button>
        </div>
        </>
    )
}