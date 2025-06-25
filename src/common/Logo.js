import './Logo.css';

const Logo = ({ img, alt, onClick, size = '50px' }) => {
    return (
        <img
            src={img}
            alt={alt}
            onClick={onClick}
            className="logo"
            style={{ height: size }}
        />
    );
};

export default Logo;
