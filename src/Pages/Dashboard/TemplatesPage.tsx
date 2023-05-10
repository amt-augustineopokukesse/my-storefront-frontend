import '../assets/styles/dashboardStyles/TemplatesPage.scss'
import { useState } from 'react';
import ecommercelogo from '../assets/house.png'
import dollarlogo from '../assets/dollar.png'
import bloglogo from '../assets/blog.png'

export const TemplatesPage: React.FC = () => {

    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu(!showMenu);
    }

    return (
        <div className='template-page'>
            <button className='category-button' onClick={handleClick}>
                Category
            </button>
            {showMenu && (
                    <ul className="category-list">
                        <li className="category-item">
                            <button className="category-list-buttons">
                                <span className='logo-name-span'>
                                    <img src={ecommercelogo} alt="" className='category-logos'/>
                                    Ecommerce
                                </span>
                                
                            </button>
                        </li>
                        <li className="category-item">
                            <button className="category-list-buttons">
                                <span className='logo-name-span'>
                                    <img src={dollarlogo} alt="" className='category-logos'/>
                                    Finance
                                </span>
                               
                            </button>
                        </li>
                        <li className="category-item">
                            <button className="category-list-buttons">
                                <span className='logo-name-span'>
                                     <img src={bloglogo} alt="" className='category-logos'/>
                                    Blog   
                                </span>
                                
                            </button>
                        </li>
                    </ul>
                )}

            <div className="template">
                <h3 className='template-header'>Templates</h3>
            </div>
        </div>
    )
}