import { useState } from "react";
import { Link } from "react-router-dom";

function AuditLogs() {
    const [search, setSearch] = useState("");
    const [moduleFilter, setModuleFilter] = useState("All");
    const [actionFilter, setActionFilter] = useState("All");

    const [auditLogs] = useState([
        {
            id: 1,
            logId: "LOG-0001",
            user: "Admin User",
            action: "Updated",
            module: "Users & Roles",
            description: "Updated permissions for Sarah Johnson",
            date: "16 Sep 2026",
            time: "09:15 AM",
            status: "Success",
        },
        {
            id: 2,
            logId: "LOG-0002",
            user: "Sarah Johnson",
            action: "Approved",
            module: "HR",
            description: "Approved leave request for John Smith",
            date: "16 Sep 2026",
            time: "09:42 AM",
            status: "Success",
        },
        {
            id: 3,
            logId: "LOG-0003",
            user: "John Smith",
            action: "Created",
            module: "Projects",
            description: "Created project PRJ-1003",
            date: "16 Sep 2026",
            time: "10:05 AM",
            status: "Success",
        },
        {
            id: 4,
            logId: "LOG-0004",
            user: "Rajashekar",
            action: "Updated",
            module: "Projects",
            description: "Updated project PRJ-1001 status",
            date: "16 Sep 2026",
            time: "10:30 AM",
            status: "Success",
        },
        {
            id: 5,
            logId: "LOG-0005",
            user: "Admin User",
            action: "Updated",
            module: "Organization",
            description: "Updated organization settings",
            date: "16 Sep 2026",
            time: "10:45 AM",
            status: "Success",
        },
        {
            id: 6,
            logId: "LOG-0006",
            user: "Karthavya",
            action: "Created",
            module: "Customers",
            description: "Created customer ABC Technologies",
            date: "16 Sep 2026",
            time: "11:10 AM",
            status: "Success",
        },
        {
            id: 7,
            logId: "LOG-0007",
            user: "John Smith",
            action: "Deleted",
            module: "Documents",
            description: "Deleted an employee document",
            date: "16 Sep 2026",
            time: "11:32 AM",
            status: "Success",
        },
        {
            id: 8,
            logId: "LOG-0008",
            user: "Admin User",
            action: "Failed Login",
            module: "Security",
            description: "Unsuccessful login attempt detected",
            date: "16 Sep 2026",
            time: "11:50 AM",
            status: "Failed",
        },
    ]);

    const filteredLogs = auditLogs.filter((log) => {
        const matchesSearch =
            log.logId.toLowerCase().includes(search.toLowerCase()) ||
            log.user.toLowerCase().includes(search.toLowerCase()) ||
            log.description.toLowerCase().includes(search.toLowerCase());

        const matchesModule =
            moduleFilter === "All" ||
            log.module === moduleFilter;

        const matchesAction =
            actionFilter === "All" ||
            log.action === actionFilter;

        return matchesSearch && matchesModule && matchesAction;
    });

    const successfulLogs = auditLogs.filter(
        (log) => log.status === "Success"
    ).length;

    const failedLogs = auditLogs.filter(
        (log) => log.status === "Failed"
    ).length;

    const uniqueUsers = new Set(
        auditLogs.map((log) => log.user)
    ).size;

    const handleView = (log) => {
        alert(
            `Audit Log Details\n\n${log.logId}\nUser: ${log.user}\nAction: ${log.action}\nModule: ${log.module}\nDescription: ${log.description}\nDate: ${log.date} ${log.time}`
        );
    };

    return (
        <div className="container-fluid">

            {/* Page Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">

                <div>
                    <h2 className="fw-bold mb-1">
                        Audit Logs
                    </h2>

                    <p className="text-muted mb-0">
                        Track important activities and changes made in the ERP
                    </p>
                </div>

                <Link
                    to="/administration"
                    className="btn btn-outline-secondary"
                >
                    ← Back to Administration
                </Link>

            </div>

            {/* Summary Cards */}
            <div className="row g-4 mb-4">

                <div className="col-md-3">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                            <p className="text-muted mb-1">
                                Total Activities
                            </p>

                            <h3 className="fw-bold mb-0">
                                {auditLogs.length}
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                            <p className="text-muted mb-1">
                                Successful Activities
                            </p>

                            <h3 className="fw-bold text-success mb-0">
                                {successfulLogs}
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                            <p className="text-muted mb-1">
                                Failed Activities
                            </p>

                            <h3 className="fw-bold text-danger mb-0">
                                {failedLogs}
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                            <p className="text-muted mb-1">
                                Users Active
                            </p>

                            <h3 className="fw-bold mb-0">
                                {uniqueUsers}
                            </h3>
                        </div>
                    </div>
                </div>

            </div>

            {/* Audit Logs Card */}
            <div className="card border-0 shadow-sm">

                {/* Header */}
                <div className="card-header bg-white py-3">

                    <div className="d-flex justify-content-between align-items-center">

                        <div>
                            <h5 className="fw-bold mb-1">
                                Activity History
                            </h5>

                            <small className="text-muted">
                                View and track user activities across ERP modules
                            </small>
                        </div>

                        <button
                            className="btn text-white"
                            style={{
                                backgroundColor: "#EA6814",
                            }}
                            onClick={() =>
                                alert("Export Audit Logs will be added later.")
                            }
                        >
                            Export Logs
                        </button>

                    </div>

                </div>

                {/* Filters */}
                <div className="card-body border-bottom">

                    <div className="row g-3">

                        {/* Search */}
                        <div className="col-md-5">

                            <label className="form-label fw-semibold">
                                Search
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by user, log ID or description..."
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                            />

                        </div>

                        {/* Module */}
                        <div className="col-md-3">

                            <label className="form-label fw-semibold">
                                Module
                            </label>

                            <select
                                className="form-select"
                                value={moduleFilter}
                                onChange={(e) =>
                                    setModuleFilter(e.target.value)
                                }
                            >
                                <option value="All">
                                    All Modules
                                </option>

                                <option value="Users & Roles">
                                    Users & Roles
                                </option>

                                <option value="HR">
                                    HR
                                </option>

                                <option value="Projects">
                                    Projects
                                </option>

                                <option value="Organization">
                                    Organization
                                </option>

                                <option value="Customers">
                                    Customers
                                </option>

                                <option value="Documents">
                                    Documents
                                </option>

                                <option value="Security">
                                    Security
                                </option>

                            </select>

                        </div>

                        {/* Action */}
                        <div className="col-md-3">

                            <label className="form-label fw-semibold">
                                Action
                            </label>

                            <select
                                className="form-select"
                                value={actionFilter}
                                onChange={(e) =>
                                    setActionFilter(e.target.value)
                                }
                            >
                                <option value="All">
                                    All Actions
                                </option>

                                <option value="Created">
                                    Created
                                </option>

                                <option value="Updated">
                                    Updated
                                </option>

                                <option value="Deleted">
                                    Deleted
                                </option>

                                <option value="Approved">
                                    Approved
                                </option>

                                <option value="Failed Login">
                                    Failed Login
                                </option>

                            </select>

                        </div>

                    </div>

                </div>

                {/* Table */}
                <div className="table-responsive">

                    <table className="table table-hover mb-0">

                        <thead>

                            <tr
                                style={{
                                    backgroundColor: "#EA6814",
                                    color: "white",
                                }}
                            >
                                <th>Log ID</th>
                                <th>User</th>
                                <th>Action</th>
                                <th>Module</th>
                                <th>Description</th>
                                <th>Date & Time</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>

                        </thead>

                        <tbody>

                            {filteredLogs.length > 0 ? (
                                filteredLogs.map((log) => (
                                    <tr key={log.id}>

                                        <td className="fw-semibold">
                                            {log.logId}
                                        </td>

                                        <td>
                                            {log.user}
                                        </td>

                                        <td>
                                            {log.action === "Created" && (
                                                <span className="badge bg-primary">
                                                    Created
                                                </span>
                                            )}

                                            {log.action === "Updated" && (
                                                <span className="badge bg-warning text-dark">
                                                    Updated
                                                </span>
                                            )}

                                            {log.action === "Deleted" && (
                                                <span className="badge bg-danger">
                                                    Deleted
                                                </span>
                                            )}

                                            {log.action === "Approved" && (
                                                <span className="badge bg-success">
                                                    Approved
                                                </span>
                                            )}

                                            {log.action === "Failed Login" && (
                                                <span className="badge bg-danger">
                                                    Failed Login
                                                </span>
                                            )}
                                        </td>

                                        <td>
                                            <span className="badge bg-light text-dark border">
                                                {log.module}
                                            </span>
                                        </td>

                                        <td>
                                            {log.description}
                                        </td>

                                        <td>
                                            <div>{log.date}</div>

                                            <small className="text-muted">
                                                {log.time}
                                            </small>
                                        </td>

                                        <td>
                                            {log.status === "Success" ? (
                                                <span className="badge bg-success">
                                                    Success
                                                </span>
                                            ) : (
                                                <span className="badge bg-danger">
                                                    Failed
                                                </span>
                                            )}
                                        </td>

                                        <td>
                                            <button
                                                className="btn btn-sm btn-outline-primary"
                                                onClick={() =>
                                                    handleView(log)
                                                }
                                            >
                                                View
                                            </button>
                                        </td>

                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="8"
                                        className="text-center py-4 text-muted"
                                    >
                                        No audit logs found
                                    </td>
                                </tr>
                            )}

                        </tbody>

                    </table>

                </div>

                {/* Footer */}
                <div className="card-footer bg-white">

                    <small className="text-muted">
                        Showing {filteredLogs.length} of{" "}
                        {auditLogs.length} activities
                    </small>

                </div>

            </div>

        </div>
    );
}

export default AuditLogs;