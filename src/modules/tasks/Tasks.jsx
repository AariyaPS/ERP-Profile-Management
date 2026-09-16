import { Link } from "react-router-dom";

function Tasks() {
    const tasks = [
        {
            id: "TSK-1001",
            title: "Complete ERP Dashboard",
            project: "ERP Implementation",
            assignedTo: "John Smith",
            dueDate: "16 Sep 2026",
            priority: "High",
            status: "In Progress",
        },
        {
            id: "TSK-1002",
            title: "Review CRM Requirements",
            project: "CRM Development",
            assignedTo: "Sarah Johnson",
            dueDate: "18 Sep 2026",
            priority: "Medium",
            status: "Pending",
        },
        {
            id: "TSK-1003",
            title: "Update Employee Profiles",
            project: "HR Portal",
            assignedTo: "Rajashekar",
            dueDate: "20 Sep 2026",
            priority: "Low",
            status: "Completed",
        },
        {
            id: "TSK-1004",
            title: "Prepare Financial Report",
            project: "Finance",
            assignedTo: "Karthavya",
            dueDate: "22 Sep 2026",
            priority: "High",
            status: "Pending",
        },
    ];

    return (
        <div>

            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">

                <div>
                    <h2 className="fw-bold mb-1">Tasks</h2>

                    <p className="text-muted mb-0">
                        Manage assignments, priorities and task progress
                    </p>
                </div>

                <button
                    className="btn text-white"
                    style={{ backgroundColor: "#EA6814" }}
                >
                    <i className="bi bi-plus-lg me-2"></i>
                    Add Task
                </button>

            </div>

            {/* Summary Cards */}
            <div className="row g-4 mb-4">

                <div className="col-xl-3 col-md-6">
                    <div className="card border-0 shadow-sm rounded-4">
                        <div className="card-body p-4">

                            <p className="text-muted mb-1">
                                Total Tasks
                            </p>

                            <h3 className="fw-bold mb-1">
                                24
                            </h3>

                            <small className="text-muted">
                                All tasks
                            </small>

                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6">
                    <div className="card border-0 shadow-sm rounded-4">
                        <div className="card-body p-4">

                            <p className="text-muted mb-1">
                                In Progress
                            </p>

                            <h3 className="fw-bold mb-1">
                                08
                            </h3>

                            <small className="text-primary">
                                Currently working
                            </small>

                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6">
                    <div className="card border-0 shadow-sm rounded-4">
                        <div className="card-body p-4">

                            <p className="text-muted mb-1">
                                Completed
                            </p>

                            <h3 className="fw-bold mb-1">
                                12
                            </h3>

                            <small className="text-success">
                                Completed tasks
                            </small>

                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6">
                    <div className="card border-0 shadow-sm rounded-4">
                        <div className="card-body p-4">

                            <p className="text-muted mb-1">
                                High Priority
                            </p>

                            <h3 className="fw-bold mb-1">
                                04
                            </h3>

                            <small className="text-danger">
                                Requires attention
                            </small>

                        </div>
                    </div>
                </div>

            </div>

            {/* Task Table */}
            <div className="card border-0 shadow-sm rounded-4">

                <div className="card-body p-4">

                    <div className="d-flex justify-content-between align-items-center mb-4">

                        <div>
                            <h5 className="fw-bold mb-1">
                                Task List
                            </h5>

                            <p className="text-muted small mb-0">
                                Track current assignments and progress
                            </p>
                        </div>

                        <button className="btn btn-outline-secondary btn-sm">
                            <i className="bi bi-funnel me-1"></i>
                            Filter
                        </button>

                    </div>

                    <div className="table-responsive">

                        <table className="table align-middle">

                            <thead>
                                <tr className="text-muted small">
                                    <th>Task ID</th>
                                    <th>Task</th>
                                    <th>Project</th>
                                    <th>Assigned To</th>
                                    <th>Due Date</th>
                                    <th>Priority</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>

                                {tasks.map((task) => (

                                    <tr key={task.id}>

                                        <td className="fw-semibold">
                                            {task.id}
                                        </td>

                                        <td>
                                            <span className="fw-semibold">
                                                {task.title}
                                            </span>
                                        </td>

                                        <td>
                                            {task.project}
                                        </td>

                                        <td>
                                            {task.assignedTo}
                                        </td>

                                        <td className="text-muted">
                                            {task.dueDate}
                                        </td>

                                        <td>

                                            <span
                                                className={`badge rounded-pill ${
                                                    task.priority === "High"
                                                        ? "bg-danger"
                                                        : task.priority === "Medium"
                                                        ? "bg-warning text-dark"
                                                        : "bg-success"
                                                }`}
                                            >
                                                {task.priority}
                                            </span>

                                        </td>

                                        <td>

                                            <span
                                                className={`badge rounded-pill ${
                                                    task.status === "Completed"
                                                        ? "bg-success"
                                                        : task.status === "In Progress"
                                                        ? "bg-primary"
                                                        : "bg-warning text-dark"
                                                }`}
                                            >
                                                {task.status}
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

            {/* Back */}
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

export default Tasks;