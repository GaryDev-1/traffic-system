const Settings = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-primary">Settings</h1>
      <div className="card bg-base-200">
        <div className="card-body">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Site Name</span>
            </label>
            <input
              type="text"
              placeholder="Main Facility"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Maximum Vehicle Capacity</span>
            </label>
            <input
              type="number"
              placeholder="25"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="mt-6">
            <button className="btn btn-primary">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
