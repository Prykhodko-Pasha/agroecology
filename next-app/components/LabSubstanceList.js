import React, { useState } from 'react';

export default function LabSubstanceList({ items }) {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (idx) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(idx)) {
        newSet.delete(idx);
      } else {
        newSet.add(idx);
      }
      return newSet;
    });
  };

  return (
    <ol className="substance__list">
      {items.map((item, idx) => (
        <li key={idx}>
          <p 
            className={`substance__item ${openItems.has(idx) ? 'is-open' : ''}`}
            onClick={() => toggleItem(idx)}
            style={{ cursor: 'pointer' }}
          >
            {item.title}
          </p>
          <div className="substance__item__desc">
            <p dangerouslySetInnerHTML={{ __html: item.description }} />
            <ul className="substance__sub-item">
              <div className="accreditation-logo">
                {item.accreditationLogos?.map((logo, i) => (
                  <img
                    key={i}
                    width="40px"
                    height="40px"
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                  />
                ))}
              </div>
              {item.standards?.map((std, i) => (
                <li key={i}>{std}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
} 