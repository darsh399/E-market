import CartForm from "../Header/components/CartForm";


const ItemList = ({ addItemInCart, fetchedItems, error }) => {
 

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
