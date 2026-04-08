function Home({ children }) {
  return (
    <div
      style={{
        padding: "10px",
        color: "white",
      }}
    >
      {/* Optional header */}
      <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
        📚 Study Planner
      </h2>

      {/* Main content */}
      {children}
    </div>
  );
}

export default Home;