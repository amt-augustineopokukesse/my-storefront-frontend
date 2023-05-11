import profile from '../../assets/images/Ellipse 3.png';
import { useEffect, useState } from 'react';
import '../../assets/styles/dashboardStyles/MerchantProfile.scss';

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

    const handleSee = () => console.log(merchantExists)
    return (
        <div className='profile-photo-menu'>
            <img className="profile-photo" src={profile} alt="" />
            <div className="profile-menu">
                <button className="profile-button" onClick={handleClick}>
                    { merchantExists? merchantExists.business_name : "nothing here"}
                </button>
                {showMenu && (
                    <ul className="profile-list">
                        <li className="profile-item"><button onClick={handleSee} className="logout-button">Logout</button></li>
                    </ul>
                )}
                
            </div>
        </div>
    )
}