import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/Ep-Hub.png';

// import profile from '../assets/profile-icon.png';
// import { useHistory } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeLink, setActiveLink] = useState('Buy');
  const inputRef = useRef();
  const navigate = useNavigate();
  // const history = useHistory(); 

  const handleLogout = () => {
    alert('You are now logged out.');

    // Remove the user data from local storage
    localStorage.clear()

    // Redirect to /home
    navigate('/home');
  }

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(inputRef.current.value);
    console.log(`Searching for ${searchTerm}`);
  };

  return (
    <div className="bg-[#92E3A9] h-20 rounded-b-2xl px-5 text-white flex items-center justify-between">
      <img src={logo} alt="" className="ml-4 h-5 w-28" />
      <form onSubmit={handleSearch} className="flex-grow mx-20">
        <div className="flex items-center border-b-2 border-white py-2">
          <input ref={inputRef} type="text" placeholder="Search for products" className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" />
          <button type="submit" className="flex-shrink-0 bg-green-400 text-white hover:bg-white hover:text-black py-1 px-2 rounded">Search</button>
        </div>
      </form>
      <div className="flex flex-row items-center justify-center">
        <div className="mr-12 flex flex-row items-center justify-center gap-5">
          <Link to="/buy" className={`mr-4 ${activeLink === 'Buy' ? 'font-semibold text-white underline' : ''}`} onClick={() => setActiveLink('Buy')}>Buy</Link>
          <Link to="/sell" className={`mr-4 ${activeLink === 'Sell' ? 'font-semibold text-white underline' : ''}`} onClick={() => setActiveLink('Sell')}>Sell</Link>
          <Link to="/my-orders" className={`mr-4 ${activeLink === 'My Orders' ? 'font-semibold text-white underline' : ''}`} onClick={() => setActiveLink('My Orders')}>My Orders</Link>
          {/* <Link to="/profile" className={`mr-4 ${activeLink === 'Profile' ? 'font-semibold text-white underline' : ''}`} onClick={() => setActiveLink('Profile')}>
            <img src={profile} alt="profile-icon" className="h-7 rounded-full" />
          </Link> */}
        </div>
        <button onClick={handleLogout} className="bg-green-300 hover:bg-green-700 hover:text-white text-black hover:opacity-65 ease-in-out transition 3s py-1 px-2 rounded mr-5">Logout</button>
      </div>
    </div>
  );
};

export default SearchBar;