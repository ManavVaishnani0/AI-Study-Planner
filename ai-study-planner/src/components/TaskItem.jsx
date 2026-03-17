function TaskItem({ name, hours, deadline, deleteTask }) {
  return (
    <div className="task-item">
      <div>
        <p>{name}</p>
        <small>{hours} hrs | Due: {deadline}</small>
      </div>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
}

export default TaskItem;