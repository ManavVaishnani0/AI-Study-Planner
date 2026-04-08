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
      {tasks && tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
            editTask={editTask}
            generatePlan={generatePlan}
          />
        ))
      ) : (
        <p style={{ textAlign: "center", marginTop: "10px" }}>
          No tasks added yet 🚀
        </p>
      )}
    </div>
  );
}

export default TaskList;