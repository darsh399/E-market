import React, { useEffect } from 'react';

const Notification = ({ message, type, clearNotification }) => {
    useEffect(() => {
        if (!message) return;

        const timer = setTimeout(() => {
            clearNotification();
        }, 3000);

        return () => clearTimeout(timer);
    }, [message, clearNotification]);

    if (!message) return null;

    const styles = {
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translate(-50%, 0)',
        padding: '20px 40px',
        backgroundColor: type === 'success' ? '#28a745' : '#dc3545',
        color: 'white',
        borderRadius: '12px',
        zIndex: 1000,
        fontSize: '18px',
        fontWeight: 600,
        textAlign: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        minWidth: '300px',
        maxWidth: '90%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        animation: 'fadeIn 0.3s ease-in-out',
    };

    const closeButtonStyle = {
        position: 'absolute',
        top: '10px',
        right: '16px',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '20px',
    };

    const iconStyle = {
        fontSize: '24px',
    };

    const icon = type === 'success' ? '✔️' : '❌';

    return (
        <div style={styles}>
            <span style={closeButtonStyle} onClick={clearNotification}>×</span>
            <span style={iconStyle}>{icon}</span>
            <span>{message}</span>
        </div>
    );
};

export default Notification;
