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

const loginloader = {
    //bottom: '0vh',
    //position: 'relative',
    top:'35vh',
    left: '25vw',
    width: '40px',
    height: '40px'
}

const emailLoader = {
    //bottom: '0vh',
    //position: 'relative',
    top:'40vh',
    left: '17.5vw',
    width: '40px',
    height: '40px'
}

export const AuthLoader: React.FC = () => {
    const location = useLocation();
    return (
        <div className="lds-spinner" style={location.pathname === '/signup' ? signuploader : 
        location.pathname === '/login' ? loginloader: location.pathname === '/resetpw1' ? emailLoader : {}}>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    )
}