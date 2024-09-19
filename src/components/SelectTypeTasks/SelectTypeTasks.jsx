import React from 'react';
import './SelectTypeTasks.css';

const SelectTypeTasks = ({ taskFilter, handleTasksFilterChange }) => {
  return (
      <select
        className='filter-tasks-select'
        value={taskFilter}
        onChange={(e) => handleTasksFilterChange(e.target.value)}
      >
        <option value="all">ALL</option>
        <option value="completed">DONE</option>
        <option value="active">ACTIVE</option>
      </select>
  );
};

export default SelectTypeTasks;
