import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ putTodo, setActive}) => {
  const [val, setVal] = useState('');
  return (
    <>
        <div className='modal-note'>NEW NOTE</div>
        <form
            onSubmit={event => {
              event.preventDefault();  
              putTodo(val);        
              setVal('');          
              setActive(false);
            }}
          >
            <div className="input-cont">
              <input
                type="text"
                placeholder="Input your note..."
                value={val}
                onChange={e => setVal(e.target.value)}
                className="modal-input-field"
                required 
              />
            </div>

            <div className="buttons-container">
              <button className='cancel-btn' onClick = {() => setActive(false)} type='reset'>
                CANCEL
              </button>

              <button type='submit' className="apply-btn"> 
                APPLY
              </button>
            </div>
          </form>
    </>
  );
};

export default Modal;
