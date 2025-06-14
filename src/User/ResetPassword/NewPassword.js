import Input from "../../common/Input";
import Button from "../../common/Button";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
const NewPassword = () => {
    const [formData, setFormData] = useState({
        error: '',
        newPassword: '',
        loading: false
    });
    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state?.email
    const otp = location.state?.otp;

    const inputHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const formHandler = async (e) => {
        e.preventDefault();
        setFormData({ ...formData, loading: true });
        try {
            console.log('in new password')
            const res = await axios.post('http://localhost:5000/api/v1/user/reset-password', {
                email,
                otp,
                newPassword: formData.newPassword
            });

            if (res.data.success) {
                alert('Password updated');
                navigate('/userLogin');
            } else {
                setFormData({ ...formData, error: res.data.message || 'Failed to password update' })
            }
        } catch (error) {
            setFormData({ ...formData, error: error.response?.data?.message || 'Error Occured to password update' })
        } finally {
            setFormData({ ...formData, loading: false, newPassword: '' });
        }

    }
    return (
        <div className="new-password-container">
            <form onSubmit={formHandler} className="new-password-form">
                <Input
                    type="input"
                    typeText="password"
                    placeholder="Enter New Password"
                    value={formData.newPassword}
                    name="newPassword"
                    onChangeInput={inputHandler}
                />
                {formData.error && <div className="error-message">{formData.error}</div>}
                <Button type="submit" disabled={formData.loading}>
                    {formData.loading ? 'Updating...' : 'UPDATE PASSWORD'}
                </Button>
            </form>
        </div>
    );

};

export default NewPassword;