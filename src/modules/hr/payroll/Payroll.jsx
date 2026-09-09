import { useMemo, useState } from "react";
import { useEmployees } from "../../../context/EmployeeContext.jsx";

function Payroll() {
  const { employees } = useEmployees();

  const [selectedMonth, setSelectedMonth] = useState("September 2026");
  const [search, setSearch] = useState("");

  /*
   * Sample payroll calculation
   *
   * In a real ERP system these values would normally
   * come from the payroll database.
   */

  const payrollData = useMemo(() => {
    return employees.map((employee) => {
      let basicSalary = 0;

      switch (employees.id) {
        case 1:
          basicSalary = 60000;
          break;

        case 2:
          basicSalary = 100000;
          break;

        case 3:
          basicSalary = 120000;
          break;

        case 4:
          basicSalary = 55000;
          break;

        case 5:
          basicSalary = 90000;
          break;

        default:
          basicSalary = 50000;
      }

      const hra = Math.round(basicSalary * 0.2);
      const allowance = Math.round(basicSalary * 0.1);
      const deductions = Math.round(basicSalary * 0.05);

      const grossSalary = basicSalary + hra + allowance;

      const netSalary = grossSalary - deductions;

      return {
        ...employee,
        basicSalary,
        hra,
        allowance,
        deductions,
        grossSalary,
        netSalary,

        paymentStatus:
          employee.employment?.status === "Active" ? "Processed" : "Pending",
      };
    });
  }, [employees]);

  /**
   * Search Employees
   */
  const filteredPayroll = payrollData.filter((employee) => {
    const searchText = search.toLowerCase();

    return (
      employee.name.toLowerCase().includes(searchText) ||
      employee.employeeId.toLowerCase().includes(searchText) ||
      employee.employment?.department?.toLowerCase().includes(searchText)
    );
  });

  /**
   * Payroll Summary
   */
  const totalEmployees = payrollData.length;

  const totalGrossSalary = payrollData.reduce(
    (total, employee) => total + employee.grossSalary,
    0,
  );

  const totalDeductions = payrollData.reduce(
    (total, employee) => total + employee.deductions,
    0,
  );

  const totalNetSalary = payrollData.reduce(
    (total, employee) => total + employee.netSalary,
    0,
  );

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div>
      {/* =======================================================
                PAGE HEADER
                ========================================================
             */}

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="mb-1">Payroll</h2>

          <p className="text-muted mb-0">
            Manage employee salaries and payroll processing
          </p>
        </div>

        <button
          className="btn btn-primary"
          onClick={() => alert("Payroll processing started")}
        >
          Process Payroll
        </button>
      </div>

      {/**
       * ===============================================================
       * PAYROLL CONTROLS
       * ================================================================
       */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <div className="row g-3 align-items-end">
            {/**Month */}
            <div className="col-md-4">
              <label className="form-label">Payroll Month</label>

              <select
                className="form-select"
                value={selectedMonth}
                onChange={(event) => setSelectedMonth(event.target.value)}
              >
                <option>September 2026</option>
                <option>August 2026</option>
                <option>July 2026</option>
                <option>June 2026</option>
              </select>
            </div>

            {/**Search */}
            <div className="col-md-5">
              <label className="form-label">Search Employee</label>

              <input
                type="text"
                className="form-control"
                placeholder="Search by name, employee ID or department"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>

            {/**Status */}
            <div className="col-md-3">
              <button
                className="btn btn-outline-secondary w-100"
                onClick={() => setSearch("")}
              >
                {" "}
                Clear Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/**
       * ===================================================================
       * SUMMARY CARDS
       * ====================================================================
       */}

      <div className="row g-4 mb-4">
        {/*Employees*/}

        <div className="col-md-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <small className="text-muted">Employees</small>

              <h3 className="mt-2 mb-0">{totalEmployees}</h3>

              <small className="text-muted">Active payroll employees</small>
            </div>
          </div>
        </div>

        {/**Gross Salary */}
        <div className="col-md-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <small className="text-muted">Gross Payroll</small>

              <h3 className="mt-2 mb-0">{formatCurrency(totalGrossSalary)}</h3>

              <small className="text-muted">Before Deductions</small>
            </div>
          </div>
        </div>

        {/*Deductions*/}

        <div className="col-md-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <small className="text-muted">Total Deductions</small>

              <h3 className="mt-2 mb-0">{formatCurrency(totalDeductions)}</h3>

              <small className="text-muted">Tax and other deductions</small>
            </div>
          </div>
        </div>

        {/**Net Payroll */}
        <div className="col-md-3">

            <div className="card shadow-sm h-100">

                <div className="card-body">

                    <small className="text-muted">Net Payroll</small>

                    <h3 className="mt-2 mb-0" style={{color: "#EA6814"}}>{formatCurrency(totalNetSalary)}</h3>

                    <small className="text-muted">Amount payable</small>
                </div>
            </div>
        </div>

      </div>

      {/**
       * ================================================================================
       * PAYROLL TABLE
       * ================================================================================
       */}
       <div className="card shadow-sm mb-5">

        <div className="card-header bg-orange-light">

            <div className="d-flex justify-content-between align-items-center">

                <h5 className="mb-0">Payroll Details</h5>

                <span className="text-muted">{selectedMonth}</span>
            </div>
        </div>

        <div className="card-body">

            <div className="table-responsive">
                <table className="table table-hover align-middle">

                    <thead>
                        <tr>
                            <th>Employee</th>
                            <th>Department</th>
                            <th>Basic Salary</th>
                            <th>HRA</th>
                            <th>Allowances</th>
                            <th>Gross Salary</th>
                            <th>Deductions</th>
                            <th>Net Salary</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>

                        {filteredPayroll.length>0? (
                            filteredPayroll.map((employee)=>(
                                <tr key={employee.id}>
                                    {/**Employee */}

                                    <td>
                                        <div className="d-flex align-items-center">

                                            <img src={employee.photo} alt={employee.name}
                                            className="rounded-circle me-2"
                                            style={{
                                                width:"40px",
                                                height:"40px",
                                                objectFit: "cover"
                                            }} 
                                            />

                                            <div>

                                                <strong>{employee.name}</strong>

                                                <div>
                                                    <small className="text-muted">{employee.employeeId}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    {/** Department */}
                                    <td>{employee.employment?.department || "-"}</td>

                                    {/** Basic */}
                                    <td>{formatCurrency(employee.basicSalary)}</td>
                                    
                                    {/** HRA */}
                                    <td>{formatCurrency(employee.hra)}</td>

                                    {/**Allowances */}
                                    <td>{formatCurrency(employee.allowance)}</td>

                                    {/** Gross */}
                                    <td>
                                        <strong>{formatCurrency(employee.grossSalary)}</strong>
                                    </td>

                                    {/**Deductions */}
                                    <td>{formatCurrency(employee.deductions)}</td>

                                    {/** Net */}
                                    <td>
                                        <strong
                                        style={{color: "#EA6814"}}>{formatCurrency(employee.netSalary)}</strong>
                                    </td>

                                    {/** Status */}
                                    <td>
                                        <span
                                        className={
                                            employee.paymentStatus === "Processed"? "badge bg-success" : "badge bg-warning text-dark"
                                        }>  {employee.paymentStatus} </span>
                                    </td>
                                </tr>
                            ))
                        ):(
                            <tr>

                                <td colSpan="9" className="text-center py-4">

                                    <span className="text-muted">No employees found.</span>
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
export default Payroll;
