import { useState } from "react";

function TaskItem({
  task,
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
          {task.hours} hrs • Due: {task.deadline}
        </small>
      </div>

      <div className="task-buttons">
        <button
          className="complete-btn"
          onClick={() => toggleComplete(task.id)}
        >
          ✔
        </button>

        {editing ? (
          <button
            className="edit-btn"
            onClick={() => {
              editTask(task.id, newName);
              setEditing(false);
            }}
          >
            Save
          </button>
        ) : (
          <button className="edit-btn" onClick={() => setEditing(true)}>
            Edit
          </button>
        )}

        <button
          className="delete-btn"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>

        <button
          className="plan-btn"
          onClick={() => setPlan(generatePlan(task))}
        >
          Plan
        </button>
      </div>

      <div>
        {plan.map((p, i) => (
          <p key={i} className="plan-text">📅 {p}</p>
        ))}
      </div>
    </div>
  );
}

export default TaskItem;