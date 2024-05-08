import { useState, useEffect } from 'react';
import axios from 'axios';

import SearchBar from "../Components/SearchBar"

const Profile = () => {
  const [user, setUser] = useState({
    profilePic: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: 'buyer',
  });

  const [roles, setRoles] = useState([])

  useEffect(() => {
    // Fetch user details from API or local storage here
    const fetchedUser = {
      profilePic: 'https://example.com/profile.jpg',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '1234567890',
      role: 'buyer',
    };
    setUser(fetchedUser);
  }, []);

  // get the Access token from local storage
  const token = localStorage.getItem('token');

  // Fetch the roles available
  useEffect(() => {
    axios.get('https://lordgrim.pythonanywhere.com/api/v1/role/all/' , {
      headers : {
        'Authorization' : `Bearer ${token}`
      }
    })
    .then((response) => {
      setRoles(response.data.data);
      console.log(response.data.data)
    })
    .catch((error) => {
      console.error('Error fetching roles:', error);
    });
  }, [token])

  const handleRoleChange = (event) => {
    setUser(prevUser => ({ ...prevUser, role: event.target.value }));
  };

  return (
    <>
      <SearchBar/>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div>
            <h2 className="text-2xl font-semibold leading-tight">User Details</h2>
          </div>
          <div className="my-2 flex sm:flex-row flex-col">
            <div className="flex flex-row mb-1 sm:mb-0">
              <div className="relative">
                <img src={user.profilePic} alt="Profile" className="rounded-full h-32 w-32" />
                <div className="text-sm leading-5 text-gray-600 mt-6">
                  <strong>First Name:</strong> {user.firstName}
                </div>
                <div className="text-sm leading-5 text-gray-600 mt-6">
                  <strong>Last Name:</strong> {user.lastName}
                </div>
                <div className="text-sm leading-5 text-gray-600 mt-6">
                  <strong>Email:</strong> {user.email}
                </div>
                <div className="text-sm leading-5 text-gray-600 mt-6">
                  <strong>Phone:</strong> {user.phone}
                </div>
                <div className="text-sm leading-5 text-gray-600 mt-6">
                  <strong>Role:</strong>
                  <select value={user.role} onChange={handleRoleChange} className="ml-2 h-10 w-24">
                    {Array.isArray(roles) ? (roles.map((role) => (
                      <option className='h-10 w-36' key={role.id} value={role.name}>{role.name}</option>
                    ))) : null}
                    </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;