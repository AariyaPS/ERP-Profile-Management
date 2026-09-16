import { Link } from "react-router-dom";

function Dashboard() {
    const quickModules = [
        {
            title: "Employees",
            description: "Manage employee profiles and workforce",
            icon: "bi-people-fill",
            path: "/hr/employees",
            color: "#EA6814",
        },
        {
            title: "Finance",
            description: "Manage accounting and financial operations",
            icon: "bi-cash-stack",
            path: "/finance",
            color: "#198754",
        },
        {
            title: "Customers & Leads",
            description: "Track customers, prospects and leads",
            icon: "bi-person-lines-fill",
            path: "/crm/customers",
            color: "#0d6efd",
        },
        {
            title: "Projects",
            description: "Monitor projects, budgets and progress",
            icon: "bi-kanban-fill",
            path: "/projects",
            color: "#6f42c1",
        },
        {
            title: "Timesheets",
            description: "Track working hours and project time",
            icon: "bi-clock-fill",
            path: "/timesheets",
            color: "#fd7e14",
        },
        {
            title: "Tasks",
            description: "Manage assignments and work items",
            icon: "bi-check2-square",
            path: "/tasks",
            color: "#20c997",
        },
    ];

    const activities = [
        {
            icon: "bi-person-plus-fill",
            title: "New employee added",
            description: "John Smith joined the Finance team",
            time: "10 minutes ago",
        },
        {
            icon: "bi-kanban-fill",
            title: "Project updated",
            description: "ERP Implementation progress updated to 65%",
            time: "35 minutes ago",
        },
        {
            icon: "bi-receipt",
            title: "Invoice generated",
            description: "Invoice INV-1004 generated for ABC Technologies",
            time: "1 hour ago",
        },
        {
            icon: "bi-calendar-check-fill",
            title: "Leave approved",
            description: "Sarah Johnson approved John Smith's leave request",
            time: "2 hours ago",
        },
    ];

    const pendingApprovals = [
        {
            type: "Leave Request",
            employee: "John Smith",
            date: "16 Sep 2026",
            status: "Pending",
        },
        {
            type: "Expense Claim",
            employee: "Rajashekar",
            date: "15 Sep 2026",
            status: "Pending",
        },
        {
            type: "Project Approval",
            employee: "Karthavya",
            date: "14 Sep 2026",
            status: "Pending",
        },
    ];

    const upcomingTasks = [
        {
            title: "Complete ERP Implementation",
            project: "ERP Implementation",
            due: "Today",
            priority: "High",
        },
        {
            title: "Review CRM requirements",
            project: "CRM Development",
            due: "Tomorrow",
            priority: "Medium",
        },
        {
            title: "Submit monthly timesheet",
            project: "Internal",
            due: "18 Sep",
            priority: "Low",
        },
    ];

    return (
        <div className="dashboard-page">

            {/* ================= HERO SECTION ================= */}
            <div
                className="rounded-4 p-4 p-md-5 mb-4 text-white"
                style={{
                    background:
                        "linear-gradient(135deg, #EA6814 0%, #D85D10 55%, #b94c08 100%)",
                    boxShadow: "0 10px 30px rgba(234,104,20,0.20)",
                }}
            >
                <div className="row align-items-center">

                    <div className="col-lg-8">
                        <span
                            className="badge rounded-pill px-3 py-2 mb-3"
                            style={{
                                backgroundColor: "rgba(255,255,255,0.18)",
                            }}
                        >
                            <i className="bi bi-grid-1x2-fill me-2"></i>
                            ERP MANAGEMENT PLATFORM
                        </span>

                        <h1 className="fw-bold mb-2">
                            Welcome back, Admin 👋
                        </h1>

                        <p
                            className="mb-4"
                            style={{
                                maxWidth: "650px",
                                opacity: 0.9,
                            }}
                        >
                            Manage your people, projects, customers, finance
                            and business operations from one unified platform.
                        </p>

                        <div className="d-flex flex-wrap gap-2">
                            <Link
                                to="/projects"
                                className="btn btn-light px-4 fw-semibold"
                                style={{ color: "#EA6814" }}
                            >
                                <i className="bi bi-kanban me-2"></i>
                                View Projects
                            </Link>

                            <Link
                                to="/hr/employees"
                                className="btn px-4 fw-semibold text-white"
                                style={{
                                    backgroundColor: "rgba(255,255,255,0.16)",
                                    border: "1px solid rgba(255,255,255,0.35)",
                                }}
                            >
                                <i className="bi bi-people me-2"></i>
                                Employees
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 d-none d-lg-block text-center">
                        <div
                            className="mx-auto d-flex align-items-center justify-content-center rounded-circle"
                            style={{
                                width: "180px",
                                height: "180px",
                                backgroundColor: "rgba(255,255,255,0.12)",
                                border: "1px solid rgba(255,255,255,0.25)",
                            }}
                        >
                            <i
                                className="bi bi-buildings"
                                style={{ fontSize: "80px" }}
                            ></i>
                        </div>
                    </div>

                </div>
            </div>

            {/* ================= KPI CARDS ================= */}
            <div className="row g-4 mb-4">

                <div className="col-xl-3 col-md-6">
                    <div className="card border-0 shadow-sm rounded-4 h-100">
                        <div className="card-body p-4">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p className="text-muted mb-1">
                                        Total Employees
                                    </p>
                                    <h2 className="fw-bold mb-1">128</h2>
                                    <small className="text-success">
                                        <i className="bi bi-arrow-up"></i> 8.2%
                                        this month
                                    </small>
                                </div>

                                <div
                                    className="rounded-3 d-flex align-items-center justify-content-center"
                                    style={{
                                        width: "52px",
                                        height: "52px",
                                        backgroundColor: "#FFF1E8",
                                        color: "#EA6814",
                                    }}
                                >
                                    <i className="bi bi-people-fill fs-4"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6">
                    <div className="card border-0 shadow-sm rounded-4 h-100">
                        <div className="card-body p-4">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p className="text-muted mb-1">
                                        Active Projects
                                    </p>
                                    <h2 className="fw-bold mb-1">24</h2>
                                    <small className="text-success">
                                        <i className="bi bi-arrow-up"></i> 3 new
                                        projects
                                    </small>
                                </div>

                                <div
                                    className="rounded-3 d-flex align-items-center justify-content-center"
                                    style={{
                                        width: "52px",
                                        height: "52px",
                                        backgroundColor: "#eee8ff",
                                        color: "#6f42c1",
                                    }}
                                >
                                    <i className="bi bi-kanban-fill fs-4"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6">
                    <div className="card border-0 shadow-sm rounded-4 h-100">
                        <div className="card-body p-4">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p className="text-muted mb-1">
                                        Monthly Revenue
                                    </p>
                                    <h2 className="fw-bold mb-1">
                                        ₹24.8L
                                    </h2>
                                    <small className="text-success">
                                        <i className="bi bi-arrow-up"></i> 12.5%
                                        vs last month
                                    </small>
                                </div>

                                <div
                                    className="rounded-3 d-flex align-items-center justify-content-center"
                                    style={{
                                        width: "52px",
                                        height: "52px",
                                        backgroundColor: "#e7f7ef",
                                        color: "#198754",
                                    }}
                                >
                                    <i className="bi bi-currency-rupee fs-4"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6">
                    <div className="card border-0 shadow-sm rounded-4 h-100">
                        <div className="card-body p-4">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p className="text-muted mb-1">
                                        Pending Approvals
                                    </p>
                                    <h2 className="fw-bold mb-1">07</h2>
                                    <small className="text-danger">
                                        <i className="bi bi-exclamation-circle"></i>{" "}
                                        Requires attention
                                    </small>
                                </div>

                                <div
                                    className="rounded-3 d-flex align-items-center justify-content-center"
                                    style={{
                                        width: "52px",
                                        height: "52px",
                                        backgroundColor: "#fff3cd",
                                        color: "#856404",
                                    }}
                                >
                                    <i className="bi bi-hourglass-split fs-4"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* ================= QUICK MODULE NAVIGATION ================= */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <h4 className="fw-bold mb-1">
                        Quick Access
                    </h4>
                    <p className="text-muted mb-0">
                        Navigate to your most used ERP modules
                    </p>
                </div>
            </div>

            <div className="row g-4 mb-4">

                {quickModules.map((module) => (
                    <div
                        className="col-xl-4 col-md-6"
                        key={module.title}
                    >
                        <Link
                            to={module.path}
                            className="text-decoration-none"
                        >
                            <div
                                className="card border-0 shadow-sm rounded-4 h-100 module-card"
                                style={{
                                    transition: "all 0.25s ease",
                                }}
                            >
                                <div className="card-body p-4">

                                    <div className="d-flex align-items-start">

                                        <div
                                            className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                                            style={{
                                                width: "55px",
                                                height: "55px",
                                                backgroundColor: `${module.color}18`,
                                                color: module.color,
                                            }}
                                        >
                                            <i
                                                className={`bi ${module.icon} fs-4`}
                                            ></i>
                                        </div>

                                        <div className="ms-3 flex-grow-1">
                                            <h5 className="fw-bold text-dark mb-1">
                                                {module.title}
                                            </h5>

                                            <p className="text-muted small mb-0">
                                                {module.description}
                                            </p>
                                        </div>

                                        <i
                                            className="bi bi-arrow-up-right text-muted"
                                        ></i>

                                    </div>

                                </div>
                            </div>
                        </Link>
                    </div>
                ))}

            </div>

            {/* ================= PROJECT OVERVIEW + ACTIVITIES ================= */}
            <div className="row g-4 mb-4">

                {/* Project Overview */}
                <div className="col-lg-7">

                    <div className="card border-0 shadow-sm rounded-4 h-100">

                        <div className="card-body p-4">

                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <div>
                                    <h5 className="fw-bold mb-1">
                                        Project Overview
                                    </h5>
                                    <p className="text-muted small mb-0">
                                        Current project performance
                                    </p>
                                </div>

                                <Link
                                    to="/projects"
                                    className="btn btn-sm btn-outline-secondary"
                                >
                                    View All
                                </Link>
                            </div>

                            <div className="mb-4">

                                <div className="d-flex justify-content-between mb-2">
                                    <span className="fw-semibold">
                                        ERP Implementation
                                    </span>

                                    <span className="text-muted">
                                        65%
                                    </span>
                                </div>

                                <div
                                    className="progress"
                                    style={{ height: "8px" }}
                                >
                                    <div
                                        className="progress-bar"
                                        style={{
                                            width: "65%",
                                            backgroundColor: "#EA6814",
                                        }}
                                    ></div>
                                </div>

                                <div className="d-flex justify-content-between mt-2">
                                    <small className="text-muted">
                                        ABC Technologies
                                    </small>
                                    <small className="text-success">
                                        In Progress
                                    </small>
                                </div>

                            </div>

                            <div className="mb-4">

                                <div className="d-flex justify-content-between mb-2">
                                    <span className="fw-semibold">
                                        CRM Development
                                    </span>

                                    <span className="text-muted">
                                        20%
                                    </span>
                                </div>

                                <div
                                    className="progress"
                                    style={{ height: "8px" }}
                                >
                                    <div
                                        className="progress-bar bg-primary"
                                        style={{ width: "20%" }}
                                    ></div>
                                </div>

                                <div className="d-flex justify-content-between mt-2">
                                    <small className="text-muted">
                                        Global Solutions
                                    </small>
                                    <small className="text-primary">
                                        Planning
                                    </small>
                                </div>

                            </div>

                            <div>

                                <div className="d-flex justify-content-between mb-2">
                                    <span className="fw-semibold">
                                        HR Portal
                                    </span>

                                    <span className="text-muted">
                                        85%
                                    </span>
                                </div>

                                <div
                                    className="progress"
                                    style={{ height: "8px" }}
                                >
                                    <div
                                        className="progress-bar bg-success"
                                        style={{ width: "85%" }}
                                    ></div>
                                </div>

                                <div className="d-flex justify-content-between mt-2">
                                    <small className="text-muted">
                                        Internal Project
                                    </small>
                                    <small className="text-success">
                                        Near Completion
                                    </small>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Recent Activity */}
                <div className="col-lg-5">

                    <div className="card border-0 shadow-sm rounded-4 h-100">

                        <div className="card-body p-4">

                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <div>
                                    <h5 className="fw-bold mb-1">
                                        Recent Activity
                                    </h5>

                                    <p className="text-muted small mb-0">
                                        Latest system activities
                                    </p>
                                </div>

                                <i className="bi bi-three-dots text-muted"></i>
                            </div>

                            {activities.map((activity, index) => (

                                <div
                                    key={index}
                                    className="d-flex mb-4"
                                >

                                    <div
                                        className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                            backgroundColor: "#FFF1E8",
                                            color: "#EA6814",
                                        }}
                                    >
                                        <i
                                            className={`bi ${activity.icon}`}
                                        ></i>
                                    </div>

                                    <div className="ms-3">
                                        <div className="fw-semibold small">
                                            {activity.title}
                                        </div>

                                        <div className="text-muted small">
                                            {activity.description}
                                        </div>

                                        <small className="text-muted">
                                            {activity.time}
                                        </small>
                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </div>

            {/* ================= APPROVALS + TASKS ================= */}
            <div className="row g-4 mb-4">

                {/* Pending Approvals */}
                <div className="col-lg-7">

                    <div className="card border-0 shadow-sm rounded-4">

                        <div className="card-body p-4">

                            <div className="d-flex justify-content-between align-items-center mb-4">

                                <div>
                                    <h5 className="fw-bold mb-1">
                                        Pending Approvals
                                    </h5>

                                    <p className="text-muted small mb-0">
                                        Items waiting for your action
                                    </p>
                                </div>

                                <span
                                    className="badge rounded-pill px-3 py-2"
                                    style={{
                                        backgroundColor: "#FFF1E8",
                                        color: "#EA6814",
                                    }}
                                >
                                    3 Pending
                                </span>

                            </div>

                            <div className="table-responsive">

                                <table className="table align-middle mb-0">

                                    <thead>
                                        <tr className="text-muted small">
                                            <th>Request</th>
                                            <th>Employee</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>

                                    <tbody>

                                        {pendingApprovals.map(
                                            (approval, index) => (

                                                <tr key={index}>
                                                    <td className="fw-semibold">
                                                        {approval.type}
                                                    </td>

                                                    <td>
                                                        {approval.employee}
                                                    </td>

                                                    <td className="text-muted">
                                                        {approval.date}
                                                    </td>

                                                    <td>
                                                        <span
                                                            className="badge rounded-pill"
                                                            style={{
                                                                backgroundColor:
                                                                    "#fff3cd",
                                                                color:
                                                                    "#856404",
                                                            }}
                                                        >
                                                            {approval.status}
                                                        </span>
                                                    </td>
                                                </tr>

                                            )
                                        )}

                                    </tbody>

                                </table>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Upcoming Tasks */}
                <div className="col-lg-5">

                    <div className="card border-0 shadow-sm rounded-4">

                        <div className="card-body p-4">

                            <div className="mb-4">
                                <h5 className="fw-bold mb-1">
                                    Upcoming Tasks
                                </h5>

                                <p className="text-muted small mb-0">
                                    Tasks that need attention
                                </p>
                            </div>

                            {upcomingTasks.map((task, index) => (

                                <div
                                    key={index}
                                    className="border rounded-3 p-3 mb-3"
                                >

                                    <div className="d-flex justify-content-between">

                                        <div>
                                            <h6 className="fw-semibold mb-1">
                                                {task.title}
                                            </h6>

                                            <small className="text-muted">
                                                {task.project}
                                            </small>
                                        </div>

                                        <span
                                            className={`badge ${
                                                task.priority === "High"
                                                    ? "bg-danger"
                                                    : task.priority === "Medium"
                                                    ? "bg-warning text-dark"
                                                    : "bg-success"
                                            }`}
                                        >
                                            {task.priority}
                                        </span>

                                    </div>

                                    <div className="mt-2 small text-muted">
                                        <i className="bi bi-calendar3 me-2"></i>
                                        Due: {task.due}
                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </div>

            {/* ================= QUICK ACTIONS ================= */}
            <div className="card border-0 shadow-sm rounded-4 mb-4">

                <div className="card-body p-4">

                    <div className="mb-4">
                        <h5 className="fw-bold mb-1">
                            Quick Actions
                        </h5>

                        <p className="text-muted small mb-0">
                            Frequently used actions
                        </p>
                    </div>

                    <div className="row g-3">

                        <div className="col-xl-3 col-md-6">
                            <Link
                                to="/hr/employees"
                                className="btn w-100 py-3 border rounded-3 text-start"
                            >
                                <i
                                    className="bi bi-person-plus-fill me-2"
                                    style={{ color: "#EA6814" }}
                                ></i>
                                Add Employee
                            </Link>
                        </div>

                        <div className="col-xl-3 col-md-6">
                            <Link
                                to="/projects/add"
                                className="btn w-100 py-3 border rounded-3 text-start"
                            >
                                <i
                                    className="bi bi-folder-plus me-2"
                                    style={{ color: "#EA6814" }}
                                ></i>
                                Create Project
                            </Link>
                        </div>

                        <div className="col-xl-3 col-md-6">
                            <Link
                                to="/customers"
                                className="btn w-100 py-3 border rounded-3 text-start"
                            >
                                <i
                                    className="bi bi-person-plus me-2"
                                    style={{ color: "#EA6814" }}
                                ></i>
                                Add Customer
                            </Link>
                        </div>

                        <div className="col-xl-3 col-md-6">
                            <Link
                                to="/administration"
                                className="btn w-100 py-3 border rounded-3 text-start"
                            >
                                <i
                                    className="bi bi-gear-fill me-2"
                                    style={{ color: "#EA6814" }}
                                ></i>
                                Administration
                            </Link>
                        </div>

                    </div>

                </div>

            </div>

            {/* ================= FOOTER INFO ================= */}
            <div className="d-flex flex-wrap justify-content-between align-items-center text-muted small px-2 pb-3">

                <span>
                    <i className="bi bi-shield-check me-1"></i>
                    ERP System • Prototype
                </span>

                <span>
                    Last updated: 16 September 2026
                </span>

            </div>

            {/* ================= HOVER CSS ================= */}
            <style>
                {`
                    .module-card:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 12px 30px rgba(0,0,0,0.10) !important;
                    }

                    .dashboard-page .card {
                        transition: box-shadow 0.25s ease;
                    }

                    .dashboard-page .table > :not(caption) > * > * {
                        padding: 0.85rem 0.5rem;
                    }
                `}
            </style>

        </div>
    );
}

export default Dashboard;