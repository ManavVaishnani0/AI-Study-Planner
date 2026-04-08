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
  const [newName, setNewName] = useState(task.subject);

  return (
    <div className="task-item">
      {/* Subject */}
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
            {task.subject}
          </p>
        )}

        <small>
          {task.hours} hrs • Due: {task.deadline}
        </small>

        {/* 🔥 Show Topics */}
        <div>
          {task.topics && task.topics.length > 0 ? (
            task.topics.map((t, i) => (
              <p key={i} style={{ fontSize: "12px", margin: "2px 0" }}>
                • {t.name} ({t.difficulty})
              </p>
            ))
          ) : (
            <p style={{ fontSize: "12px" }}>No topics</p>
          )}
        </div>
      </div>

      {/* Buttons */}
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
              if (newName.trim() !== "") {
                editTask(task.id, newName);
              }
              setEditing(false);
            }}
          >
            Save
          </button>
        ) : (
          <button
            className="edit-btn"
            onClick={() => setEditing(true)}
          >
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

      {/* Plan Output */}
      <div>
        {plan.map((p, i) => (
          <p key={i} className="plan-text">
            📅 {p}
          </p>
        ))}
      </div>
    </div>
  );
}

export default TaskItem;