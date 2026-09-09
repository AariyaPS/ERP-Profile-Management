import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <div
            className="sidebar border-end"
            style={{
                width: "250px",
                minHeight: "100vh"
            }}
        >

            {/* Logo */}
            <div className="p-4 border-bottom sidebar-header">
                <h4 className="mb-0 text-white">
                    ERP System
                </h4>

                <small className="text-white">
                    Enterprise Resource Planning
                </small>
            </div>

            <div className="p-3">

                {/* MAIN */}
                <div className="text-muted small fw-bold mb-2">
                    MAIN
                </div>

                <NavLink
                    to="/dashboard"
                    className="nav-link sidebar-link mb-2"
                >
                    Dashboard
                </NavLink>


                {/* HR */}
                <div className="text-muted small fw-bold mt-4 mb-2">
                    Human Resource
                </div>

                <NavLink
                    to="/hr/employees"
                    className="nav-link sidebar-link mb-2"
                >
                    Employees
                </NavLink>

                <NavLink
                    to="/hr/leave"
                    className="nav-link sidebar-link mb-2"
                >
                    Leave Management
                </NavLink>

                <NavLink
                    to="/hr/attendance"
                    className="nav-link sidebar-link mb-2"
                >
                    Attendance
                </NavLink>

                <NavLink
                    to="/hr/payroll"
                    className="nav-link sidebar-link mb-2"
                >
                    Payroll
                </NavLink>


                {/* FINANCE */}
                <div className="text-muted small fw-bold mt-4 mb-2">
                    FINANCE
                </div>

                <NavLink
                    to="/finance"
                    className="nav-link sidebar-link mb-2"
                >
                    Finance
                </NavLink>


                {/* CRM */}
                <div className="text-muted small fw-bold mt-4 mb-2">
                    CRM
                </div>

                <NavLink
                    to="/crm/customers"
                    className="nav-link sidebar-link mb-2"
                >
                    Customer & Leads
                </NavLink>


                {/* PROJECTS */}
                <div className="text-muted small fw-bold mt-4 mb-2">
                    Projects
                </div>

                <NavLink
                    to="/projects"
                    className="nav-link sidebar-link mb-2"
                >
                    Projects
                </NavLink>


                {/* SETTINGS */}
                <div className="text-muted small fw-bold mt-4 mb-2">
                    ADMINISTRATION
                </div>

                <NavLink
                    to="/settings"
                    className="nav-link sidebar-link mb-2"
                >
                    Settings
                </NavLink>

            </div>
        </div>
    );
}

export default Sidebar;