import React from 'react';
import { Link } from 'react-router-dom';



export const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 flex items-center justify-between mb-5">
      {/* Logo */}
      <Link to={'/'}>
      <div className="flex items-center">
        <img src="../../public/images/logo.jpeg" alt="Heliverse" className="w-8 h-8 mr-2" />
        <span className="text-white font-bold text-lg">Heliverse</span>
      </div>
      </Link>
      
      {/* Buttons */}
      <div className="flex">
        <Link to={'/create/user'}>
        <button className="bg-white text-blue-500 hover:bg-blue-400 hover:text-white font-semibold py-2 px-4 rounded mr-2">
          Create User
        </button>
        </Link>
        <button className="bg-white text-blue-500 hover:bg-blue-400 hover:text-white font-semibold py-2 px-4 rounded ml-2">
          Create a Team
        </button>
      </div>
    </nav>
  );
};


