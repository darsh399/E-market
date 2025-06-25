import './Refrigerator.css';
import CartForm from '../../Header/components/CartForm';
import { useGlobalUiContext } from '../../Context/GlobalUiContextProvider';
const Refrigerator = () => {
    const {fetchedItems} = useGlobalUiContext();
return(
    <div className='fridge-items-container'>
             {
                fetchedItems.filter((data) => data.productCateogery?.toLowerCase() === 'refrigerator')
                .map((data) => {
                    return <CartForm key={data._id} item={data}/>
                })
             }
    </div>
)
}

export default Refrigerator;