import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SearchBar from '../Components/SearchBar';

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  const token = localStorage.getItem('token');


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

  return (
    <div>
      <SearchBar/>
      {item ? (
      <>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <p>Price: ${item.unit_price}</p>
        <p>Created by: {item.created_by}</p>
        <p>Date uploaded: {item.created_at}</p>
      </>
      ) : (<p>Loading...</p>)}
    </div>
  );
}

export default ItemDetails;