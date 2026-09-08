function Banking({employee}){
    const bank = employee.banking;

    return(
        <div className="card shadow-sm">

            <div className="card-header bg-white d-flex justify-content-between">

                <h5>Banking & Payment Details</h5>

                {bank.verified? (
                    <span className="badge bg-success">Verified</span>
                ):(
                    <span className="badge bg-warning text-dark">Pending</span>
                )}
            </div>

            <div className="card-body">

                <div className="row">

                    <div className="col-md-6">
                        <p><strong>Bank Name:</strong> {bank.bankName}</p>

                        <p>
                            <strong>Account Number:</strong>
                            {" "}
                            {bank.accountNumber}
                        </p>
                    </div>

                    <div className="col-md-6">
                        <p><strong>IFSC:</strong> {bank.ifsc}</p>

                        <p>
                            <strong>Account Holder:</strong>
                            {" "}
                            {bank.accountHolder}
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Banking;