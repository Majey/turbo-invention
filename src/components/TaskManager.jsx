import React from "react";
import { useState } from "react";
import Form from "./Form";
import TaskList from "./TaskList";
import Footer from "./Footer";

export default function TaskManager() {
  const [todos, setTodos] = useState([]);
  const totalTasks = todos.length;
  const completedTasks = todos.filter(todo => todo.done).length

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TaskList todos={todos} setTodos={setTodos} />
      <Footer totalTasks={totalTasks} completedTasks={completedTasks}/>
    </div>
  );
}
