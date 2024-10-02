import React from 'react';
import './SelectTypeTasks.css';
import Select from '../../uikit/Select/Select';

const SelectTypeTasks = ({ taskFilter, handleTasksFilterChange }) => {
  const options = [
    { value: 'all', label: 'All' },
    { value: 'completed', label: 'COMPLETE' },
    { value: 'pending', label: 'INCOMPLETE' }
  ];
  return (
      <Select 
      options={options}
      value={taskFilter}
      onChange={(e) => handleTasksFilterChange(e.target.value)}
      width="85px"
      height="38px"
    />
  );
};

export default SelectTypeTasks;
