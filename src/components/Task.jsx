import styles from "./task.module.css";

const Task = ({ task }) => {
  return (
    <div className={styles.task}>
      <hr className={styles.line} />
      <div className={styles.taskName}>
        {task}
        <span>
          <button className={styles.deleteButton}>x</button>
        </span>
      </div>
    </div>
  );
};

export default Task;
