import React, { useState } from 'react';
import { RiLogoutBoxRLine, RiCheckboxCircleFill } from '@remixicon/react';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen }) => {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false); // State for Logout Popup

  const handleLogout = () => {
    // 1. Show the success toast
    setShowToast(true);

    // 2. Clear the session
    localStorage.removeItem('isAuthenticated');

    // 3. Brief delay so the toast is visible, then redirect
    setTimeout(() => {
      setShowToast(false);
      navigate('/'); 
    }, 1500);
  };

  return (
    <>
      {/* --- LOGOUT TOAST POPUP --- */}
      {showToast && (
        <div className="login-toast-popup animate-slide-in">
          <RiCheckboxCircleFill size={20} color="#2ecc71" />
          <span>Log out successfull!</span>
        </div>
      )}

      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-logo">
          <img src="/Frame 1000009354.png" alt="roofhero.au" />
        </div>
        
        <div className="sidebar-menu">
          <div className="nav-item active">
            <img src='/dashbord_ic.png' alt='dashbord_ic' />
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
    </>
  );
};

export default Sidebar;