import { useState } from "react";
import { Link } from "react-router-dom";

function Workflows(){
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    const [workflows] = useState([
        {
            id: 1,
            workflowId: "WF-001",
            name: "Leave Request Approval",
            module: "HR",
            trigger: "Employee submits leave request",
            steps: 2,
            approvalSteps: "Manager → HR",
            status: "Active",
        },
        {
            id: 2,
            workflowId: "WF-002",
            name: "Expense Approval",
            module: "Finance",
            trigger: "Employee submits expense",
            steps: 2,
            approvalSteps: "Manager → Finance",
            status: "Active",
        },
        {
            id: 3,
            workflowId: "WF-003",
            name: "Invoice Approval",
            module: "Finance",
            trigger: "Invoice is created",
            steps: 2,
            approvalSteps: "Manager → Finance",
            status: "Active",
        },
        {
            id: 4,
            workflowId: "WF-004",
            name: "Purchase Request Approval",
            module: "Procurement",
            trigger: "Purchase request is submitted",
            steps: 3,
            approvalSteps: "Manager → Finance → Procurement",
            status: "Active",
        },
        {
            id: 5,
            workflowId: "WF-005",
            name: "Project Approval",
            module: "Projects",
            trigger: "New project is created",
            steps: 1,
            approvalSteps: "Project Manager",
            status: "Inactive",
        },
    ]);

    const filteredWorkflows = workflows.filter((workflow) => {
        const matchesSearch = 
        workflow.name.toLowerCase().includes(search.toLowerCase()) ||
        workflow.workflowId.toLowerCase().includes(search.toLowerCase()) ||
        workflow.module.toLowerCase().includes(search.toLowerCase());

        const matchesStatus =
        statusFilter === "All" || workflow.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    const activeWorkFlows = workflows.filter(
        (workflow) => workflow.status === "Active"
    ).length;

    const inactiveWorkflows = workflows.filter(
        (workflow) => workflow.status === "Inactive"
    ).length;

    const totalSteps = workflows.reduce(
        (total, workflow) => total + workflow.steps,
        0
    );

    const handleCreateWorkflow = () => {
        alert("Create Workflow from will be added later.");
    };

    const handleView = (workflow) => {
        alert(`Viewing workflow: ${workflow.name}`);
    };

    const handleEdit = (workflow) => {
        alert(`Editing workflow: ${workflow.name}`);
    };

    return(
        <div className="container-fluid">

            {/* Page Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">

                <div>
                    <h2 className="fw-bold mb-1">Workflow Management</h2>
                    <p className="text-muted mb-0">Configure approval processes and business workflows</p>
                </div>

                <Link
                    to="/administration"
                    className="btn btn-outline-secondary"
                >
                    ← Back to Administration
                </Link>
            </div>

            {/*Summary Cards */}
            <div className="row g-4 mb-4">

                <div className="col-md-3">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                            <p className="text-muted mb-1">
                                Total Workflows
                            </p>
                            <h3 className="fw-bold mb-0">
                                {workflows.length}
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                            <p className="text-muted mb-1">
                                Active Workflows
                            </p>
                            <h3 className="fw-bold text-success mb-0">
                                {activeWorkFlows}
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                            <p className="text-muted mb-1">
                                Inactive Workflows
                            </p>

                            <h3 className="fw-bold text-secondary mb-0">
                                {inactiveWorkflows}
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                            <p className="text-muted mb-1">
                                Total Approval Steps
                            </p>
                            <h3 className="fw-bold mb-0">
                                {totalSteps}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            {/*MAIN CARD */}
            <div className="card border-0 shadow-sm">

                {/* Card Header */}
                <div className="card-header bg-white py-3">

                    <div className="d-flex justify-content-between align-items-center">

                        <div>
                            <h5 className="fw-bold mb-1">Business Workflow</h5>

                            <small className="text-muted">Define how requests move through the approval process</small>
                        </div>

                        <button className="btn text-white"
                        style={{
                            background: "EA6814",
                        }}
                        onClick={handleCreateWorkflow}>
                            + Create Workflow
                        </button>
                    </div>
                </div>

                {/* Filters */}
                <div className="card-body border-bottom">

                    <div className="row g-3">

                        <label className="form-label fw-semibold">Search</label>

                        <input type="text"
                        className="form-control"
                        placeholder="Search Workflows...."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)} />
                    </div>

                    <div className="col-md-3">
                        <label className="form-label fw-semibold">Status</label>

                        <select className="form-select"
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}>
                            <option value="All">All</option>
                            <option value="Active">Active</option>
                            <option value="Inctive">Inactive</option>                           
                        </select>
                    </div>
                </div>
            </div>

            {/*Workflow Table */}
            <div className="table-responsive">

                <table className="table table-hover mb-0">

                    <thead>
                        <tr></tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}
export default Workflows;