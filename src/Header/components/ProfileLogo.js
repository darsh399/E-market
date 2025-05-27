import profileLogo from './../../images/profileLogo.png';
import './ProfileLogo.css'
const ProfileLogo = () => {
    return(
        <div className="profile-logo-container">
        <span className="profile-text">Profile</span>
        <img
          className="profile-logo"
          src={profileLogo}
          alt="profile icon"
        />
      </div>
      
    )
    
}

export default ProfileLogo;