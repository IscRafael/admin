import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiBarChart2, FiBox, FiCalendar, FiLayers, FiList } from 'react-icons/fi';
import MenuItem from './MenuItem';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <aside className={`z-20 w-64 overflow-y-auto bg-white md:block flex-shrink-0 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="py-4 text-gray-500">
        <Link to="/" className="ml-6 text-lg font-bold text-gray-800">Lead</Link>
        <div className="mt-3 px-6 py-2 bg-gray-100">
          <p className="text-sm font-semibold">Walmart</p>
          <p className="text-xs">Los Angeles, California</p>
        </div>
        <ul className="mt-6">
          <MenuItem icon={<FiHome className="w-5 h-5" />} title="Dashboard" to="/" />
          <MenuItem icon={<FiBarChart2 className="w-5 h-5" />} title="Analytics" to="/analytics" />
          <MenuItem icon={<FiBox className="w-5 h-5" />} title="Widgets" to="/widgets" />
          <MenuItem icon={<FiCalendar className="w-5 h-5" />} title="Calendar" to="/calendar" />
          <MenuItem icon={<FiLayers className="w-5 h-5" />} title="Components" to="/components" />
          <MenuItem 
            icon={<FiList className="w-5 h-5" />} 
            title="Articulos" 
            subItems={[
              { title: "Products", href: "/articulos/products" },
              { title: "Category", href: "/articulos/category" }
            ]}
          />
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;