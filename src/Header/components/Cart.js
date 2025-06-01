import './Cart.css';
import Button from '../../common/Button';
const Cart = ({ addedItemsInCart, setIsCartVisible, removeItemFromCart  }) => {
    return (
        <div className="cart-container">
            <span className="cart-close" onClick={() => setIsCartVisible(false)}>×</span>
            <h3>Items added in cart</h3>
            {addedItemsInCart.length === 0 ? (
                <p>No items in cart</p>
            ) : (
                addedItemsInCart.map((data) => (
                    <div key={data._id} className="cart-item">
                         <span className='cart-remove-tag' onClick={() => removeItemFromCart(data.id) }>X</span>
                        <img src={data.imgUrl} alt={data.productName} className="cart-item-img" />
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
