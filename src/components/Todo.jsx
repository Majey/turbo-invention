import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");

  return (
    <div>
      <form>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default Todo;
