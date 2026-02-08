import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import "./Admin.css";
import { logout } from "../../services/helper";

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <>
      {/* Top Navbar */}
      <nav className="navbar navbar-expand-lg admin-navbar px-4">
        <Link className="navbar-brand fw-bold text-white" to="/">
          Get Hired
        </Link>

        <div className="ms-auto">
          <button
            className="btn btn-outline-light btn-sm"
            onClick={() => logout(navigate)}
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="admin-container">
        {/* Sidebar */}
        <aside className="admin-sidebar">
          <div className="admin-profile">
            <h5>Welcome</h5>
            <h4 className="fw-bold">Admin</h4>
          </div>

          <NavLink to="/admin/register-hr" className="sidebar-link">
            Register HR
          </NavLink>

          <NavLink to="/admin/hr-list" className="sidebar-link">
            HR List
          </NavLink>

          <NavLink to="/admin/job-list" className="sidebar-link">
            Job List
          </NavLink>

          <NavLink to="/admin/report" className="sidebar-link">
            Report
          </NavLink>
        </aside>

        {/* Main Content */}
        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default AdminDashboard;
