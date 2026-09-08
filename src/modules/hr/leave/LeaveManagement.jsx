import { useMemo, useState } from "react";
import { useEmployees } from "../../../context/EmployeeContext.jsx";

function LeaveManagement() {
  const { employees, approveLeave, rejectLeave } = useEmployees();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  const [selectedLeave, setSelectedLeave] = useState(null);

  /*
    =========================================
    COMBINE LEAVES FROM ALL EMPLOYEES
    =========================================
    */

  const allLeaves = useMemo(() => {
    return employees.flatMap((employee) =>
      (employee.attendance?.leaves || []).map((leave, index) => ({
        ...leave,

        leaveId: `${employee.id}-${index}`,

        employeeDatabaseId: employee.id,

        leaveIndex: index,

        employeeId: employee.employeeId,

        employeeName: employee.name,

        department: employee.employment?.department || "-",

        designation: employee.employment?.designation || "-",

        photo: employee.photo,
      })),
    );
  }, [employees]);

  /*
    =========================================
    FILTER LEAVES
    =========================================
    */

  const filteredLeaves = allLeaves.filter((leave) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      leave.employeeName.toLowerCase().includes(searchText) ||
      leave.employeeId.toLowerCase().includes(searchText) ||
      leave.type.toLowerCase().includes(searchText);

    const matchesStatus =
      statusFilter === "All" || leave.status === statusFilter;

    const matchesType = typeFilter === "All" || leave.type === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });

  /*
    =========================================
    SUMMARY COUNTS
    =========================================
    */

  const totalRequests = allLeaves.length;

  const pendingRequests = allLeaves.filter(
    (leave) => leave.status === "Pending",
  ).length;

  const approvedRequests = allLeaves.filter(
    (leave) => leave.status === "Approved",
  ).length;

  const rejectedRequests = allLeaves.filter(
    (leave) => leave.status === "Rejected",
  ).length;

  /*
    =========================================
    UNIQUE LEAVE TYPES
    =========================================
    */

  const leaveTypes = ["All", ...new Set(allLeaves.map((leave) => leave.type))];

  /*
    =========================================
    STATUS BADGE
    =========================================
    */

  const getStatusClass = (status) => {
    if (status === "Approved") {
      return "badge bg-success";
    }

    if (status === "Rejected") {
      return "badge bg-danger";
    }

    if (status === "Pending") {
      return "badge bg-warning text-dark";
    }

    return "badge bg-secondary";
  };

  /*
    =========================================
    RENDER
    =========================================
    */

  return (
    <div>
      {/* =====================================
                PAGE HEADER
            ===================================== */}

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="mb-1">Leave Management</h2>

          <p className="text-muted mb-0">Manage employee leave requests</p>
        </div>

        <button className="btn btn-primary">+ Apply Leave</button>
      </div>

      {/* =====================================
                SUMMARY CARDS
            ===================================== */}

      <div className="row g-4 mb-4">
        {/* Total */}

        <div className="col-md-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted mb-1">Total Requests</p>

                  <h3 className="mb-0">{totalRequests}</h3>
                </div>

                <div
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "45px",
                    height: "45px",
                    backgroundColor: "#FFF1E8",
                    color: "#EA6814",
                  }}
                >
                  📋
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pending */}

        <div className="col-md-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <p className="text-muted mb-1">Pending</p>

              <h3 className="mb-0">{pendingRequests}</h3>
            </div>
          </div>
        </div>

        {/* Approved */}

        <div className="col-md-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <p className="text-muted mb-1">Approved</p>

              <h3 className="mb-0">{approvedRequests}</h3>
            </div>
          </div>
        </div>

        {/* Rejected */}

        <div className="col-md-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <p className="text-muted mb-1">Rejected</p>

              <h3 className="mb-0">{rejectedRequests}</h3>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================
                FILTERS
            ===================================== */}

      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <div className="row g-3">
            {/* Search */}

            <div className="col-md-6">
              <label className="form-label">Search</label>

              <input
                type="text"
                className="form-control"
                placeholder="Search employee, ID or leave type..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>

            {/* Status */}

            <div className="col-md-3">
              <label className="form-label">Status</label>

              <select
                className="form-select"
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
              >
                <option value="All">All Status</option>

                <option value="Pending">Pending</option>

                <option value="Approved">Approved</option>

                <option value="Rejected">Rejected</option>
              </select>
            </div>

            {/* Leave Type */}

            <div className="col-md-3">
              <label className="form-label">Leave Type</label>

              <select
                className="form-select"
                value={typeFilter}
                onChange={(event) => setTypeFilter(event.target.value)}
              >
                {leaveTypes.map((type) => (
                  <option key={type} value={type}>
                    {type === "All" ? "All Leave Types" : type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================
                LEAVE TABLE
            ===================================== */}

      <div className="card shadow-sm mb-5">
        <div className="card-header bg-orange-light">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Leave Requests</h5>

            <span className="text-muted">
              {filteredLeaves.length} request(s)
            </span>
          </div>
        </div>

        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead>
                <tr>
                  <th className="px-3">Employee</th>

                  <th>Department</th>

                  <th>From</th>

                  <th>To</th>

                  <th>Days</th>

                  <th>Leave Type</th>

                  <th>Reason</th>

                  <th>Status</th>

                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredLeaves.length > 0 ? (
                  filteredLeaves.map((leave) => (
                    <tr key={leave.leaveId}>
                      {/* Employee */}

                      <td className="px-3">
                        <div className="d-flex align-items-center">
                          <img
                            src={leave.photo}
                            alt={leave.employeeName}
                            className="rounded-circle me-2"
                            style={{
                              width: "40px",
                              height: "40px",
                              objectFit: "cover",
                            }}
                          />

                          <div>
                            <div className="fw-semibold">
                              {leave.employeeName}
                            </div>

                            <small className="text-muted">
                              {leave.employeeId}
                            </small>
                          </div>
                        </div>
                      </td>

                      {/* Department */}

                      <td>{leave.department}</td>

                      {/* From */}

                      <td>{leave.from}</td>

                      {/* To */}

                      <td>{leave.to}</td>

                      {/* Days */}

                      <td>{leave.days}</td>

                      {/* Type */}

                      <td>{leave.type}</td>

                      {/* Reason */}

                      <td>{leave.reason}</td>

                      {/* Status */}

                      <td>
                        <span className={getStatusClass(leave.status)}>
                          {leave.status}
                        </span>
                      </td>

                      {/* Action */}

                      <td>
                        <button
                          className="btn btn-sm btn-outline-primary"
                          onClick={() => setSelectedLeave(leave)}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="text-center py-5">
                      <h5 className="text-muted">No leave requests found</h5>

                      <p className="text-muted mb-0">
                        Try changing your search or filters.
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* =====================================
                VIEW LEAVE MODAL
            ===================================== */}

      {selectedLeave && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Leave Request</h5>

                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedLeave(null)}
                ></button>
              </div>

              <div className="modal-body">
                <div className="d-flex align-items-center mb-4">
                  <img
                    src={selectedLeave.photo}
                    alt={selectedLeave.employeeName}
                    className="rounded-circle me-3"
                    style={{
                      width: "55px",
                      height: "55px",
                      objectFit: "cover",
                    }}
                  />

                  <div>
                    <h5 className="mb-1">{selectedLeave.employeeName}</h5>

                    <p className="text-muted mb-0">
                      {selectedLeave.employeeId}
                    </p>
                  </div>
                </div>

                <div className="row g-3">
                  <div className="col-6">
                    <strong>From</strong>

                    <p className="text-muted mb-0">{selectedLeave.from}</p>
                  </div>

                  <div className="col-6">
                    <strong>To</strong>

                    <p className="text-muted mb-0">{selectedLeave.to}</p>
                  </div>

                  <div className="col-6">
                    <strong>Days</strong>

                    <p className="text-muted mb-0">{selectedLeave.days}</p>
                  </div>

                  <div className="col-6">
                    <strong>Leave Type</strong>

                    <p className="text-muted mb-0">{selectedLeave.type}</p>
                  </div>

                  <div className="col-12">
                    <strong>Reason</strong>

                    <p className="text-muted mb-0">{selectedLeave.reason}</p>
                  </div>

                  <div className="col-12">
                    <strong>Status</strong>

                    <div className="mt-1">
                      <span className={getStatusClass(selectedLeave.status)}>
                        {selectedLeave.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                {selectedLeave.status === "Pending" && (
                  <>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        rejectLeave(
                          selectedLeave.employeeDatabaseId,
                          selectedLeave.leaveIndex,
                        );

                        setSelectedLeave(null);
                      }}
                    >
                      Reject
                    </button>

                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        approveLeave(
                          selectedLeave.employeeDatabaseId,
                          selectedLeave.leaveIndex,
                        );

                        setSelectedLeave(null);
                      }}
                    >
                      Approve
                    </button>
                  </>
                )}

                <button
                  className="btn btn-outline-secondary"
                  onClick={() => setSelectedLeave(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LeaveManagement;
