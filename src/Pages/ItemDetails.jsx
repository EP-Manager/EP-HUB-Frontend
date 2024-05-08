import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SearchBar from '../Components/SearchBar';

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const token = localStorage.getItem('token');

  // Fetch the item details from the API
  useEffect(() => {
    axios.get(`https://lordgrim.pythonanywhere.com//api/v1/shop_items/get/${id}`, {
      headers: {
         // Use the token from local storage
        'Authorization': `Bearer ${token}`
      }
    
    })
      .then((response) => {
        console.log(response.data.data);
        setItem(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [token, id]);

  //To handle the quantity change of the item to be bought
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  // Calculate the total price of the item
  const totalPrice = item ? quantity * item.unit_price : 0;

  const handleBuy = (itemId ,quantity) => {
    // Create an order object to send to the API 
    const orderData = {
      item: itemId,
      quantity: quantity,
      total_price: quantity * item.unit_price,
      centre: "efb7698e-f1fd-4ca8-8988-e5eab4f2fe9c", // Replace with actual centre ID
      order_type: "BUY"
    };

    // Make a POST request to the API to create a new order
    axios.post('https://lordgrim.pythonanywhere.com/api/v1/order/create/', orderData, {
      headers: {
        'Authorization': `Bearer ${token}` // Use the token from local storage
      }
    })
      .then((response) => {
        console.log(response.data);
        alert('Order placed successfully!');
      })
      .catch((error) => {
        console.error('Error creating order:', error);
        alert('Error creating order. Please try again.');
      });

  };

  return (
    <>
    <SearchBar/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {item ? (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-10 w-full bg-white">
          <h1 className="text-4xl font-bold mb-2 overflow-hidden">{item.name}</h1>
          <p className="text-lg mb-1">{item.description}</p>
          <p className="text-lg mb-1">Unit Price: ${item.unit_price}</p>
          <p className="text-lg mb-1">Total Price: ${totalPrice}</p>
          <p className="text-lg mb-1">Created by: {item.created_by}</p>
          <p className="text-lg mb-1">Date uploaded: {new Date(item.created_at).toLocaleDateString()}</p>
          <input type="number" value={quantity} onChange={handleQuantityChange} min="1" className="border-2 border-gray-300 rounded-md p-2 mb-2 w-full" />
          <button onClick={() => handleBuy(item.id, quantity)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Buy</button>
        </div>
      ) : (
        <p className="text-lg">Loading...</p>
      )}
    </div>
</>
  );
}

export default ItemDetails;