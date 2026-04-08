import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  deleteTask,
  toggleComplete,
  editTask,
  generatePlan,
}) {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          editTask={editTask}
          generatePlan={generatePlan}
        />
      ))}
    </div>
  );
}

export default TaskList;