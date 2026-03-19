import { RiArrowRightUpLine } from '@remixicon/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ServiceCard9 = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleGetQuotes = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className='sc9-full-page-wrapper'>
      <div className={`sc9-card-container ${isSubmitted ? 'blur-bg' : ''}`}>
        <div className='sc9-header'>
          <h1>Where should we send your Roof Report and Contractor Quotes?</h1>
          <p>Your data is safe — just tell us where to send your report</p>
        </div>

        <form className='sc9-form' onSubmit={handleGetQuotes}>
          <div className='sc9-input-row'>
            <div className='sc9-input-group'>
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" placeholder="e.g., Sarah Walker" required />
            </div>
            <div className='sc9-input-group'>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="e.g., sarah.walker@email.com" required />
            </div>
          </div>

          <div className='sc9-input-row'>
            <div className='sc9-input-group single-col'>
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" placeholder="e.g., +61 400 123 456" required />
            </div>
          </div>

          <div className='sc9-footer'>
            <button type="submit" className='sc9-submit-btn'>
              Get My Quotes <RiArrowRightUpLine size={20} />
            </button>
          </div>
        </form>
      </div>

      {isSubmitted && (
        <div className='sc9-success-overlay'>
          <div className='sc9-success-modal'>
            <div className='success-icon-container'>
              <img src=" /success-envelope.svg" alt="Success Icon" className="success-icon" />
            </div>
            
            <h2>Thanks, You’re All Set!</h2>
            <p>
              We’re preparing your professional roofing report and matching you 
              with trusted local contractors.
            </p>

            <button className='return-home-btn' onClick={() => navigate('/homeowner')}>
              Return to Home <RiArrowRightUpLine size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ServiceCard9