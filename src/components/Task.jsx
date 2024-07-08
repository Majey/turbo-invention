import styles from "./task.module.css";

const Task = ({ task, todos, setTodos }) => {
  const handleDelete = (task) => {
    setTodos(todos.filter((todo) => todo !== task));
  };

  return (
    <div className={styles.task}>
      <hr className={styles.line} />
      <div className={styles.taskName}>
        {task.name}
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
