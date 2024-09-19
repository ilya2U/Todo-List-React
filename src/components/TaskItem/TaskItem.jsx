import React, { useEffect, useRef, useState } from 'react';
import './TaskItem.css';

const TaskItem = ({ task, toggleTaskMode, deleteTask, editTask, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTaskText, setNewTaskText] = useState(task.text);
  const inputTaskFocusRef = useRef(null);

  const handleTaskEditClick = () => {
    setIsEditing(true);
  };

  const handleTaskSaveClick = () => {
    editTask(task.id, newTaskText);
    setIsEditing(false);
  };

  const handleCancelTaskEditClick = () => {
    setNewTaskText(task.text); 
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setNewTaskText(e.target.value);
  };

  const handleTaskInputKeyDownAction = (e) => {
    if (e.key === 'Enter') {
        handleTaskSaveClick();
    }
    else if (e.key === 'Escape') {
        handleCancelTaskEditClick();
    }
  };

  useEffect(() => {
    if (isEditing && inputTaskFocusRef.current) {
      inputTaskFocusRef.current.focus();
    }
  }, [isEditing]);

  return (
    <div className='task-item'>
      <div className='task-item-note'>
        <input
          className='task-item-checker'
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTaskMode(task.id)}
        />
        {isEditing ? (
          <div className='task-item-edit-container'>
            <input
              type="text"
              value={newTaskText}
              onChange={handleInputChange}
              onKeyDown={handleTaskInputKeyDownAction}
              className='task-item-edit-input'
              ref={inputTaskFocusRef} 
            />
            <button onClick={handleTaskSaveClick} className='task-item-save-button'>SAVE</button>
            <button onClick={handleCancelTaskEditClick} className='task-item-cancel-button'>CANCEL</button>
          </div>
        ) : (
          <span className={task.done ? 'done' : 'nodone'}>
            {task.text + ' #' + (index + 1)}
          </span>
        )}
        <div className='task-item-icon-container'>
          <img
            src="/icons/edit-todo-icon.svg"
            alt="Change"
            className="task-item-edit-icon"
            onClick={(e) => {
              if (!isEditing) handleTaskEditClick();
              e.stopPropagation();
            }}
          />  
          <img
            src="/icons/delete-todo-icon.svg"
            alt="Delete Task Button"
            className="task-item-delete-icon"
            onClick={(e) => {
              deleteTask(task.id);
              e.stopPropagation();
            }}
          />
        </div>
      </div>
      <div className='task-item-line'></div>
    </div>
  );
};

export default TaskItem;