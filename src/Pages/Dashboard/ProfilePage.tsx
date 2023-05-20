import '../../assets/styles/dashboardStyles/ProfilePage.scss'
import profilephoto from '../../assets/images/Ellipse 15.png'
import editLogo from '../../assets/svg/icons8-edit.svg'
import { useEffect, useState } from 'react';

type User = {
    [key: string]: any;
}

type EditForm = {
    value: string;
    editmode: boolean;
}

interface EditUser {
    user: User;
    editForm: EditForm;
}

const me: EditUser = {
    user: {},
    editForm: {value: '', editmode: true}
}

export const ProfilePage: React.FC<EditUser> = (me) => {



    const { user, editForm } = me;

    useEffect(() => {
        const merchant = localStorage.getItem("merchant");
        if (merchant) {
            setmerchantExists(JSON.parse(merchant));
        }
    }, [])
    const [ merchantExists, setmerchantExists ] = useState(user);
    
    
    const [ email, setEmail ] = useState({ value: merchantExists ? merchantExists.email : "", editmode: true });
    const [ contact, setContact ] = useState({ value: "", editmode: true });
    const [ address, setAddress ] = useState({ value: "", editmode: true });

    const handleAddressChange = () => setAddress({value: address.value, editmode: address.editmode ? false : true});
    const handleEmailChange = () => setEmail({value: email.value, editmode: email.editmode ? false : true});
    const handleContactChange = () => setContact({value: contact.value, editmode: contact.editmode ? false : true});

    
    const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => setAddress({value: e.target.value, editmode: e.target.disabled})
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail({value: e.target.value, editmode: e.target.disabled});
    const handleContact = (e: React.ChangeEvent<HTMLInputElement>) => setContact({value: e.target.value, editmode: e.target.disabled});

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        
        console.log(email.value)
        console.log(address.value)
        console.log(contact.value)
        e.preventDefault();
        // console.log(email.value)
        // console.log(address.value)
        // console.log(contact.value)
    }


    return (
        <div className="profile-details">
            <div className="image-name">
                <img className='photo' src={profilephoto} alt="" />
                <h3 className='name'>{ merchantExists? merchantExists.business_name : "Merchant"}</h3>
            </div>
            <form className="form" onSubmit={handleFormSubmit}>
                <div className='form-div'>
                    <label className='profile-label'>Email</label>
                    <input disabled={email.editmode} name='email' onChange={handleEmail} value={email.value ? email.value : merchantExists ? merchantExists.email : ""} type="text"/>
                    <img className='edit-button email-edit-button' src={editLogo} alt="" onClick={handleEmailChange} />                    
                </div>
                <div className='form-div'>
                    <label className='profile-label'>Phone</label>
                    <input disabled={contact.editmode} name='contact' type="text" onChange={handleContact} /**value={contact.value ? contact.value : merchantExists ? merchantExists.contact : ""}*/ />
                    <img className='edit-button contact-edit-button' src={editLogo} alt="" onClick={handleContactChange}/>
                </div>
                <div className='form-div'>
                    <label className='profile-label'>Address</label>
                    <input disabled={address.editmode} type="text" name='address' onChange={handleAddress} /** value={address.value ? address.value : merchantExists ? merchantExists.address : ""} */ />
                    <img className='edit-button location-edit-button' src={editLogo} alt="" onClick={handleAddressChange} />
                </div>            
                <span className='button-span'>
                <button disabled={contact.value && email.value && address.value} type='submit' className='save-profile-details-button'>Save</button>
                </span>
            </form>
        </div>
    )
}