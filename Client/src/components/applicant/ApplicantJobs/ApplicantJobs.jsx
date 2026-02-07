import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { logout } from "../../../services/helper";
import { useEffect, useState } from "react";
import { FetchUserDetailsInfo } from "../../../services/applicant";
import "./ApplicantJobs.css";

function ApplicantJobs() {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    phoneNumber: "",
    dob: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    FetchUserDetailsInfo(userDetails, setUserDetails);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar background">
        <Link className="navbar-brand" to="/home">
          Get Hired
        </Link>
        <div className="navbar-links">
          <NavLink className="profile-link" to="/profile">
            {userDetails.firstName + " " + userDetails.lastName}
          </NavLink>
          <button className="logout-btn" onClick={() => logout(navigate)}>
            Log out
          </button>
        </div>
      </nav>

      {/* Layout */}
      <div className="dashboard">
        {/* Sidebar */}
        <aside className="sidebar">
          <h2 className="sidebar-title">Welcome Applicant</h2>
          <hr />
          <NavLink to="/jobs/available-jobs" className="sidebar-item">
            <span className="icon">💼</span> Available Jobs
          </NavLink>
          <NavLink to="/jobs/saved-jobs" className="sidebar-item">
            <span className="icon">⭐</span> Saved Jobs
          </NavLink>
          <NavLink to="/jobs/applied-jobs" className="sidebar-item">
            <span className="icon">📄</span> Applied Jobs
          </NavLink>
          <NavLink to="/jobs/shortlisted-jobs" className="sidebar-item">
            <span className="icon">✅</span> Short-listed Jobs
          </NavLink>
        </aside>

        {/* Main Content */}
        <main className="content">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default ApplicantJobs;
