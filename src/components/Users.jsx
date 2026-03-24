import React, { useState, useMemo } from 'react';
import { 
  RiSearchLine, 
  RiArrowLeftSLine, 
  RiArrowRightSLine, 
  RiArrowRightUpLine 
} from '@remixicon/react';

const Users = () => {
  // --- STATE ---
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  // --- MOCK DATA ---
  const homeowners = [
    { id: '#H001', name: 'Michael Turner', mobile: '0401 234 567', email: 'sarah.w@email.com', address: '22 George St, Sydney NSW 2000', date: '15-03-2025', status: 'Active' },
    { id: '#H002', name: 'James Thompson', mobile: '0401 234 567', email: 'james.t@email.com', address: '85 Castlereagh St, Sydney NSW', date: '15-03-2025', status: 'Active' },
    { id: '#H003', name: 'Priya Patel', mobile: '0401 234 567', email: 'priya.p@email.com', address: '7 Clarence St, Sydney NSW 2000', date: '15-03-2025', status: 'Active' },
    { id: '#H004', name: 'Daniel Nguyen', mobile: '0401 234 567', email: 'daniel.n@email.com', address: '150 King St, Sydney NSW 2000', date: '15-03-2025', status: 'Active' },
    { id: '#H005', name: 'Emily Zhang', mobile: '0401 234 567', email: 'emily.z@email.com', address: '2 Elizabeth St, Sydney NSW 2000', date: '15-03-2025', status: 'Active' },
    { id: '#H006', name: 'Michael Brown', mobile: '0401 234 567', email: 'michael.b@email.com', address: '55 Sussex St, Sydney NSW 2000', date: '15-03-2025', status: 'Active' },
    { id: '#H007', name: 'Aisha Khan', mobile: '0401 234 567', email: 'aisha.k@email.com', address: '22 George St, Sydney NSW 2000', date: '15-03-2025', status: 'Active' },
    { id: '#H008', name: 'Thomas Lee', mobile: '0401 234 567', email: 'thomas.l@email.com', address: '3 Macquarie St, Sydney NSW', date: '15-03-2025', status: 'Active' },
    
  ];

  // --- LOGIC ---
  const filteredData = useMemo(() => {
    return homeowners.filter(user => 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.id.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const visibleData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // --- SLIDING WINDOW PAGINATION LOGIC (MAX 3) ---
  const getPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages === 0) return [1];

    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, startPage + 2);

    if (endPage - startPage < 2) {
      startPage = Math.max(1, endPage - 2);
    }

    for (let i = startPage; i <= endPage; i++) {
      if(i > 0) pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="adm-ho-main-container animate-fade">
      <h1 className="adm-ho-page-title">Homeowners Request</h1>

      <div className="adm-ho-content-card">
        {/* Top Bar */}
        <div className="adm-ho-controls">
          <div className="adm-ho-entries">
            <span>Show</span>
            <select 
              value={itemsPerPage} 
              onChange={(e) => {setItemsPerPage(Number(e.target.value)); setCurrentPage(1);}}
              className="adm-ho-dropdown"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
            </select>
          </div>

          <div className="adm-ho-search-wrapper">
            <RiSearchLine size={18} className="adm-ho-search-icon" />
            <input 
              type="text" 
              placeholder="Search" 
              className="adm-ho-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Table */}
        <div className="adm-ho-table-wrapper">
          <table className="adm-ho-table">
            <thead>
              <tr>
                <th style={{ width: '8%' }}>Homeowner ID</th>
                <th style={{ width: '15%' }}>Full Name</th>
                <th style={{ width: '13%' }}>Mobile Number</th>
                <th style={{ width: '18%' }}>Email</th>
                <th style={{ width: 'auto' }}>Address</th>
                <th style={{ width: '12%' }}>Request Date</th>
                <th style={{ width: '10%' }}>Status</th>
                <th style={{ width: '12%' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {visibleData.map((user, index) => (
                <tr key={index}>
                  <td className="adm-ho-text-dim">{user.id}</td>
                  <td className="adm-ho-font-bold">{user.name}</td>
                  <td>{user.mobile}</td>
                  <td>{user.email}</td>
                  <td className="adm-ho-address-cell">{user.address}</td>
                  <td>{user.date}</td>
                  <td><span className="adm-ho-pill-active">{user.status}</span></td>
                  <td>
                    <button className="adm-ho-btn-view">
                      View Details <RiArrowRightUpLine size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="adm-ho-pagination">
          <button 
            className="adm-ho-pagi-btn" 
            onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
          >
            <RiArrowLeftSLine size={20} />
          </button>
          
          {pageNumbers.map(n => (
            <button 
              key={n} 
              className={`adm-ho-pagi-btn ${currentPage === n ? 'active' : ''}`}
              onClick={() => setCurrentPage(n)}
            >
              {n}
            </button>
          ))}

          <button 
            className="adm-ho-pagi-btn" 
            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages || 1))}
          >
            <RiArrowRightSLine size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Users;