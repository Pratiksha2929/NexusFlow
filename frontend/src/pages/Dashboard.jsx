
function Dashboard() {
  return (
    <>
      <section className="welcome">
        <h1>Welcome to NexusFlow</h1>
        <p>
          Monitor devices, visualize workflows and manage IoT automation.
        </p>
      </section>

      <section className="stats">
        <div className="stat-card">
          <p>Total Devices</p>
          <h2>24</h2>
          <span>Connected devices</span>
        </div>

        <div className="stat-card">
          <p>Active Workflows</p>
          <h2>08</h2>
          <span>Running workflows</span>
        </div>

        <div className="stat-card">
          <p>Alerts Today</p>
          <h2>03</h2>
          <span>Triggered alerts</span>
        </div>

        <div className="stat-card">
          <p>System Status</p>
          <h2 className="online">Online</h2>
          <span>All systems operational</span>
        </div>
      </section>
    </>
  )
}

export default Dashboard
