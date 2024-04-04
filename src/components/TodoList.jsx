// TodoList.js
import React from 'react';

export default function TodoList(props) {

  return (
    <div>
      <h3>Child Component</h3>
      <ul>
        {props.todos.map(item => (
          <li key={item.id}>
            {item.task}
            {!item.state && (
              <button onClick={() => props.handleComplete(item.id)}>Complete</button>
            )}
          </li>
        ))}
        {
          props.completed.map(
            item => (
              <li key={item.id}> {item.task} </li>
            )
          )
        }
      </ul>
    </div>
  );
}
