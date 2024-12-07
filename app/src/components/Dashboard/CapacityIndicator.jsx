import { Truck } from "lucide-react";

const CapacityIndicator = ({ data }) => {
  const { currentVehicles, maxCapacity, status } = data;
  const percentage = (currentVehicles / maxCapacity) * 100;
  const isNearCapacity = percentage >= 80;

  return (
    <div className="card bg-base-200 shadow-xl">
      <div className="card-body">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <Truck className="h-8 w-8 text-primary" />
            <div>
              <h2 className="card-title">Site Capacity</h2>
              <p className="text-base-content/60">Current Status</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">
              {currentVehicles} / {maxCapacity}
            </div>
            <div
              className={`text-sm ${
                isNearCapacity ? "text-warning" : "text-success"
              }`}
            >
              {status}
            </div>
          </div>
        </div>

        <progress
          className={`progress w-full ${
            isNearCapacity ? "progress-warning" : "progress-success"
          }`}
          value={percentage}
          max="100"
        ></progress>

        <div className="mt-4 text-sm text-base-content/70">
          {isNearCapacity ? "Near maximum capacity" : "Operating normally"}
        </div>
      </div>
    </div>
  );
};

export default CapacityIndicator;
