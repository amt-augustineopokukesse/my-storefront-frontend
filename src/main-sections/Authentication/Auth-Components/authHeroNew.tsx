import React, {useState, useEffect} from 'react';
//import { useLocation } from 'react-router-dom';
import heroImage1 from '../../../assets/images/heroImage1.png';
import heroImage2 from '../../../assets/images/heroImage2.png';
import heroImage3 from '../../../assets/images/heroImage3.png';
import '../../../assets/styles/authentication/AuthHero.scss';

const AuthHeroNew: React.FC = () => {
  const [currentState, setCurrentState] = useState(0);
  const images = [heroImage2, heroImage1, heroImage3];

  const bgImage = {
    backgroundImage: `url(${(images[currentState])})`,
    //backgroundPosition: 'center',
    //backgroundSize: 'cover'
  }

  useEffect(() => {
    const timer = setTimeout(() => {
        if(currentState === 2){
            setCurrentState(0)
        } else {
            setCurrentState(currentState + 1)
        }
    }, 5000)
    return () => {
      clearTimeout(timer)
    }
  }, [currentState])
  
  return (
    <div className='auth-hero' style={bgImage}>
      AuthHero
    </div>
  );
};

export default AuthHeroNew;
