import React, { useState } from 'react';
import './Item.css';

const Item = ({ todo, toggleTodo, deleteTodo, editTodo, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setNewText(todo.text); 
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setNewText(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSaveClick();
    }
    else if (e.key === 'Escape') {
      handleCancelClick();
    }
  };



  return (
    <div className='item'>
      <div className='note'>
        <input
          className='checker'
          type="checkbox"
          checked={todo.done}
          onChange={() => toggleTodo(todo.id)}
        />
        {isEditing ? (
          <div className='edit-container'>
            <input
              type="text"
              value={newText}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
              className='edit-input'
            />
            <button onClick={handleSaveClick} className='save-button'></button>
            <button onClick={handleCancelClick} className='cancel-button'></button>
          </div>
        ) : (
          <span className={todo.done ? 'done' : 'nodone'}>
            {todo.text + ' #' + (index + 1)}
          </span>
        )}
        <div className='icon-container'>
          <img
            src="/free-icon-font-pencil-3917376.svg"
            alt="Change"
            className="small-icon-pencil"
            onClick={(e) => {
              if (!isEditing) handleEditClick();
              e.stopPropagation();
            }}
          />  
          <img
            src="/free-icon-font-trash-3917378.svg"
            alt="Delete"
            className="small-icon"
            onClick={(e) => {
              deleteTodo(todo.id);
              e.stopPropagation();
            }}
          />
        </div>
      </div>
      <div className='line'></div>
    </div>
  );
};

export default Item;