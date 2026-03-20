import React from 'react';
import { RiDashboardFill, RiLogoutBoxRLine } from '@remixicon/react';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated'); // Clear the session
    navigate('/'); // Redirect to home
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-logo">
        <img src=" /Frame 1000009354.png" alt="roofhero.au" />
      </div>
      
      <div className="sidebar-menu">
        <div className="nav-item active">
          <img src=' /dashbord_ic.png' alt='dashbord_ic'></img>
          <span>Dashboard</span>
        </div>
      </div>

      <div className="sidebar-footer">
        <button className="logout-btn" onClick={handleLogout}>
          <RiLogoutBoxRLine size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;