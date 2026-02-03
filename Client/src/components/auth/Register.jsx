import { useState } from "react";
import axios from "axios";
import "../auth/Register.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const url = "http://localhost:7878/users/signup";
  const navigate = useNavigate();

  const [sendData, setSendUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    dob: "",
    gender: "",
  });

  const OnTextChanged = (e) => {
    setSendUpData({ ...sendData, [e.target.name]: e.target.value });
  };

  const handleGenderChange = (e) => {
    setSendUpData({ ...sendData, gender: e.target.value });
  };

  const ResetInput = () => {
    setSendUpData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
      dob: "",
      gender: "",
    });
  };

  async function SignUp() {
    try {
      await axios.post(url, sendData);
      toast.success("Signed up successfully!");
      navigate("/signin");
      ResetInput();
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed");
    }
  }

  const validateValues = () => {
    const { firstName, lastName, email, password, phoneNumber, dob, gender } = sendData;
    const currentDate = new Date();
    const selectedDate = new Date(dob);
    let valid = true;

    if (!firstName.trim()) { toast.error("Enter first name"); valid = false; }
    if (!lastName.trim()) { toast.error("Enter last name"); valid = false; }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) { toast.error("Enter valid email"); valid = false; }
    if (!password.trim() || !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) { toast.error("Enter valid password"); valid = false; }
    if (!phoneNumber.trim() || !/^\d{10}$/.test(phoneNumber)) { toast.error("Enter valid phone"); valid = false; }
    if (!dob.trim() || selectedDate >= currentDate) { toast.error("DOB should be in the past"); valid = false; }
    if (!gender.trim()) { toast.error("Select gender"); valid = false; }

    if (valid) SignUp();
  };

  return (
    <div className="signup-page">
      <div className="signup-card shadow-lg">
        <h2 className="signup-title">Create Account</h2>

        <form>
          <div className="name-fields">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={sendData.firstName}
              onChange={OnTextChanged}
              className="form-input"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={sendData.lastName}
              onChange={OnTextChanged}
              className="form-input"
            />
          </div>

          <div className="gender-fields">
            {["MALE", "FEMALE", "OTHER"].map((g) => (
              <label key={g} className="gender-option">
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  checked={sendData.gender === g}
                  onChange={handleGenderChange}
                />
                {g.charAt(0) + g.slice(1).toLowerCase()}
              </label>
            ))}
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={sendData.email}
            onChange={OnTextChanged}
            className="form-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={sendData.password}
            onChange={OnTextChanged}
            className="form-input"
          />
          <input
            type="date"
            name="dob"
            value={sendData.dob}
            onChange={OnTextChanged}
            className="form-input"
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={sendData.phoneNumber}
            onChange={OnTextChanged}
            className="form-input"
          />

          <button
            type="button"
            className="signup-btn"
            onClick={validateValues}
          >
            Sign Up
          </button>

          <p className="signin-link">
            Already have an account? <a href="/signin">Sign In</a>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Register;
