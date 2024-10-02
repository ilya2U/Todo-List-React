import React from 'react';
import './Select.css';

const Select = ({ 
  options = [], 
  value, 
  onChange, 
  width = '85px',
  height = '38px', 
  ...props 
}) => {
  return (
    <select 
      value={value} 
      onChange={onChange} 
      className="ui-custom-select" 
      style={{ width, height }} 
      {...props}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
