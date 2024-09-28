import React, { useState} from 'react';
import './AddTaskContent.css';

const AddTaskContent = ({ addNewTask, setActive }) => {
  
  const [todoInputValue, setTodoInputValue] = useState('');
  const [error, setError] = useState(''); 

  const handleCreateTask = () => {
    if (todoInputValue.trim().length > 2) {
      addNewTask(todoInputValue);  
      setTodoInputValue('');    
      setActive(false);
      setError(''); 
    } else {
      setError('Input must must contain more than three characters.'); 
    }
  };

  const handleCancelTaskCreating = () => {
    setTodoInputValue('');  
    setActive(false);
    setError(''); 
  };

  const handleKeyDownInputTask = (e) => {
    if (e.key === 'Enter') {
      handleCreateTask();
    } else if (e.key === 'Escape') {
      setActive(false);
      setTodoInputValue(''); 
      setError(''); 
    }
  };

  return (
    <div className='add-task-content'>
      <div className="add-task-content-note-title">NEW NOTE</div>
      <input 
        type="text" 
        className={`add-task-content-add-input ${error ? 'input-error' : ''}`}
        placeholder= 'Input your note...'
        value={todoInputValue}
        onChange={e => setTodoInputValue(e.target.value)}
        onKeyDown={handleKeyDownInputTask}
        autoFocus
        required
      />
      {error && <span className="add-task-content-add-input-error-message">{error}</span>}
      <div className="add-task-content-button-container">
        <button className="add-task-content-close-btn" onClick={handleCancelTaskCreating}>
          CANCEL
        </button>
        <button className="add-task-content-apply-btn" onClick={handleCreateTask}>
          APPLY
        </button>
      </div>
    </div>
  );
}

export default AddTaskContent;
