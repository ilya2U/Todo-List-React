import React from 'react';
import './Input.css';

const Input = ({ 
  type = 'text', 
  value, 
  onChange, 
  placeholder = 'Enter text...', 
  error = '', 
  disabled = false, 
  width = '100%',
  height = '100%',
  ...props 
}) => {
  return (
    <div className="ui-input-container"  style={{ width, height }}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`ui-input-field ${error ? 'ui-input-error' : ''}`}
        {...props}
      />
      {error && <span className="ui-input-error-message">{error}</span>}
    </div>
  );
};

export default Input;
