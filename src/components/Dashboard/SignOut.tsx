import React from 'react'
import { useAppDispatch } from '../../store';
import { resetAuthState } from '../../Redux/AuthSlice';
import '../../assets/styles/dashboardStyles/SignOut.scss';

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
      <button onClick={signOut} className='logout-button'>Log out</button>
  )
}

export default SignOut;
