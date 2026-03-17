function TaskItem({ name, hours, deadline, deleteTask }) {
  const today = new Date();
  const dueDate = new Date(deadline);

  const diffDays = Math.ceil(
    (dueDate - today) / (1000 * 60 * 60 * 24)
  );

  let priority = "Low";

  if (diffDays <= 2) priority = "High";
  else if (diffDays <= 5) priority = "Medium";

  return (
    <div className="task-item">
      <div>
        <p>{name}</p>
        <small>
          {hours} hrs | Due: {deadline} | Priority: {priority}
        </small>
      </div>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
}

export default TaskItem;