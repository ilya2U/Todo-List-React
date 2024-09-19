import React from 'react';
import './DeleteAllTasksButton.css';

const DeleteAllTasksButton = ({ deleteAllTasks, setAnimationSearchInput, tasksCounter }) => {
  const searchAnimation = () => setAnimationSearchInput('animate');
  const handleDeleteAllTasks = () => { 
    if(tasksCounter===0){
      searchAnimation();
    }
    deleteAllTasks();
  }
 
  return (
    <div>
      <img
        src="/icons/delete-todo-icon.svg"
        alt="Delete All Tasks Button"
        className="delete-all-tasks-btn-icon"
        onClick={() => handleDeleteAllTasks()}
      />
    </div>
  );
};

export default DeleteAllTasksButton;
