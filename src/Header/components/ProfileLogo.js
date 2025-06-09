import React from 'react';
import profileLogo from './../../images/profileLogo.png';
import './ProfileLogo.css';
import { useUiContext } from '../../Context/UiProvider';
const ProfileLogo = ({ isLoggedIn }) => {
    const {toggleProfileMenuVisibility} = useUiContext();
    return (
        <div className="profile-logo-container">
            <span className="profile-text">{isLoggedIn ? isLoggedIn?.name : 'Profile'}</span>
            <img
                onClick={toggleProfileMenuVisibility}
                className="profile-logo"
                src={profileLogo}
                alt="profile icon"
            />
          
        </div>
    );
};

export default ProfileLogo;
