function Documents({employee}){
    return(
        <div className="card shadow-sm">

            <div className="card-header bg-white d-flex justify-content-between">

                <h5>Employee Documents</h5>

                <button className="btn btn-primary btn-sm"> Upload Document</button>
            </div>

            <div className="table-responsive">

                <table className="table table-hover mb-0">

                    <thead className="table-light">
                        <tr>
                            <th>Document</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Uploaded On</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        {employee.documents.map((document) => (

                            <tr key={document.id}>

                                <td>{document.name}</td>
                                <td>{document.type}</td>

                                <td>
                                    <span className={'badge ${document.status === "Uploaded"?"bg-success":"bg-warning text-dark}'}>
                                        {document.status}
                                    </span>
                                </td>

                                <td>{document.uploadedOn}</td>

                                <td>
                                    <button className="btn btn-sm btn-outline-primary me-2">View</button>

                                    <button className="btn btn-sm btn-outline-secondary">
                                        Download
                                    </button>
                                </td>
                            </tr>
                            
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Documents;