import { Link, useParams } from "react-router-dom";
import { useState } from "react";

function ProjectDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");

  // Sample project data
  // Later, this can be moved to ProjectContext / project data file
  const projects = [
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

      description:
        "Implementation of an ERP platform covering Human Resources, Finance, CRM and Project Management modules.",

      team: [
        {
          name: "Ankita Priya",
          role: "Software Engineer",
          allocation: "100%",
        },
        {
          name: "Karthavya",
          role: "Engineering Manager",
          allocation: "50%",
        },
        {
          name: "Rajashekar",
          role: "Project Manager",
          allocation: "100%",
        },
      ],

      tasks: [
        {
          id: 1,
          task: "Requirements Gathering",
          assignedTo: "Rajashekar",
          status: "Completed",
          progress: 100,
        },
        {
          id: 2,
          task: "HR Module Development",
          assignedTo: "Ankita Priya",
          status: "In Progress",
          progress: 75,
        },
        {
          id: 3,
          task: "Finance Module Development",
          assignedTo: "Salman Sheikh",
          status: "In Progress",
          progress: 50,
        },
        {
          id: 4,
          task: "CRM Module",
          assignedTo: "Karthavya",
          status: "Planning",
          progress: 20,
        },
      ],

      timesheets: [
        {
          employee: "Ankita Priya",
          date: "09 Sep 2026",
          hours: 8,
          task: "HR Module Development",
        },
        {
          employee: "Rajashekar",
          date: "09 Sep 2026",
          hours: 7,
          task: "Project Management",
        },
        {
          employee: "Karthavya",
          date: "09 Sep 2026",
          hours: 5,
          task: "CRM Module",
        },
      ],

      expenses: [
        {
          date: "05 Sep 2026",
          description: "Client Meeting",
          category: "Travel",
          amount: "₹8,500",
          status: "Approved",
        },
        {
          date: "07 Sep 2026",
          description: "Software License",
          category: "Software",
          amount: "₹15,000",
          status: "Approved",
        },
        {
          date: "09 Sep 2026",
          description: "Team Meeting",
          category: "Food",
          amount: "₹4,500",
          status: "Pending",
        },
      ],

      documents: [
        {
          name: "Project Proposal",
          type: "PDF",
          uploadedOn: "01 Aug 2026",
        },
        {
          name: "Project Requirements",
          type: "DOCX",
          uploadedOn: "03 Aug 2026",
        },
        {
          name: "Project Agreement",
          type: "PDF",
          uploadedOn: "05 Aug 2026",
        },
      ],

      activity: [
        {
          date: "09 Sep 2026",
          user: "Ankita Priya",
          action: "Updated HR Module progress to 75%",
        },
        {
          date: "08 Sep 2026",
          user: "Rajashekar",
          action: "Added new project task",
        },
        {
          date: "07 Sep 2026",
          user: "Karthavya",
          action: "Updated CRM task",
        },
      ],
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

      description:
        "Development of a customer relationship management platform for managing leads, customers and sales opportunities.",

      team: [
        {
          name: "Karthavya",
          role: "Engineering Manager",
          allocation: "50%",
        },
        {
          name: "Ankita Priya",
          role: "Software Engineer",
          allocation: "100%",
        },
      ],

      tasks: [
        {
          id: 1,
          task: "Customer Management",
          assignedTo: "Ankita Priya",
          status: "In Progress",
          progress: 60,
        },
        {
          id: 2,
          task: "Lead Management",
          assignedTo: "Karthavya",
          status: "In Progress",
          progress: 40,
        },
      ],

      timesheets: [],
      expenses: [],
      documents: [],
      activity: [],
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

      description:
        "Automation of finance processes including accounting, expense management and financial reporting.",

      team: [
        {
          name: "Salman Sheikh",
          role: "Finance Manager",
          allocation: "100%",
        },
      ],

      tasks: [
        {
          id: 1,
          task: "Finance Requirements",
          assignedTo: "Salman Sheikh",
          status: "Completed",
          progress: 100,
        },
        {
          id: 2,
          task: "Finance Reports",
          assignedTo: "Salman Sheikh",
          status: "Completed",
          progress: 100,
        },
      ],

      timesheets: [],
      expenses: [],
      documents: [],
      activity: [],
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

      description:
        "Design and development of a responsive corporate website.",

      team: [
        {
          name: "Ankita Priya",
          role: "Software Engineer",
          allocation: "100%",
        },
      ],

      tasks: [],
      timesheets: [],
      expenses: [],
      documents: [],
      activity: [],
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

      description:
        "Migration of legacy business data into the new ERP system.",

      team: [
        {
          name: "Rajashekar",
          role: "Project Manager",
          allocation: "50%",
        },
      ],

      tasks: [],
      timesheets: [],
      expenses: [],
      documents: [],
      activity: [],
    },
  ];

  // Find project
  const project = projects.find(
    (project) => String(project.id) === String(id)
  );

  // Project not found
  if (!project) {
    return (
      <div className="card shadow-sm">
        <div className="card-body">
          <h4>Project Not Found</h4>

          <p className="text-muted">
            We could not find the project you are looking for.
          </p>

          <Link
            to="/projects"
            className="btn btn-primary"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

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
          BACK TO PROJECTS
      ===================================== */}

      <div className="mb-3">
        <Link
          to="/projects"
          className="btn btn-outline-primary"
        >
          ← Back to Projects
        </Link>
      </div>


      {/* =====================================
          PROJECT HEADER
      ===================================== */}

      <div className="card shadow-sm mb-4">

        <div className="card-body">

          <div className="d-flex justify-content-between align-items-start">

            <div>

              <div className="d-flex align-items-center gap-2 mb-2">

                <h2 className="mb-0">
                  {project.name}
                </h2>

                <span
                  className={getStatusBadge(project.status)}
                >
                  {project.status}
                </span>

              </div>

              <p className="text-muted mb-2">
                {project.projectId}
                &nbsp; | &nbsp;
                {project.customer}
              </p>

              <p className="mb-0">
                {project.description}
              </p>

            </div>

            <div>
              <span
                className={getPriorityBadge(project.priority)}
              >
                {project.priority} Priority
              </span>
            </div>

          </div>

        </div>

      </div>


      {/* =====================================
          PROJECT SUMMARY
      ===================================== */}

      <div className="row g-4 mb-4">

        <div className="col-md-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h6 className="text-muted">
                Project Manager
              </h6>

              <h5 className="mb-0">
                {project.manager}
              </h5>
            </div>
          </div>
        </div>


        <div className="col-md-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h6 className="text-muted">
                Start Date
              </h6>

              <h5 className="mb-0">
                {project.startDate}
              </h5>
            </div>
          </div>
        </div>


        <div className="col-md-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h6 className="text-muted">
                End Date
              </h6>

              <h5 className="mb-0">
                {project.endDate}
              </h5>
            </div>
          </div>
        </div>


        <div className="col-md-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h6 className="text-muted">
                Budget
              </h6>

              <h5 className="mb-0">
                {project.budget}
              </h5>
            </div>
          </div>
        </div>

      </div>


      {/* =====================================
          PROJECT PROGRESS
      ===================================== */}

      <div className="card shadow-sm mb-4">

        <div className="card-body">

          <div className="d-flex justify-content-between mb-2">

            <h5 className="mb-0">
              Project Progress
            </h5>

            <strong>
              {project.progress}%
            </strong>

          </div>

          <div
            className="progress"
            style={{ height: "12px" }}
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

        </div>

      </div>


      {/* =====================================
          PROJECT TABS
      ===================================== */}

      <div className="card shadow-sm mb-4">

        <div className="card-body p-0">

          <ul className="nav nav-tabs px-3">

            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "overview"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setActiveTab("overview")
                }
              >
                Overview
              </button>
            </li>


            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "tasks"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setActiveTab("tasks")
                }
              >
                Tasks
              </button>
            </li>


            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "team"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setActiveTab("team")
                }
              >
                Team
              </button>
            </li>


            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "timesheets"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setActiveTab("timesheets")
                }
              >
                Timesheets
              </button>
            </li>


            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "expenses"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setActiveTab("expenses")
                }
              >
                Expenses
              </button>
            </li>


            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "documents"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setActiveTab("documents")
                }
              >
                Documents
              </button>
            </li>


            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "activity"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setActiveTab("activity")
                }
              >
                Activity
              </button>
            </li>

          </ul>

        </div>

      </div>


      {/* =====================================
          OVERVIEW
      ===================================== */}

      {activeTab === "overview" && (

        <div className="card shadow-sm mb-5">

          <div className="card-header bg-orange-light">
            <h5 className="mb-0">
              Project Overview
            </h5>
          </div>

          <div className="card-body">

            <div className="row g-4">

              <div className="col-md-6">

                <strong>
                  Project ID
                </strong>

                <p className="text-muted">
                  {project.projectId}
                </p>

              </div>


              <div className="col-md-6">

                <strong>
                  Customer
                </strong>

                <p className="text-muted">
                  {project.customer}
                </p>

              </div>


              <div className="col-md-6">

                <strong>
                  Project Manager
                </strong>

                <p className="text-muted">
                  {project.manager}
                </p>

              </div>


              <div className="col-md-6">

                <strong>
                  Priority
                </strong>

                <p>
                  <span
                    className={getPriorityBadge(
                      project.priority
                    )}
                  >
                    {project.priority}
                  </span>
                </p>

              </div>


              <div className="col-md-6">

                <strong>
                  Start Date
                </strong>

                <p className="text-muted">
                  {project.startDate}
                </p>

              </div>


              <div className="col-md-6">

                <strong>
                  End Date
                </strong>

                <p className="text-muted">
                  {project.endDate}
                </p>

              </div>


              <div className="col-md-12">

                <strong>
                  Description
                </strong>

                <p className="text-muted mb-0">
                  {project.description}
                </p>

              </div>

            </div>

          </div>

        </div>

      )}


      {/* =====================================
          TASKS
      ===================================== */}

      {activeTab === "tasks" && (

        <div className="card shadow-sm mb-5">

          <div className="card-header bg-orange-light">
            <h5 className="mb-0">
              Project Tasks
            </h5>
          </div>

          <div className="card-body">

            {project.tasks.length > 0 ? (

              <div className="table-responsive">

                <table className="table table-hover align-middle">

                  <thead>
                    <tr>
                      <th>Task</th>
                      <th>Assigned To</th>
                      <th>Status</th>
                      <th>Progress</th>
                    </tr>
                  </thead>

                  <tbody>

                    {project.tasks.map((task) => (

                      <tr key={task.id}>

                        <td>
                          <strong>
                            {task.task}
                          </strong>
                        </td>

                        <td>
                          {task.assignedTo}
                        </td>

                        <td>
                          <span
                            className={
                              task.status === "Completed"
                                ? "badge bg-success"
                                : task.status === "In Progress"
                                ? "badge bg-primary"
                                : "badge bg-warning text-dark"
                            }
                          >
                            {task.status}
                          </span>
                        </td>

                        <td style={{ minWidth: "150px" }}>

                          <div className="d-flex justify-content-between">

                            <small>
                              {task.progress}%
                            </small>

                          </div>

                          <div
                            className="progress"
                            style={{ height: "7px" }}
                          >

                            <div
                              className="progress-bar"
                              style={{
                                width: `${task.progress}%`,
                                backgroundColor: "#EA6814",
                              }}
                            ></div>

                          </div>

                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            ) : (

              <p className="text-muted mb-0">
                No tasks have been added to this project.
              </p>

            )}

          </div>

        </div>

      )}


      {/* =====================================
          TEAM
      ===================================== */}

      {activeTab === "team" && (

        <div className="card shadow-sm mb-5">

          <div className="card-header bg-orange-light">
            <h5 className="mb-0">
              Project Team
            </h5>
          </div>

          <div className="card-body">

            {project.team.length > 0 ? (

              <div className="table-responsive">

                <table className="table table-hover">

                  <thead>
                    <tr>
                      <th>Employee</th>
                      <th>Role</th>
                      <th>Allocation</th>
                    </tr>
                  </thead>

                  <tbody>

                    {project.team.map(
                      (member, index) => (

                        <tr key={index}>

                          <td>
                            <strong>
                              {member.name}
                            </strong>
                          </td>

                          <td>
                            {member.role}
                          </td>

                          <td>
                            {member.allocation}
                          </td>

                        </tr>

                      )
                    )}

                  </tbody>

                </table>

              </div>

            ) : (

              <p className="text-muted mb-0">
                No team members assigned.
              </p>

            )}

          </div>

        </div>

      )}


      {/* =====================================
          TIMESHEETS
      ===================================== */}

      {activeTab === "timesheets" && (

        <div className="card shadow-sm mb-5">

          <div className="card-header bg-orange-light">
            <h5 className="mb-0">
              Timesheets
            </h5>
          </div>

          <div className="card-body">

            {project.timesheets.length > 0 ? (

              <div className="table-responsive">

                <table className="table table-hover">

                  <thead>
                    <tr>
                      <th>Employee</th>
                      <th>Date</th>
                      <th>Task</th>
                      <th>Hours</th>
                    </tr>
                  </thead>

                  <tbody>

                    {project.timesheets.map(
                      (entry, index) => (

                        <tr key={index}>

                          <td>
                            {entry.employee}
                          </td>

                          <td>
                            {entry.date}
                          </td>

                          <td>
                            {entry.task}
                          </td>

                          <td>
                            <strong>
                              {entry.hours} hrs
                            </strong>
                          </td>

                        </tr>

                      )
                    )}

                  </tbody>

                </table>

              </div>

            ) : (

              <p className="text-muted mb-0">
                No timesheet entries available.
              </p>

            )}

          </div>

        </div>

      )}


      {/* =====================================
          EXPENSES
      ===================================== */}

      {activeTab === "expenses" && (

        <div className="card shadow-sm mb-5">

          <div className="card-header bg-orange-light">
            <h5 className="mb-0">
              Project Expenses
            </h5>
          </div>

          <div className="card-body">

            {project.expenses.length > 0 ? (

              <div className="table-responsive">

                <table className="table table-hover">

                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Description</th>
                      <th>Category</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>

                    {project.expenses.map(
                      (expense, index) => (

                        <tr key={index}>

                          <td>
                            {expense.date}
                          </td>

                          <td>
                            {expense.description}
                          </td>

                          <td>
                            {expense.category}
                          </td>

                          <td>
                            <strong>
                              {expense.amount}
                            </strong>
                          </td>

                          <td>

                            <span
                              className={
                                expense.status ===
                                "Approved"
                                  ? "badge bg-success"
                                  : "badge bg-warning text-dark"
                              }
                            >
                              {expense.status}
                            </span>

                          </td>

                        </tr>

                      )
                    )}

                  </tbody>

                </table>

              </div>

            ) : (

              <p className="text-muted mb-0">
                No project expenses available.
              </p>

            )}

          </div>

        </div>

      )}


      {/* =====================================
          DOCUMENTS
      ===================================== */}

      {activeTab === "documents" && (

        <div className="card shadow-sm mb-5">

          <div className="card-header bg-orange-light">
            <h5 className="mb-0">
              Project Documents
            </h5>
          </div>

          <div className="card-body">

            {project.documents.length > 0 ? (

              <div className="table-responsive">

                <table className="table table-hover">

                  <thead>
                    <tr>
                      <th>Document</th>
                      <th>Type</th>
                      <th>Uploaded On</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>

                    {project.documents.map(
                      (document, index) => (

                        <tr key={index}>

                          <td>
                            {document.name}
                          </td>

                          <td>
                            {document.type}
                          </td>

                          <td>
                            {document.uploadedOn}
                          </td>

                          <td>

                            <button
                              className="btn btn-sm btn-outline-primary"
                              type="button"
                            >
                              View
                            </button>

                          </td>

                        </tr>

                      )
                    )}

                  </tbody>

                </table>

              </div>

            ) : (

              <p className="text-muted mb-0">
                No documents available.
              </p>

            )}

          </div>

        </div>

      )}


      {/* =====================================
          ACTIVITY
      ===================================== */}

      {activeTab === "activity" && (

        <div className="card shadow-sm mb-5">

          <div className="card-header bg-orange-light">
            <h5 className="mb-0">
              Project Activity
            </h5>
          </div>

          <div className="card-body">

            {project.activity.length > 0 ? (

              <div className="table-responsive">

                <table className="table table-hover">

                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>User</th>
                      <th>Activity</th>
                    </tr>
                  </thead>

                  <tbody>

                    {project.activity.map(
                      (item, index) => (

                        <tr key={index}>

                          <td>
                            {item.date}
                          </td>

                          <td>
                            {item.user}
                          </td>

                          <td>
                            {item.action}
                          </td>

                        </tr>

                      )
                    )}

                  </tbody>

                </table>

              </div>

            ) : (

              <p className="text-muted mb-0">
                No project activity available.
              </p>

            )}

          </div>

        </div>

      )}

    </div>
  );
}

export default ProjectDetails;