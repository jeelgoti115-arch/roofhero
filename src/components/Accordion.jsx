import React, { useState } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from '@remixicon/react';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="accordion-wrapper">
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <h4>{title}</h4>
        <div className={`arrow-circle ${isOpen ? 'active' : ''}`}>
          {isOpen ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
        </div>
      </div>
      {isOpen && <div className="accordion-body">{children}</div>}
    </div>
  );
};

export default Accordion;