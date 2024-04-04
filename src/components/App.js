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

  const[completed, setCompleted] = useState([]);
  
  function handleComplete(id) {

    const todoCompleted = todos.find(todo => todo.id === id);

    if(todoCompleted){
      todoCompleted.state = true;
      setCompleted([...completed, todoCompleted]);
      setTodo(todos.filter(todo => todo.id !== id));
    }
  }

  return (
    <div>
      <h2>Parent Compponent</h2>
      <TodoList todos={todos} completed = {completed} handleComplete={handleComplete} />
    </div>
  );
}

export default App;
