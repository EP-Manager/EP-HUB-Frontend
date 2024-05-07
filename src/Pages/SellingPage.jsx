import { useState } from 'react';
import SearchBar from '../Components/SearchBar';
import '../Styles/SellingPage.css';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <SearchBar/>
      <div className='listcr'><p>Create a Listing</p></div>
      <form onSubmit={handleSubmit}>
        <div className='imgadd'>
           <div className='uploadtext'> <p>Upload the images</p></div>
            <div className='selecttext'><p>Select all the files together</p></div>
            
            <input type="file" name="image" onChange={handleChange} multiple />
        </div>
        <div className='rowvideo'>
          <div className='videoupload'>
           <div className='videotext'> <p>Upload the videos</p></div>
            <input type="file" name="video" accept="video/*" multiple onChange={handleChange} />
          </div>
        </div>
        <div className='fieldtitle'>
           <label>
            <div className='titlename'>Title</div>
             <div className='titlesub'>
            <input type="text" name="title" maxLength={55} className='field' placeholder="Enter title" onChange={handleChange} />
            </div>
            </label> 
            
        </div>
        <div>
            <label><div className='fieldtitle'>Description</div>
            <textarea name="description" className='desfield' placeholder=" Enter Material Description" onChange={handleChange} />
            </label>
        </div>
        <div>
            <label>
              <div className='fieldtitle'>Category</div>
               <select name="category" className='dropfield'  onChange={handleChange}>
                <option value="">Select category</option>
                <option value="cat1">cat1</option>
           
            </select>
            
              </label>
           
        </div>
       
          <label>
            <div className='fieldtitle'>Condition</div>
             <select name="condition" className='dropfield'  onChange={handleChange}>
               <option value="">Select condition</option>
               <option value="new">New</option>
               <option value="used">Used</option>
             </select>
          </label>
    
        <div className='fieldtitle'>
            <label><div className='titlename'>Quantity</div>
            <div className='titlesub'>
            <input type="number" name="quantity" placeholder="Enter quantity " onChange={handleChange} />
            </div>
            </label>
            
        </div>
        <div className='fieldtitle'>
            <label><div className='titlename'>Price</div>
            <div className='titlesub'>
            <input type="number" name="price" placeholder=" Enter Price" onChange={handleChange} />
            </div>
            </label>
           
        </div>
        <div className='fieldtitle'>
            <label><div className='titlename'>
              Address</div>
              <div className='titlesub'>
              <input type="text" name="address" placeholder="Address" onChange={handleChange} />
              </div>
              </label>
            
        </div>
        <div  >
          <button className='submitbot' type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SellingPage;