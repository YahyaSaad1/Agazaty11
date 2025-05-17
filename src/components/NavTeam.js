import { Link } from "react-router-dom";

function NavTeam() {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-primary p-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/team" onClick={handleScrollToTop}>
                    <h3 className="text-bold text-light">اجازاتي</h3>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">تسجيل الدخول</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavTeam;
