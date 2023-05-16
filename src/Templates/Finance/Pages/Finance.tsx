import '../../../assets/styles/templatesStyles/Finance/Finance.scss'
import TemplateData from '../../../staticDB/FinanceData'
import searchlogo from '../assets/images/Vector (5).png'
import puzzleImg from '../assets/images/puzzle.png'
import React, { useState } from 'react'
import { MessageForm } from '../Components/MessageForm'
import { Footer } from '../Components/Footer'

export const FinanceTemplate1: React.FC = () => {
    const [currentButton, setCurrentButton] = useState('personal');
    const handleActive = (event: React.MouseEvent<HTMLButtonElement>) => {
        setCurrentButton(event.currentTarget.id);
    }
    const toggleDivData = currentButton === 'personal' ? TemplateData.toggleDiv.personal : TemplateData.toggleDiv.business;
    const section3_Data = currentButton === 'personal' ? TemplateData.section3.personal : TemplateData.section3.business;
    const section4_Data = currentButton == 'personal' ? TemplateData.section4.personal : TemplateData.section4.business;

    return (
        <div className='finance-template'>
            <div className="finance-top-bar">
                <h3 className='finance-top-bar-header'>
                    {TemplateData.topBar.logo}
                </h3>
                <span className='search-bar-buttons-span'>
                    <span className='search-bar-search-icon'>
                        <input type="text" className="search-bar"/>
                        <img src={searchlogo} alt="" className='searchlogo-img'/>
                    </span> 

                    <span className='login-register-buttons'>
                        <button className='login-button'>Login</button>
                        <button className='register-button'>Register</button>
                    </span>
                </span>
            </div> 
            
            <div className='finance-hero-section'>
                <span className='hero-message'>
                    <h4 className='finance-hero-section-header'>{TemplateData.heroSection.heroHeader}</h4>
                    <p className='finance-hero-section-text'>
                   {TemplateData.heroSection.heroParagraph} 
                    </p>
                </span>

                <span className='toggle-buttons-span'>
                    <button 
                        className={currentButton === 'personal' ? 'active toggle-button': 'toggle-button'} 
                        onClick={handleActive} id='personal'>

                        {TemplateData.toggleButtons.firstButtonText}
                    </button>
                    <button 
                        className={currentButton === 'business' ? 'active toggle-button': 'toggle-button'} 
                        onClick={handleActive} id='business'>
                            
                        {TemplateData.toggleButtons.secondButtonText}
                    </button>
                </span>
            </div> 
            <div className={currentButton === 'personal' ? 'toggle-div toggle-div-personal-mode' : 'toggle-div toggle-div-business-mode'}>
                {
                    toggleDivData.map((element) => (
                        <span className='toggle-div-component'>
                            <img src={element.image} alt="" className='image'/>
                            <p className='text'>{element.text}</p>
                        </span>
                    ))
                }
            </div>
            <div className='section3'>
                {
                    section3_Data.map((element) => (
                        <div className='section3-inner-div'>
                            <span className='header-text-span'>
                                <h3>
                                    {element.header}
                                </h3>
                                <p>
                                    {element.text}
                                </p>
                            </span>
                            <span className='image-span'>
                                <img src={element.image} alt="" className='image'/>
                            </span>
                        </div>
                    ))
                }
            </div>
            <div className="section4">
               { 
                    section4_Data.map((element) => (
                        <div className='section4-inner-div'>
                            <span className='header-text-span'>
                                <h3>
                                    {element.header}
                                </h3>
                                <p>
                                    {element.text}
                                </p>
                            </span>
                            <span className='image-span'>
                                <img src={element.image} alt="" className='image'/>
                            </span>
                        </div>
                    ))
                }
            </div>
            <div className="message-section">
                <span className='image-span'>
                    <img src={puzzleImg} alt="" className='image'/>
                </span>
                <MessageForm />
            </div>
           <Footer />
        </div>
    )
}