import React from 'react'
import { useNavigate } from 'react-router-dom';

const SignOut:React.FC = () => {
    const navigate = useNavigate();
    
    const signOut = () => {
        window.localStorage.removeItem("isLoggedIn");
        navigate('/');
    }
  return (
    <div>
        <button onClick={signOut}>Log out</button>
    </div>
  )
}

export default SignOut;