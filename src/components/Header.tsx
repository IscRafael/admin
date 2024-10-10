import React from 'react';
import { FiBell, FiSearch, FiMenu, FiGrid, FiMap, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

interface HeaderProps {
  setIsSidebarOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setIsSidebarOpen }) => {
  return (
    <header className="z-10 py-4 bg-white border-b border-gray-200">
      <div className="container flex items-center justify-between h-full px-6 mx-auto">
        {/* Left side */}
        <div className="flex items-center">
          <button
            className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Menu"
          >
            <FiMenu className="w-6 h-6" />
          </button>
          <Link to="/" className="text-xl font-bold text-gray-800">
            Home
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-500">Dashboard</span>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-500 rounded-full hover:bg-gray-100">
            <FiGrid className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-500 rounded-full hover:bg-gray-100">
            <FiMap className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-500 rounded-full hover:bg-gray-100">
            <FiMail className="w-5 h-5" />
          </button>
          <button className="relative p-2 text-gray-500 rounded-full hover:bg-gray-100">
            <FiBell className="w-5 h-5" />
            <span className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full"></span>
          </button>
          <button className="flex items-center">
            <img
              className="object-cover w-8 h-8 rounded-full"
              src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
              alt="User avatar"
            />
            <span className="ml-2 text-sm font-medium text-gray-700">Anne Santiago</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;