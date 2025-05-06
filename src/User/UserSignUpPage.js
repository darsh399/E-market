import './UserSignUpPage.css';
import Input from '../common/Input';
import Button from '../common/Button';
import { useState } from 'react';

const UserSignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [inputFormData, setInputFormData] = useState({
        userName: '',
        userMobileNo: '',
        userEmail: '',
        userPassword: ''
    });

    const inputHandler = (e) => {
        setInputFormData({
            ...inputFormData,
            [e.target.name]: e.target.value,
        });
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log(inputFormData);
    };

    return (
        <form onSubmit={formSubmitHandler} className="login-form">
            <h2 className="form-title">User SignUp</h2>

            <Input
                placeholder="Enter Your Name"
                value={inputFormData.userName}
                type="input"
                name="userName"
                onChangeInput={inputHandler}
            />
            <Input
                placeholder="Enter Mobile No"
                value={inputFormData.userMobileNo}
                type="input"
                typeText='number'
                name="userMobileNo"
                onChangeInput={inputHandler}
            />
            <Input
                placeholder="Enter Your Email"
                value={inputFormData.userEmail}
                type="input"
                name="userEmail"
                onChangeInput={inputHandler}
            />
            <Input
                placeholder="Enter Password"
                value={inputFormData.userPassword}
                type="input"
                name="userPassword"
                typeText={showPassword ? 'text' : 'password'}
                onChangeInput={inputHandler}
            />
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
