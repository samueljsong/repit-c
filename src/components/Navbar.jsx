import React from 'react'
import { logout } from '../api/Client'

//Dependencies
import { useNavigate, Link } from 'react-router-dom'

export default function Navbar() {

  const navigate = useNavigate();

  const onLogoutClick = () => {
    logout(navigate)
  }

  function Dropdown() {
    alert("TODO: Open drop down menu.")
  }

  return (
    <nav className="flex justify-between px-2 py-4 border shadow-md items-center fixed w-full bg-white">
      <Link to='/' >
        <div className='text-bcit-blue font-extrabold font-inter-extrabold text-xl hover:cursor-pointer'>
          R E P I T
        </div>
      </Link>
        <div name="logout" className='flex items-center hover:cursor-pointer' onClick={onLogoutClick}>
          <div className='flex flex-col w-8 h-8 rounded-md bg-bcit-blue text-white justify-center items-center text-sm'>
              SS {/* Put user initials here*/}
          </div>
          <div className='text-black font-inter text-sm ml-2 sm:hidden'>
              Samuel Song {/* Put name here */}
          </div>
        </div>
    </nav>
  )
}
