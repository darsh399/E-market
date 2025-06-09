import './Cart.css';
import Button from '../../common/Button';
import { useUiContext } from '../../Context/UiProvider';
import { useGlobalUiContext } from '../../Context/GlobalUiContextProvider';
const Cart = () => {
    const {itemsInCart, removeItemFromCart} = useGlobalUiContext();
    const {toggleCartVisibility} = useUiContext();
    return (
        <div className="cart-container">
            <span className="cart-close" onClick={() => toggleCartVisibility(false)}>×</span>
            <h3>Items added in cart</h3>
            {itemsInCart.length === 0 ? (
                <p>No items in cart</p>
            ) : (
                itemsInCart.map((data) => (
                    <div key={data._id} className="cart-item">
                        {console.log(data)}
                         <span className='cart-remove-tag' onClick={() => removeItemFromCart(data._id) }>X</span>
                        <img src={`http://localhost:5000/uploads/${data.productImage}`} alt={data.productName} className="cart-item-img" />
                        <div className="cart-item-details">
                            <p>{data.productName}</p>
                            <p>Rs. {data.price}</p>
                        </div>
                        <Button>BUY NOW</Button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
