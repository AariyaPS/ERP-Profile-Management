function PersonalInfo({employee}){
    const data =employee.personal;

    return(
        <div className="card shadow-sm">

            <div className="card-header bg-white">
                <h5>Personal Information</h5>
            </div>

            <div className="card-body">

                <div className="row">
                    <div className="col-md-6">

                        <p>
                            <strong>Full Name:</strong>
                            <br />
                            {employee.name}
                        </p>

                        <p>
                            <strong>Date of Birth:</strong>
                            <br />
                            {data.dob}
                        </p>

                        <p>
                            <strong>Gender:</strong>
                            <br />
                            {data.gender}
                        </p>

                        <p>
                            <strong>Nationality:</strong>
                            <br />
                            {data.nationality}
                        </p>
                    </div>

                    <div className="col-md-6">

                        <p>
                            <strong>Email:</strong>
                            <br />
                            {data.email}
                        </p>

                        <p>
                            <strong>Phone:</strong>
                            <br />
                            {data.phone}
                        </p>

                        <p>
                            <strong>Address:</strong>
                            <br />
                            {data.address}
                        </p>

                        <p>
                            <strong>Marital Status:</strong>
                            <br />
                            {data.maritalStatus}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalInfo;