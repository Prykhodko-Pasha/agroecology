import React from 'react';

export default function LabSubstanceList({ items }) {
  return (
    <ol className="substance__list">
      {items.map((item, idx) => (
        <li key={idx}>
          <p className="substance__item">{item.title}</p>
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