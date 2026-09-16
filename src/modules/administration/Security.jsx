import { useState } from "react";
import { Link } from "react-router-dom";

function Security() {
    const [settings, setSettings] = useState({
        twoFactorAuth: true,
        passwordExpiry: true,
        accountLockout: true,
        sessionTimeout: true,
        loginAlerts: true,
        forcePasswordChange: false,
    });

    const [passwordExpiryDays, setPasswordExpiryDays] = useState("90");
    const [sessionTimeoutMinutes, setSessionTimeoutMinutes] = useState("30");
    const [maxLoginAttempts, setMaxLoginAttempts] = useState("5");
    const [saved, setSaved] = useState(false);

    const handleToggle = (setting) => {
        setSettings((currentSettings) => ({
            ...currentSettings,
            [setting]: !currentSettings[setting],
        }));

        setSaved(false);
    };

    const handleSave = () => {
        console.log("Security Settings:", {
            ...settings,
            passwordExpiryDays,
            sessionTimeoutMinutes,
            maxLoginAttempts,
        });

        setSaved(true);
    };

    return (
        <div className="container-fluid">

            {/* Page Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">

                <div>
                    <h2 className="fw-bold mb-1">
                        Security
                    </h2>

                    <p className="text-muted mb-0">
                        Manage authentication, password and account security settings
                    </p>
                </div>

                <Link
                    to="/administration"
                    className="btn btn-outline-secondary"
                >
                    ← Back to Administration
                </Link>

            </div>

            {/* Security Overview */}
            <div className="row g-4 mb-4">

                <div className="col-md-3">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                            <p className="text-muted mb-1">
                                Two-Factor Authentication
                            </p>

                            <h5 className="fw-bold text-success mb-0">
                                {settings.twoFactorAuth
                                    ? "Enabled"
                                    : "Disabled"}
                            </h5>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                            <p className="text-muted mb-1">
                                Password Expiry
                            </p>

                            <h5 className="fw-bold mb-0">
                                {settings.passwordExpiry
                                    ? `${passwordExpiryDays} Days`
                                    : "Disabled"}
                            </h5>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                            <p className="text-muted mb-1">
                                Session Timeout
                            </p>

                            <h5 className="fw-bold mb-0">
                                {settings.sessionTimeout
                                    ? `${sessionTimeoutMinutes} Minutes`
                                    : "Disabled"}
                            </h5>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                            <p className="text-muted mb-1">
                                Login Attempts
                            </p>

                            <h5 className="fw-bold mb-0">
                                {settings.accountLockout
                                    ? maxLoginAttempts
                                    : "Unlimited"}
                            </h5>
                        </div>
                    </div>
                </div>

            </div>

            {/* Authentication Settings */}
            <div className="card border-0 shadow-sm mb-4">

                <div
                    className="card-header text-white fw-bold"
                    style={{
                        backgroundColor: "#EA6814",
                    }}
                >
                    Authentication & Account Security
                </div>

                <div className="card-body">

                    {/* Two Factor Authentication */}
                    <div className="d-flex justify-content-between align-items-center border-bottom py-3">

                        <div>
                            <h6 className="fw-bold mb-1">
                                Two-Factor Authentication
                            </h6>

                            <small className="text-muted">
                                Require users to verify their identity using
                                an additional authentication method.
                            </small>
                        </div>

                        <div className="form-check form-switch">

                            <input
                                className="form-check-input"
                                type="checkbox"
                                checked={settings.twoFactorAuth}
                                onChange={() =>
                                    handleToggle("twoFactorAuth")
                                }
                            />

                        </div>

                    </div>

                    {/* Password Expiry */}
                    <div className="d-flex justify-content-between align-items-center border-bottom py-3">

                        <div>
                            <h6 className="fw-bold mb-1">
                                Password Expiry
                            </h6>

                            <small className="text-muted">
                                Require users to change their password
                                periodically.
                            </small>
                        </div>

                        <div className="form-check form-switch">

                            <input
                                className="form-check-input"
                                type="checkbox"
                                checked={settings.passwordExpiry}
                                onChange={() =>
                                    handleToggle("passwordExpiry")
                                }
                            />

                        </div>

                    </div>

                    {/* Account Lockout */}
                    <div className="d-flex justify-content-between align-items-center border-bottom py-3">

                        <div>
                            <h6 className="fw-bold mb-1">
                                Account Lockout
                            </h6>

                            <small className="text-muted">
                                Temporarily lock an account after multiple
                                unsuccessful login attempts.
                            </small>
                        </div>

                        <div className="form-check form-switch">

                            <input
                                className="form-check-input"
                                type="checkbox"
                                checked={settings.accountLockout}
                                onChange={() =>
                                    handleToggle("accountLockout")
                                }
                            />

                        </div>

                    </div>

                    {/* Session Timeout */}
                    <div className="d-flex justify-content-between align-items-center border-bottom py-3">

                        <div>
                            <h6 className="fw-bold mb-1">
                                Session Timeout
                            </h6>

                            <small className="text-muted">
                                Automatically end inactive user sessions.
                            </small>
                        </div>

                        <div className="form-check form-switch">

                            <input
                                className="form-check-input"
                                type="checkbox"
                                checked={settings.sessionTimeout}
                                onChange={() =>
                                    handleToggle("sessionTimeout")
                                }
                            />

                        </div>

                    </div>

                    {/* Login Alerts */}
                    <div className="d-flex justify-content-between align-items-center border-bottom py-3">

                        <div>
                            <h6 className="fw-bold mb-1">
                                Login Alerts
                            </h6>

                            <small className="text-muted">
                                Notify users when a new login is detected.
                            </small>
                        </div>

                        <div className="form-check form-switch">

                            <input
                                className="form-check-input"
                                type="checkbox"
                                checked={settings.loginAlerts}
                                onChange={() =>
                                    handleToggle("loginAlerts")
                                }
                            />

                        </div>

                    </div>

                    {/* Force Password Change */}
                    <div className="d-flex justify-content-between align-items-center py-3">

                        <div>
                            <h6 className="fw-bold mb-1">
                                Force Password Change
                            </h6>

                            <small className="text-muted">
                                Require users to change their password
                                during their next login.
                            </small>
                        </div>

                        <div className="form-check form-switch">

                            <input
                                className="form-check-input"
                                type="checkbox"
                                checked={settings.forcePasswordChange}
                                onChange={() =>
                                    handleToggle("forcePasswordChange")
                                }
                            />

                        </div>

                    </div>

                </div>

            </div>

            {/* Security Policies */}
            <div className="card border-0 shadow-sm mb-4">

                <div
                    className="card-header text-white fw-bold"
                    style={{
                        backgroundColor: "#EA6814",
                    }}
                >
                    Security Policies
                </div>

                <div className="card-body">

                    <div className="row g-4">

                        {/* Password Expiry Days */}
                        <div className="col-md-4">

                            <label className="form-label fw-semibold">
                                Password Expiry
                            </label>

                            <div className="input-group">

                                <input
                                    type="number"
                                    className="form-control"
                                    min="1"
                                    value={passwordExpiryDays}
                                    onChange={(e) => {
                                        setPasswordExpiryDays(
                                            e.target.value
                                        );
                                        setSaved(false);
                                    }}
                                    disabled={!settings.passwordExpiry}
                                />

                                <span className="input-group-text">
                                    Days
                                </span>

                            </div>

                            <small className="text-muted">
                                Number of days before a password expires.
                            </small>

                        </div>

                        {/* Session Timeout */}
                        <div className="col-md-4">

                            <label className="form-label fw-semibold">
                                Session Timeout
                            </label>

                            <div className="input-group">

                                <input
                                    type="number"
                                    className="form-control"
                                    min="1"
                                    value={sessionTimeoutMinutes}
                                    onChange={(e) => {
                                        setSessionTimeoutMinutes(
                                            e.target.value
                                        );
                                        setSaved(false);
                                    }}
                                    disabled={!settings.sessionTimeout}
                                />

                                <span className="input-group-text">
                                    Minutes
                                </span>

                            </div>

                            <small className="text-muted">
                                Automatically log out inactive users.
                            </small>

                        </div>

                        {/* Login Attempts */}
                        <div className="col-md-4">

                            <label className="form-label fw-semibold">
                                Maximum Login Attempts
                            </label>

                            <div className="input-group">

                                <input
                                    type="number"
                                    className="form-control"
                                    min="1"
                                    value={maxLoginAttempts}
                                    onChange={(e) => {
                                        setMaxLoginAttempts(
                                            e.target.value
                                        );
                                        setSaved(false);
                                    }}
                                    disabled={!settings.accountLockout}
                                />

                                <span className="input-group-text">
                                    Attempts
                                </span>

                            </div>

                            <small className="text-muted">
                                Failed attempts before account lockout.
                            </small>

                        </div>

                    </div>

                </div>

            </div>

            {/* Security Information */}
            <div className="card border-0 shadow-sm mb-4">

                <div className="card-body">

                    <h5 className="fw-bold mb-3">
                        Security Information
                    </h5>

                    <div className="row g-3">

                        <div className="col-md-6">

                            <div className="border rounded p-3">

                                <h6 className="fw-bold">
                                    🔐 Authentication
                                </h6>

                                <p className="text-muted mb-0">
                                    Controls how users authenticate and
                                    access the ERP system.
                                </p>

                            </div>

                        </div>

                        <div className="col-md-6">

                            <div className="border rounded p-3">

                                <h6 className="fw-bold">
                                    🛡️ Access Protection
                                </h6>

                                <p className="text-muted mb-0">
                                    Protects accounts from unauthorized
                                    access and repeated login failures.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* Save Section */}
            <div className="d-flex justify-content-end align-items-center gap-3 mb-4">

                {saved && (
                    <span className="text-success fw-semibold">
                        ✓ Security settings saved
                    </span>
                )}

                <button
                    className="btn text-white"
                    style={{
                        backgroundColor: "#EA6814",
                    }}
                    onClick={handleSave}
                >
                    Save Security Settings
                </button>

            </div>

        </div>
    );
}

export default Security;