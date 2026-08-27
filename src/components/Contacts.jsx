function Contacts({employee}){
    const contact = employee.emergencyContact;

    return(
        <div className="card shadow-sm">

            <div className="card-header bg-white">
                <h5>Emergenvy Contact</h5>
            </div>

            <div className="card-body">

                <div className="row">

                    <div className="col-md-6">
                        <p>
                            <strong>Name:</strong>
                            <br />
                            {contact.name}
                        </p>

                        <p>
                            <strong>Relationship:</strong>
                            <br />
                            {contact.relationship}
                        </p>
                    </div>

                    <div className="col-md-6">
                        <p>
                            <strong>Phone:</strong>
                            <br />
                            {contact.phone}
                        </p>

                        <p>
                            <strong>Email:</strong>
                            <br />
                            {contact.email}
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Contacts;