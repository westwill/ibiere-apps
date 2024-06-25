import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import { NavigationArray } from '../constant/navigation';
import { IoSearch } from 'react-icons/io5';

const Header = () => {
  return (
    <div className="bg-white flex items-center space-x-2 justify-between py-4 sticky top-0 z-20">
      {/* logo */}
      <div>
        <img src={Logo} alt="" />
      </div>

      {/* navigation */}
      <div className="">
        <nav className="flex items-center space-x-4 text-zinc-700">
          {NavigationArray?.map((navigate) => (
            <NavLink
              key={navigate.id}
              to={`${navigate.link}`}
              className={({ isActive }) => (isActive ? 'text-red-600' : '')}
            >
              {navigate.label}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="bg-gray-200 rounded">
        <div className='flex  p-2'>
          <input
            className="bg-gray-200    outline-none"
            type="text"
            placeholder="Search"
          />
          <IoSearch className="mt-1" />
        </div>
      </div>
    </div>
  );
};

export default Header;
