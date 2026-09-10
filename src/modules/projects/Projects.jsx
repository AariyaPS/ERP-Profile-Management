import { useState } from "react";
import { Link } from "react-router-dom";

function Projects() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Sample project data
  const [projects] = useState([
    {
      id: 1,
      projectId: "PRJ-1001",
      name: "ERP Implementation",
      customer: "ABC Technologies",
      manager: "Rajashekar",
      startDate: "01 Aug 2026",
      endDate: "31 Dec 2026",
      status: "In Progress",
      priority: "High",
      progress: 65,
      budget: "₹12,00,000",
    },
    {
      id: 2,
      projectId: "PRJ-1002",
      name: "CRM Development",
      customer: "XYZ Solutions",
      manager: "Karthavya",
      startDate: "15 Jul 2026",
      endDate: "30 Nov 2026",
      status: "In Progress",
      priority: "Medium",
      progress: 45,
      budget: "₹8,50,000",
    },
    {
      id: 3,
      projectId: "PRJ-1003",
      name: "Finance Automation",
      customer: "Global Tech",
      manager: "Salman Sheikh",
      startDate: "01 Jun 2026",
      endDate: "30 Sep 2026",
      status: "Completed",
      priority: "High",
      progress: 100,
      budget: "₹6,00,000",
    },
    {
      id: 4,
      projectId: "PRJ-1004",
      name: "Website Development",
      customer: "Nova Industries",
      manager: "Ankita Priya",
      startDate: "01 Sep 2026",
      endDate: "31 Dec 2026",
      status: "Planning",
      priority: "Medium",
      progress: 10,
      budget: "₹4,50,000",
    },
    {
      id: 5,
      projectId: "PRJ-1005",
      name: "Data Migration",
      customer: "Tech Solutions",
      manager: "Rajashekar",
      startDate: "10 Aug 2026",
      endDate: "15 Oct 2026",
      status: "On Hold",
      priority: "Low",
      progress: 35,
      budget: "₹3,25,000",
    },
  ]);

  // Filter projects
  const filteredProjects = projects.filter((project) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      project.projectId.toLowerCase().includes(searchText) ||
      project.name.toLowerCase().includes(searchText) ||
      project.customer.toLowerCase().includes(searchText) ||
      project.manager.toLowerCase().includes(searchText);

    const matchesStatus =
      statusFilter === "All" || project.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Status badge
  const getStatusBadge = (status) => {
    switch (status) {
      case "Completed":
        return "badge bg-success";

      case "In Progress":
        return "badge bg-primary";

      case "Planning":
        return "badge bg-warning text-dark";

      case "On Hold":
        return "badge bg-secondary";

      default:
        return "badge bg-secondary";
    }
  };

  // Priority badge
  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "High":
        return "badge bg-danger";

      case "Medium":
        return "badge bg-warning text-dark";

      case "Low":
        return "badge bg-success";

      default:
        return "badge bg-secondary";
    }
  };

  return (
    <div>
      {/* =====================================
          PAGE HEADER
      ===================================== */}

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="mb-1">Projects</h2>

          <p className="text-muted mb-0">
            Manage and track all projects
          </p>
        </div>

        <Link
          to="/projects/add"
          className="btn btn-primary"
        >
          + Add Project
        </Link>
      </div>

      {/* =====================================
          SUMMARY CARDS
      ===================================== */}

      <div className="row g-4 mb-4">

        {/* Total Projects */}

        <div className="col-md-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h6 className="text-muted">
                Total Projects
              </h6>

              <h3 className="mb-0">
                {projects.length}
              </h3>
            </div>
          </div>
        </div>

        {/* In Progress */}

        <div className="col-md-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h6 className="text-muted">
                In Progress
              </h6>

              <h3 className="mb-0">
                {
                  projects.filter(
                    (project) => project.status === "In Progress"
                  ).length
                }
              </h3>
            </div>
          </div>
        </div>

        {/* Completed */}

        <div className="col-md-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h6 className="text-muted">
                Completed
              </h6>

              <h3 className="mb-0">
                {
                  projects.filter(
                    (project) => project.status === "Completed"
                  ).length
                }
              </h3>
            </div>
          </div>
        </div>

        {/* Planning */}

        <div className="col-md-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h6 className="text-muted">
                Planning
              </h6>

              <h3 className="mb-0">
                {
                  projects.filter(
                    (project) => project.status === "Planning"
                  ).length
                }
              </h3>
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

            {/* Search */}

            <div className="col-md-8">
              <label className="form-label">
                Search Projects
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Search by project, customer or manager..."
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
              />
            </div>

            {/* Status */}

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

          </div>

        </div>
      </div>

      {/* =====================================
          PROJECT TABLE
      ===================================== */}

      <div className="card shadow-sm mb-5">

        <div className="card-header bg-orange-light">
          <h5 className="mb-0">
            Project List
          </h5>
        </div>

        <div className="card-body">

          <div className="table-responsive">

            <table className="table table-hover align-middle">

              <thead>
                <tr>
                  <th>Project ID</th>
                  <th>Project</th>
                  <th>Customer</th>
                  <th>Manager</th>
                  <th>Dates</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th>Progress</th>
                  <th>Budget</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project) => (

                    <tr key={project.id}>

                      {/* Project ID */}

                      <td>
                        <strong>
                          {project.projectId}
                        </strong>
                      </td>

                      {/* Project */}

                      <td>
                        <div>
                          <strong>
                            {project.name}
                          </strong>
                        </div>
                      </td>

                      {/* Customer */}

                      <td>
                        {project.customer}
                      </td>

                      {/* Manager */}

                      <td>
                        {project.manager}
                      </td>

                      {/* Dates */}

                      <td>
                        <small>
                          {project.startDate}
                          <br />
                          <span className="text-muted">
                            to {project.endDate}
                          </span>
                        </small>
                      </td>

                      {/* Priority */}

                      <td>
                        <span
                          className={getPriorityBadge(
                            project.priority
                          )}
                        >
                          {project.priority}
                        </span>
                      </td>

                      {/* Status */}

                      <td>
                        <span
                          className={getStatusBadge(
                            project.status
                          )}
                        >
                          {project.status}
                        </span>
                      </td>

                      {/* Progress */}

                      <td style={{ minWidth: "130px" }}>

                        <div className="d-flex justify-content-between mb-1">
                          <small>
                            {project.progress}%
                          </small>
                        </div>

                        <div
                          className="progress"
                          style={{ height: "7px" }}
                        >
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: `${project.progress}%`,
                              backgroundColor: "#EA6814",
                            }}
                          ></div>
                        </div>

                      </td>

                      {/* Budget */}

                      <td>
                        {project.budget}
                      </td>

                      {/* Action */}

                      <td>
                        <Link
                          to={`/projects/${project.id}`}
                          className="btn btn-sm btn-outline-primary"
                        >
                          View
                        </Link>
                      </td>

                    </tr>

                  ))
                ) : (

                  <tr>
                    <td
                      colSpan="10"
                      className="text-center py-4"
                    >
                      <p className="text-muted mb-0">
                        No projects found.
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

export default Projects;