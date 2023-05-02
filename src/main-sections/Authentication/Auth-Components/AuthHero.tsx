import React from 'react';
import { useLocation } from 'react-router-dom';
import heroImage1 from '../../../assets/images/heroImage1.png';
//import heroImage2 from '../../../assets/images/heroImage2.png';
import heroImage3 from '../../../assets/images/heroImage3.png';
import '../../../assets/styles/authentication/AuthHero.scss';

const AuthHero: React.FC = () => {
  const location = useLocation();
  let backgroundImage = '';

  switch (location.pathname) {
    case '/signup':
      backgroundImage = `url(${heroImage1})`;
      break;
    case '/login':
      backgroundImage = `url(${heroImage3})`;
      break;
    // case '/forgot-password':
    //   backgroundImage = `url(${heroImage3})`;
    //   break;
    default:
      backgroundImage = `url(${heroImage1})`;
  }

  return (
    <div className='auth-hero' style={{ backgroundImage }}>
      AuthHero
    </div>
  );
};

export default AuthHero;
