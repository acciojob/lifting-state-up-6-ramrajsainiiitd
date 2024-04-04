// App.js
import React, { useState } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodo] = useState([
    { id: 1, task: 'Learn React', state: false },
    { id: 2, task: 'Build a React App', state: false },
    { id: 3, task: 'Deploy the React App', state: false }
  ]);
  
  function handleComplete(id) {
    setTodo(todos.map(item =>
      item.id === id ? { ...item, state: true } : item
    ));
  }

  return (
    <div>
      <h2>Parent Compponent</h2>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
}

export default App;
