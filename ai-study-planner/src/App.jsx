import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (name, hours) => {
    const newTask = { name, hours };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>AI Study Planner</h1>

      <TaskForm addTask={addTask} />

      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;