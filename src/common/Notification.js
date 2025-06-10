import React, { useEffect } from 'react';
import './Notification.css';

const Notification = ({ message, type, clearNotification }) => {
  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      clearNotification();
    }, 3000);

    return () => clearTimeout(timer);
  }, [message, clearNotification]);

  if (!message) return null;

  return (
    <div className={`notification ${type === 'error' ? 'error' : ''}`}>
      <span className="close-btn" onClick={clearNotification}>×</span>
      <span className="icon">{type === 'success' ? '✔️' : '❌'}</span>
      <span>{message}</span>
    </div>
  );
};

export default Notification;
