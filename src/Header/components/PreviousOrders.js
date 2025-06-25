import { useGlobalUiContext } from '../../Context/GlobalUiContextProvider';
import './PreviousOrders.css';

const PreviousOrders = () => {
  const { previousOrders } = useGlobalUiContext();

  return (
    <div className="previous-orders-container">
      <h2>Your Previous Orders</h2>
      {previousOrders?.length === 0 ? (
        <p>No previous orders found.</p>
      ) : (
        <ul>
          {previousOrders?.map((order, index) => (
            <li key={index} className="order-item">
              <h4>{order.product.productName}</h4>
              <p>Price: ₹{order.product.productPrice}</p>
              <p>Quantity: {order.quantity}</p>
              <p>Ordered At: {new Date(order.orderedAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PreviousOrders;
