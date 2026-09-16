import { Link } from "react-router-dom";

function Timesheets() {
    const timesheets = [
        {
            employee: "John Smith",
            project: "ERP Implementation",
            date: "16 Sep 2026",
            hours: 8,
            status: "Submitted",
        },
        {
            employee: "Sarah Johnson",
            project: "CRM Development",
            date: "16 Sep 2026",
            hours: 7.5,
            status: "Approved",
        },
        {
            employee: "Rajashekar",
            project: "ERP Implementation",
            date: "16 Sep 2026",
            hours: 8,
            status: "Pending",
        },
        {
            employee: "Karthavya",
            project: "Internal",
            date: "16 Sep 2026",
            hours: 6,
            status: "Draft",
        },
    ];

    return (
        <div>

            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="fw-bold mb-1">Timesheets</h2>
                    <p className="text-muted mb-0">
                        Track employee working hours and project time
                    </p>
                </div>

                <button
                    className="btn text-white"
                    style={{ backgroundColor: "#EA6814" }}
                >
                    <i className="bi bi-plus-lg me-2"></i>
                    Add Timesheet
                </button>
            </div>

            {/* Summary Cards */}
            <div className="row g-4 mb-4">

                <div className="col-md-3">
                    <div className="card border-0 shadow-sm rounded-4">
                        <div className="card-body">
                            <p className="text-muted mb-1">
                                Total Hours
                            </p>
                            <h3 className="fw-bold">29.5</h3>
                            <small className="text-success">
                                <i className="bi bi-clock me-1"></i>
                                This week
                            </small>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card border-0 shadow-sm rounded-4">
                        <div className="card-body">
                            <p className="text-muted mb-1">
                                Submitted
                            </p>
                            <h3 className="fw-bold">2</h3>
                            <small className="text-primary">
                                Timesheets
                            </small>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card border-0 shadow-sm rounded-4">
                        <div className="card-body">
                            <p className="text-muted mb-1">
                                Approved
                            </p>
                            <h3 className="fw-bold">1</h3>
                            <small className="text-success">
                                Completed
                            </small>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card border-0 shadow-sm rounded-4">
                        <div className="card-body">
                            <p className="text-muted mb-1">
                                Pending
                            </p>
                            <h3 className="fw-bold">1</h3>
                            <small className="text-warning">
                                Requires approval
                            </small>
                        </div>
                    </div>
                </div>

            </div>

            {/* Timesheet Table */}
            <div className="card border-0 shadow-sm rounded-4">

                <div className="card-body p-4">

                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                            <h5 className="fw-bold mb-1">
                                Recent Timesheets
                            </h5>

                            <p className="text-muted small mb-0">
                                Employee time entries
                            </p>
                        </div>

                        <div>
                            <button className="btn btn-outline-secondary btn-sm me-2">
                                <i className="bi bi-funnel me-1"></i>
                                Filter
                            </button>

                            <button className="btn btn-outline-secondary btn-sm">
                                <i className="bi bi-download me-1"></i>
                                Export
                            </button>
                        </div>
                    </div>

                    <div className="table-responsive">

                        <table className="table align-middle">

                            <thead>
                                <tr>
                                    <th>Employee</th>
                                    <th>Project</th>
                                    <th>Date</th>
                                    <th>Hours</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>

                                {timesheets.map((timesheet, index) => (
                                    <tr key={index}>

                                        <td>
                                            <div className="fw-semibold">
                                                {timesheet.employee}
                                            </div>
                                        </td>

                                        <td>
                                            {timesheet.project}
                                        </td>

                                        <td className="text-muted">
                                            {timesheet.date}
                                        </td>

                                        <td>
                                            <span className="fw-semibold">
                                                {timesheet.hours} hrs
                                            </span>
                                        </td>

                                        <td>
                                            <span
                                                className={`badge rounded-pill ${
                                                    timesheet.status === "Approved"
                                                        ? "bg-success"
                                                        : timesheet.status === "Pending"
                                                        ? "bg-warning text-dark"
                                                        : timesheet.status === "Submitted"
                                                        ? "bg-primary"
                                                        : "bg-secondary"
                                                }`}
                                            >
                                                {timesheet.status}
                                            </span>
                                        </td>

                                        <td>
                                            <button className="btn btn-sm btn-outline-secondary">
                                                View
                                            </button>
                                        </td>

                                    </tr>
                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

            {/* Back to Dashboard */}
            <div className="mt-4">
                <Link
                    to="/dashboard"
                    className="text-decoration-none"
                    style={{ color: "#EA6814" }}
                >
                    <i className="bi bi-arrow-left me-2"></i>
                    Back to Dashboard
                </Link>
            </div>

        </div>
    );
}

export default Timesheets;