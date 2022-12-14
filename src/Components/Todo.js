import React from "react";

function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }
  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox" onClick={handleCheckboxClick} />
      <li
        style={{
          color: "whiite",
          textDecoration: todo.completed ? "line-through" : null,
        }}
      >
        {todo.task}
        {todo.date}
      </li>
      <button onClick={handleRemoveClick}>x</button>
    </div>
  );
}

export default Todo;
