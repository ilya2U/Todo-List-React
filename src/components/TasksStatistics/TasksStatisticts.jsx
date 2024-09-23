import React from 'react';
import './TasksStatisticts.css';

const TasksStatisticts = ({ tasks }) => {

  const quantityTasks = tasks.length;
  const quantityDoneTasks = tasks.filter(task => !task.done).length;
  const quantityActiveTasks = tasks.filter(task => task.done).length;

  if (!quantityTasks) {
    return null;
  }

  return (
    <div className='tasks-statisticts'>
      <div className="tasks-statisticts-span">Общее количество задач: {quantityTasks}</div>
      <div className="tasks-statisticts-purple-line"></div>
      <div className="tasks-statisticts-span">Количество текущих задач: {quantityDoneTasks}</div>
      <div className="tasks-statisticts-purple-line"></div>
      <div className="tasks-statisticts-span">Количество выполненных задач: {quantityActiveTasks}</div>
    </div>
  );
};

export default TasksStatisticts;
