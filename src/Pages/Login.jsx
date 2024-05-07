import { useState } from 'react';
import Navbar from '../Components/Navbar';
import '../Styles/Login.css'; // Import the CSS file
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // Use the navigate hook to redirect to another page

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://lordgrim.pythonanywhere.com/api/v1/auth/login/' , {
        email : email,
        password: password
      });
      console.log(response.data)
      // Save the user data to local storage
      localStorage.setItem('user', JSON.stringify(response.data));
      // Save the token to local storage
      localStorage.setItem('token', response.data.access_token);
      navigate('/buy'); // Redirect to the home page
      alert('Logged in successfully');
    } catch(error) {
      console.error('Error Logging in:', error)
      alert('Error Logging in. Please try again.');
    }
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <>
      <Navbar/>
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <label className="form-label">
            Email:
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="form-input" />
          </label>
          <label className="form-label">
            Password:
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required className="form-input" />
          </label>
          <button type="submit" className="submit-button bg-green-300 hover:bg-green-700 ease-in-out transition 3s">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;