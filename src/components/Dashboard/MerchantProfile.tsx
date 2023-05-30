import profile from '../../assets/images/Ellipse 3.png';
import { useEffect, useState } from 'react';
import '../../assets/styles/dashboardStyles/MerchantProfile.scss';
import SignOut from './SignOut';

type user = {
    [key: string]: any;
}

export const MerchantProfile: React.FC<user> = (props) => {
    const { merchantUser } = props;
    const [ merchantExists, setmerchantExists ] = useState(merchantUser)
    
    useEffect(() => {
        const merchant = localStorage.getItem("merchant");
        if (merchant) {
            setmerchantExists(JSON.parse(merchant));
        }
    }, [])
    

    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu(!showMenu);
    }

    return (
        <div className='profile-photo-menu'>
            <img className="profile-photo" src={merchantExists?merchantExists.profile_picture : ""} alt="" />
            <div className="profile-menu">
                <button className="profile-button" onClick={handleClick}>
                    { merchantExists? merchantExists.business_name : "Merchant"}
                </button>
                {showMenu && (
                    <ul className="profile-list">
                        <SignOut />
                    </ul>
                )}
                
            </div>
        </div>
    )
}