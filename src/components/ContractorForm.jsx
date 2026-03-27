// eslint-disable react-hooks/exhaustive-deps 
import React, { useState } from 'react';
import { RiArrowRightUpLine, RiCloseCircleFill, RiUserLine } from '@remixicon/react';

const ContractorForm = () => {
  // --- STATE FOR UPLOADS ---
  const [profileImg, setProfileImg] = useState(null);
  const [licenseDoc, setLicenseDoc] = useState(null);
  const [insuranceDoc, setInsuranceDoc] = useState(null);
  const [workPhotos, setWorkPhotos] = useState([]);

  // --- HANDLERS ---
  const handleProfileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImg(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleDocChange = (e, setter) => {
    if (e.target.files && e.target.files[0]) {
      setter(e.target.files[0].name);
    }
  };

  const handleWorkPhotosChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setWorkPhotos((prev) => prev.concat(filesArray));
    }
  };

  const removePhoto = (index) => {
    setWorkPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    console.log("Form submitted");
  };

  return (
    <div className="onboarding-page">
      {/* Banner Section */}
      <div className="onboarding-banner">
        <h1>Contractor Onboarding Form</h1>
        <p>We're reviewing your project details to match you with the right contractors. You'll receive your Project ID and secure login credentials via email shortly.</p>
      </div>

      <div className="form-container">
        <form className="onboarding-form" onSubmit={handleSubmit}>
          
          {/* Section: Personal Information */}
          <section className="form-section">
            <h3 className="section-title">Personal Information</h3>
            
            <div className="profile-upload">
              <label htmlFor="avatar-input" className="avatar-wrapper">
                {profileImg ? (
                  <img src={profileImg} alt="Profile" className="avatar-img" />
                ) : (
                  <div className="avatar-placeholder">
                    <RiUserLine size={40} color="#ccc" />
                    <span>Upload</span>
                  </div>
                )}
                <input 
                  type="file" 
                  id="avatar-input" 
                  accept="image/*" 
                  onChange={handleProfileChange} 
                  hidden 
                />
              </label>
            </div>

            <div className="form-row">
              <div className="input-group">
                <label>Full Name</label>
                <input type="text" placeholder="e.g., Jane Smith" />
              </div>
              <div className="input-group">
                <label>Mobile Number</label>
                <input type="tel" id="phone" placeholder="e.g., +61 400 123 456" pattern="[1-9]{10}" maxLength="10" required />
              </div>
              <div className="input-group">
                <label>Email Address</label>
                <input type="email" id="email" placeholder="e.g., jane.smith@gmail.com" />
              </div>
            </div>

            <div className="input-group full-width">
              <label>Short Bio or Business Description</label>
              <textarea placeholder='e.g., "I’ve worked as a licensed roofer for over 12 years, specializing in tile-to-metal conversions."'></textarea>
            </div>

            <div className="form-row">
              <div className="input-group">
                <label>Roofing Licence Number</label>
                <input type="text" placeholder="e.g., NSW Lic #1234567C" />
              </div>
              <div className="input-group">
                <label>Upload Licence Document (PDF)</label>
                <label className="file-input-wrapper custom-file-cursor">
                  <span className="btn-file">Choose File</span>
                  <span className="file-name">{licenseDoc || "No file chosen"}</span>
                  <input 
                    type="file" 
                    accept="application/pdf" 
                    onChange={(e) => handleDocChange(e, setLicenseDoc)} 
                    hidden 
                  />
                </label>
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <label>Insurance Policy Number</label>
                <input type="text" placeholder="e.g., GBE #9876543" />
              </div>
              <div className="input-group">
                <label>Upload Insurance Certificate (PDF)</label>
                <label className="file-input-wrapper custom-file-cursor">
                  <span className="btn-file">Choose File</span>
                  <span className="file-name">{insuranceDoc || "No file chosen"}</span>
                  <input 
                    type="file" 
                    accept="application/pdf" 
                    onChange={(e) => handleDocChange(e, setInsuranceDoc)} 
                    hidden 
                  />
                </label>
              </div>
            </div>
          </section>

          {/* Section: Work Preferences */}
          <section className="form-section">
            <h3 className="section-title">Work Preferences</h3>
            <div className="form-row">
              <div className="input-group flex-2">
                <label>Suburbs or Regions You Serve</label>
                <input type="text" placeholder="e.g., Bondi, Liverpool, Penrith" />
              </div>
              <div className="input-group flex-1">
                <label>Years of Roofing Experience</label>
                <input type="text" placeholder="e.g., 10" />
              </div>
            </div>

            <div className="input-group full-width">
              <label>Roofing Services You Offer<span className="required">*</span></label>
              <div className="checkbox-grid">
                {['Roof Replacements', 'Roof Repairs', 'Gutter Repairs', 'Skylight Installation', 'Roof Painting', 'Leak Inspections'].map((service) => (
                  <label key={service} className="checkbox-item">
                    <input type="checkbox" />
                    <span>{service}</span>
                  </label>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Past Work Photos */}
          <section className="form-section">
            <h3 className="section-title">Upload Past Work Photos</h3>
            <p className="section-subtitle">Gallery Photos (Front, Back Areas)</p>
            
            <div className="gallery-upload-wrapper">
                <label className="file-input-wrapper custom-upload custom-file-cursor">
                  <span className="btn-orange-file">Choose Files</span>
                  <span className="file-name">{workPhotos.length > 0 ? `${workPhotos.length} photos selected` : "No photos chosen"}</span>
                  <input 
                    type="file" 
                    multiple 
                    accept="image/*" 
                    onChange={handleWorkPhotosChange} 
                    hidden 
                  />
                </label>
            </div>

            <div className="image-gallery">
              {workPhotos.map((url, i) => (
                <div key={i} className="gallery-card animate-fade">
                  <img src={url} alt="Work" />
                  <RiCloseCircleFill 
                    className="remove-img-icon" 
                    size={20} 
                    onClick={() => removePhoto(i)} 
                  />
                </div>
              ))}
            </div>
          </section>

          <div className="form-footer">
            <label className="checkbox-item terms">
              <input type="checkbox" />
              <span>I confirm that all information provided is accurate and I agree to the platform's terms and conditions.</span>
            </label>
            <button type="submit" className="btn-submit" >
              Submit Application <RiArrowRightUpLine size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContractorForm;