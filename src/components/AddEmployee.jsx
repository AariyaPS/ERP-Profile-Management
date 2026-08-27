import { useState } from "react";

function AddEmployee({ addEmployee }) {
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    employeeId: "",
    designation: "",
    department: "",
    location: "",
    joiningDate: "",
    employmentType: "Full Time",
    manager: "",
    grade: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      id: Date.now(),

      employeeId: formData.employeeId,
      name: formData.name,

      photo: "https://i.pravatar.cc/150?img=1",

      personal: {
        dob: "Not Added",
        gender: "Not Added",
        nationality: "Not Added",
        email: "Not Added",
        phone: "Not Added",
        address: "Not Added",
        maritalStatus: "Not Added"
      },

      employment: {
        designation: formData.designation,
        department: formData.department,
        location: formData.location,
        joiningDate: formData.joiningDate,
        employmentType: formData.employmentType,
        manager: formData.manager,
        grade: formData.grade,
        status: "Active"
      },

      emergencyContact: {
        name: "Not Added",
        relationship: "Not Added",
        phone: "Not Added",
        email: "Not Added"
      },

      banking: {
        bankName: "Not Added",
        accountNumber: "Not Added",
        ifsc: "Not Added",
        accountHolder: formData.name,
        verified: false
      },

      profileCompletion: 30,

      documents: [],
      qualifications: [],
      skills: [],
      assets: [],

      access: {
        role: "Employee",
        applications: ["ERP"],
        approvalAuthority: "None",
        lastLogin: "Never"
      },

      history: []
    };

    addEmployee(newEmployee);

    setShowForm(false);

    setFormData({
      name: "",
      employeeId: "",
      designation: "",
      department: "",
      location: "",
      joiningDate: "",
      employmentType: "Full Time",
      manager: "",
      grade: ""
    });
  };

  return (
    <>
      {/* Add Employee Button */}
      <button
        className="btn btn-primary"
        onClick={() => setShowForm(true)}
      >
        + Add Employee
      </button>

      {/* Modal */}
      {showForm && (
        <div
          className="modal d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">

            <div className="modal-content">

              {/* Modal Header */}
              <div className="modal-header">
                <h5 className="modal-title">
                  Add New Employee
                </h5>

                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowForm(false)}
                ></button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit}>

                <div className="modal-body">

                  <div className="row g-3">

                    <div className="col-md-6">
                      <label className="form-label">
                        Employee Name
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
                        Employee ID
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
                        Designation
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
                        required
                      />
                    </div>

                    <div className="col-md-6">
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

                    <div className="col-md-6">
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

                    <div className="col-md-6">
                      <label className="form-label">
                        Employment Type
                      </label>

                      <select
                        name="employmentType"
                        className="form-select"
                        value={formData.employmentType}
                        onChange={handleChange}
                      >
                        <option>Full Time</option>
                        <option>Part Time</option>
                        <option>Contract</option>
                        <option>Intern</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">
                        Reporting Manager
                      </label>

                      <input
                        type="text"
                        name="manager"
                        className="form-control"
                        value={formData.manager}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
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

                  </div>

                </div>

                {/* Modal Footer */}
                <div className="modal-footer">

                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="btn btn-success"
                  >
                    Save Employee
                  </button>

                </div>

              </form>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddEmployee;