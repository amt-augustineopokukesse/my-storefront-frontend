import { AuthHeaderText } from '../../components/authComponents/AuthHeaderText';
import '../../assets/styles/authenticationStyles/SuccessfulNotification.scss';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000';

const SuccessfulAuthNotification: React.FC = () => {
    const { id, token } = useParams();
    const [success, setSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const getVerified =async () => {
        try {
            const { data } = await axios.put(`${API_BASE_URL}/verify`, {id, token});
            if (data) {
                setSuccess(data.success);
                setSuccessMessage(data.message);
            } else {
                setSuccess(false);
            }
        } catch (error) {
            setSuccess(false);
            setSuccessMessage("Broken Link. Contact the Storefront Administrator")
        }
    }

    useEffect(() => {
        getVerified()
    }, []);

    return (
        <>
        <AuthHeaderText />
        <div className="auth-login">
            <h3 className="auth-login-header">Authentication</h3>
            <p className="auth-login-text">{ successMessage }</p>
            {success && <Link to='/login'><button className="auth-login-button">Log in</button></Link>}
            
        </div>
        </>
    )
}
export default SuccessfulAuthNotification;