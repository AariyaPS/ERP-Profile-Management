import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddProject() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        projectId: "",
        name: "",
        customer: "",
        manager: "",
        startDate: "",
        endDate: "",
        status: "Planning",
        priority: "Medium",
        progress: 0,
        budget: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // For now, just display the submitted project
        // Later this can be connected to Context/API/database

        console.log("New Project:", formData);

        alert("Project added successfully!");

        navigate("/projects");
    };

    return (
        <div>

            {/* =========================================================
                PAGE HEADER
            ========================================================== */}

            <div className="d-flex justify-content-between align-items-center mb-4">

                <div>
                    <h2 className="mb-1">
                        Add Project
                    </h2>

                    <p className="text-muted mb-0">
                        Create a new project
                    </p>
                </div>

                <Link
                    to="/projects"
                    className="btn btn-outline-primary"
                >
                    ← Back to Projects
                </Link>

            </div>


            {/* =========================================================
                PROJECT FORM
            ========================================================== */}

            <div className="card shadow-sm">

                <div className="card-header bg-orange-light">
                    <h5 className="mb-0">
                        Project Information
                    </h5>
                </div>

                <div className="card-body">

                    <form onSubmit={handleSubmit}>

                        <div className="row g-4">

                            {/* Project ID */}

                            <div className="col-md-6">

                                <label className="form-label">
                                    Project ID
                                </label>

                                <input
                                    type="text"
                                    name="projectId"
                                    className="form-control"
                                    placeholder="e.g. PRJ-1006"
                                    value={formData.projectId}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            {/* Project Name */}

                            <div className="col-md-6">

                                <label className="form-label">
                                    Project Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="Enter project name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            {/* Customer */}

                            <div className="col-md-6">

                                <label className="form-label">
                                    Customer
                                </label>

                                <input
                                    type="text"
                                    name="customer"
                                    className="form-control"
                                    placeholder="Enter customer name"
                                    value={formData.customer}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            {/* Project Manager */}

                            <div className="col-md-6">

                                <label className="form-label">
                                    Project Manager
                                </label>

                                <input
                                    type="text"
                                    name="manager"
                                    className="form-control"
                                    placeholder="Enter project manager"
                                    value={formData.manager}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            {/* Start Date */}

                            <div className="col-md-6">

                                <label className="form-label">
                                    Start Date
                                </label>

                                <input
                                    type="date"
                                    name="startDate"
                                    className="form-control"
                                    value={formData.startDate}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            {/* End Date */}

                            <div className="col-md-6">

                                <label className="form-label">
                                    End Date
                                </label>

                                <input
                                    type="date"
                                    name="endDate"
                                    className="form-control"
                                    value={formData.endDate}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            {/* Status */}

                            <div className="col-md-6">

                                <label className="form-label">
                                    Status
                                </label>

                                <select
                                    name="status"
                                    className="form-select"
                                    value={formData.status}
                                    onChange={handleChange}
                                >

                                    <option value="Planning">
                                        Planning
                                    </option>

                                    <option value="In Progress">
                                        In Progress
                                    </option>

                                    <option value="Completed">
                                        Completed
                                    </option>

                                    <option value="On Hold">
                                        On Hold
                                    </option>

                                </select>

                            </div>


                            {/* Priority */}

                            <div className="col-md-6">

                                <label className="form-label">
                                    Priority
                                </label>

                                <select
                                    name="priority"
                                    className="form-select"
                                    value={formData.priority}
                                    onChange={handleChange}
                                >

                                    <option value="High">
                                        High
                                    </option>

                                    <option value="Medium">
                                        Medium
                                    </option>

                                    <option value="Low">
                                        Low
                                    </option>

                                </select>

                            </div>


                            {/* Progress */}

                            <div className="col-md-6">

                                <label className="form-label">
                                    Progress (%)
                                </label>

                                <input
                                    type="number"
                                    name="progress"
                                    className="form-control"
                                    min="0"
                                    max="100"
                                    value={formData.progress}
                                    onChange={handleChange}
                                />

                            </div>


                            {/* Budget */}

                            <div className="col-md-6">

                                <label className="form-label">
                                    Budget
                                </label>

                                <input
                                    type="text"
                                    name="budget"
                                    className="form-control"
                                    placeholder="e.g. ₹10,00,000"
                                    value={formData.budget}
                                    onChange={handleChange}
                                />

                            </div>

                        </div>


                        {/* =========================================================
                            BUTTONS
                        ========================================================== */}

                        <div className="d-flex justify-content-end gap-2 mt-4">

                            <Link
                                to="/projects"
                                className="btn btn-secondary"
                            >
                                Cancel
                            </Link>

                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Save Project
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default AddProject;

