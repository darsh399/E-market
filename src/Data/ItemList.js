import CartForm from "../Header/components/CartForm";
import { useGlobalUiContext } from "../Context/GlobalUiContextProvider";

const ItemList = () => {
 const { addItemInCart, fetchedItems, error } = useGlobalUiContext(); 

  return (
    <div className="cart-container">
      {error && <p>{error}</p>}
      {fetchedItems.map((item) => (
        <CartForm item={item} key={item._id} addItemInCart={addItemInCart} />
      ))}
    </div>
  );
};

export default ItemList;
