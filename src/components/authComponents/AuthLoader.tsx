import '../../assets/styles/authenticationStyles/AuthLoader.scss';
import { useLocation } from 'react-router-dom';

const signuploader = {
    //bottom: '0vh',
    //position: 'relative',
    top:'40vh',
    left: '68vw',
    width: '40px',
    height: '40px'
}

export const AuthLoader: React.FC = () => {
    const location = useLocation();
    return (
        <div className="lds-spinner" style={location.pathname === '/signup' ? signuploader : {}}>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    )
}