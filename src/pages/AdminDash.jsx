import React, { useState } from 'react';
import '../Styles/Admin.css'
import DashboardHeader from '../components/DashboardHeader';
import AdminSidebar from '../components/AdminSidebar';

// Import your sub-components
import DashAdmin from '../components/DashAdmin';
import CManagement from '../components/CManagement';
import JobBidding from '../components/JobBidding';
import PLManagement from '../components/PLManagement';
import Users from '../components/Users';
import AdminHeader from '../components/AdminHeader';

const AdminDash = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // New state to track which component is visible
  const [activeTab, setActiveTab] = useState('dashboard');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to render the correct component
  const renderComponent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashAdmin />;
      case 'contractor':
        return <CManagement />;
      case 'homeowner':
        return <Users />;
      case 'jobs':
        return <JobBidding />;
      case 'pricing':
        return <PLManagement />;
      default:
        return <DashAdmin />;
    }
  };

  return (
    /* This wrapper now controls the overall layout */
    <div className={`dashboard-wrapper ${isSidebarOpen ? 'sidebar-closed' : 'sidebar-open'}`}>
      <AdminSidebar 
        isOpen={isSidebarOpen} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
      
      <div className="dashboard-main-content">
        <AdminHeader onToggleSidebar={toggleSidebar} />
        <main className="adm-body-content">
          <div className="dashboard-body">
            {renderComponent()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminDash;