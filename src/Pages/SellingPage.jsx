import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../Components/SearchBar';

const SellingPage = () => {
  const [formData, setFormData] = useState({
    item: '',
    description: '',
    quantity: '',
    price: ''
  });

  const [items, setItems] = useState([]); //for storing the list of items

  // const [centers, setCenters] = useState([]); //for storing the list of centers

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

    
  //   if (!formData.item) {
  //     alert('Please select an item before placing your order.');
  //     return;
  //   }

  //   const token = localStorage.getItem('token');

  //   axios.post('https://lordgrim.pythonanywhere.com/api/v1/order/create/', {
  //     item: formData.item,
  //     quantity: formData.quantity,
  //     total_price: formData.price * formData.quantity,
  //     centre: 'efb7698e-f1fd-4ca8-8988-e5eab4f2fe9c',
  //     order_type: "SELL"
  //   }, {
  //     headers: {
  //       'Authorization': `Bearer ${token}`
  //     }
  //   })
  //   .then(response => {
  //     console.log(response.data);
  //     alert('Order placed successfully!');
  //   })
  //   .catch(error => {
  //     console.error('Error posting order:', error);
  //   });
  // };

  //for getting the list of items from the API
  useEffect(() => {
    axios.get('https://lordgrim.pythonanywhere.com/api/v1/shop_items/all/', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => {
        setItems(response.data.data);
        console.log(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching items:', error);
      });
  }, []);

  return (
    <>
      <SearchBar/>
      <div className='flex flex-col p-10'>
        <div className='listcr underline text-4xl p-1 h-12 overflow-hidden'><p><center>Create a Listing</center></p></div>
        <form className='flex flex-col items-center justify-center gap-10 mt-10'>
          <div className='fieldtitle'>
            <label>
              <div className='titlename text-sm'>Item</div>
              <div className='titlesub'>
              <select name="item" className='field text-sm p-3 bg-green-50' onChange={handleChange}>
                {items.map(item => (
                  <option key={item.id} value={item.id}>{item.name}</option>
                ))}
              </select>
              </div>
            </label>  
          </div>
          {/* <div>
            <label><div className='fieldtitle'>Description</div>
              <textarea name="description" className='desfield text-sm p-3 bg-green-50' placeholder=" Enter Material Description" onChange={handleChange} />
            </label>
          </div> */}
          {/* <select name="center" className='bg-green-50 p-2 text-sm rounded-md' onChange={handleChange}>
            {centers.map(center => (
            <option key={center.id} value={center.id}>{center.name}</option>
          ))}
          </select> */}
          <div className='flex gap-4'>
            <div className='fieldtitle'>
              <label><div className='titlename'>Quantity</div>
                <div className='titlesub'>
                  <input type="number" name="quantity" placeholder="Enter quantity" className='bg-green-50 p-2 text-sm rounded-md' onChange={handleChange} />
                </div>
              </label>
            </div>
            <div className='fieldtitle'>
              <label><div className='titlename'>Price</div>
                <div className='titlesub'>
                  <input type="number" name="price" placeholder="Enter price" className='bg-green-50 p-2 text-sm rounded-md' onChange={handleChange} />
                </div>
              </label>
            </div>
          </div>
          <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Sell Item</button>
        </form>
      </div>
    </>
  );
};

export default SellingPage;