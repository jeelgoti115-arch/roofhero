import React from 'react';
import { 
  RiLayoutGridFill, 
  RiUserSettingsLine, 
  RiUserFollowLine, 
  RiBriefcase4Line, 
  RiMoneyDollarBoxLine, 
  RiLogoutBoxRLine 
} from '@remixicon/react';
import { useNavigate } from 'react-router-dom';

const AdminSidebar = ({ isOpen, activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/', { state: { logoutSuccess: true } });
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <RiLayoutGridFill size={20} /> },
    { id: 'contractor', label: 'Contractor Management', icon: <RiUserSettingsLine size={20} /> },
    { id: 'homeowner', label: 'Homeowner Management', icon: <RiUserFollowLine size={20} /> },
    { id: 'jobs', label: 'Job & Bidding Pipeline', icon: <RiBriefcase4Line size={20} /> },
    { id: 'pricing', label: 'Pricing Logic Management', icon: <RiMoneyDollarBoxLine size={20} /> },
  ];

  return (
    <aside className={`adm-sb-container ${isOpen ? 'adm-sb-open' : 'adm-sb-closed'}`}>
      <div className="adm-sb-logo-section">
        <img src="/Frame 1000009354.png" alt="roofhero.au" />
      </div>

      <div className="adm-sb-menu-list">
        {menuItems.map((item) => (
          <div 
            key={item.id} 
            className={`adm-sb-nav-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)} 
          >
            
            <span className="adm-sb-icon-wrapper">{item.icon}</span>
            <span className="adm-sb-label-text">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="adm-sb-footer-section">
        <button className="adm-sb-logout-action" onClick={handleLogout}>
          <RiLogoutBoxRLine size={20} />
          <span className="adm-sb-logout-text">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;