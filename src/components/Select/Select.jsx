import React from 'react';
import './Select.css';

const Select = ({ filter, onFilterChange }) => {
  return (
    <div>
      <select
        name="select"
        className='select-todo'
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="all">ALL</option>
        <option value="completed">DONE</option>
        <option value="incomplete">NO</option>
      </select>
    </div>
  );
};

export default Select;
