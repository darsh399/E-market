import { useGlobalUiContext } from "../Context/GlobalUiContextProvider";
import './OpenedCart.css';

const OpenedCart = ({ onClose }) => {
  const { openedCart, addItemInCart } = useGlobalUiContext();

  if (!openedCart) return null;

  const handleBuyNow = () => {
    alert("Proceeding to buy now");
  };

  const handleAddToCart = () => {
    addItemInCart(openedCart);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <div className="opened-cart-container">
          <div>
            <img
              className="opened-cart-image"
              src={`http://localhost:5000/uploads/${openedCart.productImage}`}
              alt={openedCart.productName}
            />
          </div>

          <div className="opened-cart-details">
            <h1>{openedCart.productName}</h1>
            <p>{openedCart.productDescription}</p>
            <p><strong>₹ {openedCart.productPrice}</strong></p>
            <p>Category: {openedCart.productCateogery}</p>
            <p>Available: {openedCart.productIsAvailable ? 'Yes' : 'No'}</p>
            <p>Quantity: {openedCart.productQuantity}</p>

            <div className="opened-cart-buttons">
              <button className="btn buy" onClick={handleBuyNow}>Buy Now</button>
              <button className="btn cart" onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenedCart;
