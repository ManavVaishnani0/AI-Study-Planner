import { useState } from "react";

function TaskForm({ addTask }) {
  const [name, setName] = useState("");
  const [hours, setHours] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = () => {
    if (name === "" || hours === "" || deadline === "") return;

    addTask(name, hours, deadline);

    setName("");
    setHours("");
    setDeadline("");
  };

  return (
    <div style={{ marginBottom: "15px" }}>
      <input
        type="text"
        placeholder="Enter Subject"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Hours Needed"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
      />

      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />

      <button onClick={handleSubmit}>Add Task</button>
    </div>
    
  );
}

export default TaskForm;