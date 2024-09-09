import { useEffect, useState } from "react";
import ToolBar from "./components/ToolBar/ToolBar";
import Item from "./components/Item/Item";
import Empty from "./components/Empty/Empty";
import './App.css'
import { updateAll, updateCurrent, updateDeleteAll, updateDeleteOne } from "./components/func";

function App() {
const [countTodos,setCountTodos] = useState(  +(JSON.parse(localStorage.getItem('counter'))) || 0 );
const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])
const [search, setSearch] = useState("");
const [filter, setFilter] = useState('all'); 

useEffect(() => {
  const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
  const savedCounter = JSON.parse(localStorage.getItem('counter')) || [];
  setTodos(savedTodos);
  setCountTodos(+savedCounter);
}, []);

useEffect(() => {
  console.log(countTodos, 'после обновления');
  localStorage.setItem('counter', JSON.stringify(countTodos)); 
}, [countTodos]);

useEffect(() => {
  updateCurrent(todos)
}, [todos]);

const putTodo = (value) => {
  if (value) {
    const newTodo = { id: Date.now(), text: value, done: false };
    setTodos([newTodo, ...todos]);
    updateAll(newTodo)
    value = ''; 
    setCountTodos((prev) => prev + 1);
  } else {
    alert('Please enter a value');
  }
}

const toggleTodo = (id) => {
  setTodos(todos.map((todo) => 
    todo.id === id ? { ...todo, done: !todo.done } : todo
  ));
};

const deleteTodo = (id) => {
  const deletedTodo = todos.find((todo) => todo.id === id)
  updateDeleteOne(deletedTodo)
  setTodos(todos.filter(todo => todo.id!== id))
}

const deleteAllTodos = () => {
  updateDeleteAll(todos)
  setTodos([])
}

const editTodo = (id, newText) => {
  setTodos(todos.map((t) => t.id === id ? {...t, text: newText} : t))
}

const handleSearchChange = (event) => {
  setSearch(event.target.value);
};

const handleFilterChange = (newFilter) => {
  setFilter(newFilter);
};


const filteredTodos = todos
    .filter(todo => {
      if (filter === 'completed')  return todo.done;
      if (filter === 'incomplete') return !todo.done;
      return true; 
    })
    .filter(todo => todo.text.toLowerCase().includes(search.toLowerCase()));


  const deletedTodoList = JSON.parse(localStorage.getItem('deletedTodos')) || [];
  const allTodoList = JSON.parse(localStorage.getItem('allTodos')) || [];

  
    return (
      <div className="container">
        <div className="storage">
          <div>
              {deletedTodoList.map((todo) =>{
              return (
                <div key={todo.id}>
                  <span>{todo.text}</span>
                </div>
              )
            })}
          </div>
        
          <div style={{marginLeft: 10}}>
              {allTodoList.map((todo) =>{
              return (
                <div key={todo.id}>
                  <span>{todo.text}</span>
                </div>
              )
            })}
          </div>
        </div>
        <div className="content">
          <div className="inner-content">
            <div style={{marginTop: 10}}>
              <ToolBar 
                putTodo={putTodo} 
                deleteAllTodos={deleteAllTodos} 
                countTodos={countTodos}
                search={search} 
                onSearchChange={handleSearchChange}
                filter={filter}
                onFilterChange={handleFilterChange}
              />
            </div>
            {filteredTodos.length === 0 ? (
              <Empty />
            ) : (
              <ul>
                {filteredTodos.map((todo, index) => (
                  <Item
                    key={todo.id}
                    index={index}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                    toggleTodo={toggleTodo}
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
