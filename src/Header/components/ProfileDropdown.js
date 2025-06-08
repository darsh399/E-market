import './ProfileDropdown.css';
import Button from '../../common/Button';
import axios from 'axios';

const ProfileDropdown = ({ setIsProfileMenuVisible, isLoggedIn, setIsLoggedIn, showNotification }) => {
    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:5000/api/v1/user/logout', {}, {
                withCredentials: true
            });

            setIsLoggedIn(null);
            showNotification('Logged out successfully', 'success');
            setIsProfileMenuVisible(false);

        } catch (error) {
            console.error('Logout failed:', error);
            showNotification('Failed to logout', 'error');
        }
    };

    return (
        <div className="profile-dropdown">
            {isLoggedIn ? (
                <>
                    <Button className="close-button" onClick={() => setIsProfileMenuVisible(false)}>X</Button>
                    <Button className="link-button">Profile</Button>
                    <Button className="link-button" to='/userUpdate'>Update Profile</Button>
                    <Button className="link-button">Previous Orders</Button>
                    <Button className="link-button" onClick={handleLogout}>Logout</Button>
                </>
            ) : (
                <>
                    <Button className="close-button" onClick={() => setIsProfileMenuVisible(false)}>X</Button>
                    <Button className="link-button" to='/auth'>Login</Button>
                </>
            )}
        </div>
    );
};

export default ProfileDropdown;

