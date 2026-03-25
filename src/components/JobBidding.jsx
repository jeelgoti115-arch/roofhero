/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo, useEffect } from 'react';
import {
  RiSearchLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiArrowRightUpLine,
  RiArrowLeftLine,
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiMailLine,
  RiPhoneLine,
  RiCheckboxCircleFill,
  RiMailFill,
  RiPhoneFill,
  RiCloseCircleLine
} from '@remixicon/react';

const AwaitingAssignmentView = ({ job, onBack }) => {

  const [expandedSection, setExpandedSection] = useState('basic');

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="jb-details-container animate-fade">
      {/* Header with Back Button */}
      <div className="jb-details-header">
        <button onClick={onBack} className="jb-back-btn">
          <RiArrowLeftLine size={20} />
        </button>
        <h1>Homeowner Project Details</h1>
      </div>

      <div className="jb-details-layout">
        {/* Left Section: Project Details */}
        <div className="jb-details-main">
          <div className="jb-card jb-p-24">
            <h2 className="jb-section-title">Project Details</h2>
            
            <div className="jb-profile-row">
              <img src="public/contractor2.jpg" alt="Profile" className="jb-avatar" />
              <div className="jb-profile-info">
                <h3>{job.name}</h3>
                <div className="jb-contact-row">
                  <span><RiMailFill size={14} className="jb-icon-orange" /> JasperCanning@dayrep.com</span>
                  <span className="jb-divider">|</span>
                  <span><RiPhoneFill size={14} className="jb-icon-orange" /> 937-304-8161</span>
                </div>
              </div>
              <div className="jb-status-container">
                <div className="jb-status-tag jb-tag-open">
                   <span className="jb-dot"></span> Open For Bids
                </div>
                <p className="jb-bids-count">12 Contractor Bids Received</p>
              </div>
            </div>

            <h2 className="jb-section-title mt-24">Project Images</h2>
            <div className="jb-image-grid-4">
              <img src="public/r1.jpg" alt="Job" />
              <img src="public/r2.jpg" alt="Job" />
              <img src="public/r3.jpg" alt="Job" />
              <div className="jb-image-card-more">
                <img src="public/r4.jpg" alt="Job" />
                <div className="jb-image-overlay">
                  <span>View More</span>
                  <RiArrowRightUpLine size={16} />
                </div>
              </div>
            </div>

            {/* Accordion Sections */}
            <div className="jb-accordion mt-24">
              
              {/* Basic Information Section */}
              <div className={`jb-accordion-item ${expandedSection === 'basic' ? 'jb-item-active' : ''}`}>
                <div 
                  className={`jb-accordion-header ${expandedSection === 'basic' ? 'jb-bg-active' : ''}`}
                  onClick={() => toggleSection('basic')}
                >
                  <span>Basic Information</span>
                  <div className={`jb-circle-icon ${expandedSection === 'basic' ? 'jb-bg-dark' : 'jb-bg-orange'}`}>
                    {expandedSection === 'basic' ? <RiArrowUpSLine size={20} /> : <RiArrowDownSLine size={20} />}
                  </div>
                </div>
                {expandedSection === 'basic' && (
                  <div className="jb-accordion-content jb-grid-2 animate-fade">
                    <div><label>Project ID:</label><p>RH-JOB-2025-0148</p></div>
                    <div><label>Property Address:</label><p>27 Rosebay Street, Bondi, NSW 2026</p></div>
                    <div><label>Roof Type:</label><p>Tile Roof</p></div>
                    <div><label>Approx. Roof Area:</label><p>180 m²</p></div>
                    <div><label>Pitch Type:</label><p>Medium Pitch (25-35°)</p></div>
                    <div><label>Stories:</label><p>2</p></div>
                    <div><label>Access Difficulty:</label><p>Moderate</p></div>
                    <div><label>Material Requested:</label><p>Colorbond Metal</p></div>
                    <div className="jb-col-span-2"><label>Urgency Level:</label><p>Flexible (within 30 days)</p></div>
                  </div>
                )}
              </div>

              {/* Automated Quoting Section */}
              <div className={`jb-accordion-item mt-12 ${expandedSection === 'quoting' ? 'jb-item-active' : ''}`}>
                <div 
                  className={`jb-accordion-header ${expandedSection === 'quoting' ? 'jb-bg-active' : ''}`}
                  onClick={() => toggleSection('quoting')}
                >
                  <span>Automated Quoting</span>
                  <div className={`jb-circle-icon ${expandedSection === 'quoting' ? 'jb-bg-dark' : 'jb-bg-orange'}`}>
                    {expandedSection === 'quoting' ? <RiArrowUpSLine size={20} /> : <RiArrowDownSLine size={20} />}
                  </div>
                </div>
                {expandedSection === 'quoting' && (
                  <div className="jb-accordion-content jb-grid-2 animate-fade">
                    <div><label>Automated Quoting:</label><p>$8,000 — $9,500 AUD</p></div>
                    <div><label>Provide by:</label><p>roofhero</p></div>
                  </div>
                )}
              </div>

              {/* Documents Section */}
              <div className={`jb-accordion-item mt-12 ${expandedSection === 'docs' ? 'jb-item-active' : ''}`}>
                <div 
                  className={`jb-accordion-header ${expandedSection === 'docs' ? 'jb-bg-active' : ''}`}
                  onClick={() => toggleSection('docs')}
                >
                  <span>Documents</span>
                  <div className={`jb-circle-icon ${expandedSection === 'docs' ? 'jb-bg-dark' : 'jb-bg-orange'}`}>
                    {expandedSection === 'docs' ? <RiArrowUpSLine size={20} /> : <RiArrowDownSLine size={20} />}
                  </div>
                </div>
                {expandedSection === 'docs' && (
                  <div className="jb-accordion-content jb-doc-flex animate-fade">
                    {[1, 2, 3].map((_, i) => (
                      <div key={i} className="jb-doc-pill-card">
                        <div className="jb-doc-icon-box">
                          <img src="public/pdf_ic.png" alt="pdf" width="20" />
                        </div>
                        <div className="jb-doc-text">
                          <span className="jb-doc-name">RooferCoinsurance.pdf</span>
                          <span className="jb-doc-sub">Public Liability Insurance</span>
                        </div>
                        <RiCloseCircleLine size={18} className="jb-doc-close" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Contractor Assignment */}
        <div className="jb-details-side">
          <div className="jb-card jb-p-24">
            <h2 className="jb-section-title">Contractor Assignment</h2>
            <div className="jb-search-box-side">
              <input type="text" placeholder="Search Contractor" />
            </div>
            <div className="jb-contractor-list">
                <div className="jb-contractor-item">
                  <div className="jb-flex-row">
                    <img src='public/toby.jpg' className="jb-avatar-sm" alt="C" />
                    <div className="jb-c-info">
                      <p className="jb-c-name">Toby Adamson</p>
                      <p className="jb-c-loc">Parramatta, Blacktown</p>
                    </div>
                    <input type="checkbox" className="jb-checkbox" />
                  </div>
                </div>
                <div className="jb-contractor-item">
                  <div className="jb-flex-row">
                    <img src='public/angus.jpg' className="jb-avatar-sm" alt="C" />
                    <div className="jb-c-info">
                      <p className="jb-c-name">Angus Klein</p>
                      <p className="jb-c-loc">Parramatta, Blacktown</p>
                    </div>
                    <input type="checkbox" className="jb-checkbox" />
                  </div>
                </div>
                <div className="jb-contractor-item">
                  <div className="jb-flex-row">
                    <img src='public/beau.jpg' className="jb-avatar-sm" alt="C" />
                    <div className="jb-c-info">
                      <p className="jb-c-name">Beau Gledson</p>
                      <p className="jb-c-loc">Parramatta, Blacktown</p>
                    </div>
                    <input type="checkbox" className="jb-checkbox" />
                  </div>
                </div>
                <div className="jb-contractor-item">
                  <div className="jb-flex-row">
                    <img src='public/riley.jpg' className="jb-avatar-sm" alt="C" />
                    <div className="jb-c-info">
                      <p className="jb-c-name">Riley Blanc</p>
                      <p className="jb-c-loc">Parramatta, Blacktown</p>
                    </div>
                    <input type="checkbox" className="jb-checkbox" />
                  </div>
                </div>
                <div className="jb-contractor-item">
                  <div className="jb-flex-row">
                    <img src='public/zane.jpg' className="jb-avatar-sm" alt="C" />
                    <div className="jb-c-info">
                      <p className="jb-c-name">Zane Vlamingh</p>
                      <p className="jb-c-loc">Parramatta, Blacktown</p>
                    </div>
                    <input type="checkbox" className="jb-checkbox" />
                  </div>
                </div>
                <div className="jb-contractor-item">
                  <div className="jb-flex-row">
                    <img src='public/aidan.jpg' className="jb-avatar-sm" alt="C" />
                    <div className="jb-c-info">
                      <p className="jb-c-name">Aidan Heymann</p>
                      <p className="jb-c-loc">Parramatta, Blacktown</p>
                    </div>
                    <input type="checkbox" className="jb-checkbox" />
                  </div>
                </div>
                <div className="jb-contractor-item">
                  <div className="jb-flex-row">
                    <img src='public/archer.jpg' className="jb-avatar-sm" alt="C" />
                    <div className="jb-c-info">
                      <p className="jb-c-name">Archer McCorkindale</p>
                      <p className="jb-c-loc">Parramatta, Blacktown</p>
                    </div>
                    <input type="checkbox" className="jb-checkbox" />
                  </div>
                </div>
            </div>
            <button className="jb-btn-assign-main mt-24">
              Assign Selected Contractor <RiArrowRightUpLine size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- SUB-COMPONENT: BIDDING IN PROGRESS VIEW (IMAGE 2) ---
const BiddingInProgressView = ({ job, onBack }) => {
  return (
    <div className="jb-details-container animate-fade">
      <div className="jb-details-header">
        <button onClick={onBack} className="jb-back-btn"><RiArrowLeftLine size={20} /> <span>Homeowner Project Details</span></button>
      </div>
      <div className="jb-details-layout">
        <div className="jb-details-main">
          {/* Main Info Card (Same as above) */}
          <div className="jb-card jb-p-24">
             <div className="jb-profile-row">
                <img src="https://i.pravatar.cc/150?u=1" alt="Profile" className="jb-avatar" />
                <h3>{job.name}</h3>
                <div className="jb-status-tag jb-tag-open">Open For Bids</div>
             </div>
             {/* ... Accordion sections ... */}
          </div>
          
          <div className="jb-quote-placeholder mt-24">
             <div className="jb-quote-box">
                <h3>Waiting for Contractor Quotes</h3>
                <p>We're currently collecting quotes from trusted contractors.</p>
             </div>
          </div>
        </div>
        
        <div className="jb-details-side">
          <div className="jb-card jb-p-24">
            <h2 className="jb-section-title">Contractor Assignment</h2>
            <div className="jb-contractor-list">
              {['Toby Adamson', 'Angus Klein'].map((name, i) => (
                <div key={i} className="jb-contractor-item assigned">
                   <p className="jb-c-name">{name}</p>
                   <span className="jb-assigned-status">Assigned</span>
                </div>
              ))}
            </div>
            <button className="jb-btn-disabled mt-24">Assign Selected Contractor <RiArrowRightUpLine size={16} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- SUB-COMPONENT: BID ACCEPTED VIEW (IMAGE 3) ---
const BidAcceptedView = ({ job, onBack }) => {
  return (
    <div className="jb-details-container animate-fade">
      <div className="jb-details-header">
        <button onClick={onBack} className="jb-back-btn"><RiArrowLeftLine size={20} /> <span>Homeowner Project Details</span></button>
      </div>
      <div className="jb-details-layout">
        <div className="jb-details-main">
           <div className="jb-card jb-p-24">
              <div className="jb-profile-row">
                <img src="https://i.pravatar.cc/150?u=1" alt="Profile" className="jb-avatar" />
                <h3>{job.name}</h3>
                <div className="jb-status-tag jb-tag-awarded">Job Awarded</div>
              </div>
           </div>
        </div>
        <div className="jb-details-side">
           <div className="jb-card jb-p-24 jb-award-card">
              <h2 className="jb-section-title">Contractor Manager Details</h2>
              <div className="jb-flex-row mt-16">
                 <img src="https://i.pravatar.cc/150?u=9" className="jb-avatar" alt="C" />
                 <div>
                    <h4>John Smith Roofing Co.</h4>
                    <p className="jb-text-dim">john@roofsmith.com</p>
                 </div>
              </div>
              <div className="jb-proposal-msg mt-16">
                 <p>Hi, thank you for providing your roof details. Based on the information shared...</p>
              </div>
              <div className="jb-price-row mt-16">
                 <span>Final Bid Amount</span>
                 <span className="jb-price-tag">AUD $18,500</span>
              </div>
              <button className="jb-btn-assign mt-24">Proposal Details <RiArrowRightUpLine size={16} /></button>
           </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---
const JobBidding = () => {
  const [activeTab, setActiveTab] = useState('Awaiting Assignment');
  const [searchQuery, setSearchQuery] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedJob, setSelectedJob] = useState(null);

  const jobsData = [
    { id: '#H001', name: 'Michael Turner', address: '22 George St, Sydney NSW 2000', date: '15-03-2025', area: '140 m²', status: 'Awaiting Assignment' },
    { id: '#H002', name: 'James Burfitt', address: '458 Ocean Ave, Bondi, NSW 2026', date: '15-03-2025', area: '140 m²', contractor: 'Jai Dunshea', status: 'Bid Accepted' },
    { id: '#H003', name: 'Michael Turner', address: '22 George St, Sydney NSW 2000', date: '15-03-2025', area: '140 m²', assignedCount: 5, status: 'Bidding In Progress' },
  ];

  const filteredJobs = useMemo(() => {
    return jobsData.filter(job => {
      const matchesTab = job.status === activeTab;
      const matchesSearch = job.name.toLowerCase().includes(searchQuery.toLowerCase()) || job.id.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  useEffect(() => { setCurrentPage(1); }, [searchQuery, activeTab, itemsPerPage]);

  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);
  const visibleData = filteredJobs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages === 0) return [1];
    let start = Math.max(1, currentPage - 1);
    let end = Math.min(totalPages, start + 2);
    if (end - start < 2) start = Math.max(1, end - 2);
    for (let i = start; i <= end; i++) if (i > 0) pages.push(i);
    return pages;
  };

  // --- RENDER TOGGLE LOGIC ---
  if (selectedJob) {
    if (selectedJob.status === 'Awaiting Assignment') return <AwaitingAssignmentView job={selectedJob} onBack={() => setSelectedJob(null)} />;
    if (selectedJob.status === 'Bidding In Progress') return <BiddingInProgressView job={selectedJob} onBack={() => setSelectedJob(null)} />;
    if (selectedJob.status === 'Bid Accepted') return <BidAcceptedView job={selectedJob} onBack={() => setSelectedJob(null)} />;
  }

  return (
    <div className='jb-container animate-fade'>
      <h1 className="jb-page-title">Job & Bidding</h1>
      <div className="jb-card">
        <div className="jb-tabs">
          {['Awaiting Assignment', 'Bidding In Progress', 'Bid Accepted'].map(tab => (
            <button key={tab} className={`jb-tab-btn ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>{tab}</button>
          ))}
        </div>

        <div className="jb-controls">
          <div className="jb-show-entries">
            <span>Show</span>
            <select value={itemsPerPage} onChange={(e) => setItemsPerPage(Number(e.target.value))} className="jb-dropdown">
              <option value={5}>5</option><option value={10}>10</option>
            </select>
          </div>
          <div className="jb-search-box">
            <RiSearchLine size={18} className="jb-search-icon" />
            <input type="text" placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="jb-search-input" />
          </div>
        </div>

        <div className="jb-table-wrapper">
          <table className="jb-table">
            <thead>
              <tr>
                <th>Job ID</th><th>Homeowner Name</th><th>Address</th><th>Request Date</th><th>Roof Area</th>
                {activeTab === 'Bidding In Progress' && <th>Contractor Assigned</th>}
                {activeTab === 'Bid Accepted' && <th>Contractor Name</th>}
                <th>Status</th><th>Action</th>
              </tr>
            </thead>
            <tbody>
              {visibleData.map((job) => (
                <tr key={job.id}>
                  <td className="jb-text-dim">{job.id}</td>
                  <td className="jb-font-bold">{job.name}</td>
                  <td className="jb-address-cell">{job.address}</td>
                  <td>{job.date}</td>
                  <td>{job.area}</td>
                  {activeTab === 'Bidding In Progress' && <td>{job.assignedCount}</td>}
                  {activeTab === 'Bid Accepted' && <td>{job.contractor}</td>}
                  <td><span className={`jb-status-pill ${activeTab.toLowerCase().replace(/\s+/g, '-')}`}>{job.status}</span></td>
                  <td><button className="jb-btn-view" onClick={() => setSelectedJob(job)}>View Details <RiArrowRightUpLine size={16} /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="jb-pagination">
          <button className="jb-pagi-arrow" onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}><RiArrowLeftSLine size={20} /></button>
          {getPageNumbers().map(n => (<button key={n} className={`jb-pagi-num ${currentPage === n ? 'active' : ''}`} onClick={() => setCurrentPage(n)}>{n}</button>))}
          <button className="jb-pagi-arrow" onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages || 1))}><RiArrowRightSLine size={20} /></button>
        </div>
      </div>
    </div>
  );
};

export default JobBidding;