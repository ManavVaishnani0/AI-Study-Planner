import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (name, hours, deadline) => {
    const newTask = {
      id: Date.now(),
      name,
      hours,
      deadline,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
  setTasks(tasks.filter(task => task.id !== id));
};

const toggleComplete = (id) => {
  const updated = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  setTasks(updated);
};

const editTask = (id, newName) => {
  const updated = tasks.map(task =>
    task.id === id ? { ...task, name: newName } : task
  );
  setTasks(updated);
};

  const generatePlan = (task) => {
    const today = new Date();
    const dueDate = new Date(task.deadline);

    const days = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24));
    if (days <= 0) return ["Deadline passed"];

    const hoursPerDay = (task.hours / days).toFixed(2);

    return Array.from({ length: days }, (_, i) =>
      `Day ${i + 1}: ${hoursPerDay} hrs`
    );
  };

  const sortedTasks = [...tasks].sort(
    (a, b) => new Date(a.deadline) - new Date(b.deadline)
  );

  return (
    <div className="app-container">
      <div className="card">
        <h1>AI Study Planner</h1>

        <TaskForm addTask={addTask} />

        <TaskList
          tasks={sortedTasks}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          editTask={editTask}
          generatePlan={generatePlan}
        />
      </div>
    </div>
  );
}

export default App;