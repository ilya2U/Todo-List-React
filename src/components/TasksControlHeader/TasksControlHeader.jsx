import React, { useEffect, useState } from 'react';
import './TasksControlHeader.css';
import DeleteAllTasksButton from '../DeleteAllTasksButton/DeleteAllTasksButton';
import SelectTypeTasks from '../SelectTypeTasks/SelectTypeTasks';
import TasksCounter from '../TasksCounter/TasksCounter';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';

const TasksControlHeader = ({deleteAllTasks, tasksCounter, tasksSearch, handleSearchTasksChange, tasksFilter, handleTasksFilterChange}) => {
  
  const [animationSearchInput, setAnimationSearchInput] = useState('');
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationSearchInput('');
    }, 500);

    return () => clearTimeout(timer);
  }, [animationSearchInput]);

  return (
    <>
      <div className='tasks-control-header-title'>TODO LIST</div>
      <div className='tasks-control-header-content'>
        <TasksCounter tasksCounter={tasksCounter} />
          <div className="input-container">
            <input
              type="text"
              placeholder="Search todos..."
              value={tasksSearch}
              onChange={handleSearchTasksChange}
              className={`input-field ${animationSearchInput}`}
            />
          </div>
        <div className="search-container">
        <SelectTypeTasks
            tasksFilter={tasksFilter}
            handleTasksFilterChange={handleTasksFilterChange}
        /> 
        </div>
        <ThemeSwitch/>
        <DeleteAllTasksButton deleteAllTasks={deleteAllTasks} setAnimationSearchInput={setAnimationSearchInput} tasksCounter={tasksCounter}/>
        </div>
    </>
  );
}

export default TasksControlHeader;
