import { useState } from "react";
import { Link } from "react-router-dom";

function SystemSettings() {
    const [settings, setSettings] = useState({
        applicationName: "ERP System",
        language: "English",
        dateFormat: "DD/MM/YYYY",
        timeFormat: "12 Hour",
        timeZone: "Asia/Kolkata",
        defaultPage: "/dashboard",
        recordsPerPage: "10",
        enableNotifications: true,
        enableEmailNotifications: true,
        enableMaintenanceMode: false,
        enableActivityLogging: true,
    });

    const [saved, setSaved] = useState(false);

    const handleChange = (field, value) => {
        setSettings((currentSettings) => ({
            ...currentSettings,
            [field]: value,
        }));

        setSaved(false);
    };

    const handleSave = () => {
        console.log("System Settings:", settings);

        setSaved(true);
    };

    return (
        <div className="container-fluid">

            {/* Page Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">

                <div>
                    <h2 className="fw-bold mb-1">
                        System Settings
                    </h2>

                    <p className="text-muted mb-0">
                        Configure general preferences and system behavior
                    </p>
                </div>

                <Link
                    to="/administration"
                    className="btn btn-outline-secondary"
                >
                    ← Back to Administration
                </Link>

            </div>

            {/* System Overview */}
            <div className="row g-4 mb-4">

                <div className="col-md-3">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">

                            <p className="text-muted mb-1">
                                Application
                            </p>

                            <h5 className="fw-bold mb-0">
                                {settings.applicationName}
                            </h5>

                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">

                            <p className="text-muted mb-1">
                                Language
                            </p>

                            <h5 className="fw-bold mb-0">
                                {settings.language}
                            </h5>

                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">

                            <p className="text-muted mb-1">
                                Time Zone
                            </p>

                            <h5 className="fw-bold mb-0">
                                {settings.timeZone}
                            </h5>

                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">

                            <p className="text-muted mb-1">
                                Notifications
                            </p>

                            <h5 className="fw-bold text-success mb-0">
                                {settings.enableNotifications
                                    ? "Enabled"
                                    : "Disabled"}
                            </h5>

                        </div>
                    </div>
                </div>

            </div>

            {/* General Settings */}
            <div className="card border-0 shadow-sm mb-4">

                <div
                    className="card-header text-white fw-bold"
                    style={{
                        backgroundColor: "#EA6814",
                    }}
                >
                    General Settings
                </div>

                <div className="card-body">

                    <div className="row g-4">

                        {/* Application Name */}
                        <div className="col-md-6">

                            <label className="form-label fw-semibold">
                                Application Name
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                value={settings.applicationName}
                                onChange={(e) =>
                                    handleChange(
                                        "applicationName",
                                        e.target.value
                                    )
                                }
                            />

                            <small className="text-muted">
                                Name displayed throughout the ERP application.
                            </small>

                        </div>

                        {/* Language */}
                        <div className="col-md-6">

                            <label className="form-label fw-semibold">
                                Default Language
                            </label>

                            <select
                                className="form-select"
                                value={settings.language}
                                onChange={(e) =>
                                    handleChange(
                                        "language",
                                        e.target.value
                                    )
                                }
                            >
                                <option value="English">
                                    English
                                </option>

                                <option value="Hindi">
                                    Hindi
                                </option>

                                <option value="Malayalam">
                                    Malayalam
                                </option>

                            </select>

                        </div>

                        {/* Date Format */}
                        <div className="col-md-6">

                            <label className="form-label fw-semibold">
                                Date Format
                            </label>

                            <select
                                className="form-select"
                                value={settings.dateFormat}
                                onChange={(e) =>
                                    handleChange(
                                        "dateFormat",
                                        e.target.value
                                    )
                                }
                            >
                                <option value="DD/MM/YYYY">
                                    DD/MM/YYYY
                                </option>

                                <option value="MM/DD/YYYY">
                                    MM/DD/YYYY
                                </option>

                                <option value="YYYY-MM-DD">
                                    YYYY-MM-DD
                                </option>

                            </select>

                        </div>

                        {/* Time Format */}
                        <div className="col-md-6">

                            <label className="form-label fw-semibold">
                                Time Format
                            </label>

                            <select
                                className="form-select"
                                value={settings.timeFormat}
                                onChange={(e) =>
                                    handleChange(
                                        "timeFormat",
                                        e.target.value
                                    )
                                }
                            >
                                <option value="12 Hour">
                                    12 Hour
                                </option>

                                <option value="24 Hour">
                                    24 Hour
                                </option>

                            </select>

                        </div>

                        {/* Time Zone */}
                        <div className="col-md-6">

                            <label className="form-label fw-semibold">
                                Time Zone
                            </label>

                            <select
                                className="form-select"
                                value={settings.timeZone}
                                onChange={(e) =>
                                    handleChange(
                                        "timeZone",
                                        e.target.value
                                    )
                                }
                            >
                                <option value="Asia/Kolkata">
                                    Asia/Kolkata (IST)
                                </option>

                                <option value="UTC">
                                    UTC
                                </option>

                                <option value="America/New_York">
                                    America/New_York
                                </option>

                                <option value="Europe/London">
                                    Europe/London
                                </option>

                            </select>

                        </div>

                        {/* Default Page */}
                        <div className="col-md-6">

                            <label className="form-label fw-semibold">
                                Default Landing Page
                            </label>

                            <select
                                className="form-select"
                                value={settings.defaultPage}
                                onChange={(e) =>
                                    handleChange(
                                        "defaultPage",
                                        e.target.value
                                    )
                                }
                            >
                                <option value="/dashboard">
                                    Dashboard
                                </option>

                                <option value="/hr/employees">
                                    Employees
                                </option>

                                <option value="/projects">
                                    Projects
                                </option>

                                <option value="/customers">
                                    Customers
                                </option>

                            </select>

                        </div>

                        {/* Records Per Page */}
                        <div className="col-md-6">

                            <label className="form-label fw-semibold">
                                Records Per Page
                            </label>

                            <select
                                className="form-select"
                                value={settings.recordsPerPage}
                                onChange={(e) =>
                                    handleChange(
                                        "recordsPerPage",
                                        e.target.value
                                    )
                                }
                            >
                                <option value="10">
                                    10
                                </option>

                                <option value="25">
                                    25
                                </option>

                                <option value="50">
                                    50
                                </option>

                                <option value="100">
                                    100
                                </option>

                            </select>

                            <small className="text-muted">
                                Number of records displayed in tables.
                            </small>

                        </div>

                    </div>

                </div>

            </div>

            {/* Notification Settings */}
            <div className="card border-0 shadow-sm mb-4">

                <div
                    className="card-header text-white fw-bold"
                    style={{
                        backgroundColor: "#EA6814",
                    }}
                >
                    Notification Settings
                </div>

                <div className="card-body">

                    {/* Notifications */}
                    <div className="d-flex justify-content-between align-items-center border-bottom py-3">

                        <div>
                            <h6 className="fw-bold mb-1">
                                System Notifications
                            </h6>

                            <small className="text-muted">
                                Allow the ERP to display notifications
                                inside the application.
                            </small>
                        </div>

                        <div className="form-check form-switch">

                            <input
                                className="form-check-input"
                                type="checkbox"
                                checked={settings.enableNotifications}
                                onChange={(e) =>
                                    handleChange(
                                        "enableNotifications",
                                        e.target.checked
                                    )
                                }
                            />

                        </div>

                    </div>

                    {/* Email Notifications */}
                    <div className="d-flex justify-content-between align-items-center py-3">

                        <div>
                            <h6 className="fw-bold mb-1">
                                Email Notifications
                            </h6>

                            <small className="text-muted">
                                Send important system events and alerts
                                through email.
                            </small>
                        </div>

                        <div className="form-check form-switch">

                            <input
                                className="form-check-input"
                                type="checkbox"
                                checked={settings.enableEmailNotifications}
                                onChange={(e) =>
                                    handleChange(
                                        "enableEmailNotifications",
                                        e.target.checked
                                    )
                                }
                            />

                        </div>

                    </div>

                </div>

            </div>

            {/* System Behavior */}
            <div className="card border-0 shadow-sm mb-4">

                <div
                    className="card-header text-white fw-bold"
                    style={{
                        backgroundColor: "#EA6814",
                    }}
                >
                    System Behavior
                </div>

                <div className="card-body">

                    {/* Maintenance Mode */}
                    <div className="d-flex justify-content-between align-items-center border-bottom py-3">

                        <div>
                            <h6 className="fw-bold mb-1">
                                Maintenance Mode
                            </h6>

                            <small className="text-muted">
                                Temporarily restrict normal application
                                access while system maintenance is performed.
                            </small>
                        </div>

                        <div className="form-check form-switch">

                            <input
                                className="form-check-input"
                                type="checkbox"
                                checked={settings.enableMaintenanceMode}
                                onChange={(e) =>
                                    handleChange(
                                        "enableMaintenanceMode",
                                        e.target.checked
                                    )
                                }
                            />

                        </div>

                    </div>

                    {/* Activity Logging */}
                    <div className="d-flex justify-content-between align-items-center py-3">

                        <div>
                            <h6 className="fw-bold mb-1">
                                Activity Logging
                            </h6>

                            <small className="text-muted">
                                Record important user activities for
                                auditing and monitoring.
                            </small>
                        </div>

                        <div className="form-check form-switch">

                            <input
                                className="form-check-input"
                                type="checkbox"
                                checked={settings.enableActivityLogging}
                                onChange={(e) =>
                                    handleChange(
                                        "enableActivityLogging",
                                        e.target.checked
                                    )
                                }
                            />

                        </div>

                    </div>

                </div>

            </div>

            {/* System Information */}
            <div className="card border-0 shadow-sm mb-4">

                <div
                    className="card-header text-white fw-bold"
                    style={{
                        backgroundColor: "#EA6814",
                    }}
                >
                    System Information
                </div>

                <div className="card-body">

                    <div className="row g-3">

                        <div className="col-md-4">

                            <div className="border rounded p-3">

                                <small className="text-muted">
                                    Application Version
                                </small>

                                <h6 className="fw-bold mb-0">
                                    v1.0.0
                                </h6>

                            </div>

                        </div>

                        <div className="col-md-4">

                            <div className="border rounded p-3">

                                <small className="text-muted">
                                    Environment
                                </small>

                                <h6 className="fw-bold mb-0">
                                    Prototype
                                </h6>

                            </div>

                        </div>

                        <div className="col-md-4">

                            <div className="border rounded p-3">

                                <small className="text-muted">
                                    Database
                                </small>

                                <h6 className="fw-bold mb-0">
                                    Not Connected
                                </h6>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* Save */}
            <div className="d-flex justify-content-end align-items-center gap-3 mb-4">

                {saved && (
                    <span className="text-success fw-semibold">
                        ✓ System settings saved
                    </span>
                )}

                <button
                    className="btn text-white"
                    style={{
                        backgroundColor: "#EA6814",
                    }}
                    onClick={handleSave}
                >
                    Save System Settings
                </button>

            </div>

        </div>
    );
}

export default SystemSettings;