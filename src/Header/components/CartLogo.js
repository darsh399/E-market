import './CartLogo.css'
import cart from './../../images/cart.jpg';
import { useUiContext } from '../../Context/UiProvider';
const CartLogo = ({ items }) => {
    const {toggleCartVisibility} = useUiContext();
    return (
        <div className="search-icon" onClick={toggleCartVisibility}>
            <span className="cart-text">Cart</span>
            <p>{items}</p>
            <img className="cart-logo" src={cart} alt="cart logo" />
        </div>
    );
};

export default CartLogo;