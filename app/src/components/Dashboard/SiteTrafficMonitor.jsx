import { Truck, AlertTriangle } from 'lucide-react'
import TrafficChart from './TrafficChart'
import AlertSystem from './AlertSystem'

const SiteTrafficMonitor = () => {
  const siteData = {
    currentVehicles: 15,
    maxCapacity: 25,
    status: 'Normal Operation',
    alerts: []
  }

  const isNearCapacity = siteData.currentVehicles >= siteData.maxCapacity * 0.8
  const percentage = (siteData.currentVehicles / siteData.maxCapacity) * 100

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-primary">TRAFFIC MANAGEMENT</h1>
        <button className="btn btn-primary">Generate Report</button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Status Card */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <Truck className="h-8 w-8 text-primary" />
                <div>
                  <h2 className="card-title">Current Status</h2>
                  <p className="text-base-content/60">Site Capacity</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">
                  {siteData.currentVehicles} / {siteData.maxCapacity}
                </div>
                <div className={`text-sm ${isNearCapacity ? 'text-warning' : 'text-success'}`}>
                  {siteData.status}
                </div>
              </div>
            </div>

            <progress 
              className={`progress w-full ${isNearCapacity ? 'progress-warning' : 'progress-success'}`} 
              value={percentage} 
              max="100"
            ></progress>
          </div>
        </div>

        {/* Alert Card */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              <AlertTriangle className="h-6 w-6 text-warning" />
              Active Alerts
            </h2>
            {siteData.alerts.length === 0 ? (
              <div className="alert alert-success">
                <span>No active alerts at this time</span>
              </div>
            ) : (
              <AlertSystem alerts={siteData.alerts} />
            )}
          </div>
        </div>
      </div>

      {/* Traffic Chart */}
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Traffic Flow</h2>
          <TrafficChart />
        </div>
      </div>
    </div>
  )
}

export default SiteTrafficMonitor