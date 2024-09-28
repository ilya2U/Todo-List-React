import React, { useState } from 'react';
import './DeleteAllTasksButton.css';
import {ReactComponent as DelteAllTasksIcon} from '../../icons/delete-task-icon.svg'
import Modal from '../../UI/Modal/Modal';

const DeleteAllTasksButton = ({ deleteAllTasks, setAnimationSearchInput, tasksCounter }) => {

  const [deleteAllTasksModal, setDeleteAllTasksModal] = useState(false)
  const searchAnimation = () => setAnimationSearchInput('animate');

  const applyDeleteAllTask = () => { 
    deleteAllTasks();
    setDeleteAllTasksModal(false);
  }

  const handleDeleteAllTask = () => {
    if(tasksCounter===0){
      searchAnimation();
    } else {
      setDeleteAllTasksModal(true);
    }
  }

  return (
    <>  <DelteAllTasksIcon
        alt="Delete All Tasks Button"
        className="delete-all-tasks-btn-icon"
        onClick={() => handleDeleteAllTask()}
      />
      <Modal active = {deleteAllTasksModal} setActive={setDeleteAllTasksModal}>
        <div className='delete-all-tasks-modal'>
          <div className='delete-all-tasks-modal-title'>Are you sure that you want to remove all your tasks?</div>
          <div className='delete-all-tasks-modal-btn-container'>
            <button className='delete-all-tasks-modal-cancel-btn' onClick={()=>setDeleteAllTasksModal(false)}>CANCEL</button>
            <button className='delete-all-tasks-modal-apply-btn' onClick={applyDeleteAllTask}>APPLY</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DeleteAllTasksButton;
