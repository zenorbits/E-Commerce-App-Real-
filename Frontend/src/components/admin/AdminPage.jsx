import React from 'react'
import AdminSidebar from './AdminSidebar'
import { Route, Routes } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <div>
        <main>
            <div className="sidebar">
                <AdminSidebar/>
            </div>
        </main>
    </div>
  )
}

export default AdminDashboard