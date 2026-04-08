import { useState } from "react";

function TaskItem({
  task,
  index,
  deleteTask,
  toggleComplete,
  editTask,
  generatePlan,
}) {
  const [plan, setPlan] = useState([]);
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);

  return (
    <div className="task-item">
      <div>
        {editing ? (
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        ) : (
          <p
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {task.name}
          </p>
        )}

        <small>
          {task.hours} hrs | Due: {task.deadline}
        </small>
      </div>

      <div>
        <button onClick={() => toggleComplete(task.id)}>✔</button>

        {editing ? (
          <button
            onClick={() => {
              editTask(task.id, newName);
              setEditing(false);
            }}
          >
            Save
          </button>
        ) : (
          <button onClick={() => setEditing(true)}>Edit</button>
        )}

        <button onClick={() => deleteTask(task.id)}>Delete</button>

        <button onClick={() => setPlan(generatePlan(task))}>
          Plan
        </button>
      </div>

      <div>
        {plan.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}

export default TaskItem;