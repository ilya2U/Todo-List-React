import React from 'react'
import './AddTaskBtn.css'
import AddTaskIcon from '../../icons/add-task-icon.svg'

const AddTaskBtn = ({setActiveModal}) => {
  return (
    <div className="add-task-modal" onClick={()=>setActiveModal(true)}>
        <img src={AddTaskIcon} alt="Add Task Modal Open" className="add-task-modal-icon"/>
    </div>
  )
}

export default AddTaskBtn;