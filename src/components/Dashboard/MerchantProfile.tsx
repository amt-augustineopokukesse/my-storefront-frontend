import profile from '../../assets/images/Ellipse 3.png';
import { useState } from 'react';
import '../../assets/styles/dashboardStyles/MerchantProfile.scss';

export const MerchantProfile: React.FC = () => {

    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu(!showMenu);
    }
    return (
        <div className='profile-photo-menu'>
            <img className="profile-photo" src={profile} alt="" />
            <div className="profile-menu">
                <button className="profile-button" onClick={handleClick}>
                    Business Name
                </button>
                {showMenu && (
                    <ul className="profile-list">
                        <li className="profile-item"><button className="logout-button">Logout</button></li>
                    </ul>
                )}
                
            </div>
        </div>
    )
}