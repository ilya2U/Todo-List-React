import { useEffect, useState } from "react";
import ToolBar from "./components/TasksControlHeader/TasksControlHeader";
import TaskItem from "./components/TaskItem/TaskItem";
import Empty from "./components/EmptyTasksStub/EmptyTasksStub";
import './App.css'
import {updateCurrentTasksList} from "./components/func";
import Modal from "./UI/Modal/Modal";
import AddTask from "./components/AddTaskContent/AddTaskContent";
import AddTaskBtn from "./components/AddTaskBtn/AddTaskBtn";
import TasksStatisticts from "./components/TasksStatistics/TasksStatisticts";

function App() {
const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || [])
const [tasksCounter,setTasksCounter] = useState( +(JSON.parse(localStorage.getItem('tasksCounter'))) || 0 );
const [tasksSearch, setTasksSearch] = useState("");
const [tasksFilter, setTasksFilter] = useState('all');
const [modalOpen, setModalOpen] = useState(false);


useEffect(() => {
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  setTasks(savedTasks);
}, []);

useEffect(() => {
  updateCurrentTasksList(tasks)
  setTasksCounter(tasks.length)
}, [tasks]);

const putTask = (value) => {
  if (value) {
    const newTask = { id: Date.now(), text: value, done: false };
    setTasks([newTask, ...tasks]);
  } else {
    alert('Please enter a value');
  }
}

const toggleTaskMode = (id) => {
  setTasks(tasks.map((task) => 
    task.id === id ? { ...task, done: !task.done } : task
  ));
};

const deleteTask = (id) => {
  setTasks(tasks.filter(task => task.id!== id))
}

const deleteAllTasks = () => {
  setTasks([])
}

const editTask = (id, newText) => {
  setTasks(tasks.map((t) => t.id === id ? {...t, text: newText} : t))
}

const handleSearchTasksChange = (event) => {
  setTasksSearch(event.target.value);
};

const handleTasksFilterChange = (newFilter) => {
  setTasksFilter(newFilter);
};


const filteredTasks = tasks
    .filter(task => {
      if (tasksFilter === 'completed')  return task.done;
      if (tasksFilter === 'active') return !task.done;
      return true; 
    })
    .filter(task => task.text.toLowerCase().includes(tasksSearch.toLowerCase()));

    return (
      <div className="container">
        <TasksStatisticts tasks={tasks}/>
        <AddTaskBtn setActiveModal={setModalOpen} />
        <Modal active={modalOpen} setActive={setModalOpen}>
          <AddTask putTask={putTask} setActive={setModalOpen}/>
        </Modal>
        <div className="content">
          <div className="inner-content">
            <div style={{marginTop: 10}}>
              <ToolBar 
                putTask={putTask} 
                deleteAllTasks={deleteAllTasks} 
                tasksCounter = {tasksCounter}
                tasksSearch={tasksSearch} 
                handleSearchTasksChange={handleSearchTasksChange}
                tasksFilter={tasksFilter}
                handleTasksFilterChange={handleTasksFilterChange}
              />
            </div>
            {filteredTasks.length === 0 ? (
              <Empty />
            ) : (
              <ul>
                {filteredTasks.map((task, index) => (
                  <TaskItem
                    key={task.id}
                    index={index}
                    task={task}
                    deleteTask={deleteTask}
                    editTask={editTask}
                    toggleTaskMode={toggleTaskMode}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  }

export default App;
