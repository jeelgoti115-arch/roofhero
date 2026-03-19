import { RiArrowRightUpLine } from '@remixicon/react';
import React, { useState } from 'react';

import r1 from '/r1.jpg';
import r2 from '/r2.jpg';
import r3 from '/r3.jpg';
import r4 from '/r4.jpg';
import r5 from '/r5.jpg';
import r6 from '/r6.jpg';

const ProposalDetails = () => {
  const galleryImages = [r1, r2, r3, r4, r5, r6];
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

  return (
    <div className="white-card-box">
      {/* Upper Section: Split into Content and Pricing */}
      <div className="proposal-split-layout">
        {/* Left Side: Text Content */}
        <div className="proposal-left">
          <h2 className="project-main-title">Roof Replacement – Bondi Beach</h2>
          <span className="project-serial">#RPH-2025-00123</span>
          
          <div className="description-wrap">
            <h4>Proposal Description</h4>
            <p>
              Thank you for the opportunity to quote on your roofing project at 27 Rosebay Street. 
              Based on the project scope and details provided, we recommend a complete tile-to-Colorbond 
              metal roof replacement. The materials we use are premium-grade, designed for durability 
              and resistance to harsh weather conditions.
            </p>
            <p>
              Our licensed and experienced team will start by safely removing the existing roof tiles. 
              We will thoroughly inspect the roof's substructure for any damage or weak spots, and 
              perform minor repairs if necessary. Once the base is secure, we will install the new 
              Colorbond roofing system with precision, ensuring a clean, weather-sealed finish.
            </p>
            <p>
              To ensure safety and cleanliness throughout the project, all required scaffolding and 
              site protection measures are included in the quote. Upon completion, we will perform 
              a full site cleanup, leaving your property neat and ready to enjoy your new roof.
            </p>
          </div>
        </div>

        {/* Right Side: Pricing Sidebar */}
        <div className="proposal-right-pricing">
          <div className="price-stack">
            <label>Quote Range Provided (Auto Estimate):</label>
            <span className="val-muted">$8,000 – $9,500 AUD</span>
          </div>
          <div className="price-stack highlight-green">
            <label>Final Quote Price</label>
            <span className="val-large-green">$26,000</span>
          </div>
          <div className="price-stack">
            <label>Price Per Square</label>
            <span className="val-bold">$143.3</span>
          </div>

          <button className="accept-quote-btn-lg">Accept Quote <RiArrowRightUpLine size={18} /></button>
          <button className="cancel-quote-link" onClick={() => setIsModalOpen(true)}>Cancel Quote</button>
        </div>
      </div>

      {/* Bottom Section: Full Width Gallery */}
      <div className="project-gallery-section">
        <h4 className="gallery-title">Project Images</h4>
        <div className="project-gallery-grid">
          {galleryImages.map((imgSrc, index) => (
          <img 
            key={index} 
            src={imgSrc} 
            alt={`Project ${index + 1}`} 
            className="gallery-thumb" ></img>
          ))}
        </div>
      </div>

      {/* --- SUCCESS MODAL OVERLAY --- */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-box">
            <div className="modal-icon-container">
               <img src=" /bidcard-qr.svg" alt="Success" />
            </div>
            <h2>Are you sure you want to reject this contractor?</h2>
            <p>
              If you reject this contractor, they will no longer be able to bid or work on your job. This action cannot be undone.
            </p>
            <div className='modal-btns'>
              <button className="modal-btn" onClick={() => setIsModalOpen(false)}>
                cancel
              </button>
              <button className="modal-btn">
              Yes, Reject Contractor <RiArrowRightUpLine size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProposalDetails;