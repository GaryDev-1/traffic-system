import { Bell, AlertTriangle, Info } from "lucide-react";

const AlertSystem = ({ alerts = [] }) => {
  const demoAlerts = [
    {
      id: 1,
      type: "warning",
      message: "Site approaching maximum capacity (80%)",
      timestamp: new Date().toISOString(),
    },
    {
      id: 2,
      type: "info",
      message: "Scheduled maintenance in 2 days",
      timestamp: new Date().toISOString(),
    },
  ];

  const displayAlerts = alerts.length > 0 ? alerts : demoAlerts;

  return (
    <div className="space-y-4">
      {displayAlerts.map((alert) => (
        <div
          key={alert.id}
          className={`alert ${
            alert.type === "warning"
              ? "alert-warning"
              : alert.type === "error"
              ? "alert-error"
              : "alert-info"
          }`}
        >
          {alert.type === "warning" ? (
            <AlertTriangle className="h-5 w-5" />
          ) : alert.type === "error" ? (
            <AlertTriangle className="h-5 w-5" />
          ) : (
            <Info className="h-5 w-5" />
          )}
          <div>
            <div className="font-bold">{alert.message}</div>
            <div className="text-xs opacity-70">
              {new Date(alert.timestamp).toLocaleTimeString()}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlertSystem;
