function Qualifications({employee}){
    return(
        <div>

            <div className="card shadow-sm mb-4">

                <div className="card-header bg-white">
                    <h5>Education & Qualification</h5>
                </div>

                <div className="table-responsive">

                    <table className="table mb-0">

                        <thead className="table-light">
                            <tr>
                                <th>Qualification</th>
                                <th>Institution</th>
                                <th>Year</th>
                            </tr>
                        </thead>

                        <tbody>

                            {employee.qualifications.map((item,index) => (

                                <tr key={index}>
                                    <td>{item.qualification}</td>
                                    <td>{item.institution}</td>
                                    <td>{item.year}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="card shadow-sm">

                <div className="card-header bg-white">
                    <h5>Skills</h5>
                </div>

                <div className="card-body">

                    {employee.skills.map((skill) => (

                        <span key={skill}
                        className="badge bg-primary me-2 mb-2 p-2">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>       
    );
}

export default Qualifications;