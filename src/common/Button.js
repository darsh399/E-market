import './Button.css';
import { Link } from 'react-router-dom';

const Button = (props) => {
    const { children, onClick, type, href, to, size, style } = props;

    const classNames = `button ${size || 'medium'} ${type || 'normal'} ${style || ''}`;

    if (href) {
        return (
            <a href={href} target='_blank'  rel="noreferrer" className={classNames}>
                {children}
            </a>
        );
    }

    if (to) {
        return (
            <Link to={to} className={classNames}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={classNames}>
            {children}
        </button>
    );
};

export default Button;
