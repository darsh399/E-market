import ItemData from "../../Data/ItemData"
import './AcItems.css';
import CartForm from "../../Header/components/CartForm"
const AcItems = ({addItemInCart}) => {
   return(
    <div className="ac-items-container">
        {
           ItemData.filter((data) => data.productCategory === 'Air Conditioner')
           .map((data) => {
            return <CartForm key={data.id} item={data} addItemInCart={addItemInCart}/>
           })
        }
    </div>
   )
}

export default AcItems;