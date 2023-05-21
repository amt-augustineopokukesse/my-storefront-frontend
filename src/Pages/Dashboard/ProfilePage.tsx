import '../../assets/styles/dashboardStyles/ProfilePage.scss'
import profilephoto from '../../assets/images/Ellipse 15.png'
import editLogo from '../../assets/svg/icons8-edit.svg'
import { useEffect, useState } from 'react';
//import * as Yup from 'yup';
import { useFormik } from 'formik';
//import axios from 'axios';

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

// const me: EditUser = {
//     user: {},
//     editForm: {value: '', editmode: true}
// }

export const ProfilePage: React.FC<EditUser> = (props) => {

    const { user } = props;

    const [ merchantExists, setmerchantExists ] = useState(user);


    useEffect(() => {
        const merchant = localStorage.getItem("merchant");
        if (merchant) {
            const hasMerchant = JSON.parse(merchant)
            setmerchantExists(hasMerchant);
            if (hasMerchant && hasMerchant.email) {
                formik.values.email = hasMerchant.email || "";
                formik.values.contact = hasMerchant?.contact || "";
                formik.values.address = hasMerchant?.address || "";
            }
        }
    }, [])
    
    
    const [ email, setEmail ] = useState({ value: "", editmode: true });
    const [ contact, setContact ] = useState({ value: "", editmode: true });
    const [ address, setAddress ] = useState({ value: "", editmode: true });

    const handleAddressChange = () => setAddress({value: address.value, editmode: address.editmode ? false : true});
    const handleEmailChange = () => setEmail({value: email.value, editmode: email.editmode ? false : true});
    const handleContactChange = () => setContact({value: contact.value, editmode: contact.editmode ? false : true});


    const formik = useFormik({
        initialValues: {email: '', contact: '', address: ''},
        onSubmit: async (values) => {
            const vals = { ...values };
            console.log(vals)
            // action.resetForm();            
        }
    })


    return (
        <div className="profile-details">
            <div className="image-name">
                <img className='photo' src={profilephoto} alt="" />
                <h3 className='name'>{ merchantExists? merchantExists.business_name : "Merchant"}</h3>
            </div>
            <form className="form" onSubmit={formik.handleSubmit}>
                <div className='form-div'>
                    <label className='profile-label'>Email</label>
                    <input disabled={email.editmode} onChange={formik.handleChange} onBlur={handleEmailChange} type='email' name='email' value={formik.values.email}/>
                    <img className='edit-button email-edit-button' src={editLogo} alt="" onClick={handleEmailChange} />                    
                </div>
                <div className='form-div'>
                    <label className='profile-label'>Phone</label>
                    <input disabled={contact.editmode} onChange={formik.handleChange} onBlur={handleContactChange} type='tel' name='contact' value={formik.values.contact} />
                    <img className='edit-button contact-edit-button' src={editLogo} alt="" onClick={handleContactChange}/>
                </div>
                <div className='form-div'>
                    <label className='profile-label'>Address</label>
                    <input disabled={address.editmode} onChange={formik.handleChange} onBlur={handleAddressChange} type='text' name='address' value={formik.values.address} />
                    <img className='edit-button location-edit-button' src={editLogo} alt="" onClick={handleAddressChange} />
                </div>            
                <span className='button-span'>
                <button disabled={!formik.values.contact && !formik.values.email && !formik.values.address} type='submit' className='save-profile-details-button'>Save</button>
                </span>
            </form>
        </div>
    )
}