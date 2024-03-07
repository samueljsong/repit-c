import React, { useState, useEffect } from 'react';
import { logout, me } from '../api/Client'

//Dependencies
import { useNavigate, useLocation, Link } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

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

  function Dropdown() {
    alert("TODO: Open drop down menu.")
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
        <div name="logout" className="flex items-center hover:cursor-pointer" onClick={onLogoutClick}>
          <div className="flex flex-col w-8 h-8 rounded-md bg-bcit-blue text-white justify-center items-center text-sm">
          {userData.first_name.charAt(0)} {userData.last_name.charAt(0)}
          </div>
          <div className="text-black font-inter text-sm ml-2 sm:hidden">
            {userData.first_name} {userData.last_name}
          </div>
        </div>
      )}
    </nav>
  );
}
