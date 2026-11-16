
function Devices() {
  const devices = [
    { id: 1, name: 'Temperature Sensor', type: 'Temperature', status: 'Online', value: '28°C' },
    { id: 2, name: 'Humidity Sensor', type: 'Humidity', status: 'Online', value: '65%' },
    { id: 3, name: 'Motion Detector', type: 'Motion', status: 'Offline', value: 'No signal' },
    { id: 4, name: 'Air Quality Sensor', type: 'Air Quality', status: 'Online', value: '42 AQI' }
  ]

  return (
    <section className="devices-page">
      <div className="page-heading">
        <div>
          <h1>IoT Devices</h1>
          <p>Monitor and manage your connected devices.</p>
        </div>
        <button className="add-device-btn">+ Add Device</button>
      </div>

      <div className="devices-table">
        <div className="device-row table-heading">
          <span>Device Name</span>
          <span>Type</span>
          <span>Current Value</span>
          <span>Status</span>
        </div>

        {devices.map((device) => (
          <div className="device-row" key={device.id}>
            <span>{device.name}</span>
            <span>{device.type}</span>
            <span>{device.value}</span>
            <span className={device.status === 'Online' ? 'device-online' : 'device-offline'}>
              {device.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Devices
