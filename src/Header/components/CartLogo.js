import './CartLogo.css'
import cart from './../../images/cart.jpg';
import { useGlobalUiContext } from '../../Context/GlobalUiContextProvider';
import { useUiContext } from '../../Context/UiProvider';
const CartLogo = () => {
    const {items} = useGlobalUiContext();
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