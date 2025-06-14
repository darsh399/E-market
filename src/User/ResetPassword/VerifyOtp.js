import { useState } from "react";
import Input from "../../common/Input";
import Button from "../../common/Button";
import axios from "axios";
import './VerifyOtp.css';
import { useLocation, useNavigate } from "react-router-dom";


const VerifyOtp = () => {
    const location = useLocation();
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const email = location.state?.email;
    const navigate = useNavigate();
    const inputhandler = (e) => {
        setOtp(e.target.value);
    }
    const formHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await axios.post('http://localhost:5000/api/v1/user/verify-otp', { email, otp });
            if (res.data.success) {
                alert(' otp is right');
                navigate('/update-new-password', { state: { email, otp } });
            } else {
                setError(res.data.message || 'Wrong OTP Please Enter Valid OTP')
            }
        } catch (error) {
            setError(error.response?.data?.message || 'Failed to verify OTP');
        } finally {
            setLoading(true);
        }

    }
    return (
        <div className="otp-form-container">
      <form onSubmit={formHandler} className="otp-form">
        <h2>Verify OTP</h2>
        <Input
          type="input"
          value={otp}
          name="otp"
          placeholder="Enter OTP"
          onChangeInput={inputhandler}
          typeText="number"
        />
        {error && <div className="error-message">{error}</div>}
        <Button type="submit" disabled={loading}>
          {loading ? 'Verifying...' : 'Verify OTP'}
        </Button>
      </form>
    </div>
    )
}

export default VerifyOtp;