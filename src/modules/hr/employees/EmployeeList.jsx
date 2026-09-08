import { Link } from "react-router-dom";
import { useEmployees } from "../../../context/EmployeeContext.jsx";

function EmployeeList() {
  const { employees } = useEmployees();
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2>Employees</h2>
          <p className="text-muted">Manage and view all employess</p>
        </div>
        <Link to="/hr/employees/add" className="btn btn-primary">
          + Add Employee
        </Link>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <table className="table table-hover align-middle">
            <thead>
              <tr>
                <th style={{ backgroundColor: "#EA6814", color: "white" }}>
                  Employee ID
                </th>
                <th style={{ backgroundColor: "#EA6814", color: "white" }}>
                  Name
                </th>
                <th style={{ backgroundColor: "#EA6814", color: "white" }}>
                  Department
                </th>
                <th style={{ backgroundColor: "#EA6814", color: "white" }}>
                  Designation
                </th>
                <th style={{ backgroundColor: "#EA6814", color: "white" }}>
                  Status
                </th>
                <th style={{ backgroundColor: "#EA6814", color: "white" }}>
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.employeeId}</td>

                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src={employee.photo}
                        alt={employee.name}
                        width="40"
                        height="40"
                        className="rounded-circle me-2"
                      />
                      {employee.name}
                    </div>
                  </td>

                  <td>{employee.employment?.department}</td>

                  <td>{employee.employment?.designation}</td>

                  <td>
                    <span className="badge bg-success">
                      {employee.employment?.status}
                    </span>
                  </td>

                  <td>
                    <Link
                      to={`/hr/employees/${employee.id}`}
                      className="btn btn-sm btn-outline-primary"
                    >
                      {" "}
                      View{" "}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmployeeList;
