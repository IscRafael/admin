import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="flex flex-col flex-1 w-full">
        <Header setIsSidebarOpen={setIsSidebarOpen} />
        <main className="h-full overflow-y-auto">
          <div className="container px-6 mx-auto grid">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;