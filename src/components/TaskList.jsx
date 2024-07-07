import Task from "./Task";
import styles from "./tasklist.module.css"

const TaskList = ({ todos }) => {
  return (
    <div className={styles.list}>
      {todos.map((task) => (
        <Task key={todos.indexOf(task)} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
