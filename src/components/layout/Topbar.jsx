function Topbar() {

    return (
        <nav className="navbar topbar border-bottom px-4">

            <div>
                <h5 className="mb-0 text-white">
                    ERP System
                </h5>
            </div>

            <div className="ms-auto d-flex align-items-center gap-3">

                <button className="btn btn-light">
                    🔔
                </button>

                <span className="text-white">
                    Ankita
                </span>

                <button className="btn btn-outline-light btn-sm">
                    Logout
                </button>

            </div>

        </nav>
    );
}

export default Topbar;