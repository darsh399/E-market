import Input from "../common/Input";
import React, { useState } from 'react';
import Button from "../common/Button";
import './UserLoginPage.css';

const UserLoginPage = (req, res) => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        userEmail: '',
        userPassword: ''
    });

    const inputHandler = (e) => {
     setFormData({
        ...formData,
        [e.target.name]: e.target.value
     })
    }

    const passwordToggle = () => {
       setShowPassword((prev) => !prev)
    }

    const formHandler = (e) => {
       e.preventDefault();
       console.log(formData.userEmail, formData.userPassword)
    }
    return (
        <form className="login-container" onSubmit={formHandler}>
          <h1>Login Page</h1>
      
          <div className="input-field-data">
            <Input
              type="input"
              placeholder="Enter email"
              name="userEmail"
              value={formData.userEmail}
              onChangeInput={inputHandler}
            />
          </div>
      
          <div className="input-field-data">
            <Input
              type="input"
              placeholder="Enter password"
              name="userPassword"
              typeText={showPassword ? 'text' : 'password'}
              value={formData.userPassword}
              onChangeInput={inputHandler}
            />
          </div>
      
          <div className="checkbox-field">
            <input type="checkbox" onClick={passwordToggle} />
            <span>Show password</span>
          </div>
      
          <Button type='submit'>LOGIN</Button>
        </form>
      );
      

}

export default UserLoginPage;