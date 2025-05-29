import React from 'react';
import profileLogo from './../../images/profileLogo.png';
import './ProfileLogo.css';

const ProfileLogo = ({ isLoggedIn, onClick }) => {
    return (
        <div className="profile-logo-container">
            <span className="profile-text">{isLoggedIn ? isLoggedIn?.name : 'Profile'}</span>
            <img
                onClick={onClick}
                className="profile-logo"
                src={profileLogo}
                alt="profile icon"
            />
          
        </div>
    );
};

export default ProfileLogo;
