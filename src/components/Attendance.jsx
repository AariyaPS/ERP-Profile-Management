function Attendance({ employee }) {
  const attendance = employee.attendance;

  return (
    <div>
      {/*Attendance Summary*/}

      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="card shadow-sm text-center">
            <div className="card-body">
              <h6 className="text-muted">Working Days</h6>

              <h3>{attendance.totalWorkingDays}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm text-center">
            <div className="card-body">
              <h6 className="text-muted">Present Days</h6>

              <h3 className="text-success">{attendance.presentDays}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm text-center">
            <div className="card-body">
              <h6 className="text-muted">Leave Days</h6>

              <h3 className="text-danger">{attendance.leaveDays}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm text-center">
            <div className="card-body">
              <h6 className="text-muted">Total Hours</h6>

              <h3>{attendance.totalHoursWorked}</h3>
            </div>
          </div>
        </div>
      </div>

      {/*Hours Information */}
      <div className="card shadow-sm mb-4">
        <div className="card-header bg-white">
          <h5 className="mb-0">Work Hours Summary</h5>
        </div>

        <div className="card-body">
          <p>
            <strong>Total Hours Worked: </strong> {attendance.totalHoursWorked}{" "}
            hours
          </p>

          <p>
            <strong>Average Hours Worked: </strong>{" "}
            {attendance.averageHoursPerDay} hours
          </p>
        </div>
      </div>

      {/*Leave History*/}
      <div className="card shadow-sm">
        <div className="card-header bg-white">
          <h5 className="mb-0">Leave History</h5>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Form</th>
                  <th>To</th>
                  <th>Days</th>
                  <th>Leave Type</th>
                  <th>Reason</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {attendance.leaves.length > 0 ? (
                  attendance.leaves.map((leave, index) => (
                    <tr key={index}>
                      <td>{leave.from}</td>
                      <td>{leave.to}</td>
                      <td>{leave.days}</td>
                      <td>{leave.type}</td>
                      <td>{leave.reason}</td>
                      <td>
                        <span className="badge bg-success">{leave.status}</span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colspan="6" className="text-center text-muted">
                      No leave records available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attendance;
