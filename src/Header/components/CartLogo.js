import './CartLogo.css'
import cart from './../../images/cart.jpg';

const CartLogo = ({ items, onClick }) => {
    return (
        <div className="search-icon" onClick={onClick}>
            <span className="cart-text">Cart</span>
            <p>{items}</p>
            <img className="cart-logo" src={cart} alt="cart logo" />
        </div>
    );
};

export default CartLogo;