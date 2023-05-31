import { useEffect, useState } from 'react';
import '../../assets/styles/dashboardStyles/MerchantProfile.scss';
import SignOut from './SignOut';

type User = {
    profile_picture: string;
    business_name: string;
}

export const MerchantProfile: React.FC = () => {
    const user: User = { profile_picture: "", business_name: "" };
    const [ merchantExists, setmerchantExists ] = useState(user)
    
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