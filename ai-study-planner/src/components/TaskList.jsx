import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          name={task.name}
          hours={task.hours}
          deadline={task.deadline}
          deleteTask={() => deleteTask(index)}
        />
      ))}
    </div>
  );
}

export default TaskList;