import './ProfileDropdown.css';
import Button from '../../common/Button';

const ProfileDropdown = ({ setIsProfileMenuVisible, isLoggedIn }) => {
    return (
        <div className="profile-dropdown">
            {isLoggedIn ?
                (
                    <>
                        <Button className="close-button" onClick={() => setIsProfileMenuVisible(false)}>X</Button>
                        <Button className="link-button">Profile</Button>
                        <Button className="link-button" to='/userUpdate'>Update Profile</Button>
                        <Button className="link-button">Previous Orders</Button>
                        <Button className="link-button">Logout</Button>
                    </>
                ) :
                <>
                    <Button className="close-button" onClick={() => setIsProfileMenuVisible(false)}>X</Button>
                    <Button className="link-button" to='/auth'>Login</Button>
                </>
            }
        </div>
    );
};

export default ProfileDropdown;
