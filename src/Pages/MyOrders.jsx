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
    <>
    <SearchBar/>
    <div className="flex flex-col items-center justify-center min-h-screen mt-6">
      {Array.isArray(orders) ? orders.map((order) => (
        <div key={order.id} className="w-full max-w-md p-4 bg-white rounded shadow-md mb-4">
          <p className="text-gray-800 text-lg font-semibold">Date: {order.date}</p>
          <p className="text-gray-600">Total Amount: {order.total_price}</p>
          <p className="text-gray-600">order-ID {order.item}</p>
          <p className="text-gray-600">Transaction Type: {order.order_type}</p>
        </div>
      )) : null}
    </div>
    </>
  );
};

export default MyOrders;