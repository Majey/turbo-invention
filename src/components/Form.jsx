import React from "react";
import { useState } from "react";

export default function Form() {
  const [todo, setTodo] = useState("");

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter task"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
