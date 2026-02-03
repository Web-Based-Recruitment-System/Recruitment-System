import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="navbar fixed-top navbar-expand-lg background">
        <NavLink className="navbar-brand" to="/home">
          Get Hired
        </NavLink>
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
              <NavLink className="nav-link items" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link items" to="/contact-us">
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link items" to="/about-us">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link items" to="/signin">
                Sign In
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link items" to="/signup">
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
