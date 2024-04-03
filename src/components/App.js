// App.js
import React, { useState } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {
  const [todo, setTodo] = useState([
    { task: 'reading', state: false },
    { task: 'writing', state: false },
    { task: 'speaking', state: false }
  ]);
  
  function handleComplete(index) {
    const updatedTodo = [...todo];
    updatedTodo[index].state = true;
    setTodo(updatedTodo);
  }

  return (
    <div>
      <h2>Parent Component</h2>
      <TodoList todo={todo} handleComplete={handleComplete} />
    </div>
  );
}

export default App;
