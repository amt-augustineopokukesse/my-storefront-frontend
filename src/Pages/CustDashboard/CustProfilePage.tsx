import '../../assets/styles/custDashboardStyles/CustProfile.scss'
import profilephoto from '../../assets/images/Ellipse 15.png'
import editLogo from '../../assets/svg/icons8-edit.svg'
import { useEffect, useState } from 'react';

type user = {
    [key: string]: any;
}

export const CustProfilePage: React.FC<user> = (props) => {

    
    const { merchantUser } = props;
    const [ merchantExists, setmerchantExists ] = useState(merchantUser);

    useEffect(() => {
        const merchant = localStorage.getItem("merchant");
        if (merchant) {
            setmerchantExists(JSON.parse(merchant));
        }
    }, [])

    return (
        <div className="profile-details">
            <div className="image-name">
                <img className='photo' src={profilephoto} alt="" />
                <h3 className='name'>{ merchantExists? merchantExists.business_name : "Merchant"}</h3>
            </div>
            <div className="form">
                <div className='form-div'>
                    <input disabled value={merchantExists? merchantExists.email : "Edit your email"} type="text"/>
                    <img className='edit-button email-edit-button' src={editLogo} alt="" />                    
                </div>
                <div className='form-div'>
                    <input disabled type="text" value={merchantExists && merchantExists.contact ? merchantExists.contact : "Edit your Contact"}/>
                    <img className='edit-button contact-edit-button' src={editLogo} alt="" />
                </div>
                <div className='form-div'>
                    <input disabled type="text" value={merchantExists && merchantExists.address ? merchantExists.address : "Edit your Contact"} />
                    <img className='edit-button location-edit-button' src={editLogo} alt="" />
                </div>            
                
                <span className='button-span'>
                <button type='submit' className='save-profile-details-button'>Save</button>
                </span>
            </div>
        </div>
    )
}