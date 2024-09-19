import React from 'react'
import './TasksStatisticts.css'
const TasksStatisticts = ({tasks}) => {
    const quantityTasks = tasks.length;
    const quantityDoneTasks = tasks.filter(task => !task.done).length;
    const quantityActiveTasks = tasks.filter(task => task.done).length;
    
  return (
    <div className="fixed-info-block">
        <div  className="fixed-information-span"> Общее количество задач: {quantityTasks}</div>
            <div className="purple-line-info-block"></div>
        <div  className="fixed-information-span">Количество текущих задач: {quantityDoneTasks}</div>
            <div className="purple-line-info-block"></div>
        <div  className="fixed-information-span">Количество удаленных задач: {quantityActiveTasks}</div>
    </div>
  )
}

export default TasksStatisticts