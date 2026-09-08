import EditEmployee from "./EditEmployee";

function ProfileHeader({ employee, updateEmployee }) {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-md-8">
            <div className="d-flex align-items-center">
              <img
                src={employee.photo}
                alt={employee.name}
                className="rounded-circle profile-image me-4"
              />

              <div>
                <h3 className="mb-1">{employee.name}</h3>

                <p className="text-muted mb-2">{employee.employeeId}</p>

                <p className="mb-1">
                  <strong>{employee.employment.designation}</strong>
                </p>

                <p className="text-muted mb-0">
                  {employee.employment.department}
                  {" • "}
                  {employee.employment.location}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 text-md-end mt-3 mt-md-0">
            <span className="badge bg-success fs-6 mb-3">
              {employee.employment.status}
            </span>

            <div>
              {/* ACTION BUTTONS */}
              <div className="d-flex gap-2 align-items-center">
                <EditEmployee
                  employee={employee}
                  updateEmployee={updateEmployee}
                />

                {/* More Dropdown */}
                <div className="dropdown">
                  <button
                    className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    More
                  </button>

                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <button className="dropdown-item">
                        📄 Upload Document
                      </button>
                    </li>

                    <li>
                      <button className="dropdown-item">
                        🔄 Change Status
                      </button>
                    </li>

                    <li>
                      <button className="dropdown-item">💻 Assign Asset</button>
                    </li>

                    <li>
                      <button className="dropdown-item">🕒 View History</button>
                    </li>

                    <li>
                      <hr className="dropdown-divider" />
                    </li>

                    <li>
                      <button className="dropdown-item text-danger">
                        🚫 Deactivate Employee
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
