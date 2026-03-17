function TaskItem({ name, hours, deleteTask }) {
  return (
    <div className="task-item">
      <p>{name} - {hours} hours</p>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
}

export default TaskItem;