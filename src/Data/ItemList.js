import CartForm from "../Header/components/CartForm";
import ItemData from "./ItemData";

const ItemList = ({addItemInCart}) => {
  return (
    <div className="cart-container">
      {ItemData.map((item) => (
        <CartForm item={item} key={item.id} addItemInCart={addItemInCart}/>
      ))}
    </div>
  );
};

export default ItemList;
