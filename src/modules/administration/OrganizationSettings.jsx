import { useState } from "react";
import { Link } from "react-router-dom";

function OrganizationSettings() {
    const [formData, setFormData] = useState({
        companyName: "Navi Infotech",
        companyCode: "NAVI",
        registrationNumber: "",
        taxNumber: "",
        email: "info@naviinfotech.com",
        phone: "+91 40 1234 5678",
        website: "www.naviinfotech.com",

        address: "Hyderabad",
        city: "Hyderabad",
        state: "Telangana",
        country: "India",
        postalCode: "",

        currency: "INR",
        fiscalYear: "April - March",
        timeZone: "Asia/Kolkata",
        dateFormat: "DD-MM-YYYY",
        language: "English",
    });

    const [saved, setSaved] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));

        setSaved(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Organization Settings:", formData);

        setSaved(true);
    };

    return (
        <div>

            {/* =====================================
                PAGE HEADER
            ===================================== */}

            <div className="d-flex justify-content-between align-items-center mb-4">

                <div>
                    <h2 className="mb-1">
                        Organization Settings
                    </h2>

                    <p className="text-muted mb-0">
                        Manage your company and organization information
                    </p>
                </div>

                <Link
                    to="/administration"
                    className="btn btn-outline-primary"
                >
                    ← Back to Administration
                </Link>

            </div>


            {/* =====================================
                SUCCESS MESSAGE
            ===================================== */}

            {saved && (
                <div
                    className="alert alert-success"
                    role="alert"
                >
                    Organization settings saved successfully.
                </div>
            )}


            <form onSubmit={handleSubmit}>

                {/* =====================================
                    COMPANY INFORMATION
                ===================================== */}

                <div className="card shadow-sm mb-4">

                    <div className="card-header bg-orange-light">
                        <h5 className="mb-0">
                            Company Information
                        </h5>
                    </div>

                    <div className="card-body">

                        <div className="row g-4">

                            {/* Company Name */}

                            <div className="col-md-6">

                                <label className="form-label">
                                    Company Name
                                </label>

                                <input
                                    type="text"
                                    name="companyName"
                                    className="form-control"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            {/* Company Code */}

                            <div className="col-md-6">

                                <label className="form-label">
                                    Company Code
                                </label>

                                <input
                                    type="text"
                                    name="companyCode"
                                    className="form-control"
                                    value={formData.companyCode}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            {/* Registration Number */}

                            <div className="col-md-6">

                                <label className="form-label">
                                    Registration Number
                                </label>

                                <input
                                    type="text"
                                    name="registrationNumber"
                                    className="form-control"
                                    placeholder="Enter registration number"
                                    value={formData.registrationNumber}
                                    onChange={handleChange}
                                />

                            </div>


                            {/* Tax / GST Number */}

                            <div className="col-md-6">

                                <label className="form-label">
                                    GST / Tax Number
                                </label>

                                <input
                                    type="text"
                                    name="taxNumber"
                                    className="form-control"
                                    placeholder="Enter GST / Tax number"
                                    value={formData.taxNumber}
                                    onChange={handleChange}
                                />

                            </div>

                        </div>

                    </div>

                </div>


                {/* =====================================
                    CONTACT INFORMATION
                ===================================== */}

                <div className="card shadow-sm mb-4">

                    <div className="card-header bg-orange-light">
                        <h5 className="mb-0">
                            Contact Information
                        </h5>
                    </div>

                    <div className="card-body">

                        <div className="row g-4">

                            {/* Email */}

                            <div className="col-md-6">

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


                            {/* Website */}

                            <div className="col-md-6">

                                <label className="form-label">
                                    Website
                                </label>

                                <input
                                    type="text"
                                    name="website"
                                    className="form-control"
                                    value={formData.website}
                                    onChange={handleChange}
                                />

                            </div>

                        </div>

                    </div>

                </div>


                {/* =====================================
                    ADDRESS
                ===================================== */}

                <div className="card shadow-sm mb-4">

                    <div className="card-header bg-orange-light">
                        <h5 className="mb-0">
                            Organization Address
                        </h5>
                    </div>

                    <div className="card-body">

                        <div className="row g-4">

                            {/* Address */}

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
                                ></textarea>

                            </div>


                            {/* City */}

                            <div className="col-md-4">

                                <label className="form-label">
                                    City
                                </label>

                                <input
                                    type="text"
                                    name="city"
                                    className="form-control"
                                    value={formData.city}
                                    onChange={handleChange}
                                />

                            </div>


                            {/* State */}

                            <div className="col-md-4">

                                <label className="form-label">
                                    State
                                </label>

                                <input
                                    type="text"
                                    name="state"
                                    className="form-control"
                                    value={formData.state}
                                    onChange={handleChange}
                                />

                            </div>


                            {/* Country */}

                            <div className="col-md-4">

                                <label className="form-label">
                                    Country
                                </label>

                                <select
                                    name="country"
                                    className="form-select"
                                    value={formData.country}
                                    onChange={handleChange}
                                >

                                    <option value="India">
                                        India
                                    </option>

                                    <option value="United States">
                                        United States
                                    </option>

                                    <option value="United Kingdom">
                                        United Kingdom
                                    </option>

                                    <option value="Australia">
                                        Australia
                                    </option>

                                    <option value="Singapore">
                                        Singapore
                                    </option>

                                </select>

                            </div>


                            {/* Postal Code */}

                            <div className="col-md-4">

                                <label className="form-label">
                                    Postal Code
                                </label>

                                <input
                                    type="text"
                                    name="postalCode"
                                    className="form-control"
                                    value={formData.postalCode}
                                    onChange={handleChange}
                                />

                            </div>

                        </div>

                    </div>

                </div>


                {/* =====================================
                    REGIONAL & FINANCIAL SETTINGS
                ===================================== */}

                <div className="card shadow-sm mb-4">

                    <div className="card-header bg-orange-light">
                        <h5 className="mb-0">
                            Regional & Financial Settings
                        </h5>
                    </div>

                    <div className="card-body">

                        <div className="row g-4">

                            {/* Currency */}

                            <div className="col-md-6">

                                <label className="form-label">
                                    Currency
                                </label>

                                <select
                                    name="currency"
                                    className="form-select"
                                    value={formData.currency}
                                    onChange={handleChange}
                                >

                                    <option value="INR">
                                        INR - Indian Rupee (₹)
                                    </option>

                                    <option value="USD">
                                        USD - US Dollar ($)
                                    </option>

                                    <option value="EUR">
                                        EUR - Euro (€)
                                    </option>

                                    <option value="GBP">
                                        GBP - British Pound (£)
                                    </option>

                                </select>

                            </div>


                            {/* Fiscal Year */}

                            <div className="col-md-6">

                                <label className="form-label">
                                    Fiscal Year
                                </label>

                                <select
                                    name="fiscalYear"
                                    className="form-select"
                                    value={formData.fiscalYear}
                                    onChange={handleChange}
                                >

                                    <option value="April - March">
                                        April - March
                                    </option>

                                    <option value="January - December">
                                        January - December
                                    </option>

                                </select>

                            </div>


                            {/* Time Zone */}

                            <div className="col-md-6">

                                <label className="form-label">
                                    Time Zone
                                </label>

                                <select
                                    name="timeZone"
                                    className="form-select"
                                    value={formData.timeZone}
                                    onChange={handleChange}
                                >

                                    <option value="Asia/Kolkata">
                                        Asia/Kolkata (IST)
                                    </option>

                                    <option value="America/New_York">
                                        America/New_York (EST)
                                    </option>

                                    <option value="Europe/London">
                                        Europe/London (GMT)
                                    </option>

                                    <option value="Asia/Singapore">
                                        Asia/Singapore (SGT)
                                    </option>

                                </select>

                            </div>


                            {/* Date Format */}

                            <div className="col-md-6">

                                <label className="form-label">
                                    Date Format
                                </label>

                                <select
                                    name="dateFormat"
                                    className="form-select"
                                    value={formData.dateFormat}
                                    onChange={handleChange}
                                >

                                    <option value="DD-MM-YYYY">
                                        DD-MM-YYYY
                                    </option>

                                    <option value="MM-DD-YYYY">
                                        MM-DD-YYYY
                                    </option>

                                    <option value="YYYY-MM-DD">
                                        YYYY-MM-DD
                                    </option>

                                </select>

                            </div>


                            {/* Language */}

                            <div className="col-md-6">

                                <label className="form-label">
                                    Default Language
                                </label>

                                <select
                                    name="language"
                                    className="form-select"
                                    value={formData.language}
                                    onChange={handleChange}
                                >

                                    <option value="English">
                                        English
                                    </option>

                                    <option value="Hindi">
                                        Hindi
                                    </option>

                                </select>

                            </div>

                        </div>

                    </div>

                </div>


                {/* =====================================
                    ACTION BUTTONS
                ===================================== */}

                <div className="d-flex justify-content-end gap-2 mb-5">

                    <Link
                        to="/administration"
                        className="btn btn-secondary"
                    >
                        Cancel
                    </Link>

                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Save Settings
                    </button>

                </div>

            </form>

        </div>
    );
}

export default OrganizationSettings;

