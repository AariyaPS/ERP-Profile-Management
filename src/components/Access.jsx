function Access({ employee }) {
  const access = employee.access;

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-white">
        <h5>Access & Permissions</h5>
      </div>

      <div className="card-body">
        <p>
          <strong>ERP Role:</strong>
          <br />
          {access.role}
        </p>

        <p>
          <strong>Approval Authority:</strong>
          <br />
          {access.approvalAuthority}
        </p>

        <p>
          <strong>Last Login:</strong>
          <br />
          {access.lastLogin}
        </p>

        <hr />

        <strong>Application Access</strong>
        <div className="mt-3">
          {access.applications.map((application) => (
            <span key={application} className="badge bg-secondary me-2 p-2">
              {application}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Access;