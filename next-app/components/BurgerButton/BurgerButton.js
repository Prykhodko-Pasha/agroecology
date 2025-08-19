import React from 'react';

const BurgerButton = ({ isOpen, onClick }) => {
  return (
    <button 
      className={isOpen ? 'burger is-open' : 'burger'}
      type="button" 
      onClick={onClick}
    >
      <div className='burger__icon'></div>
    </button>
  );
};

export default BurgerButton; 