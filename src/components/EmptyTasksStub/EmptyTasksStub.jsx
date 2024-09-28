import React from 'react'
import './EmptyTasksStub.css'
import {ReactComponent as EmptyStubIcon} from '../../icons/empty-task-list-icon.svg'

const EmptyTasksStub = () => {
  return (
    <div className='empty-tasks-stub'>
        <EmptyStubIcon alt="Empty Tasks List" className="empty-tasks-stub-icon"/>
        <span className='empty-tasks-stub-text'>Empty...</span>
    </div>
  )
}

export default EmptyTasksStub