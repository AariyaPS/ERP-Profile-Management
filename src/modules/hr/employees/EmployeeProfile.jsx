import { Link, useParams } from "react-router-dom";
import { useEmployees } from "../../../context/EmployeeContext.jsx";
import { useState } from "react";
import Overview from "./tabs/Overview.jsx";

function EmployeeProfile() {
  const { id } = useParams();
  const { employees } = useEmployees();
  const [activeTab, setActiveTab] = useState("overview");

  const employee = employees.find(
    (employee) => String(employee.id) === String(id),
  );

  if (!employee) {
    return (
      <div className="card shadow-sm">
        <div className="card-body">
          <h4>Employee Not Found</h4>

          <Link to="/hr/employees" className="btn btn-primary mt-3">
            Back to Employees
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* =================================
            BACK TO EMPLOYEES
        ================================= */}

      <div className="mb-3">
        <Link to="/hr/employees" className="btn btn-outline-primary">
          ← Back to Employees
        </Link>
      </div>

      {/* =================================
                PROFILE HEADER
            ================================= */}

      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img
                src={employee.photo}
                alt={employee.name}
                className="rounded-circle profile-image me-4"
              />

              <div>
                <h2 className="mb-1">{employee.name}</h2>

                <p className="text-muted mb-1">
                  {employee.employment?.designation}
                </p>

                <p className="text-muted mb-0">
                  {employee.employeeId} &nbsp; | &nbsp;
                  {employee.employment?.department}
                </p>
              </div>
            </div>

            {/* EDIT PROFILE */}

            <Link
              to={`/hr/employees/${employee.id}/edit`}
              className="btn btn-primary"
            >
              Edit Profile
            </Link>
          </div>
        </div>
      </div>

      {/* =================================
                PROFILE COMPLETION
            ================================= */}

      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <div className="d-flex justify-content-between mb-2">
            <h5 className="mb-0">Profile Completion</h5>

            <strong className="text-primary">
              {employee.profileCompletion}%
            </strong>
          </div>

          <div className="progress" style={{ height: "10px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: `${employee.profileCompletion}%`,
                backgroundColor: "#EA6814",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* =================================
        PROFILE TABS
      ================================= */}

      <div className="card shadow-sm mb-4">
        <div className="card-body p-0">
          <ul className="nav nav-tabs px-3">
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "overview" ? "active" : ""
                }`}
                onClick={() => setActiveTab("overview")}
              >
                Overview
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "personal" ? "active" : ""
                }`}
                onClick={() => setActiveTab("personal")}
              >
                Personal
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "employment" ? "active" : ""
                }`}
                onClick={() => setActiveTab("employment")}
              >
                Employment
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "contacts" ? "active" : ""
                }`}
                onClick={() => setActiveTab("contacts")}
              >
                Contacts
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "banking" ? "active" : ""
                }`}
                onClick={() => setActiveTab("banking")}
              >
                Banking
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "documents" ? "active" : ""
                }`}
                onClick={() => setActiveTab("documents")}
              >
                Documents
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "qualifications" ? "active" : ""
                }`}
                onClick={() => setActiveTab("qualifications")}
              >
                Qualifications
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "assets" ? "active" : ""}`}
                onClick={() => setActiveTab("assets")}
              >
                Assets
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "access" ? "active" : ""}`}
                onClick={() => setActiveTab("access")}
              >
                Access
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "history" ? "active" : ""
                }`}
                onClick={() => setActiveTab("history")}
              >
                History
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "attendance" ? "active" : ""
                }`}
                onClick={() => setActiveTab("attendance")}
              >
                Attendance
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* OVERVIEW */}

      {activeTab === "overview" && <Overview employee={employee} />}

      {/* =================================
                PERSONAL INFORMATION
            ================================= */}

      {activeTab === "personal" && (
        <>
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-orange-light">
              <h5 className="mb-0">Personal Information</h5>
            </div>

            <div className="card-body">
              <div className="row g-4">
                <div className="col-md-4">
                  <strong>Date of Birth</strong>
                  <p className="text-muted mb-0">
                    {employee.personal?.dob || "-"}
                  </p>
                </div>

                <div className="col-md-4">
                  <strong>Gender</strong>
                  <p className="text-muted mb-0">
                    {employee.personal?.gender || "-"}
                  </p>
                </div>

                <div className="col-md-4">
                  <strong>Nationality</strong>
                  <p className="text-muted mb-0">
                    {employee.personal?.nationality || "-"}
                  </p>
                </div>

                <div className="col-md-4">
                  <strong>Email</strong>
                  <p className="text-muted mb-0">
                    {employee.personal?.email || "-"}
                  </p>
                </div>

                <div className="col-md-4">
                  <strong>Phone</strong>
                  <p className="text-muted mb-0">
                    {employee.personal?.phone || "-"}
                  </p>
                </div>

                <div className="col-md-4">
                  <strong>Marital Status</strong>
                  <p className="text-muted mb-0">
                    {employee.personal?.maritalStatus || "-"}
                  </p>
                </div>

                <div className="col-12">
                  <strong>Address</strong>
                  <p className="text-muted mb-0">
                    {employee.personal?.address || "-"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* =================================
                EMPLOYMENT DETAILS
            ================================= */}

      {activeTab === "employment" && (
        <>
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-orange-light">
              <h5 className="mb-0">Employment Details</h5>
            </div>

            <div className="card-body">
              <div className="row g-4">
                <div className="col-md-4">
                  <strong>Designation</strong>
                  <p className="text-muted mb-0">
                    {employee.employment?.designation || "-"}
                  </p>
                </div>

                <div className="col-md-4">
                  <strong>Department</strong>
                  <p className="text-muted mb-0">
                    {employee.employment?.department || "-"}
                  </p>
                </div>

                <div className="col-md-4">
                  <strong>Location</strong>
                  <p className="text-muted mb-0">
                    {employee.employment?.location || "-"}
                  </p>
                </div>

                <div className="col-md-4">
                  <strong>Joining Date</strong>
                  <p className="text-muted mb-0">
                    {employee.employment?.joiningDate || "-"}
                  </p>
                </div>

                <div className="col-md-4">
                  <strong>Employment Type</strong>
                  <p className="text-muted mb-0">
                    {employee.employment?.employmentType || "-"}
                  </p>
                </div>

                <div className="col-md-4">
                  <strong>Manager</strong>
                  <p className="text-muted mb-0">
                    {employee.employment?.manager || "-"}
                  </p>
                </div>

                <div className="col-md-4">
                  <strong>Grade</strong>
                  <p className="text-muted mb-0">
                    {employee.employment?.grade || "-"}
                  </p>
                </div>

                <div className="col-md-4">
                  <strong>Status</strong>

                  <p className="mb-0">
                    <span className="badge bg-success">
                      {employee.employment?.status || "-"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* =================================
                EMERGENCY CONTACT
            ================================= */}
      {activeTab === "contacts" && (
        <>
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-orange-light">
              <h5 className="mb-0">Emergency Contact</h5>
            </div>

            <div className="card-body">
              <div className="row g-4">
                <div className="col-md-3">
                  <strong>Name</strong>
                  <p className="text-muted mb-0">
                    {employee.emergencyContact?.name || "-"}
                  </p>
                </div>

                <div className="col-md-3">
                  <strong>Relationship</strong>
                  <p className="text-muted mb-0">
                    {employee.emergencyContact?.relationship || "-"}
                  </p>
                </div>

                <div className="col-md-3">
                  <strong>Phone</strong>
                  <p className="text-muted mb-0">
                    {employee.emergencyContact?.phone || "-"}
                  </p>
                </div>

                <div className="col-md-3">
                  <strong>Email</strong>
                  <p className="text-muted mb-0">
                    {employee.emergencyContact?.email || "-"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* =================================
                BANKING INFORMATION
            ================================= */}

      {activeTab === "banking" && (
        <>
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-orange-light">
              <h5 className="mb-0">Banking Information</h5>
            </div>

            <div className="card-body">
              <div className="row g-4">
                <div className="col-md-3">
                  <strong>Bank Name</strong>
                  <p className="text-muted mb-0">
                    {employee.banking?.bankName || "-"}
                  </p>
                </div>

                <div className="col-md-3">
                  <strong>Account Number</strong>
                  <p className="text-muted mb-0">
                    {employee.banking?.accountNumber || "-"}
                  </p>
                </div>

                <div className="col-md-3">
                  <strong>IFSC</strong>
                  <p className="text-muted mb-0">
                    {employee.banking?.ifsc || "-"}
                  </p>
                </div>

                <div className="col-md-3">
                  <strong>Account Holder</strong>
                  <p className="text-muted mb-0">
                    {employee.banking?.accountHolder || "-"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* =================================
                DOCUMENTS
            ================================= */}

      {activeTab === "documents" && (
        <>
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-orange-light">
              <h5 className="mb-0">Documents</h5>
            </div>

            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead>
                    <tr>
                      <th>Document</th>
                      <th>Type</th>
                      <th>Status</th>
                      <th>Uploaded On</th>
                    </tr>
                  </thead>

                  <tbody>
                    {employee.documents?.map((document) => (
                      <tr key={document.id}>
                        <td>{document.name}</td>

                        <td>{document.type}</td>

                        <td>
                          <span
                            className={
                              document.status === "Uploaded"
                                ? "badge bg-success"
                                : "badge bg-warning text-dark"
                            }
                          >
                            {document.status}
                          </span>
                        </td>

                        <td>{document.uploadedOn}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}

      {/* =================================
                QUALIFICATIONS
            ================================= */}
      {activeTab === "qualifications" && (
        <>
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-orange-light">
              <h5 className="mb-0">Qualifications & Skills</h5>
            </div>

            <div className="card-body">
              <h6>Qualifications</h6>

              <div className="table-responsive mb-4">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Qualification</th>
                      <th>Institution</th>
                      <th>Year</th>
                    </tr>
                  </thead>

                  <tbody>
                    {employee.qualifications?.map((qualification, index) => (
                      <tr key={index}>
                        <td>{qualification.qualification}</td>

                        <td>{qualification.institution}</td>

                        <td>{qualification.year}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h6>Skills</h6>

              <div className="d-flex flex-wrap gap-2">
                {employee.skills?.map((skill, index) => (
                  <span key={index} className="badge bg-orange-light text-dark">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* =================================
                ASSETS
            ================================= */}
      {activeTab === "assets" && (
        <>
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-orange-light">
              <h5 className="mb-0">Assets</h5>
            </div>

            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Asset</th>
                      <th>Asset ID</th>
                      <th>Assigned Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {employee.assets?.map((asset, index) => (
                      <tr key={index}>
                        <td>{asset.asset}</td>

                        <td>{asset.assetId}</td>

                        <td>{asset.assignedDate}</td>

                        <td>
                          <span className="badge bg-success">
                            {asset.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}

      {/* =================================
                ACCESS & PERMISSIONS
            ================================= */}
      {activeTab === "access" && (
        <>
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-orange-light">
              <h5 className="mb-0">Access & Permissions</h5>
            </div>

            <div className="card-body">
              <div className="row g-4">
                <div className="col-md-4">
                  <strong>Role</strong>
                  <p className="text-muted mb-0">
                    {employee.access?.role || "-"}
                  </p>
                </div>

                <div className="col-md-4">
                  <strong>Approval Authority</strong>
                  <p className="text-muted mb-0">
                    {employee.access?.approvalAuthority || "-"}
                  </p>
                </div>

                <div className="col-md-4">
                  <strong>Last Login</strong>
                  <p className="text-muted mb-0">
                    {employee.access?.lastLogin || "-"}
                  </p>
                </div>

                <div className="col-12">
                  <strong>Applications</strong>

                  <div className="d-flex flex-wrap gap-2 mt-2">
                    {employee.access?.applications?.map(
                      (application, index) => (
                        <span
                          key={index}
                          className="badge bg-orange-light text-dark"
                        >
                          {application}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* =================================
                HISTORY
            ================================= */}
      {activeTab === "history" && (
        <>
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-orange-light">
              <h5 className="mb-0">Change History</h5>
            </div>

            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Field</th>
                      <th>Old Value</th>
                      <th>New Value</th>
                      <th>Changed By</th>
                    </tr>
                  </thead>

                  <tbody>
                    {employee.history?.map((item, index) => (
                      <tr key={index}>
                        <td>{item.date}</td>

                        <td>{item.field}</td>

                        <td>{item.oldValue}</td>

                        <td>{item.newValue}</td>

                        <td>{item.changedBy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}

      {/* =================================
                ATTENDANCE
            ================================= */}

      {activeTab === "attendance" && (
        <>
          <div className="card shadow-sm mb-5">
            <div className="card-header bg-orange-light">
              <h5 className="mb-0">Attendance Summary</h5>
            </div>

            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-3">
                  <div className="border rounded p-3 text-center">
                    <h4>{employee.attendance?.totalWorkingDays || 0}</h4>

                    <small className="text-muted">Working Days</small>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="border rounded p-3 text-center">
                    <h4>{employee.attendance?.presentDays || 0}</h4>

                    <small className="text-muted">Present Days</small>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="border rounded p-3 text-center">
                    <h4>{employee.attendance?.leaveDays || 0}</h4>

                    <small className="text-muted">Leave Days</small>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="border rounded p-3 text-center">
                    <h4>{employee.attendance?.totalHoursWorked || 0}</h4>

                    <small className="text-muted">Hours Worked</small>
                  </div>
                </div>
              </div>

              {/* LEAVE DETAILS */}

              <h6 className="mt-4 mb-3">Leave Details</h6>

              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>From</th>
                      <th>To</th>
                      <th>Days</th>
                      <th>Type</th>
                      <th>Reason</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {employee.attendance?.leaves?.map((leave, index) => (
                      <tr key={index}>
                        <td>{leave.from}</td>

                        <td>{leave.to}</td>

                        <td>{leave.days}</td>

                        <td>{leave.type}</td>

                        <td>{leave.reason}</td>

                        <td>
                          <span className="badge bg-success">
                            {leave.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="d-flex justify-content-between mt-4 mb-5">
        <Link to="/hr/employees" className="btn btn-outline-primary">
          ← Back to Employees
        </Link>

        <Link
          to={`/hr/employees/${employee.id}/edit`}
          className="btn btn-primary"
        >
          Edit Profile
        </Link>
      </div>
    </div>
  );
}

export default EmployeeProfile;
