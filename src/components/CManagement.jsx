import React, { useState } from 'react';
import { 
  RiArrowRightUpLine, 
  RiSearchLine, 
  RiArrowLeftSLine, 
  RiArrowRightSLine 
} from '@remixicon/react';

const CManagement = () => {
  // --- STATE ---
  const [itemsPerPage, setItemsPerPage] = useState(10); 
  const [currentPage, setCurrentPage] = useState(1);

  const contractors = [
    { id: '#L1001', name: 'Michael Turner', mobile: '0402 888 777', suburbs: 'Parramatta, Blacktown', date: '20-04-2025', status: 'Active' },
    { id: '#L1002', name: 'Sarah James', mobile: '0456 789 321', suburbs: 'Liverpool, Campbelltown', date: '20-04-2025', status: 'Pending' },
    { id: '#L1003', name: 'Julie Martin', mobile: '0433 222 111', suburbs: 'Ryde, Epping', date: '21-04-2025', status: 'Pending' },
    { id: '#L1004', name: 'Rahul Singh', mobile: '0401 567 891', suburbs: 'Strathfield, Burwood', date: '21-04-2025', status: 'Pending' },
    { id: '#L1005', name: 'Sarah O’Connor', mobile: '0411 333 222', suburbs: 'Penrith, Mt Druitt', date: '21-04-2025', status: 'Pending' },
    { id: '#L1006', name: 'Michael Roberts', mobile: '0422 999 888', suburbs: 'Hurstville, Bankstown', date: '22-04-2025', status: 'Pending' },
    { id: '#L1007', name: 'Aisha Khan', mobile: '0430 555 111', suburbs: 'Chatswood, Hornsby', date: '22-04-2025', status: 'Pending' },
    { id: '#L1008', name: 'Benjamin Clark', mobile: '0430 555 112', suburbs: 'Bondi, Coogee', date: '22-04-2025', status: 'Active' },
    { id: '#L1009', name: 'Sarah Morrison', mobile: '0430 555 113', suburbs: 'Manly, Dee Why', date: '22-04-2025', status: 'Pending' },
    { id: '#L1010', name: 'Daniel Scott', mobile: '0430 555 114', suburbs: 'Ashfield, Marrickville', date: '23-04-2025', status: 'Pending' },
    { id: '#L1011', name: 'Emma Watson', mobile: '0430 555 115', suburbs: 'Newtown, Glebe', date: '23-04-2025', status: 'Active' },
    { id: '#L1012', name: 'James Anderson', mobile: '0430 555 116', suburbs: 'Randwick, Kensington', date: '23-04-2025', status: 'Pending' },
    { id: '#L1013', name: 'Olivia Brown', mobile: '0430 555 117', suburbs: 'Paddington, Surry Hills', date: '23-04-2025', status: 'Pending' },
    { id: '#L1014', name: 'Liam Johnson', mobile: '0430 555 118', suburbs: 'Balmain, Rozelle', date: '24-04-2025', status: 'Active' },
    { id: '#L1015', name: 'Sophia Wilson', mobile: '0430 555 119', suburbs: 'Leichhardt, Haberfield', date: '24-04-2025', status: 'Pending' },
    { id: '#L1016', name: 'Noah Taylor', mobile: '0430 555 120', suburbs: 'Drummoyne, Five Dock', date: '24-04-2025', status: 'Pending' },
    { id: '#L1017', name: 'Isabella Thomas', mobile: '0430 555 121', suburbs: 'Lane Cove, Artarmon', date: '24-04-2025', status: 'Pending' },
    { id: '#L1018', name: 'William White', mobile: '0430 555 122', suburbs: 'Mosman, Neutral Bay', date: '25-04-2025', status: 'Active' },
    { id: '#L1019', name: 'Mia Harris', mobile: '0430 555 123', suburbs: 'Woollahra, Double Bay', date: '25-04-2025', status: 'Pending' },
    { id: '#L1020', name: 'Ethan Martin', mobile: '0430 555 124', suburbs: 'Cronulla, Miranda', date: '25-04-2025', status: 'Pending' },
    { id: '#L1021', name: 'Charlotte Lee', mobile: '0430 555 125', suburbs: 'Kogarah, Rockdale', date: '25-04-2025', status: 'Pending' },
    { id: '#L1022', name: 'Lucas Walker', mobile: '0430 555 126', suburbs: 'Bexley, Arncliffe', date: '26-04-2025', status: 'Active' },
    { id: '#L1023', name: 'Amelia Hall', mobile: '0430 555 127', suburbs: 'Greenacre, Punchbowl', date: '26-04-2025', status: 'Pending' },
    { id: '#L1024', name: 'Henry Allen', mobile: '0430 555 128', suburbs: 'Lakemba, Wiley Park', date: '26-04-2025', status: 'Pending' },
    { id: '#L1025', name: 'Evelyn Young', mobile: '0430 555 129', suburbs: 'Campsie, Belfield', date: '26-04-2025', status: 'Pending' },
  ];

  // --- PAGINATION LOGIC ---
  const totalPages = Math.ceil(contractors.length / itemsPerPage);
  
  // Indices for slicing data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const visibleContractors = contractors.slice(indexOfFirstItem, indexOfLastItem);

  // Logic to show 3 buttons at a time
  let startPage = Math.max(1, currentPage - 1);
  let endPage = Math.min(totalPages, startPage + 2);

  if (endPage - startPage < 2) {
    startPage = Math.max(1, endPage - 2);
  }

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    if (i > 0) pageNumbers.push(i);
  }

  // --- HANDLERS ---
  const handleEntriesChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page when limit changes
  };

  const goToPrev = () => setCurrentPage(prev => Math.max(prev - 1, 1));
  const goToNext = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));

  return (
    <div className="da-cm-main-container animate-fade">
      <h1 className="da-cm-page-title">Contractor Management</h1>

      <div className="da-cm-content-card">
        {/* --- Top Controls --- */}
        <div className="da-cm-controls-row">
          <div className="da-cm-entries-select">
            <span>Show</span>
            <select 
              className="da-cm-dropdown" 
              value={itemsPerPage} 
              onChange={handleEntriesChange}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
            </select>
          </div>

          <div className="da-cm-search-box">
            <RiSearchLine size={18} className="da-cm-search-icon" />
            <input type="text" placeholder="Search" className="da-cm-input" />
          </div>
        </div>

        {/* --- Contractor Table --- */}
        <div className="da-cm-table-wrapper">
          <table className="da-cm-table">
            <thead>
              <tr>
                <th>Contractor ID</th>
                <th>Contractor Name</th>
                <th>Mobile Number</th>
                <th>Suburbs Covered</th>
                <th>Date Approved</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {visibleContractors.map((item, index) => (
                <tr key={index}>
                  <td className="da-cm-id-text">{item.id}</td>
                  <td className="da-cm-name-text">{item.name}</td>
                  <td>{item.mobile}</td>
                  <td>{item.suburbs}</td>
                  <td>{item.date}</td>
                  <td>
                    <span className={item.status === 'Active' ? 'da-cm-pill-active' : 'da-cm-pill-pending'}>
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <button className="da-cm-btn-action">
                      View Details <RiArrowRightUpLine size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* --- Dynamic Pagination --- */}
          <div className="da-cm-pagination-footer">
            <button 
              className="da-cm-pagi-btn" 
              onClick={goToPrev}
              disabled={currentPage === 1}
            >
              <RiArrowLeftSLine size={20}/>
            </button>

            {pageNumbers.map(number => (
              <button
                key={number}
                className={`da-cm-pagi-btn ${currentPage === number ? 'da-cm-pagi-active' : ''}`}
                onClick={() => setCurrentPage(number)}
              >
                {number}
              </button>
            ))}

            <button 
              className="da-cm-pagi-btn" 
              onClick={goToNext}
              disabled={currentPage === totalPages}
            >
              <RiArrowRightSLine size={20}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CManagement;