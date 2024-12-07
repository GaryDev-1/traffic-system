import {
  LineChart,
  BarChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Calendar, TrendingUp, Users, Clock } from "lucide-react";

const Analytics = () => {
  const trafficTrends = [
    { day: "Mon", vehicles: 45 },
    { day: "Tue", vehicles: 52 },
    { day: "Wed", vehicles: 49 },
    { day: "Thu", vehicles: 63 },
    { day: "Fri", vehicles: 58 },
    { day: "Sat", vehicles: 40 },
    { day: "Sun", vehicles: 35 },
  ];

  const peakHours = [
    { hour: "6AM", count: 15 },
    { hour: "9AM", count: 45 },
    { hour: "12PM", count: 30 },
    { hour: "3PM", count: 35 },
    { hour: "6PM", count: 40 },
    { hour: "9PM", count: 20 },
  ];

  const vehicleTypes = [
    { name: "Heavy Trucks", value: 45 },
    { name: "Light Trucks", value: 30 },
    { name: "Vans", value: 15 },
    { name: "Cars", value: 10 },
  ];

  const COLORS = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4"];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-primary">Analytics Dashboard</h1>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-primary">
              <TrendingUp className="h-8 w-8" />
            </div>
            <div className="stat-title">Total Traffic</div>
            <div className="stat-value">789</div>
            <div className="stat-desc">↗︎ 45 (14%)</div>
          </div>
        </div>

        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <Clock className="h-8 w-8" />
            </div>
            <div className="stat-title">Avg. Time on Site</div>
            <div className="stat-value">2.6h</div>
            <div className="stat-desc">↘︎ 0.4h</div>
          </div>
        </div>

        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-accent">
              <Users className="h-8 w-8" />
            </div>
            <div className="stat-title">Peak Capacity</div>
            <div className="stat-value">85%</div>
            <div className="stat-desc">↗︎ 5%</div>
          </div>
        </div>

        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-info">
              <Calendar className="h-8 w-8" />
            </div>
            <div className="stat-title">Monthly Total</div>
            <div className="stat-value">3,849</div>
            <div className="stat-desc">↗︎ 400</div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Traffic Trends */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Weekly Traffic Trends</h2>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trafficTrends}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    className="stroke-base-content/20"
                  />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="vehicles"
                    stroke="hsl(var(--p))"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Peak Hours */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Peak Hours Distribution</h2>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={peakHours}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    className="stroke-base-content/20"
                  />
                  <XAxis dataKey="hour" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="hsl(var(--p))" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Vehicle Types */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Vehicle Type Distribution</h2>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={vehicleTypes}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {vehicleTypes.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {vehicleTypes.map((type, index) => (
                <div key={type.name} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[index] }}
                  />
                  <span className="text-sm">{type.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Monthly Summary Card */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Monthly Summary</h2>
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>Value</th>
                    <th>Change</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Total Vehicles</td>
                    <td>3,849</td>
                    <td className="text-success">↑ 12%</td>
                  </tr>
                  <tr>
                    <td>Avg Daily Traffic</td>
                    <td>128</td>
                    <td className="text-success">↑ 5%</td>
                  </tr>
                  <tr>
                    <td>Peak Time</td>
                    <td>9:00 AM</td>
                    <td>No change</td>
                  </tr>
                  <tr>
                    <td>Capacity Alerts</td>
                    <td>12</td>
                    <td className="text-error">↑ 2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
