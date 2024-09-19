import React from 'react'
import './EmptyTasksStub.css'
const EmptyTasksStub = () => {
  return (
    <div className='empty-tasks-stub'>
       <img
          src="/icons/empty-todo-list-icon.svg"
          alt="Empty Tasks List"
          className="empty-tasks-stub-icon"
        />
        <span className='empty-tasks-stub-text'>Empty...</span>
    </div>
  )
}

export default EmptyTasksStub