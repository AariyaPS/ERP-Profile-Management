import { useMemo, useState } from "react";

function CustomerLeads() {
    // ==========================================
    // SAMPLE CUSTOMER & LEAD DATA
    // ==========================================

    const [records, setRecords] = useState([
        {
            id: 1,
            type: "Customer",
            name: "ABC Technologies",
            contactPerson: "Rahul Sharma",
            email: "rahul@abctech.com",
            phone: "+91 9876543210",
            source: "Website",
            status: "Active",
            assignedTo: "Karthavya",
            lastContact: "02 Sep 2026",
            nextFollowUp: "10 Sep 2026",
            value: 450000,
        },
        {
            id: 2,
            type: "Lead",
            name: "Global Solutions",
            contactPerson: "Priya Reddy",
            email: "priya@globalsolutions.com",
            phone: "+91 9988776655",
            source: "Referral",
            status: "Qualified",
            assignedTo: "Ankita Priya",
            lastContact: "04 Sep 2026",
            nextFollowUp: "11 Sep 2026",
            value: 280000,
        },
        {
            id: 3,
            type: "Lead",
            name: "Tech Innovations",
            contactPerson: "Arjun Kumar",
            email: "arjun@techinnovations.com",
            phone: "+91 9123456789",
            source: "Website",
            status: "New",
            assignedTo: "Karthavya",
            lastContact: "-",
            nextFollowUp: "12 Sep 2026",
            value: 175000,
        },
        {
            id: 4,
            type: "Customer",
            name: "Sunrise Enterprises",
            contactPerson: "Sneha Rao",
            email: "sneha@sunrise.com",
            phone: "+91 9000012345",
            source: "Direct",
            status: "Active",
            assignedTo: "Rajashekar",
            lastContact: "01 Sep 2026",
            nextFollowUp: "15 Sep 2026",
            value: 620000,
        },
        {
            id: 5,
            type: "Lead",
            name: "NextGen Systems",
            contactPerson: "Vikram Singh",
            email: "vikram@nextgen.com",
            phone: "+91 9887654321",
            source: "LinkedIn",
            status: "Contacted",
            assignedTo: "Ankita Priya",
            lastContact: "05 Sep 2026",
            nextFollowUp: "13 Sep 2026",
            value: 320000,
        },
        {
            id: 6,
            type: "Lead",
            name: "Prime Industries",
            contactPerson: "Neha Kapoor",
            email: "neha@primeindustries.com",
            phone: "+91 9776655443",
            source: "Campaign",
            status: "Converted",
            assignedTo: "Rajashekar",
            lastContact: "28 Aug 2026",
            nextFollowUp: "-",
            value: 500000,
        },
        {
            id: 7,
            type: "Customer",
            name: "Digital Ventures",
            contactPerson: "Amit Verma",
            email: "amit@digitalventures.com",
            phone: "+91 9665544332",
            source: "Referral",
            status: "Active",
            assignedTo: "Karthavya",
            lastContact: "03 Sep 2026",
            nextFollowUp: "17 Sep 2026",
            value: 390000,
        },
        {
            id: 8,
            type: "Lead",
            name: "Smart Business Pvt Ltd",
            contactPerson: "Meera Nair",
            email: "meera@smartbusiness.com",
            phone: "+91 9554433221",
            source: "Website",
            status: "Lost",
            assignedTo: "Ankita Priya",
            lastContact: "25 Aug 2026",
            nextFollowUp: "-",
            value: 150000,
        },
    ]);

    // ==========================================
    // STATE
    // ==========================================

    const [search, setSearch] = useState("");
    const [typeFilter, setTypeFilter] = useState("All");
    const [statusFilter, setStatusFilter] = useState("All");

    const [showForm, setShowForm] = useState(false);

    const [formData, setFormData] = useState({
        type: "Lead",
        name: "",
        contactPerson: "",
        email: "",
        phone: "",
        source: "Website",
        status: "New",
        assignedTo: "",
        lastContact: "-",
        nextFollowUp: "",
        value: "",
    });

    // ==========================================
    // SUMMARY CALCULATIONS
    // ==========================================

    const totalCustomers = records.filter(
        (record) => record.type === "Customer"
    ).length;

    const totalLeads = records.filter(
        (record) => record.type === "Lead"
    ).length;

    const followUps = records.filter(
        (record) =>
            record.type === "Lead" &&
            record.nextFollowUp !== "-" &&
            record.nextFollowUp !== ""
    ).length;

    const convertedLeads = records.filter(
        (record) => record.type === "Lead" && record.status === "Converted"
    ).length;

    // ==========================================
    // FILTER RECORDS
    // ==========================================

    const filteredRecords = useMemo(() => {
        return records.filter((record) => {
            const searchText = search.toLowerCase();

            const matchesSearch =
                record.name.toLowerCase().includes(searchText) ||
                record.contactPerson.toLowerCase().includes(searchText) ||
                record.email.toLowerCase().includes(searchText) ||
                record.phone.toLowerCase().includes(searchText);

            const matchesType =
                typeFilter === "All" || record.type === typeFilter;

            const matchesStatus =
                statusFilter === "All" || record.status === statusFilter;

            return matchesSearch && matchesType && matchesStatus;
        });
    }, [records, search, typeFilter, statusFilter]);

    // ==========================================
    // FORM CHANGE
    // ==========================================

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    // ==========================================
    // ADD CUSTOMER / LEAD
    // ==========================================

    const handleSubmit = (event) => {
        event.preventDefault();

        const newRecord = {
            id: Date.now(),
            ...formData,
            value: Number(formData.value) || 0,
        };

        setRecords((previous) => [...previous, newRecord]);

        setFormData({
            type: "Lead",
            name: "",
            contactPerson: "",
            email: "",
            phone: "",
            source: "Website",
            status: "New",
            assignedTo: "",
            lastContact: "-",
            nextFollowUp: "",
            value: "",
        });

        setShowForm(false);
    };

    // ==========================================
    // DELETE RECORD
    // ==========================================

    const handleDelete = (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this record?"
        );

        if (!confirmDelete) {
            return;
        }

        setRecords((previous) =>
            previous.filter((record) => record.id !== id)
        );
    };

    // ==========================================
    // STATUS BADGE
    // ==========================================

    const getStatusBadge = (status) => {
        switch (status) {
            case "Active":
                return "badge bg-success";

            case "New":
                return "badge bg-primary";

            case "Contacted":
                return "badge bg-warning text-dark";

            case "Qualified":
                return "badge bg-info text-dark";

            case "Converted":
                return "badge bg-success";

            case "Lost":
                return "badge bg-danger";

            default:
                return "badge bg-secondary";
        }
    };

    // ==========================================
    // TYPE BADGE
    // ==========================================

    const getTypeBadge = (type) => {
        if (type === "Customer") {
            return "badge bg-orange-light text-dark";
        }

        return "badge bg-light text-dark border";
    };

    // ==========================================
    // FORMAT CURRENCY
    // ==========================================

    const formatCurrency = (value) => {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0,
        }).format(value);
    };

    // ==========================================
    // RETURN UI
    // ==========================================

    return (
        <div>

            {/* ==========================================
                PAGE HEADER
            ========================================== */}

            <div className="d-flex justify-content-between align-items-center mb-4">

                <div>
                    <h2 className="mb-1">Customer & Leads</h2>

                    <p className="text-muted mb-0">
                        Manage customers, leads and follow-ups
                    </p>
                </div>

                <button
                    className="btn btn-primary"
                    onClick={() => setShowForm(!showForm)}
                >
                    {showForm ? "Close Form" : "+ Add Customer / Lead"}
                </button>

            </div>


            {/* ==========================================
                SUMMARY CARDS
            ========================================== */}

            <div className="row g-4 mb-4">

                {/* Total Customers */}

                <div className="col-md-3">

                    <div className="card shadow-sm h-100">

                        <div className="card-body">

                            <div className="d-flex justify-content-between align-items-center">

                                <div>
                                    <p className="text-muted mb-1">
                                        Total Customers
                                    </p>

                                    <h3 className="mb-0">
                                        {totalCustomers}
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


                {/* Total Leads */}

                <div className="col-md-3">

                    <div className="card shadow-sm h-100">

                        <div className="card-body">

                            <div className="d-flex justify-content-between align-items-center">

                                <div>
                                    <p className="text-muted mb-1">
                                        Total Leads
                                    </p>

                                    <h3 className="mb-0">
                                        {totalLeads}
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
                                    📋
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* Follow Ups */}

                <div className="col-md-3">

                    <div className="card shadow-sm h-100">

                        <div className="card-body">

                            <div className="d-flex justify-content-between align-items-center">

                                <div>
                                    <p className="text-muted mb-1">
                                        Follow-ups
                                    </p>

                                    <h3 className="mb-0">
                                        {followUps}
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
                                    📅
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* Converted */}

                <div className="col-md-3">

                    <div className="card shadow-sm h-100">

                        <div className="card-body">

                            <div className="d-flex justify-content-between align-items-center">

                                <div>
                                    <p className="text-muted mb-1">
                                        Converted Leads
                                    </p>

                                    <h3 className="mb-0">
                                        {convertedLeads}
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
                                    ✓
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            {/* ==========================================
                ADD FORM
            ========================================== */}

            {showForm && (

                <div className="card shadow-sm mb-4">

                    <div className="card-header bg-orange-light">

                        <h5 className="mb-0">
                            Add Customer / Lead
                        </h5>

                    </div>

                    <div className="card-body">

                        <form onSubmit={handleSubmit}>

                            <div className="row g-3">

                                {/* Type */}

                                <div className="col-md-4">

                                    <label className="form-label">
                                        Type
                                    </label>

                                    <select
                                        name="type"
                                        className="form-select"
                                        value={formData.type}
                                        onChange={handleChange}
                                    >
                                        <option value="Lead">
                                            Lead
                                        </option>

                                        <option value="Customer">
                                            Customer
                                        </option>
                                    </select>

                                </div>


                                {/* Company */}

                                <div className="col-md-4">

                                    <label className="form-label">
                                        Company / Customer Name *
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


                                {/* Contact Person */}

                                <div className="col-md-4">

                                    <label className="form-label">
                                        Contact Person *
                                    </label>

                                    <input
                                        type="text"
                                        name="contactPerson"
                                        className="form-control"
                                        value={formData.contactPerson}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>


                                {/* Email */}

                                <div className="col-md-4">

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

                                <div className="col-md-4">

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


                                {/* Source */}

                                <div className="col-md-4">

                                    <label className="form-label">
                                        Source
                                    </label>

                                    <select
                                        name="source"
                                        className="form-select"
                                        value={formData.source}
                                        onChange={handleChange}
                                    >
                                        <option value="Website">
                                            Website
                                        </option>

                                        <option value="Referral">
                                            Referral
                                        </option>

                                        <option value="LinkedIn">
                                            LinkedIn
                                        </option>

                                        <option value="Campaign">
                                            Campaign
                                        </option>

                                        <option value="Direct">
                                            Direct
                                        </option>
                                    </select>

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
                                        <option value="New">
                                            New
                                        </option>

                                        <option value="Contacted">
                                            Contacted
                                        </option>

                                        <option value="Qualified">
                                            Qualified
                                        </option>

                                        <option value="Converted">
                                            Converted
                                        </option>

                                        <option value="Lost">
                                            Lost
                                        </option>

                                        <option value="Active">
                                            Active
                                        </option>
                                    </select>

                                </div>


                                {/* Assigned To */}

                                <div className="col-md-4">

                                    <label className="form-label">
                                        Assigned To
                                    </label>

                                    <input
                                        type="text"
                                        name="assignedTo"
                                        className="form-control"
                                        value={formData.assignedTo}
                                        onChange={handleChange}
                                    />

                                </div>


                                {/* Follow Up */}

                                <div className="col-md-4">

                                    <label className="form-label">
                                        Next Follow-up
                                    </label>

                                    <input
                                        type="date"
                                        name="nextFollowUp"
                                        className="form-control"
                                        value={formData.nextFollowUp}
                                        onChange={handleChange}
                                    />

                                </div>


                                {/* Value */}

                                <div className="col-md-4">

                                    <label className="form-label">
                                        Estimated Value
                                    </label>

                                    <input
                                        type="number"
                                        name="value"
                                        className="form-control"
                                        value={formData.value}
                                        onChange={handleChange}
                                        min="0"
                                    />

                                </div>


                                {/* Buttons */}

                                <div className="col-12 d-flex justify-content-end gap-2 mt-3">

                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary"
                                        onClick={() => setShowForm(false)}
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Save
                                    </button>

                                </div>

                            </div>

                        </form>

                    </div>

                </div>

            )}


            {/* ==========================================
                FILTERS
            ========================================== */}

            <div className="card shadow-sm mb-4">

                <div className="card-body">

                    <div className="row g-3">

                        {/* Search */}

                        <div className="col-md-6">

                            <label className="form-label">
                                Search
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by company, contact, email or phone..."
                                value={search}
                                onChange={(event) =>
                                    setSearch(event.target.value)
                                }
                            />

                        </div>


                        {/* Type Filter */}

                        <div className="col-md-3">

                            <label className="form-label">
                                Type
                            </label>

                            <select
                                className="form-select"
                                value={typeFilter}
                                onChange={(event) =>
                                    setTypeFilter(event.target.value)
                                }
                            >
                                <option value="All">
                                    All
                                </option>

                                <option value="Customer">
                                    Customer
                                </option>

                                <option value="Lead">
                                    Lead
                                </option>
                            </select>

                        </div>


                        {/* Status Filter */}

                        <div className="col-md-3">

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

                                <option value="New">
                                    New
                                </option>

                                <option value="Contacted">
                                    Contacted
                                </option>

                                <option value="Qualified">
                                    Qualified
                                </option>

                                <option value="Converted">
                                    Converted
                                </option>

                                <option value="Active">
                                    Active
                                </option>

                                <option value="Lost">
                                    Lost
                                </option>
                            </select>

                        </div>

                    </div>

                </div>

            </div>


            {/* ==========================================
                CUSTOMER & LEADS TABLE
            ========================================== */}

            <div className="card shadow-sm mb-5">

                <div className="card-header bg-orange-light d-flex justify-content-between align-items-center">

                    <h5 className="mb-0">
                        Customer & Leads
                    </h5>

                    <span className="text-muted">
                        {filteredRecords.length} records
                    </span>

                </div>


                <div className="card-body p-0">

                    <div className="table-responsive">

                        <table className="table table-hover align-middle mb-0">

                            <thead>

                                <tr>

                                    <th className="ps-3">
                                        Type
                                    </th>

                                    <th>
                                        Customer / Company
                                    </th>

                                    <th>
                                        Contact Person
                                    </th>

                                    <th>
                                        Contact
                                    </th>

                                    <th>
                                        Source
                                    </th>

                                    <th>
                                        Status
                                    </th>

                                    <th>
                                        Assigned To
                                    </th>

                                    <th>
                                        Next Follow-up
                                    </th>

                                    <th>
                                        Value
                                    </th>

                                    <th>
                                        Action
                                    </th>

                                </tr>

                            </thead>


                            <tbody>

                                {filteredRecords.length > 0 ? (

                                    filteredRecords.map((record) => (

                                        <tr key={record.id}>

                                            <td className="ps-3">

                                                <span
                                                    className={getTypeBadge(
                                                        record.type
                                                    )}
                                                >
                                                    {record.type}
                                                </span>

                                            </td>


                                            <td>

                                                <strong>
                                                    {record.name}
                                                </strong>

                                            </td>


                                            <td>
                                                {record.contactPerson}
                                            </td>


                                            <td>

                                                <div>
                                                    {record.email}
                                                </div>

                                                <small className="text-muted">
                                                    {record.phone}
                                                </small>

                                            </td>


                                            <td>
                                                {record.source}
                                            </td>


                                            <td>

                                                <span
                                                    className={getStatusBadge(
                                                        record.status
                                                    )}
                                                >
                                                    {record.status}
                                                </span>

                                            </td>


                                            <td>
                                                {record.assignedTo || "-"}
                                            </td>


                                            <td>
                                                {record.nextFollowUp || "-"}
                                            </td>


                                            <td>
                                                {formatCurrency(record.value)}
                                            </td>


                                            <td>

                                                <button
                                                    className="btn btn-sm btn-outline-danger"
                                                    onClick={() =>
                                                        handleDelete(record.id)
                                                    }
                                                >
                                                    Delete
                                                </button>

                                            </td>

                                        </tr>

                                    ))

                                ) : (

                                    <tr>

                                        <td
                                            colSpan="10"
                                            className="text-center py-5 text-muted"
                                        >
                                            No customers or leads found.
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

export default CustomerLeads;