import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../services/authprovider";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LogIn() {
  const [user, setUser] = useState({ email: "", password: "" });
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const url = "http://localhost:7878/users/signin";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.email || !user.password) {
      if (!user.email) toast.error("Please enter your email");
      if (!user.password) toast.error("Please enter your password");
    } else {
      axios
        .post(url, user)
        .then((result) => {
          let token = result.data["jwt"];
          let role = jwtDecode(token).authorities;
          setToken(token);
          if (role === "ROLE_HR") navigate("/hr");
          else if (role === "ROLE_ADMIN") navigate("/admin");
          else if (role === "ROLE_APPLICANT") navigate("/applicant");
        })
        .catch((error) => {
          if (error.response?.status === 401) {
            toast.error("Invalid email or password. Please try again.");
          } else {
            toast.error("An error occurred. Please try again later.");
          }
        });
    }
  };

  const OnTextChanged = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back 👋</h2>
        <p className="login-subtitle">Please login to continue</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={user.email}
              placeholder="example@gmail.com"
              autoComplete="off"
              onChange={OnTextChanged}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              placeholder="Enter your password"
              autoComplete="off"
              onChange={OnTextChanged}
              required
            />
          </div>
          <div className="buttons">
            <button type="submit" className="btn-login">
              Log In
            </button>
            <Link to="/forgot-password" className="forgot-link">
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default LogIn;
