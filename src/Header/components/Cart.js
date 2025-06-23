
import './Cart.css';
import Button from '../../common/Button';
import { useUiContext } from '../../Context/UiProvider';
import { useGlobalUiContext } from '../../Context/GlobalUiContextProvider';

const Cart = ({ onCheckout }) => {

    const { itemsInCart, clearCart, removeItemFromCart } = useGlobalUiContext();
    const { toggleCartVisibility } = useUiContext();
    // const totalItems = itemsInCart.reduce((sum, item) => sum + item.quantity, 0);
    // const totalPrice = itemsInCart.reduce((sum, item) => sum + item.quantity * item.price, 0);

    return (
        <div className="cart-container">
            <div className="cart-header">
                <Button className="close-cart" onClick={() => toggleCartVisibility(false)}>✖</Button>
                <h2>Cart Calculation({itemsInCart?.length})</h2>
                <Button onClick={()=> clearCart()} className="empty-btn" >EmptyCart</Button>
            </div>

            <table className="cart-table">
                <thead>
                    <tr>
                        <th>Action</th>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total Amount</th>
                        <th>Buy</th>
                    </tr>
                </thead>
 <tbody>
                    {itemsInCart?.length === 0 ? (
                        <tr>
                            <td colSpan="7" style={{ textAlign: 'center', padding: '20px' }}>
                                🛒 No items in cart.
                            </td>
                        </tr>
                    ) : (
                        itemsInCart?.map((item) => (
                            <tr key={item._id}>
                                <td>
                                    <Button className="delete-btn" onClick={() => removeItemFromCart(item._id)}>🗑️</Button>
                                </td>
                                <td>
                                    <img src={`http://localhost:5000/uploads/${item.productImage}`} alt={item.productName} className="product-image" />
                                </td>
                                <td>{item.productName}</td>
                                <td>₹ {item.productPrice}</td>
                                <td>
                                    <div className="qty-buttons">
                                        <button>-</button>
                                        <span>{item.quantity}</span>
                                        <button>+</button>
                                    </div>
                                </td>
                                <td>₹ {item.productPrice * item.quantity}</td>
                                <td><Button className="buy-btn">BUY</Button></td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

            <div className="cart-summary">
                <span>Items In Cart: <strong>{itemsInCart?.length}</strong></span>
                <span>Total Price: <strong className="total-price">₹ 'total price'</strong></span>
                <button className="checkout-btn" onClick={onCheckout}>Checkout</button>
            </div>
        </div>
    );
};
export default Cart;