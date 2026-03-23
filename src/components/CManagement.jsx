import React, { useState, useMemo } from 'react';
import { 
  RiArrowRightUpLine, RiSearchLine, RiArrowLeftSLine, RiArrowRightSLine,RiArrowLeftLine,RiDeleteBin6Fill, RiCloseLine, RiStarFill, RiCameraFill, RiUploadCloud2Line
} from '@remixicon/react';

const CManagement = () => {
  // --- STATES ---
  const [itemsPerPage, setItemsPerPage] = useState(10); 
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedContractor, setSelectedContractor] = useState(null);
  const [activeTab, setActiveTab] = useState('About the Contractor');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(0);

  // --- MOCK DATA ---
  const [contractors] = useState([
    { id: '#L1001', name: 'Samantha Hollick', mobile: '937-304-8161', email: 'JasperCanning@dayrep.com', suburbs: 'Parramatta, Blacktown', date: '20-04-2025', status: 'Active', license: 'NSW-ROOF-8823', qualification: 'Certified Construction' },
    { id: '#L1002', name: 'Michael Turner', mobile: '0402 888 777', email: 'm.turner@roofing.au', suburbs: 'Liverpool, Campbelltown', date: '20-04-2025', status: 'Pending', license: 'NSW-ROOF-1122', qualification: 'Master Roofer' },
    { id: '#L1003', name: 'Julie Martin', mobile: '0433 222 111', email: 'j.martin@serv.com', suburbs: 'Ryde, Epping', date: '21-04-2025', status: 'Pending' },
    { id: '#L1004', name: 'Rahul Singh', mobile: '0401 567 891', email: 'r.singh@serv.com', suburbs: 'Strathfield, Burwood', date: '21-04-2025', status: 'Pending' },
    { id: '#L1005', name: 'Sarah O’Connor', mobile: '0411 333 222', email: 's.oconnor@serv.com', suburbs: 'Penrith, Mt Druitt', date: '21-04-2025', status: 'Pending' },
    // Add more mock data here to test the 3-button sliding pagination
  ]);

  const [reviewList, setReviewList] = useState([
    { name: 'Eunice J. Williams', text: 'The team was punctual, professional, and finished the project before deadline. Everything was cleaned up nicely.', stars: 4.7 },
    { name: 'Nancy N. Ellis', text: 'Fantastic job overall. They followed the quote and maintained good workmanship. Highly recommend.', stars: 4.7 },
    { name: 'James R. Okelly', text: 'Work was well done and priced fairly. Solid results as promised.', stars: 4.7 },
  ]);

  // --- PAGINATION CALCULATIONS ---
  const { visibleContractors, totalPages, pageNumbers } = useMemo(() => {
    const total = Math.ceil(contractors.length / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage;
    const visible = contractors.slice(start, start + itemsPerPage);
    
    let sPage = Math.max(1, currentPage - 1);
    let ePage = Math.min(total, sPage + 2);
    if (ePage - sPage < 2) sPage = Math.max(1, ePage - 2);
    
    const nums = [];
    for (let i = sPage; i <= ePage; i++) { if (i > 0) nums.push(i); }
    return { visibleContractors: visible, totalPages: total, pageNumbers: nums };
  }, [currentPage, itemsPerPage, contractors]);

  // --- MODAL SUBMIT ---
  const handleAddReview = (e) => {
    e.preventDefault();
    const newReview = {
      name: e.target.fullname.value,
      text: e.target.message.value,
      stars: rating || 5.0
    };
    setReviewList([newReview, ...reviewList]);
    setIsModalOpen(false);
    setRating(0);
  };

  // --- TAB RENDERERS ---
  const renderAboutTab = (data) => (
    <div className="da-cm-tab-pane animate-fade">
      <p className="da-cm-bio-text">
        {data.name} is a certified roofing specialist operating across the Sydney metropolitan area, with a strong presence in areas like Parramatta, Blacktown, and Penrith. With more than 7 years of industry experience, John is known for his reliable service.
      </p>
      <h3 className="da-cm-section-subtitle">Licences & Insurance</h3>
      <div className="da-cm-licence-grid">
        <div className="da-cm-lic-item"><label>Contractor Licence Number:</label><span>{data.license || 'N/A'}</span></div>
        <div className="da-cm-lic-item"><label>Trade Qualification:</label><span>{data.qualification || 'N/A'}</span></div>
        <div className="da-cm-lic-item"><label>Public Liability Insurance:</label><span>Yes</span></div>
      </div>
      <div className="da-cm-gallery-header">
        <h3 className="da-cm-section-title">Project Gallery</h3>
        <button className="da-cm-btn-orange">Upload Image <RiUploadCloud2Line size={18} /></button>
      </div>
      <div className="da-cm-gallery-grid">
          <div className="da-cm-gallery-item">
            <img src='public/roofie1.jpg' alt='work' />
            <button className="da-cm-gallery-del"><RiDeleteBin6Fill /></button>
          </div>
          <div className="da-cm-gallery-item">
            <img src='public/roofie2.jpg' alt='work' />
            <button className="da-cm-gallery-del"><RiDeleteBin6Fill /></button>
          </div>
          <div className="da-cm-gallery-item">
            <img src='public/roofie3.jpg' alt='work' />
            <button className="da-cm-gallery-del"><RiDeleteBin6Fill /></button>
          </div>
          <div className="da-cm-gallery-item">
            <img src='public/roofie4.jpg' alt='work' />
            <button className="da-cm-gallery-del"><RiDeleteBin6Fill /></button>
          </div>
          <div className="da-cm-gallery-item">
            <img src='public/roofie5.jpg' alt='work' />
            <button className="da-cm-gallery-del"><RiDeleteBin6Fill /></button>
          </div>
          <div className="da-cm-gallery-item">
            <img src='public/roofie6.jpg' alt='work' />
            <button className="da-cm-gallery-del"><RiDeleteBin6Fill /></button>
          </div>
          <div className="da-cm-gallery-item">
            <img src='public/roofie7.jpg' alt='work' />
            <button className="da-cm-gallery-del"><RiDeleteBin6Fill /></button>
          </div>
          <div className="da-cm-gallery-item">
            <img src='public/roofie8.jpg' alt='work' />
            <button className="da-cm-gallery-del"><RiDeleteBin6Fill /></button>
          </div>
          <div className="da-cm-gallery-item">
            <img src='public/roofie9.jpg' alt='work' />
            <button className="da-cm-gallery-del"><RiDeleteBin6Fill /></button>
          </div>
      </div>
    </div>
  );

  const renderReviewsTab = () => (
    <div className="da-cm-tab-pane animate-fade">
      <div className="da-cm-tab-header">
        <button className="da-cm-btn-orange" onClick={() => setIsModalOpen(true)}>
          Add Contractor Reviews <RiArrowRightUpLine size={18} />
        </button>
      </div>
      <div className="da-cm-reviews-grid">
        {reviewList.map((rev, i) => (
          <div key={i} className="da-cm-review-card">
            <button className="da-cm-card-del">×</button>
            <div className="da-cm-rev-user">
              <img src={`https://i.pravatar.cc/150?u=${rev.name}`} alt="user" />
              <div>
                <h4>{rev.name}</h4>
                <div className="da-cm-stars">⭐⭐⭐⭐⭐ <span>{rev.stars}</span></div>
              </div>
            </div>
            <p className="da-cm-rev-text">{rev.text}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDocumentsTab = () => (
    <div className="da-cm-tab-pane animate-fade">
      <div className="da-cm-tab-header">
        <button className="da-cm-btn-orange">Add Documents <RiArrowRightUpLine size={18} /></button>
      </div>
      <div className="da-cm-docs-list">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="da-cm-doc-card">
             <button className="da-cm-card-del">×</button>
             <div className="da-cm-doc-info">
               <div className="da-cm-pdf-icon">PDF</div>
               <div><h4>RooferCoinsurance.pdf</h4><p>Public Liability Insurance</p></div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );

  // --- MAIN CONDITIONAL RENDER ---
  if (selectedContractor) {
    return (
      <div className="da-cm-profile-container animate-fade">
        {isModalOpen && (
          <div className="da-cm-modal-overlay">
            <div className="da-cm-modal-card animate-slide-up">
              <div className="da-cm-modal-header">
                <h3>Add Contractor Reviews</h3>
                <button className="da-cm-modal-close" onClick={() => setIsModalOpen(false)}><RiCloseLine size={24}/></button>
              </div>
              <form className="da-cm-modal-body" onSubmit={handleAddReview}>
                <div className="da-cm-modal-photo-upload">
                  <div className="da-cm-photo-preview">
                    <img src="/dashboard1-profile.png" alt="preview" /><div className="da-cm-photo-badge"><RiCameraFill size={14}/></div>
                  </div>
                  <p>Profile Photo Upload</p>
                </div>
                <div className="da-cm-star-rating">
                  {[1, 2, 3, 4, 5].map(s => <RiStarFill key={s} size={28} className={s <= rating ? 'star-active' : 'star-inactive'} onClick={() => setRating(s)}/>)}
                </div>
                <div className="da-cm-modal-input-group"><label>Full Name</label><input name="fullname" type="text" defaultValue={selectedContractor.name} /></div>
                <div className="da-cm-modal-input-group"><label>Review Message</label><textarea name="message" placeholder="Write review here..." rows="4" required></textarea></div>
                <button type="submit" className="da-cm-btn-submit">Add Reviews <RiArrowRightUpLine size={20}/></button>
              </form>
            </div>
          </div>
        )}

        <div className="da-cm-profile-header">
          <button className="da-cm-back-btn" onClick={() => setSelectedContractor(null)}><RiArrowLeftLine size={20}/></button>
          <h1 className="da-cm-page-title" style={{margin:0}}>Contractor Profile</h1>
        </div>

        <div className="da-cm-profile-card">
          <div className="da-cm-prof-top">
            <div className="da-cm-prof-identity">
              <img src="/dashboard1-profile.png" alt="Avatar" className="da-cm-prof-avatar" />
              <div className="da-cm-prof-name-block">
                <h2 className="da-cm-prof-name">{selectedContractor.name}</h2>
                <div className="da-cm-prof-sub-info">
                  <span className="da-cm-verified"><img src='/Vector.png' alt='verify' />Verified Contractor</span>
                  <span className="da-cm-verified"><img src='/mail_ic.png' alt='mail' />{selectedContractor.email}</span>
                  <span className="da-cm-verified"><img src='/Call_ic.png' alt='call' />{selectedContractor.mobile}</span>
                </div>
              </div>
            </div>
            <button className="da-cm-btn-orange">Edit Contractor Profile <RiArrowRightUpLine size={18}/></button>
          </div>

          <div className="da-cm-tabs">
            {['About the Contractor', 'Contractor Reviews', 'Documents'].map(tab => (
              <button key={tab} className={`da-cm-tab-btn ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>{tab}</button>
            ))}
          </div>

          <div className="da-cm-tab-content">
            {activeTab === 'About the Contractor' && renderAboutTab(selectedContractor)}
            {activeTab === 'Contractor Reviews' && renderReviewsTab()}
            {activeTab === 'Documents' && renderDocumentsTab()}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="da-cm-main-container animate-fade">
      <h1 className="da-cm-page-title">Contractor Management</h1>
      <div className="da-cm-content-card">
        <div className="da-cm-controls-row">
          <div className="da-cm-entries-select"><span>Show</span>
            <select className="da-cm-dropdown" value={itemsPerPage} onChange={(e) => {setItemsPerPage(Number(e.target.value)); setCurrentPage(1);}}>
              <option value={5}>5</option><option value={10}>10</option><option value={25}>25</option>
            </select>
          </div>
          <div className="da-cm-search-box"><RiSearchLine size={18} className="da-cm-search-icon"/><input type="text" placeholder="Search" className="da-cm-input" /></div>
        </div>
        <div className="da-cm-table-wrapper">
          <table className="da-cm-table">
            <thead><tr><th>ID</th><th>Name</th><th>Mobile</th><th>Suburbs</th><th>Date</th><th>Status</th><th>Action</th></tr></thead>
            <tbody>
              {visibleContractors.map((item, idx) => (
                <tr key={idx}>
                  <td className="da-cm-id-text">{item.id}</td><td className="da-cm-name-text">{item.name}</td><td>{item.mobile}</td><td>{item.suburbs}</td><td>{item.date}</td>
                  <td><span className={item.status === 'Active' ? 'da-cm-pill-active' : 'da-cm-pill-pending'}>{item.status}</span></td>
                  <td><button className="da-cm-btn-action" onClick={() => setSelectedContractor(item)}>View Details <RiArrowRightUpLine size={16}/></button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="da-cm-pagination-footer">
            <button className="da-cm-pagi-btn" onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1}><RiArrowLeftSLine/></button>
            {pageNumbers.map(n => <button key={n} className={`da-cm-pagi-btn ${currentPage === n ? 'da-cm-pagi-active' : ''}`} onClick={() => setCurrentPage(n)}>{n}</button>)}
            <button className="da-cm-pagi-btn" onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}><RiArrowRightSLine/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CManagement;