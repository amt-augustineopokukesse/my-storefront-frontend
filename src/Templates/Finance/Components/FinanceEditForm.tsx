import React, { useState } from 'react'
import '../../../assets/styles/templatesStyles/Finance/FinanceEditForm.scss'
import { TopBarForm } from './TopBarForm';
import { Finance } from '../Pages/Finance';

export const FinanceEditForm: React.FC = () => {
    const [activeButton, setActiveButton] = useState('');

    const openSection =(event: React.MouseEvent) => {
        setActiveButton(event.currentTarget.id);
    }
    
    return (
        <>
        <Finance />
        <div className='finance-edit-form'>
            {activeButton === 'section1' ? <TopBarForm /> : ''}


            <div className='section-buttons'>
                <button className="section-button"
                 id='section1' 
                 onClick={openSection}>
                    Section 1
                </button>
                <button className="section-button"
                 id='section3' 
                 onClick={openSection}>
                    Section 2
                </button>
                <button className="section-button"
                 id='section3' 
                 onClick={openSection}>
                    Section 3
                </button>
                <button className="section-button"
                 id='section4' 
                 onClick={openSection}>
                    Section 4
                </button>
                <button className="section-button"
                 id='section5' 
                 onClick={openSection}>
                    Section 5
                </button>
                <button className="section-button"
                 id='section6' 
                 onClick={openSection}>
                    Section 6
                </button>
                <button className="section-button"
                 id='section7' 
                 onClick={openSection}>
                    Section 7
                </button>
                <button className='save-button'>Save</button>
                <button className='publish-button'>Publish</button>
            </div>
        </div>
        </>
    )
}