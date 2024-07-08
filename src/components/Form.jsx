import { useState } from "react";
import styles from "./form.module.css";

const Form = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState({ name: "", done: false });

  const handleSubmit = (e) => {
    e.preventDefault(e);
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  };

  return (
    <div>
      <form className={styles.todoForm} onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.inputContainer}>
          <input
            className={styles.modernInput}
            type="text"
            placeholder="Add task ..."
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
            value={todo.name}
          />
          <button className={styles.modernButton}>Add</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
