import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEmployees } from "../../../context/EmployeeContext.jsx";

function EditEmployee() {

    const { id } = useParams();
    const navigate = useNavigate();

    const { employees, updateEmployee } = useEmployees();

    // Find employee using the ID from the URL
    const employee = employees.find(
        (employee) => String(employee.id) === String(id)
    );

    // Employee not found
    if (!employee) {
        return (
            <div className="card shadow-sm">
                <div className="card-body">

                    <h4>Employee Not Found</h4>

                    <p className="text-muted">
                        We could not find the employee you are trying to edit.
                    </p>

                    <Link
                        to="/hr/employees"
                        className="btn btn-primary"
                    >
                        Back to Employees
                    </Link>

                </div>
            </div>
        );
    }

    return (
        <EditEmployeeForm
            employee={employee}
            updateEmployee={updateEmployee}
            navigate={navigate}
        />
    );
}


function EditEmployeeForm({
    employee,
    updateEmployee,
    navigate
}) {

    const [formData, setFormData] = useState({
        name: employee.name || "",
        employeeId: employee.employeeId || "",

        email: employee.personal?.email || "",
        phone: employee.personal?.phone || "",
        address: employee.personal?.address || "",
        dob: employee.personal?.dob || "",
        gender: employee.personal?.gender || "",
        nationality: employee.personal?.nationality || "",
        maritalStatus: employee.personal?.maritalStatus || "",

        department: employee.employment?.department || "",
        designation: employee.employment?.designation || "",
        location: employee.employment?.location || "",
        joiningDate: employee.employment?.joiningDate || "",
        employmentType: employee.employment?.employmentType || "",
        manager: employee.employment?.manager || "",
        grade: employee.employment?.grade || "",
        status: employee.employment?.status || ""
    });


    const handleChange = (event) => {

        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value
        }));

    };


    const handleSubmit = (event) => {

        event.preventDefault();

        const updatedEmployee = {

            ...employee,

            name: formData.name,

            employeeId: formData.employeeId,

            personal: {
                ...employee.personal,

                email: formData.email,
                phone: formData.phone,
                address: formData.address,
                dob: formData.dob,
                gender: formData.gender,
                nationality: formData.nationality,
                maritalStatus: formData.maritalStatus
            },

            employment: {
                ...employee.employment,

                department: formData.department,
                designation: formData.designation,
                location: formData.location,
                joiningDate: formData.joiningDate,
                employmentType: formData.employmentType,
                manager: formData.manager,
                grade: formData.grade,
                status: formData.status
            }
        };


        updateEmployee(updatedEmployee);

        // Go back to employee profile
        navigate(`/hr/employees/${employee.id}`);

    };


    const handleCancel = () => {

        navigate(`/hr/employees/${employee.id}`);

    };


    return (

        <div>

            {/* PAGE HEADER */}

            <div className="d-flex justify-content-between align-items-center mb-4">

                <div>

                    <h2>Edit Employee</h2>

                    <p className="text-muted mb-0">
                        Update employee information
                    </p>

                </div>

            </div>


            <form onSubmit={handleSubmit}>


                {/* =====================================
                    BASIC INFORMATION
                ===================================== */}

                <div className="card shadow-sm mb-4">

                    <div className="card-header bg-orange-light">

                        <h5 className="mb-0">
                            Basic Information
                        </h5>

                    </div>


                    <div className="card-body">

                        <div className="row g-3">

                            {/* Name */}

                            <div className="col-md-6">

                                <label className="form-label">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    value={formData.name}
                                    onChange={handleChange}
                                />

                            </div>


                            {/* Employee ID */}

                            <div className="col-md-6">

                                <label className="form-label">
                                    Employee ID
                                </label>

                                <input
                                    type="text"
                                    name="employeeId"
                                    className="form-control"
                                    value={formData.employeeId}
                                    disabled
                                />

                            </div>


                            {/* Email */}

                            <div className="col-md-6">

                                <label className="form-label">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    value={formData.email}
                                    onChange={handleChange}
                                />

                            </div>


                            {/* Phone */}

                            <div className="col-md-6">

                                <label className="form-label">
                                    Phone
                                </label>

                                <input
                                    type="text"
                                    name="phone"
                                    className="form-control"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />

                            </div>


                            {/* Date of Birth */}

                            <div className="col-md-4">

                                <label className="form-label">
                                    Date of Birth
                                </label>

                                <input
                                    type="date"
                                    name="dob"
                                    className="form-control"
                                    value={formData.dob}
                                    onChange={handleChange}
                                />

                            </div>


                            {/* Gender */}

                            <div className="col-md-4">

                                <label className="form-label">
                                    Gender
                                </label>

                                <select
                                    name="gender"
                                    className="form-select"
                                    value={formData.gender}
                                    onChange={handleChange}
                                >

                                    <option value="">
                                        Select Gender
                                    </option>

                                    <option value="Male">
                                        Male
                                    </option>

                                    <option value="Female">
                                        Female
                                    </option>

                                    <option value="Other">
                                        Other
                                    </option>

                                </select>

                            </div>


                            {/* Nationality */}

                            <div className="col-md-4">

                                <label className="form-label">
                                    Nationality
                                </label>

                                <input
                                    type="text"
                                    name="nationality"
                                    className="form-control"
                                    value={formData.nationality}
                                    onChange={handleChange}
                                />

                            </div>


                            {/* Marital Status */}

                            <div className="col-md-4">

                                <label className="form-label">
                                    Marital Status
                                </label>

                                <select
                                    name="maritalStatus"
                                    className="form-select"
                                    value={formData.maritalStatus}
                                    onChange={handleChange}
                                >

                                    <option value="">
                                        Select
                                    </option>

                                    <option value="Single">
                                        Single
                                    </option>

                                    <option value="Married">
                                        Married
                                    </option>

                                </select>

                            </div>


                            {/* Address */}

                            <div className="col-12">

                                <label className="form-label">
                                    Address
                                </label>

                                <textarea
                                    name="address"
                                    className="form-control"
                                    rows="3"
                                    value={formData.address}
                                    onChange={handleChange}
                                />

                            </div>

                        </div>

                    </div>

                </div>


                {/* =====================================
                    EMPLOYMENT DETAILS
                ===================================== */}

                <div className="card shadow-sm mb-4">

                    <div className="card-header bg-orange-light">

                        <h5 className="mb-0">
                            Employment Details
                        </h5>

                    </div>


                    <div className="card-body">

                        <div className="row g-3">

                            {/* Department */}

                            <div className="col-md-6">

                                <label className="form-label">
                                    Department
                                </label>

                                <input
                                    type="text"
                                    name="department"
                                    className="form-control"
                                    value={formData.department}
                                    onChange={handleChange}
                                />

                            </div>


                            {/* Designation */}

                            <div className="col-md-6">

                                <label className="form-label">
                                    Designation
                                </label>

                                <input
                                    type="text"
                                    name="designation"
                                    className="form-control"
                                    value={formData.designation}
                                    onChange={handleChange}
                                />

                            </div>


                            {/* Location */}

                            <div className="col-md-4">

                                <label className="form-label">
                                    Location
                                </label>

                                <input
                                    type="text"
                                    name="location"
                                    className="form-control"
                                    value={formData.location}
                                    onChange={handleChange}
                                />

                            </div>


                            {/* Joining Date */}

                            <div className="col-md-4">

                                <label className="form-label">
                                    Joining Date
                                </label>

                                <input
                                    type="date"
                                    name="joiningDate"
                                    className="form-control"
                                    value={formData.joiningDate}
                                    onChange={handleChange}
                                />

                            </div>


                            {/* Employment Type */}

                            <div className="col-md-4">

                                <label className="form-label">
                                    Employment Type
                                </label>

                                <select
                                    name="employmentType"
                                    className="form-select"
                                    value={formData.employmentType}
                                    onChange={handleChange}
                                >

                                    <option value="">
                                        Select
                                    </option>

                                    <option value="Full Time">
                                        Full Time
                                    </option>

                                    <option value="Part Time">
                                        Part Time
                                    </option>

                                    <option value="Contract">
                                        Contract
                                    </option>

                                </select>

                            </div>


                            {/* Manager */}

                            <div className="col-md-4">

                                <label className="form-label">
                                    Manager
                                </label>

                                <input
                                    type="text"
                                    name="manager"
                                    className="form-control"
                                    value={formData.manager}
                                    onChange={handleChange}
                                />

                            </div>


                            {/* Grade */}

                            <div className="col-md-4">

                                <label className="form-label">
                                    Grade
                                </label>

                                <input
                                    type="text"
                                    name="grade"
                                    className="form-control"
                                    value={formData.grade}
                                    onChange={handleChange}
                                />

                            </div>


                            {/* Status */}

                            <div className="col-md-4">

                                <label className="form-label">
                                    Status
                                </label>

                                <select
                                    name="status"
                                    className="form-select"
                                    value={formData.status}
                                    onChange={handleChange}
                                >

                                    <option value="Active">
                                        Active
                                    </option>

                                    <option value="Inactive">
                                        Inactive
                                    </option>

                                    <option value="On Leave">
                                        On Leave
                                    </option>

                                </select>

                            </div>

                        </div>

                    </div>

                </div>


                {/* =====================================
                    BUTTONS
                ===================================== */}

                <div className="d-flex justify-content-end gap-2 mb-5">

                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Save Changes
                    </button>

                </div>

            </form>

        </div>
    );
}

export default EditEmployee;