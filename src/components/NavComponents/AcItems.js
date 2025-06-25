import './AcItems.css';
import CartForm from "../../Header/components/CartForm"
 import { useGlobalUiContext } from '../../Context/GlobalUiContextProvider';
const AcItems = () => {
   const {fetchedItems} = useGlobalUiContext();
   return(
    <div className="ac-items-container">
        {
           fetchedItems.filter((data) => data.productCateogery?.toLowerCase() === 'air conditioner')
           .map((data) => {
            return <CartForm key={data._id} item={data}/>
           })
        }
    </div>
   )
}

export default AcItems;