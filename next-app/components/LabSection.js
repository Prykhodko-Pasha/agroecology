import React from 'react';

export default function LabSection({ id, title, children }) {
  return (
    <li className="substance" id={id}>
      <p className="substance__text">{title}</p>
      {children}
    </li>
  );
} 