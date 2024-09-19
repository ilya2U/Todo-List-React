import React from 'react'
import './AddTaskBtn.css'
const AddTaskBtn = ({setActiveModal}) => {
  return (
    <div className="add-task-modal" onClick={()=>setActiveModal(true)}>
        <img src="/icons/add-todo-icon.svg" alt="Add Task Modal Open" className="add-task-modal-icon"/>
    </div>
  )
}

export default AddTaskBtn;