import { useState, useEffect } from 'react';

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