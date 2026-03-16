import TaskItem from "./TaskItem";

function TaskList({ tasks }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          name={task.name}
          hours={task.hours}
        />
      ))}
    </div>
  );
}

export default TaskList;