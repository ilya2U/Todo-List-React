import React, { useState, useEffect } from 'react';
import './Modal.css';

const Modal = ({ active, setActive, children }) => {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (!active && closing) {
      const timeout = setTimeout(() => {
        setClosing(false);
      }, 500); 

      return () => clearTimeout(timeout);
    }
  }, [active, closing]);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => setActive(false), 500);
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
