import React, { useState } from 'react';
import Input from "../common/Input";
import Button from "../common/Button";
import './UserLoginPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLoginPage = ({loggedInHandler, showNotification}) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });


  const inputHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const passwordToggle = () => {
    setShowPassword(prev => !prev);
  };

  const formHandler = async (e) => {
    e.preventDefault();
    try {                  
      const res = await axios.post('http://localhost:5000/api/v1/user/login', formData);
      console.log('Login successful:', res.data.user);
      showNotification(`Welcome back ${res.data.user.name}`, 'success')
      
        navigate('/');
      
      setFormData({
        email: '',
        password: ''
      })
      
      
      loggedInHandler(res.data.user);
    } catch (error) {
      console.error('Login failed:', error.response?.data?.message || error.message);
      showNotification(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
    <form className="login-container" onSubmit={formHandler}>
      <h1>Login Page</h1>

      <div className="input-field-data">
        <Input
          type="input"
          placeholder="Enter email"
          name="email"
          value={formData.email}
          onChangeInput={inputHandler}
        />
      </div>

      <div className="input-field-data">
        <Input
          type="input"
          placeholder="Enter password"
          name="password"
          typeText={showPassword ? 'text' : 'password'}
          value={formData.password}
          onChangeInput={inputHandler}
        />
      </div>

      <div className="checkbox-field">
        <input type="checkbox" onClick={passwordToggle} />
        <span>Show password</span>
      </div>

      <Button type="submit">LOGIN</Button>
    </form>
    </>
  );
};

export default UserLoginPage;
