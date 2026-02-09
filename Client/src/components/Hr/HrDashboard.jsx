import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { logout } from "../../services/helper";
import "./HrDashboard.css";

export const HrDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="hr-layout">
      {/* TOP NAVBAR */}
      <nav className="hr-navbar">
        <Link className="hr-brand" to="/">
          Get Hired
        </Link>

        <button
          className="logout-btn"
          onClick={() => logout(navigate)}
        >
          Logout
        </button>
      </nav>

      {/* MAIN CONTENT */}
      <div className="hr-main">
        {/* SIDEBAR */}
        <aside className="hr-sidebar">
          <div className="sidebar-header">
            <h3>Welcome</h3>
            <span>HR Panel</span>
          </div>

          <NavLink
            to="/hr/update-profile"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            Update Profile
          </NavLink>

          <NavLink
            to="/hr/jobs"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            Job List
          </NavLink>

          <NavLink
            to="/hr/create-job"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            Create Job
          </NavLink>
        </aside>

        {/* PAGE CONTENT */}
        <section className="hr-content">
          <Outlet />
        </section>
      </div>
    </div>
  );
};
