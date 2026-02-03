import "./footer.css";
import { Link } from "react-router-dom";

const date = new Date();

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2 className="footer-brand">Get Hired</h2>
        <div className="footer-links">
          <Link to="/contact-us" className="footer-link">Contact Us</Link>
          <Link to="/about-us" className="footer-link">About Us</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {date.getFullYear()} Get Hired. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
