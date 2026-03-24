/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo, useEffect } from 'react';
import {
  RiSearchLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiArrowRightUpLine
} from '@remixicon/react';

const JobBidding = () => {
  const [activeTab, setActiveTab] = useState('Awaiting Assignment');
  const [searchQuery, setSearchQuery] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // --- MOCK DATA ---
  const jobsData = [
    { id: '#H001', name: 'Michael Turner', address: '22 George St, Sydney NSW 2000', date: '15-03-2025', area: '140 m²', status: 'Awaiting Assignment' },
    { id: '#H002', name: 'James Burfitt', address: '458 Ocean Ave, Bondi, NSW 2026', date: '15-03-2025', area: '140 m²', contractor: 'Jai Dunshea', status: 'Bid Accepted' },
    { id: '#H003', name: 'Michael Turner', address: '22 George St, Sydney NSW 2000', date: '15-03-2025', area: '140 m²', assignedCount: 5, status: 'Bidding In Progress' },
    { id: '#H004', name: 'Nathan Macnamara', address: '102 Queen St, Bondi, NSW 2026', date: '15-03-2025', area: '140 m²', contractor: 'Connor Brain', status: 'Bid Accepted' },
    { id: '#H005', name: 'Michael Turner', address: '22 George St, Sydney NSW 2000', date: '15-03-2025', area: '140 m²', assignedCount: 2, status: 'Bidding In Progress' },
    { id: '#H006', name: 'Daniel Smith', address: '15 Harbour Rd, Sydney NSW 2000', date: '16-03-2025', area: '120 m²', assignedCount: 3, status: 'Bidding In Progress' },
    { id: '#H007', name: 'Oliver Brown', address: '88 King St, Sydney NSW 2000', date: '16-03-2025', area: '150 m²', status: 'Awaiting Assignment' },
    { id: '#H008', name: 'William Johnson', address: '21 Oxford St, Bondi NSW 2026', date: '16-03-2025', area: '135 m²', contractor: 'Liam Parker', status: 'Bid Accepted' },
    { id: '#H009', name: 'Jack Wilson', address: '44 Pitt St, Sydney NSW 2000', date: '17-03-2025', area: '160 m²', assignedCount: 5, status: 'Bidding In Progress' },
    { id: '#H010', name: 'Henry Taylor', address: '12 Crown St, Surry Hills NSW 2010', date: '17-03-2025', area: '125 m²', contractor: 'Noah Collins', status: 'Bid Accepted' },
    { id: '#H011', name: 'Lucas Anderson', address: '33 George St, Sydney NSW 2000', date: '17-03-2025', area: '140 m²', status: 'Awaiting Assignment' },
    { id: '#H012', name: 'Ethan Thomas', address: '71 Campbell St, Sydney NSW 2000', date: '18-03-2025', area: '145 m²', assignedCount: 2, status: 'Bidding In Progress' },
    { id: '#H013', name: 'Alexander White', address: '9 Bridge Rd, Glebe NSW 2037', date: '18-03-2025', area: '138 m²', contractor: 'Ryan Foster', status: 'Bid Accepted' },
    { id: '#H014', name: 'Mason Harris', address: '27 King St, Newtown NSW 2042', date: '18-03-2025', area: '155 m²', status: 'Awaiting Assignment' },
    { id: '#H015', name: 'Logan Martin', address: '63 Oxford St, Paddington NSW 2021', date: '19-03-2025', area: '132 m²', assignedCount: 4, status: 'Bidding In Progress' },
    { id: '#H016', name: 'Benjamin Clark', address: '18 Pitt St, Sydney NSW 2000', date: '19-03-2025', area: '148 m²', contractor: 'Caleb Morris', status: 'Bid Accepted' },
    { id: '#H017', name: 'Jacob Lewis', address: '46 Harbour St, Sydney NSW 2000', date: '19-03-2025', area: '150 m²', status: 'Awaiting Assignment' },
    { id: '#H018', name: 'Michael Walker', address: '72 Crown St, Surry Hills NSW 2010', date: '20-03-2025', area: '137 m²', assignedCount: 6, status: 'Bidding In Progress' },
    { id: '#H019', name: 'Daniel Hall', address: '11 York St, Sydney NSW 2000', date: '20-03-2025', area: '142 m²', contractor: 'Ethan Bailey', status: 'Bid Accepted' },
    { id: '#H778', name: 'Danish Hall', address: '11 York St, Sydney IND 2019', date: '20-03-2025', area: '142 m²', contractor: 'Ethan Bailey', status: 'Bidding In Progress' },
    { id: '#H021', name: 'Fin Allen', address: '45 King St, Sydney NSW 2000', date: '20-03-2025', area: '130 m²', status: 'Awaiting Assignment' },
    { id: '#H022', name: 'Fin Allen', address: '45 King St, Sydney NSW 2000', date: '20-03-2025', area: '130 m²', status: 'Awaiting Assignment' },
    { id: '#H023', name: 'Fin Allen', address: '45 King St, Sydney NSW 2000', date: '20-03-2025', area: '130 m²', status: 'Awaiting Assignment' },
    { id: '#H024', name: 'Fin Allen', address: '45 King St, Sydney NSW 2000', date: '20-03-2025', area: '130 m²', status: 'Awaiting Assignment' },
    { id: '#H025', name: 'Fin Allen', address: '45 King St, Sydney NSW 2000', date: '20-03-2025', area: '130 m²', status: 'Awaiting Assignment' },
    { id: '#H026', name: 'Fin Allen', address: '45 King St, Sydney NSW 2000', date: '20-03-2025', area: '130 m²', status: 'Bidding In Progress' },
  ];

  // --- FILTER DATA ---
  const filteredJobs = useMemo(() => {
    return jobsData.filter(job => {
      const matchesTab = job.status === activeTab;
      const matchesSearch =
        job.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.id.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  // Reset page when filters change to avoid staying on a page that no longer has items
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeTab, itemsPerPage]);

  // --- PAGINATION ---
  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);

  const visibleData = filteredJobs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages === 0) return [1];

    let start = Math.max(1, currentPage - 1);
    let end = Math.min(totalPages, start + 2);

    // Adjust start if end is at the boundary
    if (end - start < 2) start = Math.max(1, end - 2);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className='jb-container animate-fade'>
      <h1 className="jb-page-title">Job & Bidding</h1>

      <div className="jb-card">
        {/* TABS */}
        <div className="jb-tabs">
          {['Awaiting Assignment', 'Bidding In Progress', 'Bid Accepted'].map(tab => (
            <button
              key={tab}
              className={`jb-tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* CONTROLS */}
        <div className="jb-controls">
          <div className="jb-show-entries">
            <span>Show</span>
            <select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              className="jb-dropdown"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
          </div>

          <div className="jb-search-box">
            <RiSearchLine size={18} className="jb-search-icon" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="jb-search-input"
            />
          </div>
        </div>

        {/* TABLE */}
        <div className="jb-table-wrapper">
          <table className="jb-table">
            <thead>
              <tr>
                <th>Job ID</th>
                <th>Homeowner Name</th>
                <th>Address</th>
                <th>Request Date</th>
                <th>Roof Area</th>
                {activeTab === 'Bidding In Progress' && <th>Contractor Assigned</th>}
                {activeTab === 'Bid Accepted' && <th>Contractor Name</th>}
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {visibleData.length > 0 ? (
                visibleData.map((job) => (
                  <tr key={job.id}>
                    <td className="text-dim">{job.id}</td>
                    <td className="font-bold">{job.name}</td>
                    <td className="address-cell">{job.address}</td>
                    <td>{job.date}</td>
                    <td>{job.area}</td>
                    {activeTab === 'Bidding In Progress' && <td>{job.assignedCount || 'NA'}</td>}
                    {activeTab === 'Bid Accepted' && <td>{job.contractor || 'NA'}</td>}
                    <td>
                      <span className={`jb-status-pill ${activeTab.toLowerCase().replace(/\s+/g, '-')}`}>
                        {job.status}
                      </span>
                    </td>
                    <td>
                      <button className="jb-btn-view">
                        View Details <RiArrowRightUpLine size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} style={{ textAlign: 'center', padding: '20px' }}>No jobs found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="jb-pagination">
          <button
            className="pagi-arrow"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
          >
            <RiArrowLeftSLine size={20} />
          </button>

          {getPageNumbers().map(n => (
            <button
              key={n}
              className={`pagi-num ${currentPage === n ? 'active' : ''}`}
              onClick={() => setCurrentPage(n)}
            >
              {n}
            </button>
          ))}

          <button
            className="pagi-arrow"
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages || 1))}
          >
            <RiArrowRightSLine size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobBidding;