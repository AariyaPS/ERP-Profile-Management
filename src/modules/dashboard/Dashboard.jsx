function Dashboard() {

    return (
        <div>

            <div className="mb-4">

                <h2>Dashboard</h2>

                <p className="text-muted">
                    Welcome to the ERP System.
                </p>

            </div>


            <div className="row g-4">

                <div className="col-md-3">

                    <div className="card shadow-sm">

                        <div className="card-body">

                            <h6 className="text-muted">
                                Employees
                            </h6>

                            <h2>
                                120
                            </h2>

                        </div>

                    </div>

                </div>


                <div className="col-md-3">

                    <div className="card shadow-sm">

                        <div className="card-body">

                            <h6 className="text-muted">
                                Pending Leave
                            </h6>

                            <h2>
                                8
                            </h2>

                        </div>

                    </div>

                </div>


                <div className="col-md-3">

                    <div className="card shadow-sm">

                        <div className="card-body">

                            <h6 className="text-muted">
                                Projects
                            </h6>

                            <h2>
                                15
                            </h2>

                        </div>

                    </div>

                </div>


                <div className="col-md-3">

                    <div className="card shadow-sm">

                        <div className="card-body">

                            <h6 className="text-muted">
                                Revenue
                            </h6>

                            <h2>
                                ₹24L
                            </h2>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Dashboard;