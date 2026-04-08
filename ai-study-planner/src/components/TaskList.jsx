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
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
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