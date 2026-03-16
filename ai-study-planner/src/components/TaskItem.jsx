function TaskItem({ name, hours }) {
  return (
    <div>
      <p>{name} - {hours} hours</p>
      <button>Delete</button>
    </div>
  );
}

export default TaskItem;