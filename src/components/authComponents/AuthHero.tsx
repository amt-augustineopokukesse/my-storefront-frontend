import React, { useState, useEffect} from 'react';
import '../../assets/styles/authenticationStyles/AuthHero.scss';
import heroImage1 from '../../assets/images/heroImage1.png';
import heroImage2 from '../../assets/images/heroImage2.png';
import heroImage3 from '../../assets/images/heroImage3.png';

import { useLocation } from 'react-router-dom';


import { authData } from '../../staticDB/authData';

const AuthHero: React.FC = () => {
  const [currentState, setCurrentState] = useState(0);
  const [stateMessage, setStateMessage] = useState(0);

  const images = [heroImage1, heroImage2, heroImage3];
  const messages = authData.messages;
  const title = authData.title;

  const location = useLocation();

  const bgImage = {
    backgroundImage: `url(${(images[currentState])})`,
  }
  const message = messages[stateMessage];

  useEffect(() => {
    const bgImtimer = setTimeout(() => {
        if(currentState === 2){
            setCurrentState(0)
        } else {
            setCurrentState(currentState + 1)
        }
    }, 5000)
    return () => {
      clearTimeout(bgImtimer)
    }
  }, [currentState]);

  useEffect(() => {
    const msgTimer = setTimeout(() => {
      if (stateMessage === messages.length - 1) {
        setStateMessage(0);
      } else {
        setStateMessage(stateMessage + 1);
      }
    }, 5000);
  
    return () => {
      clearTimeout(msgTimer);
    };
  }, [stateMessage, messages]);
  
  return (
    <div className='auth-hero' style={bgImage}>
      <h1 style={location.pathname === '/login' ? {right: 35, textAlign: 'right'} : {left: 35, textAlign: 'left'}}>{title}</h1>
      <div className='authMessage' style={location.pathname === '/login' ? {right: 35, textAlign: 'right'} : {left: `calc((100% - 650px) / 2)`, textAlign: 'right'}}>
        {message}
      </div>
    </div>
  );
};

export default AuthHero;