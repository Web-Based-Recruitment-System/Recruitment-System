import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import {
  sendOtpToEmail,
  verifyOtpEmail,
  resetPassword,
} from "../../services/forgotPassword";

export const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isSent, setSentOtp] = useState(false);
  const [isOtpVerified, setOtpVerified] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleSendOtp = () => {
    setLoading(true);
    sendOtpToEmail(email)
      .then(() => {
        toast.success(`Otp sent to ${email}, check your mail`);
        setSentOtp(true);
      })
      .catch(() => {
        toast.error(`Email not found!`);
      })
      .finally(() => setLoading(false));
  };

  const verifyOtp = () => {
    verifyOtpEmail(email, otp)
      .then((response) => {
        if (response.email === email && response.otp === otp) {
          toast.success("Verified successfully! Change your password");
          setOtpVerified(true);
        }
      })
      .catch(() => toast.error("Something went wrong"));
  };

  const isValidPassword = (password) =>
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const resetPasswordAndRedirect = () => {
    if (password !== confirmPassword) {
      toast.error("Password and confirm password don't match");
    } else if (!isValidPassword(password)) {
      toast.warn("Enter a valid password (min 8 chars, upper/lowercase, number)");
    } else {
      resetPassword(email, otp, password).then(() => {
        toast.success("Password reset successfully!");
        navigate("/signin");
      });
    }
  };

  // Inline styles
  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #f3e8ff, #f7f4ff)",
    },
    card: {
      background: "#fff",
      padding: "40px",
      borderRadius: "15px",
      boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
      width: "100%",
      maxWidth: "450px",
    },
    title: {
      textAlign: "center",
      fontSize: "1.8rem",
      fontWeight: "700",
      color: "#6a0dad",
      marginBottom: "25px",
    },
    label: {
      fontWeight: "600",
      color: "#4e2a84",
      marginBottom: "5px",
      display: "block",
    },
    input: {
      marginBottom: "15px",
    },
    button: {
      fontSize: "1rem",
      fontWeight: "600",
      borderRadius: "8px",
      padding: "10px",
      width: "100%",
      marginBottom: "15px",
      border: "none",
      cursor: "pointer",
    },
    btnPrimary: {
      background: "linear-gradient(135deg, #6a0dad, #9b7ed9)",
      color: "#fff",
    },
    btnSuccess: {
      background: "#28a745",
      color: "#fff",
    },
    btnWarning: {
      background: "#ff9800",
      color: "#fff",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>
          {isOtpVerified ? "Reset Password" : "Forgot Password"}
        </h2>

        {!isOtpVerified && (
          <>
            <label style={styles.label}>Email:</label>
            <input
              type="email"
              className="form-control"
              style={styles.input}
              value={email}
              placeholder="xyz12@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              disabled={isOtpVerified}
            />
          </>
        )}

        {isSent && !isOtpVerified && (
          <>
            <label style={styles.label}>Enter OTP:</label>
            <input
              type="number"
              className="form-control"
              style={styles.input}
              value={otp}
              placeholder="XXXXXX"
              onChange={(e) => setOtp(e.target.value)}
              disabled={isOtpVerified}
            />
          </>
        )}

        {!isSent && (
          <button
            style={{ ...styles.button, ...styles.btnPrimary }}
            onClick={handleSendOtp}
            disabled={isLoading || !email}
          >
            {isLoading ? (
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
            ) : null}
            Send OTP
          </button>
        )}

        {isSent && !isOtpVerified && (
          <button
            style={{ ...styles.button, ...styles.btnSuccess }}
            onClick={verifyOtp}
          >
            Verify OTP
          </button>
        )}

        {isOtpVerified && (
          <>
            <label style={styles.label}>New Password:</label>
            <input
              type="password"
              className="form-control"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label style={styles.label}>Confirm Password:</label>
            <input
              type="password"
              className="form-control"
              style={styles.input}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button
              style={{ ...styles.button, ...styles.btnWarning }}
              onClick={resetPasswordAndRedirect}
            >
              Reset Password
            </button>
          </>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;
