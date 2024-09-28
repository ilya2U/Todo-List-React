import React, { useState } from 'react';
import './TaskItem.css';
import DeleteTaskItemIcon from '../../icons/delete-task-icon.svg'
import EditTaskItemIcon from '../../icons/edit-task-icon.svg'

const TaskItem = ({ task, toggleIsEditTask, deleteTask, editTask, index }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [newTaskText, setNewTaskText] = useState(task.text);
  const [errorEditTask, setErrorEditTaskText] = useState('')

  const handleTaskEditClick = () => {
    setIsEditing(true);
  };

  const handleTaskSaveClick = () => {
    if (newTaskText.trim().length < 3) {
      setNewTaskText('')
      setErrorEditTaskText('Task must contain more than three characters.');
    } else {
      setErrorEditTaskText(''); 
      editTask(task.id, newTaskText);
      setIsEditing(false);
    }
  };

  const handleCancelTaskEditClick = () => {
    setNewTaskText(task.text); 
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setNewTaskText(e.target.value);
  };

  const hadleDeleteTaskItem = (e) => {
    deleteTask(task.id);
    e.stopPropagation();
  }

  const handleTaskInputKeyDownAction = (e) => {
    if (e.key === 'Enter') {
        handleTaskSaveClick();
    } else if (e.key === 'Escape') {
        handleCancelTaskEditClick();
    }
  };

  const handleStartTaskEdititing = () => {
    if (!isEditing) handleTaskEditClick();
  }

  return (
    <div className='task-item'>
      <div className='task-item-note'>
        <input
          className='task-item-checkbox-completed'
          type="checkbox"
          checked={task.done}
          onChange={() => toggleIsEditTask(task.id)}
        />
        {isEditing ? (
          <div className='task-item-edit-container'>
            <input
              type="text"
              value={newTaskText}
              onChange={handleInputChange}
              onKeyDown={handleTaskInputKeyDownAction}
              className='task-item-edit-input'
              autoFocus={true}
              placeholder={errorEditTask}
              required
            />
            <button
              onClick={handleTaskSaveClick} 
              className='task-item-save-button'
              disabled={newTaskText === task.text}
            >
              SAVE
            </button>
            <button onClick={handleCancelTaskEditClick} className='task-item-cancel-button'>CANCEL</button>
          </div>
        ) : (
          <span className={task.done ? 'done' : 'nodone'}>
            {task.text + ' #' + (index + 1)}
          </span>
        )}
       {!isEditing && (
          <div className='task-item-icon-container'>
            <img
              src={EditTaskItemIcon}
              alt="Change"
              className="task-item-edit-icon"
              onClick={handleStartTaskEdititing}
            />  
            <img
              src={DeleteTaskItemIcon}
              alt="Delete Task Button"
              className="task-item-delete-icon"
              onClick={hadleDeleteTaskItem}
            />
          </div>
        )}
      </div>
      <div className='task-item-line'></div>
    </div>
  );
};

export default TaskItem;