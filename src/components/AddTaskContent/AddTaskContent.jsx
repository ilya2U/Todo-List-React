import React, { useState, useRef, useEffect } from 'react';
import './AddTaskContent.css';

const AddTaskContent = ({ putTask, setActive }) => {
  const [todoInputValue, setTodoInputValue] = useState('');
  const [error, setError] = useState(''); 
  const inputTaskCreatingRef = useRef(null); 

  const handleCreateTask = () => {
    if (todoInputValue.trim() !== '') {
      putTask(todoInputValue);  
      setTodoInputValue('');    
      setActive(false);
      setError(''); 
    } else {
      setError('Input must not be empty.'); 
    }
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

  useEffect(() => {
    if (inputTaskCreatingRef.current) {
      inputTaskCreatingRef.current.focus();
    }
  }, []);

  return (
    <div className='add-task-content'>
      <div className="add-task-content-note-title">NEW NOTE</div>
      <input 
        type="text" 
        className='add-task-content-add-input'
        placeholder= {error || 'Input your note...'}
        value={todoInputValue}
        onChange={e => setTodoInputValue(e.target.value)}
        onKeyDown={handleKeyDownInputTask}
        ref={inputTaskCreatingRef}
        required
      />
      <div className="add-task-content-button-container">
        <button className="add-task-content-close-btn" onClick={() => {
          setActive(false);
          setError(''); 
        }}>
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
