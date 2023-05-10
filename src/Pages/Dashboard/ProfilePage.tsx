import '../assets/styles/Dashboard/ProfilePage.scss'
import profilephoto from '../assets/images/Ellipse 15.png'
import editLogo from '../assets/icons8-edit.svg'

export const ProfilePage: React.FC = () => {

    return (
        <div className="profile-details">
            <div className="image-name">
                <img className='photo' src={profilephoto} alt="" />
                <h3 className='name'>Business Name</h3>
            </div>
            <div className="form">
                <input type="text"/>
                <input type="text" />
                <input type="text" />
                <img className='edit-button email-edit-button' src={editLogo} alt="" />
                <img className='edit-button contact-edit-button' src={editLogo} alt="" />
                <img className='edit-button location-edit-button' src={editLogo} alt="" />

                <span className='button-span'>
                <button type='submit' className='save-profile-details-button'>Save</button>
                </span>
            </div>
        </div>
    )
}