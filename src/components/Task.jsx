import styles from "./task.module.css";

const Task = ({ task, todos, setTodos }) => {
  const handleDelete = (task) => {
    setTodos(todos.filter((todo) => todo !== task));
  };

  const handleClick = (name) => {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const strikeThrough = task.done ? styles.completed : "";

  return (
    <div className={styles.task}>
      <hr className={styles.line} />
      <div className={styles.taskName}>
        <span className={strikeThrough} onClick={() => handleClick(task.name)}>
          {task.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(task)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>
    </div>
  );
};

export default Task;
