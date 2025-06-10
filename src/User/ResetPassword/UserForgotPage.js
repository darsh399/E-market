import { useState } from 'react';
import './UserForgotPage.css';
import Input from '../../common/Input';
import Button from '../../common/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserForgotPasswordPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ Email: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const inputHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const formHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        
        try {
            const res = await axios.post(
                'http://localhost:5000/api/v1/user/forgotPassword', 
                formData
            );
            
            if (res.data.success) {
                alert('OTP sent to your email');
                navigate('/verify-otp', {state: {email:formData.Email}})
            } else {
                setError(res.data.message || 'Failed to send OTP');
            }
        } catch (error) {
            console.error('Error in forgot password:', error);
            setError(error.response?.data?.message || 'Failed to send OTP');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="forgot-password-container">
            <form onSubmit={formHandler} className="forgot-password-form">
                <h2>Forgot Password</h2>
                
                <Input 
                    type="input"
                    tag="Enter Email id"
                    value={formData.Email}
                    placeholder="Enter your registered email"
                    name="Email"
                    onChangeInput={inputHandler}
                    required
                />
                
                {error && <div className="error-message">{error}</div>}
                
                <Button type="submit" disabled={loading}>
                    {loading ? 'Sending...' : 'Send OTP'}
                </Button>
            </form>
        </div>
    )
}

export default UserForgotPasswordPage;