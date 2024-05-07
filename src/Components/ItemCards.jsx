import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom/dist'

const ItemCards = () => {

  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  //getting token from local storage
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get('https://lordgrim.pythonanywhere.com/api/v1/shop_items/all/' , {
      headers: {
        'Authorization': `Bearer ${token}` // Use the token from local storage
      }
    })
      .then((response) => {
        console.log(response.data);
        setItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [token]);

  return (
    <div className='flex flex-col justify-center items-center mt-20'>
      <p className='text-5xl font-extrabold overflow-hidden opacity-70'>THE LATEST IN THE STORE!</p>
      <div className="grid grid-cols-4 gap-1 mx-36 mt-10">
      {Array.isArray(items.data) ? items.data.map((item) => (
        <div key={item.id} className="h-80 w-72 max-w-xs rounded overflow-hidden shadow-lg m-2">
          <img className="w-full h-44" src={item.image} alt={item.name} />
          <div className="px-6 py-1">
            <div className="font-bold text-xl">{item.name}</div>
            <p className="text-gray-700 text-xs">{item.description}</p>
          </div>
          <div className="px-6 py-2 ">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold text-black mr-2 mb-2">${item.unit_price}</span>
            <button className='bg-green-500 hover:bg-green-700 text-white text-sm p-1 rounded'
              onClick={() => navigate(`/item-details/${item.id}`)}
            >
              Buy
            </button>
          </div>
        </div>
      )) : null}
      </div>
    </div>
  );
};

export default ItemCards;