import Task from "./Task";
import styles from "./tasklist.module.css"

const TaskList = ({ todos, setTodos }) => {
  return (
    <div className={styles.list}>
      {todos.map((task) => (
        <Task key={todos.indexOf(task)} task={task} todos={todos} setTodos={setTodos}/>
      ))}
    </div>
  );
};

export default TaskList;
