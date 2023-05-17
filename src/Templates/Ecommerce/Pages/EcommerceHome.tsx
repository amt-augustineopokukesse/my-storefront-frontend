import React from 'react';
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import Carousel from '../Components/Carousel';
import Main from '../Components/Main';
import Footer from '../Components/Footer';
import FloatingButton from '../Components/FloatingButton';

const EcommerceHome:React.FC = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <Hero />
        <Carousel />
        <Main />
        <Footer />
        <FloatingButton />
    </div>
  )
}

export default EcommerceHome