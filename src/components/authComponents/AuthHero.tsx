import { useState, useEffect } from 'react';
import '../../assets/styles/authenticationStyles/AuthHero.scss';
import heroImage1 from '../../assets/images/heroImage1.png';
import heroImage2 from '../../assets/images/heroImage2.png';
import heroImage3 from '../../assets/images/heroImage3.png';
import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom';


import { authData } from '../../staticDB/authData';



const images = [heroImage1, heroImage2, heroImage3];
const messages = authData.messages;
const title = authData.title;

const AuthHero: React.FC = () => {
  const location = useLocation();
  const [bgImage, setBgImage] = useState({});
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const randomImgIndex = Math.floor(Math.random() * images.length);
    const randomMsgIndex = Math.floor(Math.random() * messages.length);
    const bgImage = {
      backgroundImage: `url(${images[randomImgIndex]})`,
    };
    setBgImage(bgImage);
    setMsgIndex(randomMsgIndex);
  }, []);

  


  return (
    <div className='auth-hero' style={bgImage}>
      <Link to='/'>
        <h1 style={location.pathname === '/login' ? {right: 35, textAlign: 'right'} : {left: 35, textAlign: 'left'}}>{title}</h1>
      </Link>
      <div className='authMessage' style={location.pathname === '/login' ? {right: 35, textAlign: 'right'} : {left: `calc((100% - 785px) / 2)`, textAlign: 'right'}}>
        {messages[msgIndex]}
      </div>
    </div>
  );
};

export default AuthHero;