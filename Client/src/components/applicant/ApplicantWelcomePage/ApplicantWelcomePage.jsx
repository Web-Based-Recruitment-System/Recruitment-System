import "./ApplicantWelcomePage.css";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../services/helper";

function ApplicantWelcomePage() {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark shadow-sm" style={{ backgroundColor: "#6f42c1" }}>
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold fs-3" to="/home">
            Get Hired
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link text-light fw-semibold"
                  to="#"
                  onClick={() => logout(navigate)}
                >
                  Log out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Section */}
      <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
        <div className="container text-center">
          <h1 className="fw-bold display-5" style={{ color: "#6f42c1" }}>
            Welcome to <span className="text-success">GET HIRED</span>
          </h1>
          <p className="lead text-muted mb-5">
            Find your dream job or update your profile to get noticed.
          </p>

          {/* Action Buttons */}
          <div className="row justify-content-center g-4">
            <div className="col-md-4">
              <button
                className="btn btn-success btn-lg w-100 shadow-sm"
                onClick={() => navigate("/jobs")}
              >
                 Jobs
              </button>
            </div>
            <div className="col-md-4">
              <button
                className="btn btn-primary btn-lg w-100 shadow-sm"
                onClick={() => navigate("/profile")}
              >
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplicantWelcomePage;