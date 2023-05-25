import profile from '../../assets/images/Ellipse 3.png';
import { useEffect, useState } from 'react';
import '../../assets/styles//custDashboardStyles/CustProfile.scss';
import SignOut from '../Dashboard/SignOut';

type user = {
    [key: string]: any;
}

export const CustProfile: React.FC<user> = (props) => {
    const { custUser } = props;
    const [ customerExists, setmerchantExists ] = useState(custUser)
    
    useEffect(() => {
        const customer = localStorage.getItem("customer");
        if (customer) {
            setmerchantExists(JSON.parse(customer));
        }
    }, [])
    

    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu(!showMenu);
    }

    return (
        <div className='profile-photo-menu'>
            <img className="profile-photo" src={profile} alt="" />
            <div className="profile-menu">
                <button className="profile-button" onClick={handleClick}>
                    { customerExists? customerExists.first_name : "Customer"}
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