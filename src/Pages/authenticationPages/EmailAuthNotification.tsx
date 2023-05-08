import { AuthHeaderText } from "../../components/authComponents/AuthHeaderText"
import '../assets/styles/EmailAuthNotification.scss'

export const AuthNotification: React.FC = () => {
    return (
        <>
            <AuthHeaderText />
            <div className="authentication">
                <h3 className="auth-header">Authentication</h3>
                <p className="auth-text">You should recieve an email shortly.</p>
            </div>
        </>
    )
}