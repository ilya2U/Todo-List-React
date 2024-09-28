import React from 'react'
import './AddTaskBtn.css'
import {ReactComponent as AddTaskIcon} from '../../icons/add-task-icon.svg'

const AddTaskBtn = ({setActiveModal}) => {
  return (
    <div className="add-task-modal" onClick={()=>setActiveModal(true)}>
        <AddTaskIcon className="add-task-modal-icon" alt="Add Task Modal Open"/>
    </div>
  )
}

export default AddTaskBtn;