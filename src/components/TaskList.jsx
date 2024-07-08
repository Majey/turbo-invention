import Task from "./Task";
import styles from "./tasklist.module.css";

const TaskList = ({ todos, setTodos }) => {
  const sortedTasks = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
    
  return (
    <div className={styles.list}>
      {sortedTasks.map((task) => (
        <Task key={task.name} task={task} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default TaskList;
