import { useState } from "react";
import styles from "./form.module.css";

const Form = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(e);
    setTodos([...todos, todo]);
    setTodo("");
  };

  return (
    <div>
      <form className={styles.todoForm} onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.inputContainer}>
          <input
            className={styles.modernInput}
            type="text"
            placeholder="Enter task"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button className={styles.modernButton}>Add</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
