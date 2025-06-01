import './Refrigerator.css';
import CartForm from '../../Header/components/CartForm';
const Refrigerator = ({ addItemInCart, fetchedItems }) => {
return(
    <div className='fridge-items-container'>
             {
                fetchedItems.filter((data) => data.productCategory?.toLowerCase() === 'refrigerator')
                .map((data) => {
                    return <CartForm key={data.id} addItemInCart={addItemInCart} item={data}/>
                })
             }
    </div>
)
}

export default Refrigerator;