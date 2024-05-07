import { useState } from 'react';
import SearchBar from '../Components/SearchBar';
import '../Styles/SellingPage.css';
import axios from 'axios';

const SellingPage = () => {
  const [formData, setFormData] = useState({
    image: [],
    video: null,
    title: '',
    description: '',
    category: '',
    condition: '',
    quantity: '',
    price: '',
    address: ''
  });

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({ ...formData, [e.target.name]: Array.from(e.target.files) });
    } else if (e.target.name === 'video') {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataToSubmit = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSubmit.append(key, formData[key]);
    });
  
    // Retrieve the token from local storage
    const token = localStorage.getItem('token');
    // Make a POST request to the API to create a new item 
    try {
      const response = await axios.post('https://lordgrim.pythonanywhere.com/api/v1/shop_items/create/', formDataToSubmit, {
        headers: {
          'Authorization': `Bearer ${token}` // Use the token from local storage
        }
      });
      console.log(response.data);
      alert('Item uploaded successfully!');
    } catch (error) {
      console.error('Error creating item:', error);
      alert('Error creating item. Please try again.');
    }
  };

  return (
    <>
    <SearchBar/>
    <div className='flex flex-col p-10'>
      <div className='listcr underline text-4xl p-1 overflow-hidden'><p>Create a Listing</p></div>
      <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-10 mt-10'>
        {/* <div className='imgadd'>
           <div className='uploadtext'> <p>Upload the images</p></div>
            <div className='selecttext'><p>Select all the files togther</p></div>
            
            <input type="file" name="image" onChange={handleChange} multiple />
        </div> */}
        {/* <div className='rowvideo'>
          <div className='videoupload'>
           <div className='videotext'> <p>Upload the videos</p></div>
            <input type="file" name="video" accept="video/*" multiple onChange={handleChange} />
          </div>
        </div> */}
        <div className='fieldtitle'>
           <label>
            <div className='titlename text-sm'>Title</div>
             <div className='titlesub'>
              <input type="text" name="title" maxLength={55} className='field text-sm p-3 bg-green-50' placeholder="Enter title" onChange={handleChange} />
            </div>
            </label> 
            
        </div>
        <div>
            <label><div className='fieldtitle'>Description</div>
              <textarea name="description" className='desfield text-sm p-3 bg-green-50' placeholder=" Enter Material Description" onChange={handleChange} />
            </label>
        </div>
        {/* <div>
            <label>
              <div className='fieldtitle'>Category</div>
               <select name="category" className='dropfield'  onChange={handleChange}>
                <option value="">Select category</option>
                <option value="cat1">cat1</option>
           
            </select>
            
              </label>
           
        </div> */}
       
          {/* <label>
            <div className='fieldtitle'>Condition</div>
             <select name="condition" className='dropfield'  onChange={handleChange}>
               <option value="">Select condition</option>
               <option value="new">New</option>
               <option value="used">Used</option>
             </select>
          </label> */}
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
              <input type="number" name="price" placeholder="Enter Price" className='bg-green-50 p-2 text-sm rounded-md' onChange={handleChange} />
              </div>
              </label>
          </div>
        </div>
        {/* <div className='fieldtitle'>
            <label><div className='titlename'>
              Address</div>
              <div className='titlesub'>
              <input type="text" name="address" placeholder="Address" onChange={handleChange} />
              </div>
              </label>
            
        </div> */}
        <div  >
          <button className='bg-green-300 hover:bg-green-700 hover:text-white p-2 w-28 rounded-2xl transition ease-in-out duration-300' type="submit">Submit</button>
        </div>
      </form>
    </div>
    </>
  );
};

export default SellingPage;