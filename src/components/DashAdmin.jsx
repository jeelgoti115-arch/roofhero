import React, { useState } from 'react';
import { 
  RiArrowRightUpLine, 
  RiArrowLeftSLine, 
  RiArrowRightSLine,
  RiArrowLeftLine,
  RiDownload2Line,
  RiArrowUpSLine,
  RiArrowDownSLine,
} from '@remixicon/react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, BarChart, Bar 
} from 'recharts';

// --- MOCK DATA ---
const jobLeadsData = [
  { name: 'Jan', value: 15 }, { name: 'Feb', value: 25 }, { name: 'Mar', value: 18 },
  { name: 'Apr', value: 70 }, { name: 'May', value: 35 }, { name: 'Jun', value: 50 },
  { name: 'Jul', value: 45 }, { name: 'Aug', value: 40 }, { name: 'Sep', value: 95 },
  { name: 'Oct', value: 25 }, { name: 'Nov', value: 65 }, { name: 'Dec', value: 60 },
];

const contractorsData = [
  { name: 'Jan', value: 35 }, { name: 'Feb', value: 25 }, { name: 'Mar', value: 18 },
  { name: 'Apr', value: 45 }, { name: 'May', value: 75 }, { name: 'Jun', value: 30 },
  { name: 'Jul', value: 50 }, { name: 'Aug', value: 15 }, { name: 'Sep', value: 40 },
  { name: 'Oct', value: 75 }, { name: 'Nov', value: 30 }, { name: 'Dec', value: 35 },
];

// --- CUSTOM TOOLTIPS ---
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="da-custom-tooltip">
        <p className="da-tooltip-label">{`${label} 2024`}</p>
        <div className="da-tooltip-value">
          <span className="da-tooltip-dot"></span>
          <p>Job Leads : <strong>{payload[0].value}</strong></p>
        </div>
      </div>
    );
  }
  return null;
};

const CustomBarTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="da-custom-tooltip">
        <p className="da-tooltip-label">{`${label} 2024`}</p>
        <div className="da-tooltip-value">
          <span className="da-tooltip-dot da-dot-dark"></span>
          <p>Contractors : <strong>{payload[0].value * 4}</strong></p> 
        </div>
      </div>
    );
  }
  return null;
};

