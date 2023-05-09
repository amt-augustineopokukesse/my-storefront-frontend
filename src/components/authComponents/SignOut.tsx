import React from 'react'
//import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { resetAuthState } from '../../Redux/AuthSlice';

const SignOut:React.FC = () => {
  //const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const signOut = () => {
    window.localStorage.removeItem("token");
    dispatch(resetAuthState());
    // navigate('/');
    window.location.href = '/';
  }

  return (
    <div>
      <button onClick={signOut}>Log out</button>
    </div>
  )
}

export default SignOut;
