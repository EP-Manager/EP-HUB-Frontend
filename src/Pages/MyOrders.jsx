import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from '../Components/SearchBar';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get('https://lordgrim.pythonanywhere.com/api/v1/order/', {
      headers: {
        'Authorization': `Bearer ${token}` // Use the token from local storage
      }
    })
    .then((response) => {
      setOrders(response.data.data);
      console.log(response.data.data);
    })
    .catch((error) => {
      console.error('Error fetching orders:', error);
    });
  }, [token]);

  return (
    <div>
      <SearchBar/>
      {Array.isArray(orders) ? orders.map((order) => (
        <div key={order.id}>
          <p>Date: {order.date}</p>
          <p>Total Amount: {order.total_price}</p>
          <p>Plastic Name: {order.item}</p>
          <p>Transaction Type: {order.order_type}</p>
        </div>
      )) : null}
    </div>
  );
};

export default MyOrders;