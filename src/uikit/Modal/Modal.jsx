import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ active, setActive, children }) => {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      setActive(false);
    }, 100); 
  };

  return (
    <div className={active || closing ? 'modal active' : 'modal'} onClick={handleClose}>
      <div className={active || closing ? 'modal-content active' : 'modal-content'} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
