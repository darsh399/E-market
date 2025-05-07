import './MobileItems.css';
import ItemData from "../../Data/ItemData";
import CartForm from "../../Header/components/CartForm";

const MobileItems = ({ addItemInCart }) => {
    return (
        <div className="mobile-items-container">
            {
                ItemData
                    .filter((data) => data.productCategory === 'Mobile')
                    .map((data) => (
                        <CartForm addItemInCart={addItemInCart} key={data.id} item={data} />
                    ))
            }
        </div>
    )
}

export default MobileItems;
