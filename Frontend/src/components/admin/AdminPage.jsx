import React from 'react';
import AdminSidebar from './AdminSidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';

const AdminDashboard = () => {
  return (
    <div>
      <main>
        {/* Sidebar */}
        <AdminSidebar />

        {/* Main content wrapper */}
        <div className=" lg:ml-64">
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;