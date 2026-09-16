import { useState } from "react";
import { Link } from "react-router-dom";

function MasterData() {
    const [selectedCategory, setSelectedCategory] = useState("Departments");
    const [search, setSearch] = useState("");

    const masterData = {
        Departments: [
            {
                id: 1,
                code: "DEP-001",
                name: "Finance",
                description: "Finance and accounting department",
                status: "Active",
            },
            {
                id: 2,
                code: "DEP-002",
                name: "Human Resources",
                description: "HR and employee management",
                status: "Active",
            },
            {
                id: 3,
                code: "DEP-003",
                name: "IT",
                description: "Information technology department",
                status: "Active",
            },
            {
                id: 4,
                code: "DEP-004",
                name: "Sales",
                description: "Sales and business development",
                status: "Active",
            },
        ],

        Designations: [
            {
                id: 1,
                code: "DES-001",
                name: "Software Engineer",
                description: "Software development role",
                status: "Active",
            },
            {
                id: 2,
                code: "DES-002",
                name: "Project Manager",
                description: "Project management role",
                status: "Active",
            },
            {
                id: 3,
                code: "DES-003",
                name: "HR Manager",
                description: "Human resource management",
                status: "Active",
            },
            {
                id: 4,
                code: "DES-004",
                name: "Financial Analyst",
                description: "Financial analysis role",
                status: "Active",
            },
        ],

        Locations: [
            {
                id: 1,
                code: "LOC-001",
                name: "Hyderabad",
                description: "Hyderabad office",
                status: "Active",
            },
            {
                id: 2,
                code: "LOC-002",
                name: "Bangalore",
                description: "Bangalore office",
                status: "Active",
            },
            {
                id: 3,
                code: "LOC-003",
                name: "Chennai",
                description: "Chennai office",
                status: "Active",
            },
        ],

        Customers: [
            {
                id: 1,
                code: "CUS-001",
                name: "ABC Technologies",
                description: "Technology customer",
                status: "Active",
            },
            {
                id: 2,
                code: "CUS-002",
                name: "Global Solutions",
                description: "Business solutions customer",
                status: "Active",
            },
            {
                id: 3,
                code: "CUS-003",
                name: "Tech Innovations",
                description: "Software customer",
                status: "Active",
            },
        ],

        Vendors: [
            {
                id: 1,
                code: "VEN-001",
                name: "ABC Suppliers",
                description: "Office equipment supplier",
                status: "Active",
            },
            {
                id: 2,
                code: "VEN-002",
                name: "Tech Supplies Ltd",
                description: "IT equipment supplier",
                status: "Active",
            },
        ],

        "Tax Codes": [
            {
                id: 1,
                code: "GST-18",
                name: "GST 18%",
                description: "Goods and Services Tax 18%",
                status: "Active",
            },
            {
                id: 2,
                code: "GST-12",
                name: "GST 12%",
                description: "Goods and Services Tax 12%",
                status: "Active",
            },
            {
                id: 3,
                code: "GST-5",
                name: "GST 5%",
                description: "Goods and Services Tax 5%",
                status: "Active",
            },
        ],

        Currencies: [
            {
                id: 1,
                code: "INR",
                name: "Indian Rupee",
                description: "Indian national currency",
                status: "Active",
            },
            {
                id: 2,
                code: "USD",
                name: "US Dollar",
                description: "United States currency",
                status: "Active",
            },
            {
                id: 3,
                code: "EUR",
                name: "Euro",
                description: "European currency",
                status: "Active",
            },
        ],

        "Payment Terms": [
            {
                id: 1,
                code: "NET-15",
                name: "Net 15 Days",
                description: "Payment due within 15 days",
                status: "Active",
            },
            {
                id: 2,
                code: "NET-30",
                name: "Net 30 Days",
                description: "Payment due within 30 days",
                status: "Active",
            },
            {
                id: 3,
                code: "NET-60",
                name: "Net 60 Days",
                description: "Payment due within 60 days",
                status: "Active",
            },
        ],

        "Project Types": [
            {
                id: 1,
                code: "PRJ-IMP",
                name: "Implementation",
                description: "ERP implementation projects",
                status: "Active",
            },
            {
                id: 2,
                code: "PRJ-DEV",
                name: "Development",
                description: "Software development projects",
                status: "Active",
            },
            {
                id: 3,
                code: "PRJ-SUP",
                name: "Support",
                description: "Support and maintenance projects",
                status: "Active",
            },
        ],
    };

    const categories = Object.keys(masterData);

    const filteredData = masterData[selectedCategory].filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.code.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase())
    );

    const handleAdd = () => {
        alert(`Add ${selectedCategory} - form will be added later.`);
    };

    return (
        <div className="container-fluid">

            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="fw-bold mb-1">Master Data</h2>
                    <p className="text-muted mb-0">
                        Manage reusable data used across the ERP system
                    </p>
                </div>

                <Link
                    to="/administration"
                    className="btn btn-outline-secondary"
                >
                    ← Back to Administration
                </Link>
            </div>

            <div className="row g-4">

                {/* Categories */}
                <div className="col-md-3">

                    <div className="card border-0 shadow-sm">

                        <div
                            className="card-header text-white fw-bold"
                            style={{
                                backgroundColor: "#EA6814",
                            }}
                        >
                            Master Data Categories
                        </div>

                        <div className="list-group list-group-flush">

                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${
                                        selectedCategory === category
                                            ? "active"
                                            : ""
                                    }`}
                                    onClick={() => {
                                        setSelectedCategory(category);
                                        setSearch("");
                                    }}
                                    style={
                                        selectedCategory === category
                                            ? {
                                                backgroundColor: "#EA6814",
                                                borderColor: "#EA6814",
                                            }
                                            : {}
                                    }
                                >
                                    <span>{category}</span>

                                    <span className="badge bg-secondary rounded-pill">
                                        {masterData[category].length}
                                    </span>
                                </button>
                            ))}

                        </div>

                    </div>

                </div>

                {/* Master Data Table */}
                <div className="col-md-9">

                    <div className="card border-0 shadow-sm">

                        {/* Card Header */}
                        <div className="card-header bg-white py-3">

                            <div className="d-flex justify-content-between align-items-center">

                                <div>
                                    <h5 className="fw-bold mb-1">
                                        {selectedCategory}
                                    </h5>

                                    <small className="text-muted">
                                        Manage {selectedCategory.toLowerCase()}
                                    </small>
                                </div>

                                <button
                                    className="btn text-white"
                                    style={{
                                        backgroundColor: "#EA6814",
                                    }}
                                    onClick={handleAdd}
                                >
                                    + Add {selectedCategory.slice(0, -1)}
                                </button>

                            </div>

                        </div>

                        {/* Search */}
                        <div className="card-body border-bottom">

                            <div className="row">

                                <div className="col-md-6">

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder={`Search ${selectedCategory}...`}
                                        value={search}
                                        onChange={(e) =>
                                            setSearch(e.target.value)
                                        }
                                    />

                                </div>

                            </div>

                        </div>

                        {/* Table */}
                        <div className="table-responsive">

                            <table className="table table-hover mb-0">

                                <thead>
                                    <tr
                                        style={{
                                            backgroundColor: "#EA6814",
                                            color: "white",
                                        }}
                                    >
                                        <th>Code</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {filteredData.length > 0 ? (
                                        filteredData.map((item) => (
                                            <tr key={item.id}>

                                                <td className="fw-semibold">
                                                    {item.code}
                                                </td>

                                                <td>
                                                    {item.name}
                                                </td>

                                                <td className="text-muted">
                                                    {item.description}
                                                </td>

                                                <td>
                                                    <span className="badge bg-success">
                                                        {item.status}
                                                    </span>
                                                </td>

                                                <td>

                                                    <button
                                                        className="btn btn-sm btn-outline-primary me-2"
                                                        onClick={() =>
                                                            alert(
                                                                `Edit ${item.name}`
                                                            )
                                                        }
                                                    >
                                                        Edit
                                                    </button>

                                                    <button
                                                        className="btn btn-sm btn-outline-danger"
                                                        onClick={() =>
                                                            alert(
                                                                `Delete ${item.name}`
                                                            )
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
                                                colSpan="5"
                                                className="text-center py-4 text-muted"
                                            >
                                                No records found
                                            </td>
                                        </tr>
                                    )}

                                </tbody>

                            </table>

                        </div>

                        {/* Footer */}
                        <div className="card-footer bg-white">

                            <small className="text-muted">
                                Showing {filteredData.length} of{" "}
                                {masterData[selectedCategory].length} records
                            </small>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default MasterData;