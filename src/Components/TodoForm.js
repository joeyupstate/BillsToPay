import React, { useState } from "react";
import { unmountComponentAtNode } from "react-dom";
import uuid from "react-uuid";
import "../App.css";
import "./Todo.css";
function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    date: "",
    completed: false,
  });

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }
  function handleDateInputChange(e) {
    setTodo({ ...todo, date: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid() });
      setTodo({ ...todo, task: "" });
      setTodo({ ...todo, date: "" });
    }
  }
  return (
    <form className="form-style" onSubmit={handleSubmit}>
      <label for="task">Add Bill</label>
      <input
        type="text"
        name="task"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
    <label for="trip-start">Due Date</label>
      <input
        type="date"
        id="start"
        name="trip-start"
        value={todo.date}
        min="2018-01-01"
        max="2018-12-31"
        onChange={handleDateInputChange}
      />

      <button>Submit</button>
    </form>
  );
}

export default TodoForm;
