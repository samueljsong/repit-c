import React, { useState, useEffect } from 'react';
import { logout, me } from '../api/Client';
import { useNavigate, useLocation, Link } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (location.pathname === '/login') {
      return;
    } else {
      fetchUserData();
    }
  }, [location.pathname]); 

  const fetchUserData = () => {
    me()
      .then(data => {
        setUserData(data);
        console.log("User Data:", data)
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  };

  const onLogoutClick = () => {
    logout(navigate)
  }

  function adminDashboardHandler() {
    navigate('/AdminDashboard')
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  }

  if (location.pathname === '/login') {
    return null; 
  }

  return (
    <nav className="flex justify-between px-2 py-4 border shadow-md items-center fixed w-full bg-white">
      <Link to="/">
        <div className="text-bcit-blue font-extrabold font-inter-extrabold text-xl hover:cursor-pointer">
          R E P I T
        </div>
      </Link>
      {userData && ( 
        <div className="relative z-50">
          <div name="dropdown" className="flex items-center hover:cursor-pointer" onClick={toggleDropdown}>
            <div className="flex flex-col w-8 h-8 rounded-md bg-bcit-blue text-white justify-center items-center text-sm">
              {userData.first_name.charAt(0)} {userData.last_name.charAt(0)}
            </div>
            <div className="text-black font-inter text-sm ml-2 sm:hidden">
              {userData.first_name} {userData.last_name}
            </div>
          </div>
          {isDropdownOpen && (
            <div className="absolute top-full left-0 bg-white border shadow-md py-2 !z-20 ">
              {userData.user_type === 'admin' && (
                <button onClick={adminDashboardHandler} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Admin Dashboard</button>
              )}
              <button onClick={onLogoutClick} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Logout</button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}