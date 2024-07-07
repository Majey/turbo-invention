import { useState } from "react";

const Form = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState("");

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
    </div>
  );
};

export default Form;
