import React, { useState } from 'react';
import Input from "../common/Input";
import Button from "../common/Button";
import './UserLoginPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useGlobalUiContext } from '../Context/GlobalUiContextProvider';

const UserLoginPage = () => {
  const { loggedInHandler, showNotification } = useGlobalUiContext();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const inputHandler = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const passwordToggle = () => setShowPassword(prev => !prev);

  const formHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/v1/user/login', formData, {
        withCredentials: true
      });

      showNotification(`Welcome back ${res.data.user.name}`, 'success');
      loggedInHandler(res.data.user);
      navigate('/');

      setFormData({ email: '', password: '' });
    } catch (error) {
      showNotification(error.response?.data?.message || "Login failed", 'error');
    }
  };

  return (
    <form className="login-container" onSubmit={formHandler} noValidate>
      <h1 className="form-title">Login</h1>

      <div className="input-field-data">
        <Input
          type="input"
          placeholder="Enter your email"
          name="email"
          value={formData.email}
          onChangeInput={inputHandler}
          required
          autoComplete="username"
        />
      </div>

      <div className="input-field-data">
        <Input
          type='input'
          typeText={showPassword ? 'text' : 'password'}
          placeholder="Enter your password"
          name="password"
          value={formData.password}
          onChangeInput={inputHandler}
          required
          autoComplete="current-password"
        />
      </div>

      <div className="checkbox-field">
        <input
          type="checkbox"
          id="showPassword"
          checked={showPassword}
          onChange={passwordToggle}
        />
        <label htmlFor="showPassword">Show password</label>
      </div>

      <Button type="submit">LOGIN</Button>
    </form>
  );
};

export default UserLoginPage;
