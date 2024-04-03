// TodoList.js
import React from 'react';

export default function TodoList(props) {
  const allCompleted = props.todo.every(item => item.state === true);

  if (!allCompleted) {
    return (
      <div>
        <h3>Child Component</h3>
        <ul>
          {props.todo.map((item, index) => (
            <li key={index}>
              {item.task}
              {!item.state && <button onClick={() => props.handleComplete(index)}>Complete</button>}
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <p>Complete this task</p>
    );
  }
}
