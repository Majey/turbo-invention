import Task from "./Task";

const TaskList = ({ todos }) => {
  return (
    <div>
      {todos.map((task) => (
        <Task key={todos.indexOf(task)} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
