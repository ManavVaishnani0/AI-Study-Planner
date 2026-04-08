import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";

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
      completed: false,
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

  let totalDays = Math.ceil(
    (dueDate - today) / (1000 * 60 * 60 * 24)
  );

  if (totalDays <= 0) return ["Deadline passed"];

  let totalHours = Number(task.hours);
  let remainingHours = totalHours;

  const plan = [];

  // 🔥 CASE 1: <= 3 days → daily
  if (totalDays <= 3) {
    for (let i = 1; i <= totalDays; i++) {
      let hours = Math.ceil(remainingHours / (totalDays - i + 1));
      plan.push(`Day ${i}: ${hours} hrs`);
      remainingHours -= hours;
    }
  }

  // 🔥 CASE 2: 4–29 days → 3-day grouping
  else if (totalDays <= 29) {
    let groupSize = 3;

    for (let i = 0; i < totalDays; i += groupSize) {
      let daysInGroup = Math.min(groupSize, totalDays - i);

      let remainingGroups = Math.ceil((totalDays - i) / groupSize);

      let hours = Math.ceil(remainingHours / remainingGroups);

      plan.push(`Days ${i + 1}-${i + daysInGroup}: ${hours} hrs`);

      remainingHours -= hours;
    }
  }

  // 🔥 CASE 3: > 29 days → WEEKLY + FIRST WEEK DAILY
  else {
    // FIRST WEEK (daily breakdown)
    let firstWeekDays = Math.min(7, totalDays);

    for (let i = 1; i <= firstWeekDays; i++) {
      let hours = Math.ceil(remainingHours / (totalDays - i + 1));
      plan.push(`Day ${i}: ${hours} hrs`);
      remainingHours -= hours;
    }

    // Remaining weeks
    let remainingDays = totalDays - firstWeekDays;
    let weekStart = firstWeekDays + 1;

    while (remainingDays > 0) {
      let daysInWeek = Math.min(7, remainingDays);

      let remainingWeeks = Math.ceil(remainingDays / 7);

      let hours = Math.ceil(remainingHours / remainingWeeks);

      plan.push(
        `Week (${weekStart}-${weekStart + daysInWeek - 1}): ${hours} hrs`
      );

      remainingHours -= hours;
      remainingDays -= daysInWeek;
      weekStart += 7;
    }
  }

  return plan;
};

  const sortedTasks = [...tasks].sort(
    (a, b) => new Date(a.deadline) - new Date(b.deadline)
  );

  return (
  <div className="app-container">
    <div className="card">

      {/* NAVBAR */}
      <div style={{ marginBottom: "15px" }}>
        <Link to="/" style={{ marginRight: "10px", color: "white" }}>
          Home
        </Link>
        <Link to="/dashboard" style={{ color: "white" }}>
          Dashboard
        </Link>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>AI Study Planner</h1>
              <TaskForm addTask={addTask} />
              <TaskList
                tasks={sortedTasks}
                deleteTask={deleteTask}
                toggleComplete={toggleComplete}
                editTask={editTask}
                generatePlan={generatePlan}
              />
            </>
          }
        />

        <Route path="/dashboard" element={<Dashboard tasks={tasks} />} />
      </Routes>

    </div>
  </div>
);
}

export default App;