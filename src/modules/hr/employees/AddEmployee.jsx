import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEmployees } from "../../../context/EmployeeContext.jsx";

function AddEmployee() {

    const navigate = useNavigate();
    const { addEmployee } = useEmployees();

    const [formData, setFormData] = useState({
        name: "",
        employeeId: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        nationality: "Indian",
        maritalStatus: "",
        address: "",

        department: "",
        designation: "",
        location: "",
        joiningDate: "",
        employmentType: "Full Time",
        manager: "",
        grade: "",
        status: "Active"
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

        const newEmployee = {

            id: Date.now(),

            employeeId: formData.employeeId,

            name: formData.name,

            photo: "https://i.pravatar.cc/150?img=1",

            personal: {
                dob: formData.dob,
                gender: formData.gender,
                nationality: formData.nationality,
                email: formData.email,
                phone: formData.phone,
                address: formData.address,
                maritalStatus: formData.maritalStatus
            },

            employment: {
                designation: formData.designation,
                department: formData.department,
                location: formData.location,
                joiningDate: formData.joiningDate,
                employmentType: formData.employmentType,
                manager: formData.manager,
                grade: formData.grade,
                status: formData.status
            },

            emergencyContact: {
                name: "",
                relationship: "",
                phone: "",
                email: ""
            },

            banking: {
                bankName: "",
                accountNumber: "",
                ifsc: "",
                accountHolder: formData.name,
                verified: false
            },

            profileCompletion: 40,

            documents: [],

            qualifications: [],

            skills: [],

            assets: [],

            access: {
                role: "",
                applications: [],
                approvalAuthority: "",
                lastLogin: "-"
            },

            history: [],

            attendance: {
                totalWorkingDays: 0,
                presentDays: 0,
                leaveDays: 0,
                totalHoursWorked: 0,
                averageHoursPerDay: 0,
                leaves: []
            }
        };


        addEmployee(newEmployee);

        navigate("/hr/employees");
    };


    return (

        <div>

            {/* HEADER */}

            <div className="d-flex justify-content-between align-items-center mb-4">

                <div>

                    <h2>Add Employee</h2>

                    <p className="text-muted mb-0">
                        Create a new employee profile
                    </p>

                </div>

                <Link
                    to="/hr/employees"
                    className="btn btn-outline-primary"
                >
                    ← Back to Employees
                </Link>

            </div>


            <form onSubmit={handleSubmit}>

                {/* BASIC INFORMATION */}

                <div className="card shadow-sm mb-4">

                    <div className="card-header bg-orange-light">
                        <h5 className="mb-0">
                            Basic Information
                        </h5>
                    </div>

                    <div className="card-body">

                        <div className="row g-3">

                            <div className="col-md-6">

                                <label className="form-label">
                                    Full Name *
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            <div className="col-md-6">

                                <label className="form-label">
                                    Employee ID *
                                </label>

                                <input
                                    type="text"
                                    name="employeeId"
                                    className="form-control"
                                    value={formData.employeeId}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            <div className="col-md-6">

                                <label className="form-label">
                                    Email *
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


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


                            <div className="col-md-4">

                                <label className="form-label">
                                    Date of Birth
                                </label>

                                <input
                                    type="date"
                                    name="dob"
                                    placeholder="DD/MM/YYYY"
                                    className="form-control"
                                    value={formData.dob}
                                    onChange={handleChange}
                                />

                            </div>


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

                                    <option value="Female">
                                        Female
                                    </option>

                                    <option value="Male">
                                        Male
                                    </option>

                                    <option value="Other">
                                        Other
                                    </option>

                                </select>

                            </div>


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


                {/* EMPLOYMENT DETAILS */}

                <div className="card shadow-sm mb-4">

                    <div className="card-header bg-orange-light">

                        <h5 className="mb-0">
                            Employment Details
                        </h5>

                    </div>

                    <div className="card-body">

                        <div className="row g-3">

                            <div className="col-md-6">

                                <label className="form-label">
                                    Department *
                                </label>

                                <input
                                    type="text"
                                    name="department"
                                    className="form-control"
                                    value={formData.department}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            <div className="col-md-6">

                                <label className="form-label">
                                    Designation *
                                </label>

                                <input
                                    type="text"
                                    name="designation"
                                    className="form-control"
                                    value={formData.designation}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


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


                            <div className="col-md-4">

                                <label className="form-label">
                                    Joining Date
                                </label>

                                <input
                                    type="date"
                                    name="joiningDate"
                                    placeholder="DD/MM/YYYY"
                                    className="form-control"
                                    value={formData.joiningDate}
                                    onChange={handleChange}
                                />

                            </div>


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

                                    <option value="Full Time">
                                        Full Time
                                    </option>

                                    <option value="Part Time">
                                        Part Time
                                    </option>

                                    <option value="Contract">
                                        Contract
                                    </option>

                                    <option value="Intern">
                                        Intern
                                    </option>

                                </select>

                            </div>


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

                                </select>

                            </div>

                        </div>

                    </div>

                </div>


                {/* BUTTONS */}

                <div className="d-flex justify-content-end gap-2 mb-5">

                    <Link
                        to="/hr/employees"
                        className="btn btn-outline-secondary"
                    >
                        Cancel
                    </Link>

                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Save Employee
                    </button>

                </div>

            </form>

        </div>
    );
}

export default AddEmployee;