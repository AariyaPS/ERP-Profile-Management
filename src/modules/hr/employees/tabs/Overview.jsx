function Overview({ employee }) {
  return (
    <div>

      {/* ALERTS */}

      <div className="alert alert-warning">
        Address Proof document is pending.
      </div>

      <div className="alert alert-info">
        Profile is {employee.profileCompletion}% complete.
      </div>

      {/* OVERVIEW CARDS */}

      <div className="row g-4">

        {/* Employment */}
        <div className="col-md-6 col-xl-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <small className="text-muted">Employment</small>

              <h5 className="mt-2 text-success">
                {employee.employment?.status || "-"}
              </h5>
            </div>
          </div>
        </div>

        {/* Joined */}
        <div className="col-md-6 col-xl-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <small className="text-muted">Joined</small>

              <h5 className="mt-2">
                {employee.employment?.joiningDate || "-"}
              </h5>
            </div>
          </div>
        </div>

        {/* Reporting Manager */}
        <div className="col-md-6 col-xl-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <small className="text-muted">
                Reporting Manager
              </small>

              <h5 className="mt-2">
                {employee.employment?.manager || "-"}
              </h5>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="col-md-6 col-xl-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <small className="text-muted">Location</small>

              <h5 className="mt-2">
                {employee.employment?.location || "-"}
              </h5>
            </div>
          </div>
        </div>

      </div>

      {/* PROFILE COMPLETION */}

      <div className="card shadow-sm mt-4">
        <div className="card-body">

          <div className="d-flex justify-content-between mb-2">
            <h5 className="mb-0">
              Profile Completion
            </h5>

            <strong>
              {employee.profileCompletion}%
            </strong>
          </div>

          <div
            className="progress"
            style={{ height: "25px" }}
          >
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: `${employee.profileCompletion}%`,
                backgroundColor: "#EA6814",
              }}
            >
              {employee.profileCompletion}%
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Overview;