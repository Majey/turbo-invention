import React from "react";
import { useState } from "react";
import Form from "./Form";
import TaskList from "./TaskList";

export default function TaskManager() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TaskList todos={todos} setTodos={setTodos}/>
    </div>
  );
}
