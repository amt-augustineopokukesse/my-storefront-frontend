import { AuthHeaderText } from "../../components/authComponents/AuthHeaderText";
import '../../assets/styles/authenticationStyles/AuthNotification.scss';

const AuthNotification: React.FC = () => {
    return (
        <>
            <AuthHeaderText />
            <div className="authentication">
                <h3 className="note-header">Authentication</h3>
                <p className="note-text" id="text1">You should recieve an email shortly.</p>
                {/* <div id="success-block">
                  <p className="note-text" >Authentication succesful</p>
                  <button className="note-login-button">Log in</button>
                </div> */}
            </div>
        </>
    )
}

export default AuthNotification;