import React, { useRef, useState } from 'react';
import './ToolBar.css';
import DeleteButton from '../DeleteButton/DeleteButton';
import Counter from '../Counter/Counter';
import Select from '../Select/Select';
import Modal from '../Modal/Modal';
import ModalWindow from '../../UI/ModalWindow/ModalWindow';
import Theme from '../Theme/Theme';


const ToolBar = (props) => {
  const [value, setValue] = useState('');
  const [modal, setModal] = useState(false);
  const inputRef = useRef(null);

  const triggerShake = () => {
    if (inputRef.current) {
      inputRef.current.classList.add('input-shake');
      setTimeout(() => {
        inputRef.current.classList.remove('input-shake');
      }, 500);
    }
  };


  return (
    <>
      <div className='head-name'>TODO LIST</div>
      <div className='box'>
        <Theme/>
        <div className="icon-button" onClick={() => setModal(true)}>
          <img src="/free-icon-font-plus-small-3917179.svg" alt="+" className='plus-icon' />
        </div> 
        <ModalWindow  active={modal} setActive={setModal}>
          <Modal putTodo = {props.putTodo} setActive={setModal}/>
        </ModalWindow>
        
        <Counter countTodos={props.countTodos} />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.putTodo(value);
            setValue('');
          }}
        >
          <div className="input-container">
            <input
              id="inputField"
              type="text"
              placeholder="Search todos..."
              value={props.search}
              onChange={props.onSearchChange}
              className="input-field"
              ref={inputRef}
            />
          </div>
        </form>
        <div className="search-container">
        
        <Select
            filter={props.filter}
            onFilterChange={props.onFilterChange}
        /> 

        </div>
        <DeleteButton deleteAllTodos={props.deleteAllTodos} onButtonClick={triggerShake} />
        </div>
    </>
  );
}

export default ToolBar;
