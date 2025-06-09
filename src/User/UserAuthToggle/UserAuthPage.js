import React, { useState } from 'react';
import './UserAuthPage.css';
import UserSignUpPage from '../UserSignUpPage';
import UserLoginPage from '../UserLoginPage';
import { useGlobalUiContext } from '../../Context/GlobalUiContextProvider';
const UserAuthPage = () => {
  const {showNotification, loggedInHandler} = useGlobalUiContext();
  const [authMode, setAuthMode] = useState('login'); 

  return (
    <div className="auth-wrapper">
      <div className="auth-tabs">
        <button
          className={authMode === 'login' ? 'tab active' : 'tab'}
          onClick={() => setAuthMode('login')}
        >
          Login
        </button>
        <button
          className={authMode === 'signup' ? 'tab active' : 'tab'}
          onClick={() => setAuthMode('signup')}
        >
          Signup
        </button>
      </div>

      <div className="auth-form">
        {authMode === 'login' ? (
          <UserLoginPage showNotification={showNotification} loggedInHandler={loggedInHandler} />
        ) : (
          <UserSignUpPage showNotification={showNotification}/>
        )}
      </div>
    </div>
  );
};

export default UserAuthPage;
