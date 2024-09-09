import React from 'react'
import './DeleteButton.css';

const DeleteButton = ({deleteAllTodos, onButtonClick}) => {
  const curTodos = JSON.parse(localStorage.getItem('todos'));
  return (
    <div>
        <img
          src="/free-icon-font-trash-3917378.svg"
          alt="Delete"
          className="icon"
          onClick={() => {
            if(curTodos.length === 0){
              onButtonClick()
            }
            deleteAllTodos();
           
          }}
        />
    </div>
  )
}

export default DeleteButton