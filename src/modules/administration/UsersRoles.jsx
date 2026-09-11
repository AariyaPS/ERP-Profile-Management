import { useState } from "react";
import { Link } from "react-router-dom";

function UsersRoles() {

    // Sample user data
    const [users] = useState([
        {
            id: 1,
            userId: "USR-1001",
            name: "Admin User",
            email: "admin@example.com",
            role: "Administrator",
            department: "Administration",
            status: "Active",
            lastLogin: "11 Sep 2026",
        },
        {
            id: 2,
            userId: "USR-1002",
            name: "Sarah Johnson",
            email: "sarah@example.com",
            role: "HR Manager",
            department: "Human Resources",
            status: "Active",
            lastLogin: "11 Sep 2026",
        },
        {
            id: 3,
            userId: "USR-1003",
            name: "Rajashekar",
            email: "rajashekar@example.com",
            role: "Project Manager",
            department: "Projects",
            status: "Active",
            lastLogin: "10 Sep 2026",
        },
        {
            id: 4,
            userId: "USR-1004",
            name: "Karthavya",
            email: "karthavya@example.com",
            role: "Finance Manager",
            department: "Finance",
            status: "Active",
            lastLogin: "09 Sep 2026",
        },
        {
            id: 5,
            userId: "USR-1005",
            name: "John Smith",
            email: "john.smith@example.com",
            role: "Employee",
            department: "Finance",
            status: "Inactive",
            lastLogin: "01 Sep 2026",
        },
    ]);

    const [search, setSearch] = useState("");
    const [roleFilter, setRoleFilter] = useState("All");
    const [statusFilter, setStatusFilter] = useState("All");


    // Filter users
    const filteredUsers = users.filter((user) => {

        const searchText = search.toLowerCase();

        const matchesSearch =
            user.userId.toLowerCase().includes(searchText) ||
            user.name.toLowerCase().includes(searchText) ||
            user.email.toLowerCase().includes(searchText) ||
            user.department.toLowerCase().includes(searchText);

        const matchesRole =
            roleFilter === "All" ||
            user.role === roleFilter;

        const matchesStatus =
            statusFilter === "All" ||
            user.status === statusFilter;

        return matchesSearch && matchesRole && matchesStatus;
    });


    // Status badge
    const getStatusBadge = (status) => {

        switch (status) {

            case "Active":
                return "badge bg-success";

            case "Inactive":
                return "badge bg-secondary";

            default:
                return "badge bg-secondary";
        }
    };


    // Role badge
    const getRoleBadge = (role) => {

        switch (role) {

            case "Administrator":
                return "badge bg-danger";

            case "HR Manager":
                return "badge bg-primary";

            case "Finance Manager":
                return "badge bg-warning text-dark";

            case "Project Manager":
                return "badge bg-info text-dark";

            case "Employee":
                return "badge bg-secondary";

            default:
                return "badge bg-secondary";
        }
    };


    return (
        <div>

            {/* =====================================================
                PAGE HEADER
            ====================================================== */}

            <div className="d-flex justify-content-between align-items-center mb-4">

                <div>

                    <h2 className="mb-1">
                        Users & Roles
                    </h2>

                    <p className="text-muted mb-0">
                        Manage system users and their roles
                    </p>

                </div>

                <div className="d-flex gap-2">

                    <Link
                        to="/administration"
                        className="btn btn-outline-primary"
                    >
                        ← Back
                    </Link>

                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => alert("Add User functionality will be added next.")}
                    >
                        + Add User
                    </button>

                </div>

            </div>


            {/* =====================================================
                SUMMARY CARDS
            ====================================================== */}

            <div className="row g-4 mb-4">

                {/* Total Users */}

                <div className="col-md-3">

                    <div className="card shadow-sm h-100">

                        <div className="card-body">

                            <h6 className="text-muted">
                                Total Users
                            </h6>

                            <h3 className="mb-0">
                                {users.length}
                            </h3>

                        </div>

                    </div>

                </div>


                {/* Active Users */}

                <div className="col-md-3">

                    <div className="card shadow-sm h-100">

                        <div className="card-body">

                            <h6 className="text-muted">
                                Active Users
                            </h6>

                            <h3 className="mb-0">
                                {
                                    users.filter(
                                        (user) => user.status === "Active"
                                    ).length
                                }
                            </h3>

                        </div>

                    </div>

                </div>


                {/* Inactive Users */}

                <div className="col-md-3">

                    <div className="card shadow-sm h-100">

                        <div className="card-body">

                            <h6 className="text-muted">
                                Inactive Users
                            </h6>

                            <h3 className="mb-0">
                                {
                                    users.filter(
                                        (user) => user.status === "Inactive"
                                    ).length
                                }
                            </h3>

                        </div>

                    </div>

                </div>


                {/* Roles */}

                <div className="col-md-3">

                    <div className="card shadow-sm h-100">

                        <div className="card-body">

                            <h6 className="text-muted">
                                Roles
                            </h6>

                            <h3 className="mb-0">
                                {
                                    new Set(
                                        users.map((user) => user.role)
                                    ).size
                                }
                            </h3>

                        </div>

                    </div>

                </div>

            </div>


            {/* =====================================================
                SEARCH & FILTER
            ====================================================== */}

            <div className="card shadow-sm mb-4">

                <div className="card-body">

                    <div className="row g-3">

                        {/* Search */}

                        <div className="col-md-6">

                            <label className="form-label">
                                Search Users
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by name, email or department..."
                                value={search}
                                onChange={(event) =>
                                    setSearch(event.target.value)
                                }
                            />

                        </div>


                        {/* Role */}

                        <div className="col-md-3">

                            <label className="form-label">
                                Role
                            </label>

                            <select
                                className="form-select"
                                value={roleFilter}
                                onChange={(event) =>
                                    setRoleFilter(event.target.value)
                                }
                            >

                                <option value="All">
                                    All Roles
                                </option>

                                <option value="Administrator">
                                    Administrator
                                </option>

                                <option value="HR Manager">
                                    HR Manager
                                </option>

                                <option value="Finance Manager">
                                    Finance Manager
                                </option>

                                <option value="Project Manager">
                                    Project Manager
                                </option>

                                <option value="Employee">
                                    Employee
                                </option>

                            </select>

                        </div>


                        {/* Status */}

                        <div className="col-md-3">

                            <label className="form-label">
                                Status
                            </label>

                            <select
                                className="form-select"
                                value={statusFilter}
                                onChange={(event) =>
                                    setStatusFilter(event.target.value)
                                }
                            >

                                <option value="All">
                                    All Status
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

            </div>


            {/* =====================================================
                USER TABLE
            ====================================================== */}

            <div className="card shadow-sm mb-5">

                <div className="card-header bg-orange-light">

                    <h5 className="mb-0">
                        System Users
                    </h5>

                </div>

                <div className="card-body">

                    <div className="table-responsive">

                        <table className="table table-hover align-middle">

                            <thead>

                                <tr>

                                    <th>User ID</th>

                                    <th>Name</th>

                                    <th>Email</th>

                                    <th>Department</th>

                                    <th>Role</th>

                                    <th>Status</th>

                                    <th>Last Login</th>

                                    <th>Action</th>

                                </tr>

                            </thead>


                            <tbody>

                                {filteredUsers.length > 0 ? (

                                    filteredUsers.map((user) => (

                                        <tr key={user.id}>

                                            {/* User ID */}

                                            <td>
                                                <strong>
                                                    {user.userId}
                                                </strong>
                                            </td>


                                            {/* Name */}

                                            <td>
                                                <strong>
                                                    {user.name}
                                                </strong>
                                            </td>


                                            {/* Email */}

                                            <td>
                                                {user.email}
                                            </td>


                                            {/* Department */}

                                            <td>
                                                {user.department}
                                            </td>


                                            {/* Role */}

                                            <td>

                                                <span
                                                    className={getRoleBadge(
                                                        user.role
                                                    )}
                                                >
                                                    {user.role}
                                                </span>

                                            </td>


                                            {/* Status */}

                                            <td>

                                                <span
                                                    className={getStatusBadge(
                                                        user.status
                                                    )}
                                                >
                                                    {user.status}
                                                </span>

                                            </td>


                                            {/* Last Login */}

                                            <td>
                                                <small>
                                                    {user.lastLogin}
                                                </small>
                                            </td>


                                            {/* Action */}

                                            <td>

                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-primary"
                                                    onClick={() =>
                                                        alert(
                                                            `View user: ${user.name}`
                                                        )
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
                                            className="text-center py-4"
                                        >

                                            <p className="text-muted mb-0">
                                                No users found.
                                            </p>

                                        </td>

                                    </tr>

                                )}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default UsersRoles;

