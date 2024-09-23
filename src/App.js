import { useEffect, useMemo, useState } from "react";
import TasksControlHeader from "./components/TasksControlHeader/TasksControlHeader";
import TaskItem from "./components/TaskItem/TaskItem";
import Empty from "./components/EmptyTasksStub/EmptyTasksStub";
import './App.css'
import {updateCurrentTasksList} from "./components/func";
import Modal from "./UI/Modal/Modal";
import AddTask from "./components/AddTaskContent/AddTaskContent";
import AddTaskBtn from "./components/AddTaskBtn/AddTaskBtn";
import TasksStatisticts from "./components/TasksStatistics/TasksStatisticts";
import { LOCAL_STORAGE_TASKS_COUNTER_KEY, LOCAL_STORAGE_TASKS_KEY } from "./components/variablesLocalStorage";

function App() {
const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASKS_KEY)) || [])
const [tasksCounter,setTasksCounter] = useState( +(JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASKS_COUNTER_KEY))) || 0 );
const [tasksSearch, setTasksSearch] = useState("");
const [tasksFilter, setTasksFilter] = useState('all');
const [addTodoModalIsOpen, setAddTodoModalIsOpen] = useState(false);


useEffect(() => {
  const savedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASKS_KEY)) || [];
  setTasks(savedTasks);
}, []);

useEffect(() => {
  updateCurrentTasksList(tasks)
  setTasksCounter(tasks.length)
}, [tasks]);

const addNewTask = (value) => {
  if (value) {
    const newTask = { id: Date.now(), text: value, done: false };
    setTasks([newTask, ...tasks]);
  } else {
    alert('Please enter a value');
  }
}

const toggleIsEditTask = (id) => {
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

const filteredTasks = useMemo(() => {
  return tasks.filter(task => {
    switch (tasksFilter) {
      case 'completed':
        return task.done;
      case 'active':
        return !task.done;
      default:
        return true;
    }
  }).filter(task => task.text.toLowerCase().includes(tasksSearch.toLowerCase()));
}, [tasks, tasksFilter, tasksSearch]);
    
    return (
      <div className="container">
        <TasksStatisticts tasks={tasks}/>
        <AddTaskBtn setActiveModal={setAddTodoModalIsOpen} />
        <Modal active={addTodoModalIsOpen} setActive={setAddTodoModalIsOpen}>
          <AddTask addNewTask={addNewTask} setActive={setAddTodoModalIsOpen}/>
        </Modal>
        <div className="content">
          <div className="inner-content">
            <div style={{marginTop: 10}}>
              <TasksControlHeader 
                deleteAllTasks={deleteAllTasks} 
                tasksCounter = {tasksCounter}
                tasksSearch={tasksSearch} 
                handleSearchTasksChange={handleSearchTasksChange}
                tasksFilter={tasksFilter}
                handleTasksFilterChange={handleTasksFilterChange}
              />
            </div>
            {!filteredTasks.length ? (
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
                    toggleIsEditTask={toggleIsEditTask}
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
