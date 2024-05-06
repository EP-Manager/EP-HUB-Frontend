import Logo from '../assets/Ep-Hub.png';
import menuButton from '../assets/menu-button.png';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleSetActiveLink = (path) => {
    setActiveLink(path);
  };

  return (
    <nav className='flex flex-row items-center justify-between bg-[#92E3A9] h-20 rounded-b-2xl px-5 sm:px-10'>
      {/* Logo */}
      <img src={Logo} alt="ep-hub" className='h-5 w-28' />

      {/* Navigation Links - Desktop */}
      <div className="hidden sm:flex flex-row gap-10">
        <Link 
          to='/' 
          onClick={() => handleSetActiveLink('/')}
          className={`
            ${activeLink === '/' ? 'text-white font-semibold' : 'text-gray-600'}
          `}
        >
          Home
        </Link>
        <Link 
          to='/shop' 
          onClick={() => handleSetActiveLink('/shop')}
          className={`
            ${activeLink === '/shop' ? 'text-white font-semibold' : 'text-gray-600'}
          `}
        >
          Shop
        </Link>
        {/* <Link 
          to='/my-orders' 
          onClick={() => handleSetActiveLink('/my-orders')}
          className={`
            ${activeLink === '/my-orders' ? 'text-white font-semibold' : 'text-gray-600'}
          `}
        >
          My Orders
        </Link> */}
        <div className="flex flex-row gap-1">
          <Link 
            to='/login' 
            onClick={() => handleSetActiveLink('/login')}
            className={`
              ${activeLink === '/login' ? 'text-white font-semibold' : 'text-gray-600'}
            `}
          >
            Login
          </Link>
          <p>|</p>
          <Link 
            to='/register' 
            onClick={() => handleSetActiveLink('/register')}
            className={`
              ${activeLink === '/register' ? 'text-white font-semibold' : 'text-gray-600'}
            `}
          >
            Register
          </Link>
        </div>
      </div>

      {/* Menu Button - Mobile */}
      <button className='sm:hidden'>
        <img src={menuButton} alt="Menu" className='h-20' />
      </button>
    </nav>
  );
};

export default Navbar;
