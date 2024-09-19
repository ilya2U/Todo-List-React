import React, { useEffect, useState } from 'react';
import './TasksCounter.css';

const TasksCounter = ({ tasksCounter }) => {
  const [animationTaskCounerClass, setAnimationTaskCounerClass] = useState('');

  useEffect(() => {
    setAnimationTaskCounerClass('animate');
    const timer = setTimeout(() => {
      setAnimationTaskCounerClass('');
    }, 500);

    return () => clearTimeout(timer);
  }, [tasksCounter]);

  return (
    <>
      {tasksCounter !== 0 && (
        <div className={`tasks-counter ${animationTaskCounerClass}`}>
          {tasksCounter}
        </div>
      )}
    </>
  );
};

export default TasksCounter;