import { Link } from "react-router-dom";

function Administration() {
    return (
        <div>

            {/* =====================================
                PAGE HEADER
            ===================================== */}

            <div className="d-flex justify-content-between align-items-center mb-4">

                <div>
                    <h2 className="mb-1">
                        Administration & Settings
                    </h2>

                    <p className="text-muted mb-0">
                        Configure and manage your ERP system
                    </p>
                </div>

            </div>


            {/* =====================================
                SETTINGS CARDS
            ===================================== */}

            <div className="row g-4">


                {/* =================================
                    ORGANIZATION
                ================================= */}

                <div className="col-md-6 col-lg-4">

                    <div className="card shadow-sm h-100">

                        <div className="card-body">

                            <div className="d-flex align-items-center mb-3">

                                <div
                                    className="rounded-circle d-flex align-items-center justify-content-center me-3"
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        backgroundColor: "#FFF1E8",
                                        color: "#EA6814",
                                        fontSize: "22px",
                                    }}
                                >
                                    🏢
                                </div>

                                <div>
                                    <h5 className="mb-1">
                                        Organization
                                    </h5>

                                    <small className="text-muted">
                                        Company configuration
                                    </small>
                                </div>

                            </div>

                            <p className="text-muted">
                                Manage company information, address,
                                tax details, currency and fiscal year.
                            </p>

                            <Link
                                to="/administration/organization"
                                className="btn btn-outline-primary btn-sm"
                            >
                                Manage Organization
                            </Link>

                        </div>

                    </div>

                </div>


                {/* =================================
                    USERS & ROLES
                ================================= */}

                <div className="col-md-6 col-lg-4">

                    <div className="card shadow-sm h-100">

                        <div className="card-body">

                            <div className="d-flex align-items-center mb-3">

                                <div
                                    className="rounded-circle d-flex align-items-center justify-content-center me-3"
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        backgroundColor: "#FFF1E8",
                                        color: "#EA6814",
                                        fontSize: "22px",
                                    }}
                                >
                                    👥
                                </div>

                                <div>
                                    <h5 className="mb-1">
                                        Users & Roles
                                    </h5>

                                    <small className="text-muted">
                                        User management
                                    </small>
                                </div>

                            </div>

                            <p className="text-muted">
                                Create users, manage roles and assign
                                system access.
                            </p>

                            <Link
                                to="/administration/users"
                                className="btn btn-outline-primary btn-sm"
                            >
                                Manage Users
                            </Link>

                        </div>

                    </div>

                </div>


                {/* =================================
                    PERMISSIONS
                ================================= */}

                <div className="col-md-6 col-lg-4">

                    <div className="card shadow-sm h-100">

                        <div className="card-body">

                            <div className="d-flex align-items-center mb-3">

                                <div
                                    className="rounded-circle d-flex align-items-center justify-content-center me-3"
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        backgroundColor: "#FFF1E8",
                                        color: "#EA6814",
                                        fontSize: "22px",
                                    }}
                                >
                                    🔐
                                </div>

                                <div>
                                    <h5 className="mb-1">
                                        Permissions
                                    </h5>

                                    <small className="text-muted">
                                        Access control
                                    </small>
                                </div>

                            </div>

                            <p className="text-muted">
                                Control what users and roles can view,
                                create, edit, delete and approve.
                            </p>

                            <Link
                                to="/administration/permissions"
                                className="btn btn-outline-primary btn-sm"
                            >
                                Manage Permissions
                            </Link>

                        </div>

                    </div>

                </div>


                {/* =================================
                    MASTER DATA
                ================================= */}

                <div className="col-md-6 col-lg-4">

                    <div className="card shadow-sm h-100">

                        <div className="card-body">

                            <div className="d-flex align-items-center mb-3">

                                <div
                                    className="rounded-circle d-flex align-items-center justify-content-center me-3"
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        backgroundColor: "#FFF1E8",
                                        color: "#EA6814",
                                        fontSize: "22px",
                                    }}
                                >
                                    🗂️
                                </div>

                                <div>
                                    <h5 className="mb-1">
                                        Master Data
                                    </h5>

                                    <small className="text-muted">
                                        System reference data
                                    </small>
                                </div>

                            </div>

                            <p className="text-muted">
                                Manage departments, designations,
                                project statuses, leave types and other
                                master data.
                            </p>

                            <Link
                                to="/administration/master-data"
                                className="btn btn-outline-primary btn-sm"
                            >
                                Manage Master Data
                            </Link>

                        </div>

                    </div>

                </div>


                {/* =================================
                    WORKFLOWS
                ================================= */}

                <div className="col-md-6 col-lg-4">

                    <div className="card shadow-sm h-100">

                        <div className="card-body">

                            <div className="d-flex align-items-center mb-3">

                                <div
                                    className="rounded-circle d-flex align-items-center justify-content-center me-3"
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        backgroundColor: "#FFF1E8",
                                        color: "#EA6814",
                                        fontSize: "22px",
                                    }}
                                >
                                    🔄
                                </div>

                                <div>
                                    <h5 className="mb-1">
                                        Workflows & Approvals
                                    </h5>

                                    <small className="text-muted">
                                        Business processes
                                    </small>
                                </div>

                            </div>

                            <p className="text-muted">
                                Configure approval workflows for leave,
                                timesheets, expenses, projects and invoices.
                            </p>

                            <Link
                                to="/administration/workflows"
                                className="btn btn-outline-primary btn-sm"
                            >
                                Manage Workflows
                            </Link>

                        </div>

                    </div>

                </div>


                {/* =================================
                    NOTIFICATIONS
                ================================= */}

                <div className="col-md-6 col-lg-4">

                    <div className="card shadow-sm h-100">

                        <div className="card-body">

                            <div className="d-flex align-items-center mb-3">

                                <div
                                    className="rounded-circle d-flex align-items-center justify-content-center me-3"
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        backgroundColor: "#FFF1E8",
                                        color: "#EA6814",
                                        fontSize: "22px",
                                    }}
                                >
                                    🔔
                                </div>

                                <div>
                                    <h5 className="mb-1">
                                        Notifications
                                    </h5>

                                    <small className="text-muted">
                                        Alerts and notifications
                                    </small>
                                </div>

                            </div>

                            <p className="text-muted">
                                Configure email, in-app and approval
                                notifications.
                            </p>

                            <Link
                                to="/administration/notifications"
                                className="btn btn-outline-primary btn-sm"
                            >
                                Notification Settings
                            </Link>

                        </div>

                    </div>

                </div>


                {/* =================================
                    SECURITY
                ================================= */}

                <div className="col-md-6 col-lg-4">

                    <div className="card shadow-sm h-100">

                        <div className="card-body">

                            <div className="d-flex align-items-center mb-3">

                                <div
                                    className="rounded-circle d-flex align-items-center justify-content-center me-3"
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        backgroundColor: "#FFF1E8",
                                        color: "#EA6814",
                                        fontSize: "22px",
                                    }}
                                >
                                    🛡️
                                </div>

                                <div>
                                    <h5 className="mb-1">
                                        Security
                                    </h5>

                                    <small className="text-muted">
                                        System security
                                    </small>
                                </div>

                            </div>

                            <p className="text-muted">
                                Manage password policies, login security,
                                sessions and authentication settings.
                            </p>

                            <Link
                                to="/administration/security"
                                className="btn btn-outline-primary btn-sm"
                            >
                                Security Settings
                            </Link>

                        </div>

                    </div>

                </div>


                {/* =================================
                    AUDIT LOGS
                ================================= */}

                <div className="col-md-6 col-lg-4">

                    <div className="card shadow-sm h-100">

                        <div className="card-body">

                            <div className="d-flex align-items-center mb-3">

                                <div
                                    className="rounded-circle d-flex align-items-center justify-content-center me-3"
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        backgroundColor: "#FFF1E8",
                                        color: "#EA6814",
                                        fontSize: "22px",
                                    }}
                                >
                                    📋
                                </div>

                                <div>
                                    <h5 className="mb-1">
                                        Audit Logs
                                    </h5>

                                    <small className="text-muted">
                                        System activity
                                    </small>
                                </div>

                            </div>

                            <p className="text-muted">
                                Track important changes and activities
                                performed by users across the ERP.
                            </p>

                            <Link
                                to="/administration/audit-logs"
                                className="btn btn-outline-primary btn-sm"
                            >
                                View Audit Logs
                            </Link>

                        </div>

                    </div>

                </div>


                {/* =================================
                    SYSTEM SETTINGS
                ================================= */}

                <div className="col-md-6 col-lg-4">

                    <div className="card shadow-sm h-100">

                        <div className="card-body">

                            <div className="d-flex align-items-center mb-3">

                                <div
                                    className="rounded-circle d-flex align-items-center justify-content-center me-3"
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        backgroundColor: "#FFF1E8",
                                        color: "#EA6814",
                                        fontSize: "22px",
                                    }}
                                >
                                    ⚙️
                                </div>

                                <div>
                                    <h5 className="mb-1">
                                        System Settings
                                    </h5>

                                    <small className="text-muted">
                                        General configuration
                                    </small>
                                </div>

                            </div>

                            <p className="text-muted">
                                Configure currency, timezone, date format,
                                language and other system preferences.
                            </p>

                            <Link
                                to="/administration/system-settings"
                                className="btn btn-outline-primary btn-sm"
                            >
                                System Settings
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Administration;

