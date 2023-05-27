import '../../../assets/styles/templatesStyles/Finance/Finance.scss'
import TemplateData from '../../../staticDB/FinanceData'
import searchlogo from '../../../assets/images/Vector (5).png'
import puzzleImg from '../../../assets/images/puzzle.png'
import React, { useState } from 'react'
import { MessageForm } from '../Components/MessageForm'
import { Footer } from '../Components/Footer'

export const Finance: React.FC = () => {
    const [currentButton, setCurrentButton] = useState(TemplateData.toggleButtons.firstButtonText.content);
    const handleActive = (event: React.MouseEvent<HTMLButtonElement>) => {
        setCurrentButton(event.currentTarget.id);
    }
    const toggleDivData = currentButton === TemplateData.toggleButtons.firstButtonText.content
    ? TemplateData.toggleDiv.components.personal
    : TemplateData.toggleDiv.components.business;

    const section3_Data = currentButton === TemplateData.toggleButtons.firstButtonText.content 
    ? TemplateData.section3.components.personal 
    : TemplateData.section3.components.business;

    const section4_Data = currentButton == TemplateData.toggleButtons.firstButtonText.content 
    ? TemplateData.section4.components.personal 
    : TemplateData.section4.components.business;

    return (
        <div className='finance-template' 
        style={TemplateData.globalRobotoFont}>
            <div className="finance-top-bar" 
            style={TemplateData.topBar.style}>

                <h3 className='finance-top-bar-header'
                style={TemplateData.topBar.components.logo.style}>
                    {TemplateData.topBar.components.logo.content}
                </h3>

                <span className='search-bar-buttons-span'>
                    <span className='search-bar-search-icon'>
                        <input type="text" className="search-bar"/>
                        <img src={searchlogo} alt="" className='searchlogo-img'/>
                    </span> 

                    <span className='login-register-buttons'>
                        <button className='login-button' 
                        style={TemplateData.topBar.components.loginButton.style}>
                            {TemplateData.topBar.components.loginButton.content}
                        </button>

                        <button className='register-button' 
                        style={TemplateData.topBar.components.registerButton.style}>
                            {TemplateData.topBar.components.registerButton.content}
                        </button>
                    </span>
                </span>
            </div> 
            
            <div className='finance-hero-section'
            style={TemplateData.heroSection.style}>

                <span className='hero-message'>
                    <h4 className='finance-hero-section-header'
                    style={TemplateData.heroSection.components.heroHeader.style}>
                        {TemplateData.heroSection.components.heroHeader.content}
                    </h4>
                    <p className='finance-hero-section-text'
                    style={TemplateData.heroSection.components.heroParagraph.style}>
                   {TemplateData.heroSection.components.heroParagraph.content} 
                    </p>
                </span>

                <span className='toggle-buttons-span'>
                    <button 
                        className={currentButton === TemplateData.toggleButtons.firstButtonText.content 
                            ? 'active toggle-button': 'toggle-button'} 
                        onClick={handleActive} id={TemplateData.toggleButtons.firstButtonText.content} 
                        style={currentButton === TemplateData.toggleButtons.firstButtonText.content 
                        ? TemplateData.toggleButtons.activeButtonStyle
                        : TemplateData.toggleButtons.ButtonStyle}
                        >

                        {TemplateData.toggleButtons.firstButtonText.content}
                    </button>
                    <button 
                        className={currentButton === TemplateData.toggleButtons.secondButtonText.content 
                            ? 'active toggle-button': 'toggle-button'} 
                        onClick={handleActive} id={TemplateData.toggleButtons.secondButtonText.content}
                        style={currentButton === TemplateData.toggleButtons.secondButtonText.content 
                            ? TemplateData.toggleButtons.activeButtonStyle
                            : TemplateData.toggleButtons.ButtonStyle}>
                            
                        {TemplateData.toggleButtons.secondButtonText.content}
                    </button>
                </span>
            </div> 
            <div 
            className={currentButton === 'personal' 
            ? 'toggle-div toggle-div-personal-mode' 
            : 'toggle-div toggle-div-business-mode'}
            style={TemplateData.toggleButtons.activeButtonStyle}>
                {
                    toggleDivData.map((element) => (
                        <span className='toggle-div-component'
                        style={TemplateData.toggleDiv.components.globalFontStyle}>
                            <img src={element.image} alt="" className='image'/>
                            <p className='text'>{element.text.content}</p>
                        </span>
                    ))
                }
            </div>
            <div className='section3' 
            style={TemplateData.section3.style}>
                {
                     section3_Data.map((element) => (
                        <div className='section3-inner-div'>
                            <span className='header-text-span'>
                                <h3 style={TemplateData.section3.components.globalFontStyle.headerStyle}>
                                    {element.header.content}
                                </h3>
                                <p style={TemplateData.section3.components.globalFontStyle.text}>
                                    {element.text.content}
                                </p>
                            </span>
                            <span className='image-span'>
                                <img src={element.image} alt="" className='image'/>
                            </span>
                        </div>
                    ))
                }
            </div>
            <div className="section4" 
            style={TemplateData.section4.style}>
               { 
                    section4_Data.map((element) => (
                        <div className='section4-inner-div'>
                            <span className='header-text-span'>
                                <h3 style={TemplateData.section3.components.globalFontStyle.headerStyle}>
                                    {element.header.content}
                                </h3>
                                <p style={TemplateData.section3.components.globalFontStyle.text}>
                                    {element.text.content}
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