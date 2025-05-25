import './Refrigerator.css';
import ItemData from '../../Data/ItemData';
import CartForm from '../../Header/components/CartForm';
const Refrigerator = ({ addItemInCart }) => {
return(
    <div className='fridge-items-container'>
             {
                ItemData.filter((data) => data.productCategory === 'Refrigerator')
                .map((data) => {
                    return <CartForm key={data.id} addItemInCart={addItemInCart} item={data}/>
                })
             }
    </div>
)
}

export default Refrigerator;