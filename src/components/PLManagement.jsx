import React from 'react';
import { RiArrowRightUpLine } from '@remixicon/react';
import '../Styles/Admin.css'; // Ensure paths match your project

const PLManagement = () => {
  return (
    <div className="da-plm-main-container animate-fade">
      <h1 className="da-plm-page-title">Pricing Logic Management</h1>

      <div className="da-plm-content-card">
        
        {/* --- Material Rate Section --- */}
        <section className="da-plm-section">
          <h3 className="da-plm-section-title">Material Rate (per m²)</h3>
          <p className="da-plm-section-desc">Admin can edit material rates based on different roofing types.</p>
          <div className="da-plm-grid-4">
            <RateInput label="Slate" value="$70" unit="/m²" />
            <RateInput label="Concrete Tile" value="$70" unit="/m²" />
            <RateInput label="Premium" value="$70" unit="/m²" />
            <RateInput label="Flat/ Membrane" value="$70" unit="/m²" />
            <RateInput label="Metal" value="$70" unit="/m²" />
            <RateInput label="Asphalt Shingle" value="$70" unit="/m²" />
          </div>
        </section>

        {/* --- Pitch Multipliers Section --- */}
        <section className="da-plm-section">
          <h3 className="da-plm-section-title">Pitch Multipliers</h3>
          <p className="da-plm-section-desc">Admin can set multipliers for different roof pitches.</p>
          <div className="da-plm-grid-4">
            <SimpleInput label="Low Pitch" value="1.0x" />
            <SimpleInput label="Normal" value="1.2x" />
            <SimpleInput label="Steep" value="1.5x" />
            <SimpleInput label="Flat" value="1.5x" />
          </div>
        </section>

        {/* --- Complexity Multipliers Section --- */}
        <section className="da-plm-section">
          <h3 className="da-plm-section-title">Complexity Multipliers</h3>
          <p className="da-plm-section-desc">Admin can set complexity multipliers for different roof complexity levels.</p>
          <div className="da-plm-grid-3">
            <SimpleInput label="Simple" value="1.0x" />
            <SimpleInput label="Medium" value="1.2x" />
            <SimpleInput label="Complex" value="1.4x" />
          </div>
        </section>

        {/* --- Scaffolding Cost Section --- */}
        <section className="da-plm-section">
          <h3 className="da-plm-section-title">Scaffolding Cost Logic</h3>
          <p className="da-plm-section-desc">Admin can define the scaffolding cost for different building story types.</p>
          <div className="da-plm-grid-4">
            <SimpleInput label="1 Story" value="$1,000" />
            <SimpleInput label="2 Story" value="$2,000" />
            <SimpleInput label="3 Story" value="$3,000" />
            <SimpleInput label="4 Story" value="$4,000" />
          </div>
        </section>

        {/* --- Cost & Estimate Settings --- */}
        <section className="da-plm-section">
          <h3 className="da-plm-section-title">Cost & Estimate Settings</h3>
          <p className="da-plm-section-desc">allows the admin to set the fixed setup cost and margin of error (estimate range) to be applied in quotes.</p>
          <div className="da-plm-grid-2">
            <SimpleInput label="Fixed Setup Base Cost" value="$4,000" />
            <SimpleInput label="Estimate Range Margin" value="10%" />
          </div>
        </section>

        {/* --- Footer Buttons --- */}
        <div className="da-plm-actions">
          <button className="da-plm-btn-save">
            Save Changes <RiArrowRightUpLine size={18} />
          </button>
          <button className="da-plm-btn-cancel">
            Cancel <RiArrowRightUpLine size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

// Sub-components for cleaner code
const RateInput = ({ label, value, unit }) => (
  <div className="da-plm-input-group">
    <label>{label}</label>
    <div className="da-plm-input-wrapper">
      <input type="text" defaultValue={value} />
      <span className="da-plm-unit-badge">{unit}</span>
    </div>
  </div>
);

const SimpleInput = ({ label, value }) => (
  <div className="da-plm-input-group">
    <label>{label}</label>
    <input type="text" defaultValue={value} className="da-plm-basic-input" />
  </div>
);

export default PLManagement;