const DashAdmin = () => {
  // --- STATE ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [selectedContractor, setSelectedContractor] = useState(null);
  const [activeAccordion, setActiveAccordion] = useState('document');

  const tableData = [
    { id: '#L1001', name: 'Michael Turner', mobile: '+61 400 123 456', email: 'michael.t@gmail.com', suburbs: 'Parramatta, Blacktown', date: '20-04-2025', status: 'Pending', bio: 'Michael Turner is a certified roofing specialist operating across the Sydney metropolitan area...' },
    { id: '#L1002', name: 'Jon Snow', mobile: '+61 400 987 654', email: 'jonsnow@winterfell.com', suburbs: 'Winterfell, The North', date: '20-04-2025', status: 'Pending' },
    { id: '#L1003', name: 'Julie Martin', mobile: '+61 400 555 111', suburbs: 'Liverpool, Fairfield', date: '21-04-2025', status: 'Pending' },
    { id: '#L1004', name: 'Rahul Singh', mobile: '+61 400 222 333', suburbs: 'Bankstown, Strathfield', date: '21-04-2025', status: 'Pending' },
    { id: '#L1005', name: 'Sarah O’Connor', mobile: '+61 400 444 888', suburbs: 'Campbelltown, Camden', date: '21-04-2025', status: 'Pending' },
    { id: '#L1006', name: 'Mike Hollick', mobile: '+61 400 111 000', suburbs: 'Hurstville, Rockdale', date: '22-04-2025', status: 'Pending' },
    { id: '#L1007', name: 'Emma Watson', mobile: '+61 400 111 001', suburbs: 'Parramatta, Westmead', date: '22-04-2025', status: 'Pending' },
    { id: '#L1008', name: 'James Anderson', mobile: '+61 400 111 002', suburbs: 'Blacktown, Doonside', date: '22-04-2025', status: 'Active' },
  ];

  // --- PAGINATION LOGIC ---
  const totalPages = Math.ceil(tableData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = tableData.slice(indexOfFirstItem, indexOfLastItem);

  let startPage = Math.max(1, currentPage - 1);
  let endPage = Math.min(totalPages, startPage + 2);
  if (endPage - startPage < 2) startPage = Math.max(1, endPage - 2);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) { pageNumbers.push(i); }

  // --- PROFILE VIEW ---
  if (selectedContractor) {
    return (
      <div className="da-main-content animate-fade">
        <div className="da-profile-header">
          <button className="da-back-btn" onClick={() => setSelectedContractor(null)}>
            <RiArrowLeftLine size={20} />
          </button>
          <h1 className="da-page-title" style={{margin: 0}}>Contractor Profile Request</h1>
        </div>

        <div className="da-profile-card">
          <h3 className="da-card-title">Personal Information</h3>
          
          <div className="da-personal-info-grid">
            <div className="da-avatar-section">
              <img src="/dashboard1-profile.png" alt="Profile" className="da-large-avatar" />
            </div>
            <div className="da-info-inputs">
              <div className="da-input-group">
                <label>Full Name</label>
                <input type="text" value={selectedContractor.name} readOnly />
              </div>
              <div className="da-input-group">
                <label>Mobile Number</label>
                <input type="text" value={selectedContractor.mobile} readOnly />
              </div>
              <div className="da-input-group">
                <label>Email Address</label>
                <input type="text" value={selectedContractor.email || "No Email Peovided"} readOnly />
              </div>
            </div>
          </div>

          <div className="da-bio-section">
            <label>Short Bio or Business Description</label>
            <textarea readOnly value={selectedContractor.bio || "No bio description provided."} />
          </div>

          <div className="da-accordion">
            {/* 1. DOCUMENT */}
            <div className={`da-accordion-item ${activeAccordion === 'document' ? 'open' : ''}`}>
              <div className="da-accordion-header" onClick={() => setActiveAccordion(activeAccordion === 'document' ? '' : 'document')}>
                <span>Document</span>
                <div className={`da-acc-icon-circle ${activeAccordion === 'document' ? 'active' : ''}`}>
                    {activeAccordion === 'document' ? <RiArrowUpSLine size={20}/> : <RiArrowDownSLine size={20}/>}
                </div>
              </div>
              {activeAccordion === 'document' && (
                <div className="da-accordion-body">
                  <div className="da-doc-grid">
                    <div className="da-input-group">
                      <label>Roofing Licence Number</label>
                      <input type="text" value="NSW Lic #234567C" readOnly />
                    </div>
                    <div className="da-input-group">
                      <label>Full Name</label>
                      <input type="text" value={selectedContractor.name} readOnly />
                    </div>
                  </div>
                  <div className="da-upload-list">
                    <div className="da-file-preview">
                      <span>upload_licence_document_25042025.pdf</span>
                      <RiDownload2Line size={20} className="da-download-icon" />
                    </div>
                    <div className="da-file-preview">
                      <span>upload_insurance_certificate_25042025.pdf</span>
                      <RiDownload2Line size={20} className="da-download-icon" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 2. WORK PREFERENCES */}
            <div className={`da-accordion-item ${activeAccordion === 'work' ? 'open' : ''}`}>
              <div className="da-accordion-header" onClick={() => setActiveAccordion(activeAccordion === 'work' ? '' : 'work')}>
                <span>Work Preferences</span>
                <div className={`da-acc-icon-circle ${activeAccordion === 'work' ? 'active' : ''}`}>
                    {activeAccordion === 'work' ? <RiArrowUpSLine size={20}/> : <RiArrowDownSLine size={20}/>}
                </div>
              </div>
              {activeAccordion === 'work' && (
                <div className="da-accordion-body">
                  <div className="da-doc-grid">
                     <div className="da-input-group">
                        <label>Suburbs or Regions You Serve</label>
                        <input type="text" value="Bondi, Liverpool, Penrith" readOnly />
                     </div>
                     <div className="da-input-group">
                        <label>Years of Roofing Experience</label>
                        <input type="text" value="10" readOnly />
                     </div>
                  </div>
                  <div className="da-services-offered">
                     <label className="da-label-bold">Roofing Services You Offer<span className="da-required">*</span></label>
                     <div className="da-checkbox-group">
                        <label><input type="checkbox" checked readOnly /> Roof Replacements</label>
                        <label><input type="checkbox" readOnly /> Roof Repairs</label>
                        <label><input type="checkbox" readOnly /> Gutter Repairs</label>
                        <label><input type="checkbox" readOnly /> Skylight Installation</label>
                        <label><input type="checkbox" readOnly /> Roof Painting</label>
                        <label><input type="checkbox" readOnly /> Leak Inspections</label>
                     </div>
                  </div>
                </div>
              )}
            </div>

            {/* 3. PHOTOS */}
            <div className={`da-accordion-item ${activeAccordion === 'photos' ? 'open' : ''}`}>
              <div className="da-accordion-header" onClick={() => setActiveAccordion(activeAccordion === 'photos' ? '' : 'photos')}>
                <span>Upload Past Work Photos</span>
                <div className={`da-acc-icon-circle ${activeAccordion === 'photos' ? 'active' : ''}`}>
                    {activeAccordion === 'photos' ? <RiArrowUpSLine size={20}/> : <RiArrowDownSLine size={20}/>}
                </div>
              </div>
              {activeAccordion === 'photos' && (
                <div className="da-accordion-body">
                  <label className="da-label-small">Gallery Photos (Front, Back Areas)</label>
                  <div className="da-custom-file-input">
                     <button className="da-choose-file-btn">Choose File</button>
                     <span className="da-file-name">No file chosen</span>
                  </div>
                  <div className="da-photo-gallery">
                     <div className="da-photo-item">
                        <img src="public/Rectangle-16-1.png" alt="1" />
                        <div className="da-photo-delete">×</div>
                     </div>
                     <div className="da-photo-item">
                        <img src="public/Rectangle-16-2.png" alt="2" />
                        <div className="da-photo-delete">×</div>
                     </div>
                     <div className="da-photo-item">
                        <img src="public/Rectangle-16-3.png" alt="3" />
                        <div className="da-photo-delete">×</div>
                     </div>
                  </div>
                  <div className="da-confirmation-check">
                     <input type="checkbox" checked readOnly />
                     <label>I confirm that all information provided is accurate and I agree to the platform's terms and conditions.</label>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="da-profile-footer">
            <button className="da-btn-approve">Approve Contractor <RiArrowRightUpLine size={18}/></button>
            <button className="da-btn-reject">Reject Application <RiArrowRightUpLine size={18}/></button>
          </div>
        </div>
      </div>
    );
  }

  // --- DASHBOARD VIEW ---
  return (
    <div className="da-main-content animate-fade">
      <h1 className="da-page-title">Admin Dashboard</h1>

      <div className="da-stats-grid">
        <div className="da-stat-card">
          <div className="da-stat-icon-circle da-bg-orange"><img src="/roofers.png" alt="icon" /></div>
          <div className="da-stat-info"><label className="da-label-muted">Total Contractors</label><h2 className="da-stat-number">120</h2></div>
        </div>
        <div className="da-stat-card">
          <div className="da-stat-icon-circle da-bg-orange"><img src="/homeowners.png" alt="icon" /></div>
          <div className="da-stat-info"><label className="da-label-muted">Total Homeowners</label><h2 className="da-stat-number">240</h2></div>
        </div>
        <div className="da-stat-card">
          <div className="da-stat-icon-circle da-bg-orange"><img src="/completeprojects.png" alt="icon" /></div>
          <div className="da-stat-info"><label className="da-label-muted">Complete Projects</label><h2 className="da-stat-number">20</h2></div>
        </div>
      </div>

      <div className="da-charts-container">
        <div className="da-chart-box">
          <h3 className="da-section-subtitle">Job Leads</h3>
          <div className="da-chart-visual">
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={jobLeadsData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs><linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#fa5a25" stopOpacity={0.3}/><stop offset="95%" stopColor="#fa5a25" stopOpacity={0}/></linearGradient></defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#999', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#676767', fontSize: 12}} tickFormatter={(v) => `$${v}k`} />
                <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#fa5a25', strokeWidth: 1 }} />
                <Area type="monotone" dataKey="value" stroke="#fa5a25" strokeWidth={3} fill="url(#colorVal)" activeDot={{ r: 6, stroke: '#fff', strokeWidth: 2, fill: '#fa5a25' }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="da-chart-box">
          <h3 className="da-section-subtitle">Contractors</h3>
          <div className="da-chart-visual">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={contractorsData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#676767', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#999', fontSize: 12}} tickFormatter={(v) => `$${v}k`} />
                <Tooltip content={<CustomBarTooltip />} cursor={{ fill: '#f9f9f9' }} />
                <Bar dataKey="value" fill="#122621" barSize={8} radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="da-table-section">
        <h3 className="da-section-subtitle">Contractor Onboarding Request</h3>
        <div className="da-table-card">
          <table className="da-admin-table">
            <thead>
              <tr><th>ID</th><th>Name</th><th>Mobile</th><th>Suburbs</th><th>Date</th><th>Status</th><th>Action</th></tr>
            </thead>
            <tbody>
              {currentData.map((row, index) => (
                <tr key={index}>
                  <td className="da-text-dim">{row.id}</td><td className="da-font-bold">{row.name}</td><td>{row.mobile}</td><td>{row.suburbs}</td><td>{row.date}</td><td><span className="da-pill-pending">{row.status}</span></td>
                  <td><button className="da-btn-view" onClick={() => setSelectedContractor(row)}>View Details <RiArrowRightUpLine size={16} /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="da-pagination">
            <button className="da-pagi-nav" onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1}><RiArrowLeftSLine/></button>
            {pageNumbers.map(n => <button key={n} className={`da-pagi-nav ${currentPage === n ? 'da-pagi-active' : ''}`} onClick={() => setCurrentPage(n)}>{n}</button>)}
            <button className="da-pagi-nav" onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}><RiArrowRightSLine/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashAdmin;