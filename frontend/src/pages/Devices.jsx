
import { useState } from 'react'

function Devices() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [showForm, setShowForm] = useState(false)
  const [deviceName, setDeviceName] = useState('')
  const [deviceType, setDeviceType] = useState('')

  const [devices, setDevices] = useState([
    { id: 1, name: 'Temperature Sensor', type: 'Temperature', status: 'Online', value: '28°C' },
    { id: 2, name: 'Humidity Sensor', type: 'Humidity', status: 'Online', value: '65%' },
    { id: 3, name: 'Motion Detector', type: 'Motion', status: 'Offline', value: 'No signal' },
    { id: 4, name: 'Air Quality Sensor', type: 'Air Quality', status: 'Online', value: '42 AQI' }
  ])


  const totalDevices = devices.length

const onlineDevices = devices.filter(
  (device) => device.status === 'Online'
).length

const offlineDevices = devices.filter(
  (device) => device.status === 'Offline'
).length

  
const filteredDevices = devices.filter((device) => {
  const matchesSearch =
    device.name.toLowerCase().includes(search.toLowerCase()) ||
    device.type.toLowerCase().includes(search.toLowerCase())

  const matchesStatus =
    statusFilter === 'All' || device.status === statusFilter

  return matchesSearch && matchesStatus
})

  

  
const handleAddDevice = (event) => {
  event.preventDefault()

  const newDevice = {
    id: Date.now(),
    name: deviceName,
    type: deviceType,
    status: 'Online',
    value: 'No data'
  }

  setDevices([...devices, newDevice])
  setDeviceName('')
  setDeviceType('')
  setShowForm(false)
}

const handleDeleteDevice = (id) => {
  setDevices((currentDevices) =>
    currentDevices.filter((device) => device.id !== id)
  )
}


const handleToggleStatus = (id) => {
  setDevices((currentDevices) =>
    currentDevices.map((device) =>
      device.id === id
        ? {
            ...device,
            status: device.status === 'Online' ? 'Offline' : 'Online'
          }
        : device
    )
  )
}


  return (
    <section className="devices-page">
      <div className="page-heading">
        <div>
          <h1>IoT Devices</h1>
          <p>Monitor and manage your connected devices.</p>
        </div>

        <button
          className="add-device-btn"
          onClick={() => setShowForm(!showForm)}
        >
          + Add Device
        </button>
      </div>

      {showForm && (
        <form className="add-device-form" onSubmit={handleAddDevice}>
          <input
            type="text"
            placeholder="Enter device name"
            value={deviceName}
            onChange={(event) => setDeviceName(event.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Enter device type"
            value={deviceType}
            onChange={(event) => setDeviceType(event.target.value)}
            required
          />

          <button type="submit" className="add-device-btn">
            Save Device
          </button>
        </form>
      )}

      <div className="device-search">

<div className="device-stats">
  <div className="device-stat-card">
    <h3>Total Devices</h3>
    <p>{totalDevices}</p>
  </div>

  <div className="device-stat-card">
    <h3>Online Devices</h3>
    <p>{onlineDevices}</p>
  </div>

  <div className="device-stat-card">
    <h3>Offline Devices</h3>
    <p>{offlineDevices}</p>
  </div>
</div>

        
<div className="device-search">
  <input
    type="text"
    placeholder="Search devices by name or type..."
    value={search}
    onChange={(event) => setSearch(event.target.value)}
  />

  <select
    value={statusFilter}
    onChange={(event) => setStatusFilter(event.target.value)}
  >
    <option value="All">All Devices</option>
    <option value="Online">Online Devices</option>
    <option value="Offline">Offline Devices</option>
  </select>
</div>
</div>

      <div className="devices-table">
        <div className="device-row table-heading">
          <span>Device Name</span>
          <span>Type</span>
          <span>Current Value</span>
          <span>Status</span>
        </div>

        {filteredDevices.length > 0 ? (
          filteredDevices.map((device) => (
            <div className="device-row" key={device.id}>
              <span>{device.name}</span>
              <span>{device.type}</span>
              <span>{device.value}</span>
              <span className={device.status === 'Online' ? 'device-online' : 'device-offline'}>
  {device.status}
</span>

<button
  className="delete-device-btn"
  onClick={() => handleDeleteDevice(device.id)}
>
  Delete
</button>


<button
  className="status-toggle-btn"
  onClick={() => handleToggleStatus(device.id)}
>
  Change Status
</button>

            </div>
          ))
        ) : (
          <p className="no-devices">No matching devices found.</p>
        )}
      </div>
    </section>
  )
}

export default Devices
