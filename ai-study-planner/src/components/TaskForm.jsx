import { useState } from "react";

function TaskForm({ addTask }) {
  const [name, setName] = useState("");
  const [hours, setHours] = useState("");

  const handleSubmit = () => {
    if (name === "" || hours === "") return;

    addTask(name, hours);

    setName("");
    setHours("");
  };

  return (
    <div>
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

      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
}

export default TaskForm;