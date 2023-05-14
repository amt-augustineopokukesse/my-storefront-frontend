import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { carousel } from '../../../staticDB/ecommerceImagesDB';
import '../../../assets/styles/templatesStyles/Ecommerce/Carousel.scss';


const Carousel: React.FC = () => {
   

const items = carousel.map((item)=>{
    return(
        <img
        className='carousel-item'
            src={item}
        />
                
    )
}
) 

    const responsive ={
        0:{
            items: 2,
        },
        512:{
            items: 4,
        },
    };

  return <div className='carousel'>
    <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
    />
    </div>
  
}

export default Carousel