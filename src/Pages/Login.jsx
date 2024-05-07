import { useState } from 'react';
import Navbar from '../Components/Navbar';
import '../Styles/Login.css'; // Import the CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
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