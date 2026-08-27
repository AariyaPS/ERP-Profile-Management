function Assets({ employee }) {
  return (
    <div className="card shadow-sm">

      <div className="card-header bg-white">
        <h5>Assets Assigned</h5>
      </div>

      <div className="table-responsive">

        <table className="table table-hover mb-0">

          <thead className="table-light">
            <tr>
              <th>Asset</th>
              <th>Asset ID</th>
              <th>Assigned Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {employee.assets.map((asset, index) => (

              <tr key={index}>
                <td>{asset.asset}</td>
                <td>{asset.assetId}</td>
                <td>{asset.assignedDate}</td>

                <td>
                  <span className="badge bg-success">
                    {asset.status}
                  </span>
                </td>
              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Assets;