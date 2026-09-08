import { useMemo, useState } from "react";
import { useEmployees } from "../../../context/EmployeeContext.jsx";

function Attendance() {
    const { employees } = useEmployees();

    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    /*
    ============================================
    CALCULATE ATTENDANCE SUMMARY
    ============================================
    */

    const attendanceData = useMemo(() => {
        return employees.map((employee) => {
            const attendance = employee.attendance || {};

            const totalWorkingDays = attendance.totalWorkingDays || 0;
            const presentDays = attendance.presentDays || 0;
            const leaveDays = attendance.leaveDays || 0;

            const absentDays = Math.max(
                totalWorkingDays - presentDays - leaveDays,
                0
            );

            let status = "Present";

            if (leaveDays > 0 && presentDays === 0) {
                status = "On Leave";
            } else if (absentDays > 0) {
                status = "Absent";
            }

            return {
                ...employee,
                totalWorkingDays,
                presentDays,
                leaveDays,
                absentDays,
                totalHoursWorked: attendance.totalHoursWorked || 0,
                averageHoursPerDay: attendance.averageHoursPerDay || 0,
                status,
                leaves: attendance.leaves || [],
            };
        });
    }, [employees]);


    /*
    ============================================
    FILTER EMPLOYEES
    ============================================
    */

    const filteredEmployees = attendanceData.filter((employee) => {

        const matchesSearch =
            employee.name
                ?.toLowerCase()
                .includes(search.toLowerCase()) ||
            employee.employeeId
                ?.toLowerCase()
                .includes(search.toLowerCase());

        const matchesStatus =
            statusFilter === "All" ||
            employee.status === statusFilter;

        return matchesSearch && matchesStatus;
    });


    /*
    ============================================
    SUMMARY CALCULATIONS
    ============================================
    */

    const totalEmployees = employees.length;

    const totalPresentDays = attendanceData.reduce(
        (total, employee) => total + employee.presentDays,
        0
    );

    const totalLeaveDays = attendanceData.reduce(
        (total, employee) => total + employee.leaveDays,
        0
    );

    const totalAbsentDays = attendanceData.reduce(
        (total, employee) => total + employee.absentDays,
        0
    );

    const totalHoursWorked = attendanceData.reduce(
        (total, employee) => total + employee.totalHoursWorked,
        0
    );


    /*
    ============================================
    RENDER
    ============================================
    */

    return (
        <div>

            {/* =====================================
                PAGE HEADER
            ===================================== */}

            <div className="d-flex justify-content-between align-items-center mb-4">

                <div>
                    <h2 className="mb-1">
                        Attendance
                    </h2>

                    <p className="text-muted mb-0">
                        Monitor employee attendance and working hours
                    </p>
                </div>

            </div>


            {/* =====================================
                SUMMARY CARDS
            ===================================== */}

            <div className="row g-4 mb-4">

                {/* TOTAL EMPLOYEES */}

                <div className="col-md-3">

                    <div className="card shadow-sm h-100">

                        <div className="card-body">

                            <div className="d-flex justify-content-between align-items-center">

                                <div>
                                    <p className="text-muted mb-1">
                                        Total Employees
                                    </p>

                                    <h3 className="mb-0">
                                        {totalEmployees}
                                    </h3>
                                </div>

                                <div
                                    className="rounded-circle d-flex align-items-center justify-content-center"
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

                            </div>

                        </div>

                    </div>

                </div>


                {/* PRESENT */}

                <div className="col-md-3">

                    <div className="card shadow-sm h-100">

                        <div className="card-body">

                            <div className="d-flex justify-content-between align-items-center">

                                <div>
                                    <p className="text-muted mb-1">
                                        Present Days
                                    </p>

                                    <h3 className="mb-0 text-success">
                                        {totalPresentDays}
                                    </h3>
                                </div>

                                <div
                                    className="rounded-circle d-flex align-items-center justify-content-center"
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        backgroundColor: "#E8F5E9",
                                        fontSize: "22px",
                                    }}
                                >
                                    ✓
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* LEAVE */}

                <div className="col-md-3">

                    <div className="card shadow-sm h-100">

                        <div className="card-body">

                            <div className="d-flex justify-content-between align-items-center">

                                <div>
                                    <p className="text-muted mb-1">
                                        Leave Days
                                    </p>

                                    <h3 className="mb-0 text-warning">
                                        {totalLeaveDays}
                                    </h3>
                                </div>

                                <div
                                    className="rounded-circle d-flex align-items-center justify-content-center"
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        backgroundColor: "#FFF8E1",
                                        fontSize: "22px",
                                    }}
                                >
                                    📅
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* ABSENT */}

                <div className="col-md-3">

                    <div className="card shadow-sm h-100">

                        <div className="card-body">

                            <div className="d-flex justify-content-between align-items-center">

                                <div>
                                    <p className="text-muted mb-1">
                                        Absent Days
                                    </p>

                                    <h3 className="mb-0 text-danger">
                                        {totalAbsentDays}
                                    </h3>
                                </div>

                                <div
                                    className="rounded-circle d-flex align-items-center justify-content-center"
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        backgroundColor: "#FFEBEE",
                                        fontSize: "22px",
                                    }}
                                >
                                    ✕
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            {/* =====================================
                WORKING HOURS SUMMARY
            ===================================== */}

            <div className="card shadow-sm mb-4">

                <div className="card-body">

                    <div className="row">

                        <div className="col-md-6">

                            <p className="text-muted mb-1">
                                Total Hours Worked
                            </p>

                            <h4 className="mb-0">
                                {totalHoursWorked} hrs
                            </h4>

                        </div>

                        <div className="col-md-6">

                            <p className="text-muted mb-1">
                                Average Hours Per Day
                            </p>

                            <h4 className="mb-0">
                                {totalEmployees > 0
                                    ? (
                                        totalHoursWorked /
                                        Math.max(totalPresentDays, 1)
                                    ).toFixed(1)
                                    : 0
                                } hrs
                            </h4>

                        </div>

                    </div>

                </div>

            </div>


            {/* =====================================
                SEARCH AND FILTER
            ===================================== */}

            <div className="card shadow-sm mb-4">

                <div className="card-body">

                    <div className="row g-3">

                        {/* SEARCH */}

                        <div className="col-md-8">

                            <label className="form-label">
                                Search Employee
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by employee name or ID..."
                                value={search}
                                onChange={(event) =>
                                    setSearch(event.target.value)
                                }
                            />

                        </div>


                        {/* STATUS FILTER */}

                        <div className="col-md-4">

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
                                    All
                                </option>

                                <option value="Present">
                                    Present
                                </option>

                                <option value="On Leave">
                                    On Leave
                                </option>

                                <option value="Absent">
                                    Absent
                                </option>

                            </select>

                        </div>

                    </div>

                </div>

            </div>


            {/* =====================================
                EMPLOYEE ATTENDANCE TABLE
            ===================================== */}

            <div className="card shadow-sm mb-5">

                <div className="card-header bg-orange-light">

                    <div className="d-flex justify-content-between align-items-center">

                        <h5 className="mb-0">
                            Employee Attendance
                        </h5>

                        <span className="text-muted">
                            {filteredEmployees.length} employee(s)
                        </span>

                    </div>

                </div>


                <div className="card-body">

                    <div className="table-responsive">

                        <table className="table table-hover align-middle">

                            <thead>

                                <tr>

                                    <th>
                                        Employee ID
                                    </th>

                                    <th>
                                        Employee
                                    </th>

                                    <th>
                                        Working Days
                                    </th>

                                    <th>
                                        Present
                                    </th>

                                    <th>
                                        Leave
                                    </th>

                                    <th>
                                        Absent
                                    </th>

                                    <th>
                                        Hours Worked
                                    </th>

                                    <th>
                                        Avg. Hours
                                    </th>

                                    <th>
                                        Status
                                    </th>

                                </tr>

                            </thead>


                            <tbody>

                                {filteredEmployees.length > 0 ? (

                                    filteredEmployees.map((employee) => (

                                        <tr key={employee.id}>

                                            {/* EMPLOYEE ID */}

                                            <td>
                                                <strong>
                                                    {employee.employeeId}
                                                </strong>
                                            </td>


                                            {/* EMPLOYEE */}

                                            <td>

                                                <div className="d-flex align-items-center">

                                                    <img
                                                        src={employee.photo}
                                                        alt={employee.name}
                                                        className="rounded-circle me-2"
                                                        style={{
                                                            width: "40px",
                                                            height: "40px",
                                                            objectFit: "cover",
                                                        }}
                                                    />

                                                    <div>

                                                        <div className="fw-semibold">
                                                            {employee.name}
                                                        </div>

                                                        <small className="text-muted">
                                                            {
                                                                employee.employment
                                                                    ?.designation
                                                            }
                                                        </small>

                                                    </div>

                                                </div>

                                            </td>


                                            {/* WORKING DAYS */}

                                            <td>
                                                {employee.totalWorkingDays}
                                            </td>


                                            {/* PRESENT */}

                                            <td>

                                                <span className="badge bg-success">
                                                    {employee.presentDays}
                                                </span>

                                            </td>


                                            {/* LEAVE */}

                                            <td>

                                                <span className="badge bg-warning text-dark">
                                                    {employee.leaveDays}
                                                </span>

                                            </td>


                                            {/* ABSENT */}

                                            <td>

                                                <span className="badge bg-danger">
                                                    {employee.absentDays}
                                                </span>

                                            </td>


                                            {/* HOURS */}

                                            <td>
                                                {employee.totalHoursWorked} hrs
                                            </td>


                                            {/* AVERAGE HOURS */}

                                            <td>
                                                {employee.averageHoursPerDay} hrs
                                            </td>


                                            {/* STATUS */}

                                            <td>

                                                {employee.status === "Present" && (

                                                    <span className="badge bg-success">
                                                        Present
                                                    </span>

                                                )}

                                                {employee.status === "On Leave" && (

                                                    <span className="badge bg-warning text-dark">
                                                        On Leave
                                                    </span>

                                                )}

                                                {employee.status === "Absent" && (

                                                    <span className="badge bg-danger">
                                                        Absent
                                                    </span>

                                                )}

                                            </td>

                                        </tr>

                                    ))

                                ) : (

                                    <tr>

                                        <td
                                            colSpan="9"
                                            className="text-center py-4"
                                        >

                                            <p className="text-muted mb-0">
                                                No employees found.
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
                LEAVE DETAILS
            ===================================== */}

            <div className="card shadow-sm mb-5">

                <div className="card-header bg-orange-light">

                    <h5 className="mb-0">
                        Recent Leave Records
                    </h5>

                </div>

                <div className="card-body">

                    <div className="table-responsive">

                        <table className="table table-hover align-middle">

                            <thead>

                                <tr>

                                    <th>
                                        Employee
                                    </th>

                                    <th>
                                        From
                                    </th>

                                    <th>
                                        To
                                    </th>

                                    <th>
                                        Days
                                    </th>

                                    <th>
                                        Leave Type
                                    </th>

                                    <th>
                                        Reason
                                    </th>

                                    <th>
                                        Status
                                    </th>

                                </tr>

                            </thead>


                            <tbody>

                                {attendanceData.flatMap((employee) =>
                                    employee.leaves.map(
                                        (leave, index) => (

                                            <tr
                                                key={`${employee.id}-${index}`}
                                            >

                                                <td>

                                                    <strong>
                                                        {employee.name}
                                                    </strong>

                                                    <br />

                                                    <small className="text-muted">
                                                        {
                                                            employee.employeeId
                                                        }
                                                    </small>

                                                </td>

                                                <td>
                                                    {leave.from}
                                                </td>

                                                <td>
                                                    {leave.to}
                                                </td>

                                                <td>
                                                    {leave.days}
                                                </td>

                                                <td>
                                                    {leave.type}
                                                </td>

                                                <td>
                                                    {leave.reason}
                                                </td>

                                                <td>

                                                    <span
                                                        className={
                                                            leave.status ===
                                                            "Approved"
                                                                ? "badge bg-success"
                                                                : leave.status ===
                                                                  "Rejected"
                                                                ? "badge bg-danger"
                                                                : "badge bg-warning text-dark"
                                                        }
                                                    >
                                                        {leave.status}
                                                    </span>

                                                </td>

                                            </tr>

                                        )
                                    )
                                )}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Attendance;