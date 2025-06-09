import './UserSignUpPage.css';
import Input from '../common/Input';
import Button from '../common/Button';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useGlobalUiContext } from '../Context/GlobalUiContextProvider';
const UserSignUpPage = () => {
    const {showNotification} = useGlobalUiContext();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [inputFormData, setInputFormData] = useState({
        name: '',
        mobileNo: '',
        email: '',
        password: '',
        role: 'user'
    });

    const inputHandler = (e) => {
        setInputFormData({
            ...inputFormData,
            [e.target.name]: e.target.value,
        });
    };

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        console.log(inputFormData);
        try {
            const res = await axios.post('http://localhost:5000/api/v1/user/addUser', inputFormData);
            console.log(res.data);
            setInputFormData({
                name: '',
                mobileNo: '',
                email: '',
                password: '',
                role: ''
            });
            showNotification('Signup successfully...', 'success');
            navigate('/userLogin');
        } catch (error) {
            console.error(error.response?.data || error.message);
            alert("Registarction failed", error.response?.data?.message || "Server error")
        }

    };

    return (
        <form onSubmit={formSubmitHandler} className="login-form">
            <h2 className="form-title">User SignUp</h2>

            <Input
                placeholder="Enter Your Name"
                value={inputFormData.name}
                type="input"
                name="name"
                onChangeInput={inputHandler}
            />
            <Input
                placeholder="Enter Mobile No"
                value={inputFormData.mobileNo}
                type="input"
                typeText='number'
                name="mobileNo"
                onChangeInput={inputHandler}
            />
            <Input
                placeholder="Enter Your Email"
                value={inputFormData.email}
                type="input"
                name="email"
                onChangeInput={inputHandler}
            />
            <Input
                placeholder="Enter Password"
                value={inputFormData.password}
                type="input"
                name="password"
                typeText={showPassword ? 'text' : 'password'}
                onChangeInput={inputHandler}
            />
            
            <label htmlFor="role">Select Role:</label>
            <select id="role" name="role" value={inputFormData.role} onChange={inputHandler}>
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="vendor">Vendor</option>
            </select>

            <div className="show-password">
                <input
                    id="show-password-checkbox"
                    type="checkbox"
                    onChange={() => setShowPassword(prev => !prev)}
                />
                <label htmlFor="show-password-checkbox">Show Password</label>
            </div>
            <Button type="submit">SUBMIT</Button>
        </form>
    );
};

export default UserSignUpPage;
