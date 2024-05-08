import { useState } from 'react';
import axios from 'axios';
import demo from '../assets/login-page-image.png';
import Navbar from '../Components/Navbar';
import '../Styles/Register.css';
// import { useNavigate } from 'react-router-dom';
import OTPVerify from '../Components/OTPVerify';
// import dotenv from 'dotenv';

const Register = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    password: '',
    password2: '',
    district: '',
    city: '',
  });

  const [isRegistered, setIsRegistered] = useState(false);

  // const navigate = useNavigate(); //declaring navigate function to navigate to another page


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://lordgrim.pythonanywhere.com/api/v1/auth/register/", formData);
      console.log(response.data);
      console.log(response);
      // navigate('/buy');
      if(response.statusText === "Created"){
        setIsRegistered(true);
      // Store the token in local storage
        localStorage.setItem('token', response.data.token);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar/>
      {isRegistered ? (
        <div>
          <OTPVerify/>
        </div>
      ) : (
        <div className='container'>
        <div className='content flex flex-row ml-72 mt-12 gap-6'>
          <div className='img-box'>
            <img src={demo} alt="" />
          </div>
          <div className='box py-4'>
            <div>
              <h2 className='text-2xl overflow-hidden'><u>REGISTER</u></h2>
            </div>
            <form className='inner-box py-4' onSubmit={handleSubmit}>
              <div className='abc'>
                <p>FIRST NAME</p>
                <input className='rt' type='text' name='first_name' onChange={handleChange} />
                <p>LAST NAME</p>
                <input className='rt' type='text' name='last_name' onChange={handleChange} />
                <p>EMAIL</p>
                <input className='rt' type='email' name='email' onChange={handleChange} />
                <p>PHONE NUMBER</p>
                <input className='rt' type='text' name='phone_number' onChange={handleChange} />
                <p>PASSWORD</p>
                <input className='rt' type='password' name='password' onChange={handleChange} />
                <p>CONFIRM PASSWORD</p>
                <input className='rt' type='password' name='password2' onChange={handleChange} />
                <p>DISTRICT</p>
                <input className='rt' type='text' name='district' onChange={handleChange} />
                <p>CITY</p>
                <select className='rt-city' name='city' onChange={handleChange}>
                  <option>Select City</option>
                  <option>Chengannur</option>
                  {/* Add more options here */}
                </select>
                <center><button className='bg-green-300 hover:bg-green-700 mt-6 p-2 rounded-2xl text-black hover:text-white font-semibold' type='submit'>REGISTER</button></center>
              </div>
            </form>
          </div>
        </div>
      </div>
      )}
      
    </>
  );
};

export default Register;