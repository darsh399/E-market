import './AcItems.css';
import CartForm from "../../Header/components/CartForm"
const AcItems = ({addItemInCart, fetchedItems}) => {
   return(
    <div className="ac-items-container">
        {
           fetchedItems.filter((data) => data.productCategory?.toLowerCase() === 'air conditioner')
           .map((data) => {
            return <CartForm key={data.id} item={data} addItemInCart={addItemInCart}/>
           })
        }
    </div>
   )
}

export default AcItems;