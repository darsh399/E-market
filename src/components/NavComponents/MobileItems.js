import './MobileItems.css';
import CartForm from "../../Header/components/CartForm";
 import { useGlobalUiContext } from '../../Context/GlobalUiContextProvider';
 
const MobileItems = () => {
    const {fetchedItems} = useGlobalUiContext();
    return (
        <div className="mobile-items-container">
            {
                fetchedItems
                    .filter((data) => data.productCateogery
                    ?.toLowerCase() === "mobile")
                    .map((data) => (
                        <CartForm key={data.id} item={data} />
                    ))
            }
        </div>
    )
}

export default MobileItems;
