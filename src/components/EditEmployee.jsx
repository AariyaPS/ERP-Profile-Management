import { useState } from "react";

function EditEmployee({ employee, updateEmployee }) {
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: employee.name,
    employeeId: employee.employeeId,
    designation: employee.employment.designation,
    department: employee.employment.department,
    location: employee.employment.location,
    joingingDate: employee.employment.joingingDate,
    employmentType: employee.employment.employmentType,
    manager: employee.employment.manager,
    grade: employee.employment.grade,
  });

  const openEditForm = () => {
    setFormData({
      name: employee.name,
      employeeId: employee.employeeId,
      designation: employee.employment.designation,
      department: employee.employment.department,
      location: employee.employment.location,
      joingingDate: employee.employment.joingingDate,
      employmentType: employee.employment.employmentType,
      manager: employee.employment.manager,
      grade: employee.employment.grade,
    });

    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedEmployee = {
      ...employee,

      name: formData.name,
      employeeId: formData.employeeId,

      employment: {
        ...employee.employment,

        designation: formData.designation,
        department: formData.department,
        location: formData.location,
        joingingDate: formData.joiningDate,
        employmentType: formData.employmentType,
        manager: formData.manager,
        grade: formData.grade,
      },
    };

    updateEmployee(updatedEmployee);

    setShowForm(false);
  };

  return (
    <>
      {/*Edit Button */}
      <button className="btn btn-primary" onClick={openEditForm}>
        Edit Profile
      </button>
      {/*Edit Modal*/}
      {showForm && (
      <div
        className="modal d-block"
        style={{ backgroundColor: "rgba(0,0,0,0.5" }}
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal title">Edit Employee Profile</h5>

              <button
                type="button"
                className="btn-close
                        onClick={() => setShowForm(false)}"
              ></button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Employee Name</label>

                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Employee ID</label>

                    <input
                      type="text"
                      name="employeeId"
                      className="form-control"
                      value={formData.employeeId}
                      onChannge={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Designation</label>

                    <input
                      type="text"
                      name="designation"
                      className="form-control"
                      value={formData.designation}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Department</label>

                    <input
                      type="text"
                      name="department"
                      className="form-control"
                      value={formData.department}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Location</label>

                    <input
                      type="text"
                      name="location"
                      className="form-control"
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Joining Date</label>

                    <input
                      type="text"
                      name="joiningDate"
                      className="form-control"
                      value={formData.joiningDate}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Employment Type</label>

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
                    <label className="form-label">Reporting Manager</label>

                    <input
                      type="text"
                      name="manager"
                      className="form-control"
                      value={formData.manager}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Grade</label>

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

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>

                <button type="submit" className="btn btn-success">
                  Save Changes
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
export default EditEmployee;