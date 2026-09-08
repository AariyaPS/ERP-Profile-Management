function History({employee}){
    return(
        <div className="card shadow-sm">
            
            <div className="card-header bg-white">
                <h5>Profile Change History</h5>
            </div>

            <div className="table-responsive">

                <table className="table table-hover mb-0">

                    <thead className="table-light">
                        <tr>
                            <th>Date</th>
                            <th>Field</th>
                            <th>Old Value</th>
                            <th>New Value</th>
                            <th>Changed By</th>
                        </tr>
                    </thead>

                    <tbody>

                        {employee.history.map((item,index) => (
                            <tr key={index}>
                                <td>{item.date}</td>
                                <td>
                                    <strong>{item.field}</strong>
                                </td>

                                <td>{item.oldValue}</td>
                                <td>{item.newValue}</td>
                                <td>{item.changedBy}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default History;