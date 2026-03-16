function TaskItem({ name, hours, deleteTask }) {
  return (
    <div>
      <p>{name} - {hours} hours</p>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
}

export default TaskItem;