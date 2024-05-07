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

  const handleBuy = (itemId) => {
    // Make API call to purchase item
  };

  return (
    <div>
      <SearchBar/>
      {item ? (
        <>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <p>Unit Price: ${item.unit_price}</p>
          <p>Total Price: ${totalPrice}</p>
          <p>Created by: {item.created_by}</p>
          <p>Date uploaded: {new Date(item.created_at).toLocaleDateString()}</p>
          <input type="number" value={quantity} onChange={handleQuantityChange} min="1" />
          <button onClick={() => handleBuy(item.id, quantity)}>Buy</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ItemDetails;