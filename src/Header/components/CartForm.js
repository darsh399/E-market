import './CartForm.css';
import Logo from '../../common/Logo';
import Button from '../../common/Button';
import { useGlobalUiContext } from '../../Context/GlobalUiContextProvider';
import { useNavigate } from 'react-router-dom';

const CartForm = ({ item }) => {
  const { addItemInCart , openedCartHandler} = useGlobalUiContext();
  const navigate = useNavigate();
  const openCart = (cartItem) => {
     openedCartHandler(cartItem)
     navigate('/opened-cart');
  }

  const addItemInCarts = (item) => {
    addItemInCart(item);
  };


  return (
    <div className="cart-card" onClick={() => openCart(item)}>
      <Logo img={`http://localhost:5000/uploads/${item.productImage}`} alt={item.productName} size="200px" />
      <h3>{item.productName}</h3>
      <p>{item.productCateogery}</p>
      <p>₹ {item.productPrice}</p>

      <div className="button-container">
        <Button type="primary" size="large">BUY</Button>
        <Button type="secondary" size="large" onClick={() => addItemInCarts(item)}>ADD TO CART</Button>
      </div>
    </div>
  );
};

export default CartForm;
