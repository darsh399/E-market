import './CartForm.css';
import Logo from '../../common/Logo';
import Button from '../../common/Button';
const CartForm = ({ item, addItemInCart}) => {
    const addItemInCarts = (item) => {
         addItemInCart(item);
    }
  return (
    <div className="cart-card">
      <Logo src={item.imgUrl} alt={item.productName} size="100px" />
      <h3>{item.productName}</h3>
      <p>{item.productCateogery}</p>
      <p>Rs. {item.productPrice}</p>

      <div className='button-container'>
         <Button type='primary'>BUY</Button>
         <Button type='secondary' onClick={() => addItemInCarts(item)}>ADD TO CART</Button>
      </div>
    </div>
  );
};

export default CartForm;
