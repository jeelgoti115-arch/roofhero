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
    { id: 'dashboard', label: 'Dashboard', img: 'public/dashbord_ic.svg' },
    { id: 'contractor', label: 'Contractor Management', img: 'public/contractor_ic.svg' },
    { id: 'homeowner', label: 'Homeowner Management', img: 'public/profile_ic.svg' },
    { id: 'jobs', label: 'Job & Bidding Pipeline', img: 'public/work_update_ic.svg' },
    { id: 'pricing', label: 'Pricing Logic Management', img: 'public/rate_ic.svg' },
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
            
            <span className="adm-sb-icon-wrapper"><img src={item.img} alt='icon'></img></span>
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