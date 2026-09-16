import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddCustomer() {
    const navigate = useNavigate();

    const [customer, setCustomer] = useState({
        customerId: "",
        name: "",
        email: "",
        phone: "",
        company: "",
        industry: "",
        status: "Active"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setCustomer((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Customer added:", customer);

        // For now, return to Customer & Leads page
        navigate("/crm/customers");
    };

    return (
        <div className="container-fluid">

            {/* HEADER */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="fw-bold mb-1">
                        Add Customer
                    </h2>

                    <p className="text-muted mb-0">
                        Create a new customer profile
                    </p>
                </div>

                <Link
                    to="/crm/customers"
                    className="btn btn-outline-secondary"
                >
                    ← Back
                </Link>
            </div>

            {/* FORM */}
            <div className="card border-0 shadow-sm">

                <div className="card-header bg-white py-3">
                    <h5 className="mb-0 fw-bold">
                        Customer Information
                    </h5>
                </div>

                <div className="card-body">

                    <form onSubmit={handleSubmit}>

                        <div className="row">

                            {/* Customer ID */}
                            <div className="col-md-6 mb-3">
                                <label className="form-label fw-semibold">
                                    Customer ID
                                </label>

                                <input
                                    type="text"
                                    name="customerId"
                                    value={customer.customerId}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="CUS-1001"
                                    required
                                />
                            </div>

                            {/* Customer Name */}
                            <div className="col-md-6 mb-3">
                                <label className="form-label fw-semibold">
                                    Customer Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={customer.name}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Enter customer name"
                                    required
                                />
                            </div>

                            {/* Company */}
                            <div className="col-md-6 mb-3">
                                <label className="form-label fw-semibold">
                                    Company
                                </label>

                                <input
                                    type="text"
                                    name="company"
                                    value={customer.company}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Enter company name"
                                />
                            </div>

                            {/* Industry */}
                            <div className="col-md-6 mb-3">
                                <label className="form-label fw-semibold">
                                    Industry
                                </label>

                                <input
                                    type="text"
                                    name="industry"
                                    value={customer.industry}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="e.g. IT, Finance, Healthcare"
                                />
                            </div>

                            {/* Email */}
                            <div className="col-md-6 mb-3">
                                <label className="form-label fw-semibold">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={customer.email}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="customer@example.com"
                                />
                            </div>

                            {/* Phone */}
                            <div className="col-md-6 mb-3">
                                <label className="form-label fw-semibold">
                                    Phone
                                </label>

                                <input
                                    type="tel"
                                    name="phone"
                                    value={customer.phone}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="+91 XXXXX XXXXX"
                                />
                            </div>

                            {/* Status */}
                            <div className="col-md-6 mb-3">
                                <label className="form-label fw-semibold">
                                    Status
                                </label>

                                <select
                                    name="status"
                                    value={customer.status}
                                    onChange={handleChange}
                                    className="form-select"
                                >
                                    <option value="Active">
                                        Active
                                    </option>

                                    <option value="Inactive">
                                        Inactive
                                    </option>

                                    <option value="Prospect">
                                        Prospect
                                    </option>
                                </select>
                            </div>

                        </div>

                        {/* BUTTONS */}
                        <div className="d-flex justify-content-end gap-2 mt-4">

                            <Link
                                to="/crm/customers"
                                className="btn btn-outline-secondary"
                            >
                                Cancel
                            </Link>

                            <button
                                type="submit"
                                className="btn"
                                style={{
                                    backgroundColor: "#EA6814",
                                    color: "white"
                                }}
                            >
                                Save Customer
                            </button>

                        </div>

                    </form>

                </div>
            </div>

        </div>
    );
}

export default AddCustomer;

