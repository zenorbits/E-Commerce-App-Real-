import React from 'react';
import AdminSidebar from './AdminSidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';

const AdminDashboard = () => {
  return (
    <div>
      <main>
        <div className="sidebar flex">
          {/* Sidebar */}
          <AdminSidebar />

          {/* Main Content */}
          <Routes>
            {/* Use path instead of to */}
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;