function EmploymentDetails({ employee }) {
  const data = employee.employment;

  return (
    <div className="card shadow-sm">

      <div className="card-header bg-white">
        <h5>Employment Details</h5>
      </div>

      <div className="card-body">

        <div className="row">

          <div className="col-md-6">
            <p>
              <strong>Employee ID:</strong> {employee.employeeId}
            </p>

            <p>
              <strong>Designation:</strong> {data.designation}
            </p>

            <p>
              <strong>Department:</strong> {data.department}
            </p>

            <p>
              <strong>Location:</strong> {data.location}
            </p>
          </div>

          <div className="col-md-6">
            <p>
              <strong>Joining Date:</strong> {data.joiningDate}
            </p>

            <p>
              <strong>Employment Type:</strong> {data.employmentType}
            </p>

            <p>
              <strong>Reporting Manager:</strong> {data.manager}
            </p>

            <p>
              <strong>Grade:</strong> {data.grade}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default EmploymentDetails;