import { useState, useEffect } from 'react';
import axios from 'axios';
import profile from '../assets/profile-icon.png';

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

  useEffect(() => {
    // Fetch user details from API
    axios.get('https://lordgrim.pythonanywhere.com/api/v1/user/all/', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    
    })
      .then(response => {
        const fetchedUser = response.data; // Adjust this line if the data is nested in the response
        setUser(fetchedUser);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);


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
                <img src={profile} alt="Profile" className="rounded-full h-32 w-44" />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;