import { useState } from "react";
import { Link } from "react-router-dom";

function Notifications() {
    const [search, setSearch] = useState("");
    const [typeFilter, setTypeFilter] = useState("All");
    const [statusFilter, setStatusFilter] = useState("All");

    const [notifications] = useState([
        {
            id: 1,
            notificationId: "NOT-001",
            title: "Leave Request Submitted",
            type: "HR",
            event: "Leave Request",
            recipient: "Manager",
            channel: "In-App, Email",
            status: "Active",
        },
        {
            id: 2,
            notificationId: "NOT-002",
            title: "Leave Request Approved",
            type: "HR",
            event: "Leave Approval",
            recipient: "Employee",
            channel: "In-App, Email",
            status: "Active",
        },
        {
            id: 3,
            notificationId: "NOT-003",
            title: "Expense Submitted",
            type: "Finance",
            event: "Expense Submission",
            recipient: "Manager",
            channel: "In-App",
            status: "Active",
        },
        {
            id: 4,
            notificationId: "NOT-004",
            title: "Invoice Approval Required",
            type: "Finance",
            event: "Invoice Created",
            recipient: "Finance Manager",
            channel: "In-App, Email",
            status: "Active",
        },
        {
            id: 5,
            notificationId: "NOT-005",
            title: "Task Assigned",
            type: "Projects",
            event: "Task Assignment",
            recipient: "Employee",
            channel: "In-App",
            status: "Active",
        },
        {
            id: 6,
            notificationId: "NOT-006",
            title: "Project Status Updated",
            type: "Projects",
            event: "Project Update",
            recipient: "Project Team",
            channel: "Email",
            status: "Inactive",
        },
    ]);

    const filteredNotifications = notifications.filter((notification) => {
        const matchesSearch =
            notification.title
                .toLowerCase()
                .includes(search.toLowerCase()) ||
            notification.notificationId
                .toLowerCase()
                .includes(search.toLowerCase()) ||
            notification.event
                .toLowerCase()
                .includes(search.toLowerCase()) ||
            notification.recipient
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchesType =
            typeFilter === "All" ||
            notification.type === typeFilter;

        const matchesStatus =
            statusFilter === "All" ||
            notification.status === statusFilter;

        return matchesSearch && matchesType && matchesStatus;
    });

    const activeNotifications = notifications.filter(
        (notification) => notification.status === "Active"
    ).length;

    const inactiveNotifications = notifications.filter(
        (notification) => notification.status === "Inactive"
    ).length;

    const emailNotifications = notifications.filter(
        (notification) =>
            notification.channel.includes("Email")
    ).length;

    const handleCreateNotification = () => {
        alert("Create Notification form will be added later.");
    };

    const handleView = (notification) => {
        alert(`Viewing notification: ${notification.title}`);
    };

    const handleEdit = (notification) => {
        alert(`Editing notification: ${notification.title}`);
    };

    return (
        <div className="container-fluid">

            {/* Page Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">

                <div>
                    <h2 className="fw-bold mb-1">
                        Notifications
                    </h2>

                    <p className="text-muted mb-0">
                        Configure system notifications and communication preferences
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
                                Total Notifications
                            </p>

                            <h3 className="fw-bold mb-0">
                                {notifications.length}
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                            <p className="text-muted mb-1">
                                Active
                            </p>

                            <h3 className="fw-bold text-success mb-0">
                                {activeNotifications}
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                            <p className="text-muted mb-1">
                                Inactive
                            </p>

                            <h3 className="fw-bold text-secondary mb-0">
                                {inactiveNotifications}
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                            <p className="text-muted mb-1">
                                Email Enabled
                            </p>

                            <h3 className="fw-bold mb-0">
                                {emailNotifications}
                            </h3>
                        </div>
                    </div>
                </div>

            </div>

            {/* Main Card */}
            <div className="card border-0 shadow-sm">

                {/* Card Header */}
                <div className="card-header bg-white py-3">

                    <div className="d-flex justify-content-between align-items-center">

                        <div>
                            <h5 className="fw-bold mb-1">
                                Notification Rules
                            </h5>

                            <small className="text-muted">
                                Define when and how users receive notifications
                            </small>
                        </div>

                        <button
                            className="btn text-white"
                            style={{
                                backgroundColor: "#EA6814",
                            }}
                            onClick={handleCreateNotification}
                        >
                            + Create Notification
                        </button>

                    </div>

                </div>

                {/* Filters */}
                <div className="card-body border-bottom">

                    <div className="row g-3">

                        <div className="col-md-5">

                            <label className="form-label fw-semibold">
                                Search
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search notifications..."
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                            />

                        </div>

                        <div className="col-md-3">

                            <label className="form-label fw-semibold">
                                Type
                            </label>

                            <select
                                className="form-select"
                                value={typeFilter}
                                onChange={(e) =>
                                    setTypeFilter(e.target.value)
                                }
                            >
                                <option value="All">
                                    All Types
                                </option>

                                <option value="HR">
                                    HR
                                </option>

                                <option value="Finance">
                                    Finance
                                </option>

                                <option value="Projects">
                                    Projects
                                </option>

                            </select>

                        </div>

                        <div className="col-md-3">

                            <label className="form-label fw-semibold">
                                Status
                            </label>

                            <select
                                className="form-select"
                                value={statusFilter}
                                onChange={(e) =>
                                    setStatusFilter(e.target.value)
                                }
                            >
                                <option value="All">
                                    All
                                </option>

                                <option value="Active">
                                    Active
                                </option>

                                <option value="Inactive">
                                    Inactive
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
                                <th>Notification ID</th>
                                <th>Notification</th>
                                <th>Type</th>
                                <th>Event</th>
                                <th>Recipient</th>
                                <th>Channel</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>

                        </thead>

                        <tbody>

                            {filteredNotifications.length > 0 ? (
                                filteredNotifications.map(
                                    (notification) => (
                                        <tr key={notification.id}>

                                            <td className="fw-semibold">
                                                {notification.notificationId}
                                            </td>

                                            <td>
                                                <span className="fw-semibold">
                                                    {notification.title}
                                                </span>
                                            </td>

                                            <td>
                                                <span className="badge bg-light text-dark border">
                                                    {notification.type}
                                                </span>
                                            </td>

                                            <td>
                                                {notification.event}
                                            </td>

                                            <td>
                                                {notification.recipient}
                                            </td>

                                            <td>
                                                {notification.channel}
                                            </td>

                                            <td>
                                                {notification.status ===
                                                "Active" ? (
                                                    <span className="badge bg-success">
                                                        Active
                                                    </span>
                                                ) : (
                                                    <span className="badge bg-secondary">
                                                        Inactive
                                                    </span>
                                                )}
                                            </td>

                                            <td>

                                                <button
                                                    className="btn btn-sm btn-outline-primary me-2"
                                                    onClick={() =>
                                                        handleView(
                                                            notification
                                                        )
                                                    }
                                                >
                                                    View
                                                </button>

                                                <button
                                                    className="btn btn-sm btn-outline-secondary"
                                                    onClick={() =>
                                                        handleEdit(
                                                            notification
                                                        )
                                                    }
                                                >
                                                    Edit
                                                </button>

                                            </td>

                                        </tr>
                                    )
                                )
                            ) : (
                                <tr>
                                    <td
                                        colSpan="8"
                                        className="text-center py-4 text-muted"
                                    >
                                        No notifications found
                                    </td>
                                </tr>
                            )}

                        </tbody>

                    </table>

                </div>

                {/* Footer */}
                <div className="card-footer bg-white">

                    <small className="text-muted">
                        Showing {filteredNotifications.length} of{" "}
                        {notifications.length} notifications
                    </small>

                </div>

            </div>

        </div>
    );
}

export default Notifications;