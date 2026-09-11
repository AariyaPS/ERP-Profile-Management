import { useState } from "react";
import { Link } from "react-router-dom";

function Permissions() {

    // Available roles
    const roles = [
        "Administrator",
        "HR Manager",
        "Finance Manager",
        "Project Manager",
        "Employee",
    ];

    // ERP modules
    const modules = [
        "Dashboard",
        "Employees",
        "Customers & Leads",
        "Projects",
        "Timesheets",
        "Tasks",
        "Finance",
        "Payroll",
        "Reports",
        "Administration",
    ];

    // Permission types
    const permissionTypes = [
        "View",
        "Create",
        "Edit",
        "Delete",
        "Approve",
    ];

    // Sample permission data
    const [permissions, setPermissions] = useState({
        Administrator: {
            Dashboard: {
                View: true,
                Create: true,
                Edit: true,
                Delete: true,
                Approve: true,
            },
            Employees: {
                View: true,
                Create: true,
                Edit: true,
                Delete: true,
                Approve: true,
            },
            "Customers & Leads": {
                View: true,
                Create: true,
                Edit: true,
                Delete: true,
                Approve: true,
            },
            Projects: {
                View: true,
                Create: true,
                Edit: true,
                Delete: true,
                Approve: true,
            },
            Timesheets: {
                View: true,
                Create: true,
                Edit: true,
                Delete: true,
                Approve: true,
            },
            Tasks: {
                View: true,
                Create: true,
                Edit: true,
                Delete: true,
                Approve: true,
            },
            Finance: {
                View: true,
                Create: true,
                Edit: true,
                Delete: true,
                Approve: true,
            },
            Payroll: {
                View: true,
                Create: true,
                Edit: true,
                Delete: true,
                Approve: true,
            },
            Reports: {
                View: true,
                Create: true,
                Edit: true,
                Delete: true,
                Approve: true,
            },
            Administration: {
                View: true,
                Create: true,
                Edit: true,
                Delete: true,
                Approve: true,
            },
        },

        "HR Manager": {
            Dashboard: {
                View: true,
                Create: false,
                Edit: false,
                Delete: false,
                Approve: false,
            },
            Employees: {
                View: true,
                Create: true,
                Edit: true,
                Delete: false,
                Approve: true,
            },
            "Customers & Leads": {
                View: true,
                Create: false,
                Edit: false,
                Delete: false,
                Approve: false,
            },
            Projects: {
                View: true,
                Create: false,
                Edit: false,
                Delete: false,
                Approve: false,
            },
            Timesheets: {
                View: true,
                Create: true,
                Edit: true,
                Delete: false,
                Approve: true,
            },
            Tasks: {
                View: true,
                Create: true,
                Edit: true,
                Delete: false,
                Approve: true,
            },
            Finance: {
                View: false,
                Create: false,
                Edit: false,
                Delete: false,
                Approve: false,
            },
            Payroll: {
                View: true,
                Create: false,
                Edit: true,
                Delete: false,
                Approve: true,
            },
            Reports: {
                View: true,
                Create: false,
                Edit: false,
                Delete: false,
                Approve: false,
            },
            Administration: {
                View: true,
                Create: false,
                Edit: false,
                Delete: false,
                Approve: false,
            },
        },

        "Finance Manager": {
            Dashboard: {
                View: true,
                Create: false,
                Edit: false,
                Delete: false,
                Approve: false,
            },
            Employees: {
                View: true,
                Create: false,
                Edit: false,
                Delete: false,
                Approve: false,
            },
            "Customers & Leads": {
                View: true,
                Create: true,
                Edit: true,
                Delete: false,
                Approve: false,
            },
            Projects: {
                View: true,
                Create: false,
                Edit: false,
                Delete: false,
                Approve: false,
            },
            Timesheets: {
                View: true,
                Create: false,
                Edit: false,
                Delete: false,
                Approve: true,
            },
            Tasks: {
                View: true,
                Create: false,
                Edit: false,
                Delete: false,
                Approve: false,
            },
            Finance: {
                View: true,
                Create: true,
                Edit: true,
                Delete: false,
                Approve: true,
            },
            Payroll: {
                View: true,
                Create: true,
                Edit: true,
                Delete: false,
                Approve: true,
            },
            Reports: {
                View: true,
                Create: false,
                Edit: false,
                Delete: false,
                Approve: false,
            },
            Administration: {
                View: false,
                Create: false,
                Edit: false,
                Delete: false,
                Approve: false,
            },
        },

        "Project Manager": {
            Dashboard: {
                View: true,
                Create: false,
                Edit: false,
                Delete: false,
                Approve: false,
            },
            Employees: {
                View: true,
                Create: false,
                Edit: false,
                Delete: false,
                Approve: false,
            },
            "Customers & Leads": {
                View: true,
                Create: true,
                Edit: true,
                Delete: false,
                Approve: false,
            },
            Projects: {
                View: true,
                Create: true,
                Edit: true,
                Delete: false,
                Approve: true,
            },
            Timesheets: {
                View: true,
                Create: true,
                Edit: true,
                Delete: false,
                Approve: true,
            },
            Tasks: {
                View: true,
                Create: true,
                Edit: true,
                Delete: false,
                Approve: true,
            },
            Finance: {
                View: true,
                Create: false,
                Edit: false,
                Delete: false,
                Approve: false,
            },
            Payroll: {
                View: false,
                Create: false,
                Edit: false,
                Delete: false,
                Approve: false,
            },
            Reports: {
                View: true,
                Create: false,
                Edit: false,
                Delete: false,
                Approve: false,
            },
            Administration: {
                View: false,
                Create: false,
                Edit: false,
                Delete: false,
                Approve: false,
            },
        },

        Employee: {
            Dashboard: {
                View: true,
                Create: false,
                Edit: false,
                Delete: false,
                Approve: false,
            },
            Employees: {
                View: true,
                Create: false,
                Edit: false,
                Delete: false,
                Approve: false,
            },
            "Customers & Leads": {
                View: false,
                Create: false,
                Edit: false,
                Delete: false,
                Approve: false,
            },
            Projects: {
                View: true,
                Create: false,
                Edit: false,
                Delete: false,
                Approve: false,
            },
            Timesheets: {
                View: true,
                Create: true,
                Edit: true,
                Delete: false,
                Approve: false,
            },
            Tasks: {
                View: true,
                Create: true,
                Edit: true,
                Delete: false,
                Approve: false,
            },
            Finance: {
                View: false,
                Create: false,
                Edit: false,
                Delete: false,
                Approve: false,
            },
            Payroll: {
                View: true,
                Create: false,
                Edit: false,
                Delete: false,
                Approve: false,
            },
            Reports: {
                View: true,
                Create: false,
                Edit: false,
                Delete: false,
                Approve: false,
            },
            Administration: {
                View: false,
                Create: false,
                Edit: false,
                Delete: false,
                Approve: false,
            },
        },
    });

    const [selectedRole, setSelectedRole] = useState("Administrator");

    const [saved, setSaved] = useState(false);


    // Handle permission change
    const handlePermissionChange = (
        moduleName,
        permission
    ) => {

        setPermissions((previousPermissions) => ({
            ...previousPermissions,

            [selectedRole]: {
                ...previousPermissions[selectedRole],

                [moduleName]: {
                    ...previousPermissions[selectedRole][moduleName],

                    [permission]:
                        !previousPermissions[selectedRole][moduleName][
                            permission
                        ],
                },
            },
        }));

        setSaved(false);
    };


    // Save permissions
    const handleSave = () => {

        console.log(
            "Updated Permissions:",
            permissions[selectedRole]
        );

        setSaved(true);
    };


    // Count enabled permissions
    const getPermissionCount = () => {

        let count = 0;

        modules.forEach((moduleName) => {

            permissionTypes.forEach((permission) => {

                if (
                    permissions[selectedRole]?.[moduleName]?.[
                        permission
                    ]
                ) {
                    count++;
                }

            });

        });

        return count;
    };


    return (
        <div>

            {/* =====================================================
                PAGE HEADER
            ====================================================== */}

            <div className="d-flex justify-content-between align-items-center mb-4">

                <div>

                    <h2 className="mb-1">
                        Permissions
                    </h2>

                    <p className="text-muted mb-0">
                        Manage access permissions for system roles
                    </p>

                </div>

                <div className="d-flex gap-2">

                    <Link
                        to="/administration/users"
                        className="btn btn-outline-primary"
                    >
                        ← Users & Roles
                    </Link>

                    <Link
                        to="/administration"
                        className="btn btn-outline-secondary"
                    >
                        Administration
                    </Link>

                </div>

            </div>


            {/* =====================================================
                ROLE SELECTION
            ====================================================== */}

            <div className="card shadow-sm mb-4">

                <div className="card-header bg-orange-light">

                    <h5 className="mb-0">
                        Role Permissions
                    </h5>

                </div>

                <div className="card-body">

                    <div className="row g-4 align-items-end">

                        <div className="col-md-6">

                            <label className="form-label">
                                Select Role
                            </label>

                            <select
                                className="form-select"
                                value={selectedRole}
                                onChange={(event) => {
                                    setSelectedRole(
                                        event.target.value
                                    );

                                    setSaved(false);
                                }}
                            >

                                {roles.map((role) => (

                                    <option
                                        key={role}
                                        value={role}
                                    >
                                        {role}
                                    </option>

                                ))}

                            </select>

                        </div>


                        <div className="col-md-3">

                            <label className="form-label">
                                Enabled Permissions
                            </label>

                            <div className="form-control bg-light">
                                {getPermissionCount()}
                            </div>

                        </div>


                        <div className="col-md-3">

                            <button
                                type="button"
                                className="btn btn-primary w-100"
                                onClick={handleSave}
                            >
                                Save Permissions
                            </button>

                        </div>

                    </div>

                </div>

            </div>


            {/* =====================================================
                SUCCESS MESSAGE
            ====================================================== */}

            {saved && (

                <div
                    className="alert alert-success"
                    role="alert"
                >
                    Permissions for <strong>{selectedRole}</strong>{" "}
                    have been saved successfully.
                </div>

            )}


            {/* =====================================================
                PERMISSION MATRIX
            ====================================================== */}

            <div className="card shadow-sm mb-5">

                <div className="card-header bg-orange-light">

                    <h5 className="mb-0">
                        Access Control Matrix
                    </h5>

                </div>

                <div className="card-body">

                    <div className="table-responsive">

                        <table className="table table-hover align-middle">

                            <thead>

                                <tr>

                                    <th>
                                        Module
                                    </th>

                                    {permissionTypes.map(
                                        (permission) => (

                                            <th
                                                key={permission}
                                                className="text-center"
                                            >
                                                {permission}
                                            </th>

                                        )
                                    )}

                                </tr>

                            </thead>


                            <tbody>

                                {modules.map((moduleName) => (

                                    <tr key={moduleName}>

                                        <td>
                                            <strong>
                                                {moduleName}
                                            </strong>
                                        </td>


                                        {permissionTypes.map(
                                            (permission) => (

                                                <td
                                                    key={permission}
                                                    className="text-center"
                                                >

                                                    <div className="form-check d-flex justify-content-center">

                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            checked={
                                                                permissions[
                                                                    selectedRole
                                                                ]?.[
                                                                    moduleName
                                                                ]?.[
                                                                    permission
                                                                ] || false
                                                            }
                                                            onChange={() =>
                                                                handlePermissionChange(
                                                                    moduleName,
                                                                    permission
                                                                )
                                                            }
                                                        />

                                                    </div>

                                                </td>

                                            )
                                        )}

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>


            {/* =====================================================
                INFORMATION CARD
            ====================================================== */}

            <div className="card shadow-sm mb-5">

                <div className="card-header bg-orange-light">

                    <h5 className="mb-0">
                        Permission Types
                    </h5>

                </div>

                <div className="card-body">

                    <div className="row g-4">

                        <div className="col-md-4">

                            <h6>
                                View
                            </h6>

                            <p className="text-muted mb-0">
                                Allows users to view information
                                within the selected module.
                            </p>

                        </div>


                        <div className="col-md-4">

                            <h6>
                                Create
                            </h6>

                            <p className="text-muted mb-0">
                                Allows users to create new
                                records within the module.
                            </p>

                        </div>


                        <div className="col-md-4">

                            <h6>
                                Edit
                            </h6>

                            <p className="text-muted mb-0">
                                Allows users to modify existing
                                records.
                            </p>

                        </div>


                        <div className="col-md-4">

                            <h6>
                                Delete
                            </h6>

                            <p className="text-muted mb-0">
                                Allows users to remove records.
                            </p>

                        </div>


                        <div className="col-md-4">

                            <h6>
                                Approve
                            </h6>

                            <p className="text-muted mb-0">
                                Allows users to approve requests,
                                transactions, or records.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Permissions;
