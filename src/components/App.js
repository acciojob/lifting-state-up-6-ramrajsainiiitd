// App.js
import React, { useState } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {
  const [todo, setTodo] = useState([
    { id: 1, task: 'Reading', state: false },
    { id: 2, task: 'Writing', state: false },
    { id: 3, task: 'Speaking', state: false }
  ]);
  
  function handleComplete(id) {
    setTodo(todo.map(item =>
      item.id === id ? { ...item, state: true } : item
    ));
  }

  return (
    <div>
      <h2>Parent Compponent</h2>
      <TodoList todo={todo} handleComplete={handleComplete} />
    </div>
  );
}

export default App;
