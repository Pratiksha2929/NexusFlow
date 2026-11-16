
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Devices from './pages/Devices'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <aside className="sidebar">
          <h2 className="logo">NexusFlow</h2>

          <p className="menu-heading">MAIN MENU</p>

          <nav>
            <NavLink to="/">Dashboard</NavLink>
            <NavLink to="/workflows">Workflow Builder</NavLink>
            <NavLink to="/devices">Devices</NavLink>
            <NavLink to="/analytics">Analytics</NavLink>
            <NavLink to="/alerts">Alerts</NavLink>
          </nav>

          <div className="sidebar-footer">
            <p>IoT Automation Platform</p>
            <span>Version 1.0.0</span>
          </div>
        </aside>

        <main className="main-content">
          <header className="topbar">
            <div>
              <h2>NexusFlow Dashboard</h2>
              <p>Your IoT monitoring workspace</p>
            </div>
            <div className="profile">Admin</div>
          </header>

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/workflows" element={<h1>Workflow Builder</h1>} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/analytics" element={<h1>Analytics</h1>} />
            <Route path="/alerts" element={<h1>Alerts</h1>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
