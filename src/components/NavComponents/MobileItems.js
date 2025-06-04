import './MobileItems.css';
import CartForm from "../../Header/components/CartForm";

const MobileItems = ({ addItemInCart, fetchedItems }) => {
    return (
        <div className="mobile-items-container">
            {
                fetchedItems
                    .filter((data) => data.productCateogery
                    ?.toLowerCase() === "mobile")
                    .map((data) => (
                        <CartForm addItemInCart={addItemInCart} key={data._id} item={data} />
                    ))
            }
        </div>
    )
}

export default MobileItems;
