import React from 'react';
import '../../../assets/styles/templatesStyles/Ecommerce/Footer.scss';
import facebook from '../../../assets/svg/templates-svg/facebook.svg';
import instagram from '../../../assets/svg/templates-svg/instagram.svg';
import phone from '../../../assets/svg/templates-svg/phone.svg';
import twitter from '../../../assets/svg/templates-svg/twitter.svg';

const Footer: React.FC = () => {
  return (
    <section className="footer-container">
      <div className="footer">
        <div>
          <h1 className="logo">LOGO</h1>
        </div>
        <div>
          <p className="text">
            Address: consectetur adipiscing elit.
          </p>
          <p className="text">
            Location: Lorem ipsum dolor sit amet
          </p>
          <p className="text">
            Nulla est purus, ultrices in porttitor in, accumsan non quam.
          </p>
        </div>
        <div className='contact'>
          <div className='sm-icons'>
            <span><img src={facebook} alt="facebook icon" /></span>
            <span><img src={instagram} alt="instagram icon" /></span>
            <span><img src={twitter} alt="twitter icon" /></span>
          </div>
          <p className="text">Customer Care</p>
          <p className="text"><span><img src={phone} alt="twitter icon" /></span> +233 24 123 4567</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
