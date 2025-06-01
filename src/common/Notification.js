const Notification = ({ message, type, clearNotification }) => {
    if (!message) return null;

    const styles = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '16px 32px',
        backgroundColor: type === 'success' ? 'green' : 'red',
        color: 'white',
        borderRadius: '8px',
        zIndex: 1000,
        fontSize: '16px',
        fontWeight: 'bold',
        textAlign: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
        minWidth: '250px',
    };

    const closeButtonStyle = {
        position: 'absolute',
        top: '8px',
        right: '12px',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '18px',
    };

    return (
        <div style={styles}>
            <span style={closeButtonStyle} onClick={clearNotification}>×</span>
            <p>{message}</p>
        </div>
    );
};


export default Notification;
