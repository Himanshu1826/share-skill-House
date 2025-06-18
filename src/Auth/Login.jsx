import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";
import { Header } from "../component/Header";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.email || !formData.password) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/users?email=${formData.email}&password=${formData.password}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      const users = await response.json();

      if (users.length > 0) {
        // Login success, redirect to Home
        navigate("/");
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      setError("Server error. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <div className="login-video-background">
        <video autoPlay loop muted playsInline className="bg-video">
          <source src="store/login.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <section className="login-section">
          <div className="login-container">
            <h2 className="login-title">🔐 Login</h2>
            <p className="login-subtitle">Log in to continue</p>
            {error && <p className="error">{error}</p>}
            {success && (
              <p
                className="success"
                style={{
                  color: "green",
                  textAlign: "center",
                  marginBottom: "1rem",
                }}
              >
                {success}
              </p>
            )}
            <form onSubmit={handleSubmit} className="login-form">
              <label>
                📧 Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                />
              </label>
              <label>
                🔒 Password
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                />
              </label>
              <button type="submit" className="ctan-btn">
                🚀 Sign In
              </button>
            </form>
            <div className="login-footer">
              <p>
                Don't have an account? <Link to="/register">Register</Link>
              </p>
              <p>
                <Link to="/forgot-password">Forgot Password?</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;

