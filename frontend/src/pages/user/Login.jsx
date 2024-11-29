import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Login.css";

function Login() {

  const {setIsAuthenticated, checkAuth, isAuthenticated} = useContext(AuthContext)

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Login successful:", result);
        setIsSuccess(true);
        setIsAuthenticated(true);
        setStatusMessage("Login successful! Redirecting to dashboard...");

        // Store authentication token if provided
        if (result.token) {
          localStorage.setItem("authToken", result.token);
        }

        // Redirect to dashboard after a short delay
        setTimeout(() => {
          navigate("/");
        }, 500);
      } else {
        const errorData = await response.json();
        console.error("Login failed:", errorData);
        setIsSuccess(false);
        setStatusMessage(errorData.message || "Invalid username or password.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setIsSuccess(false);
      setStatusMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="button-group">
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
          <div className="register-link">
            <p>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </div>
        </form>
        {statusMessage && (
          <div className={`status-message ${isSuccess ? "success" : "error"}`}>
            {statusMessage}
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
