function Overview({ employee }) {
  return (
    <div>
      {/*Alerts*/}

      <div className="alert alert-warning">
        Address Proof document is pending.
      </div>

      <div className="alert alert-info">
        Profile is {employee.profileCompletion}% complete.
      </div>

      {/*Overview Cards*/}

      <div className="row g-4">
        <div className="col-md-6 col-xl-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <small className="text-muted">Employment</small>

              <h5 className="mt-2 text-success">
                {employee.employment.status}
              </h5>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <small className="text-muted">Joined</small>
              <h5 className="mt-2">{employee.employment.joiningDate}</h5>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <small className="text-muted">Reporting Manager</small>
              <h5 className="mt-2">{employee.employment.manager}</h5>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <small className="text-muted">Location</small>
              <h5 className="mt-2">{employee.employment.location}</h5>
            </div>
          </div>
        </div>
      </div>

      {/*Profile Creation*/}

      <div className="card shadow-sm mt-4">
        <div className="card-body">
          <h5>Profile Completion</h5>

          <div className="d-flex justif-content-between mb-2">
            <span>Employee profile status</span>

            <strong>{employee.profileCompletion}%</strong>
          </div>

          <div className="progress" style={{ height: "25px" }}>
            <div
              className="progress-bar bg-success"
              style={{ width: `${employee.profileCompletion}%` }}
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

