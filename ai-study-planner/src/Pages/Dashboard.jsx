function Dashboard({ tasks }) {
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(task => task.completed).length;

  const totalHours = tasks.reduce(
    (sum, task) => sum + Number(task.hours),
    0
  );

  const completedHours = tasks
    .filter(task => task.completed)
    .reduce((sum, task) => sum + Number(task.hours), 0);

  const progress = totalTasks === 0
    ? 0
    : Math.round((completedTasks / totalTasks) * 100);

  return (
    <div style={{ color: "white" }}>
      <h1>Dashboard</h1>

      <p>Total Tasks: {totalTasks}</p>
      <p>Completed Tasks: {completedTasks}</p>
      <p>Total Study Hours: {totalHours}</p>
      <p>Completed Hours: {completedHours}</p>

      <p>Progress: {progress}%</p>

      {/* Progress Bar */}
      <div style={{
        background: "#334155",
        borderRadius: "10px",
        overflow: "hidden",
        height: "20px",
        marginTop: "10px"
      }}>
        <div style={{
          width: `${progress}%`,
          background: "#22c55e",
          height: "100%"
        }}></div>
      </div>
    </div>
  );
}

export default Dashboard;