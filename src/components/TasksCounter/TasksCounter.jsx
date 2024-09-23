import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './TasksCounter.css';

const TasksCounter = ({ tasksCounter }) => {
  const [animationTaskCounterClass, setAnimationTaskCounterClass] = useState('');

  useEffect(() => {
    setAnimationTaskCounterClass('animate');
    const timer = setTimeout(() => {
      setAnimationTaskCounterClass('');
    }, 500);

    return () => clearTimeout(timer);
  }, [tasksCounter]);

  return (
    <>
      {tasksCounter > 0 ? (
             <div className={classNames('tasks-counter', animationTaskCounterClass)}>
          {tasksCounter}
        </div>
      ) : <div className='tasks-counter-none'></div>}
    </>
  );
};

export default TasksCounter;