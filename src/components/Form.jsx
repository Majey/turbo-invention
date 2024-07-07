import React from "react";
import { useState } from "react";
import Task from "./Task";

export default function Form() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(e);
    setTodos([...todos, todo]);
    setTodo("");
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Enter task"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button>Add</button>
      </form>

      {todos.map((task) => (
        <Task key={todos.indexOf(task)} task={task} />
      ))}
      
    </div>
  );
}
