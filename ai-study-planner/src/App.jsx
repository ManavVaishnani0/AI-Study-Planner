import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  // Load from localStorage
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save to localStorage whenever tasks change
  useEffect(() => {
    console.log("Saving tasks:", tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add task
  const addTask = (name, hours, deadline) => {
    const newTask = { name, hours, deadline };
    setTasks([...tasks, newTask]);
  };

  // Delete task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
  <div className="app-container">
    <div className="card">
      <h1>AI Study Planner</h1>

      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  </div>
  );
}

export default App;