function Dashboard({ tasks }) {
  const totalTasks = tasks?.length || 0;

  const completedTasks = tasks
    ? tasks.filter((task) => task.completed).length
    : 0;

  const totalHours = tasks
    ? tasks.reduce((sum, task) => sum + Number(task.hours || 0), 0)
    : 0;

  const completedHours = tasks
    ? tasks
        .filter((task) => task.completed)
        .reduce((sum, task) => sum + Number(task.hours || 0), 0)
    : 0;

  const progress =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  return (
    <div style={{ color: "white" }}>
      <h1 style={{ textAlign: "center" }}>📊 Dashboard</h1>

      {/* Stats Card */}
      <div
        style={{
          background: "#334155",
          padding: "15px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <p>📘 Total Subjects: {totalTasks}</p>
        <p>✅ Completed: {completedTasks}</p>
        <p>⏳ Total Study Hours: {totalHours}</p>
        <p>✔ Completed Hours: {completedHours}</p>
      </div>

      {/* Progress Section */}
      <div style={{ marginTop: "20px" }}>
        <p>📊 Progress: {progress}%</p>

        <div
          style={{
            background: "#1e293b",
            borderRadius: "10px",
            overflow: "hidden",
            height: "20px",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              background: "#22c55e",
              height: "100%",
              transition: "0.3s",
            }}
          ></div>
        </div>
      </div>

      {/* Empty State */}
      {totalTasks === 0 && (
        <p style={{ marginTop: "15px", textAlign: "center" }}>
          🚀 No data yet — start adding subjects!
        </p>
      )}
    </div>
  );
}

export default Dashboard;