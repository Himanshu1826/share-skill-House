import React, { useState } from "react";
import "./Register.css";
import { Header } from "../component/Header";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Save registration data to db.json (users array)
    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        setSuccess("Registration successful!");
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        setError("Failed to register. Please try again.");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    }
  };

  return (
    <>
      <Header />
      <section className="register-section">
        <div className="register-container">
          <h2>📝 Register</h2>
          {error && <p className="error">{error}</p>}
          {success && (
            <p
              className="success"
              style={{ color: "green", textAlign: "center" }}
            >
              {success}
            </p>
          )}
          <form onSubmit={handleSubmit} className="register-form">
            <label>
              👤 Full Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </label>
            <label>
              📧 Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </label>
            <label>
              🔒 Password
              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                />
                <span
                  onClick={() => setShowPassword((prev) => !prev)}
                  style={{
                    position: "absolute",
                    right: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </label>
            <label>
              🔒 Confirm Password
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
            </label>
            <button type="submit" className="ctan-btn">
              🎉 Create Account
            </button>
          </form>
          <div
            className="register-footer"
            style={{ textAlign: "center", marginTop: "1.5rem" }}
          >
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
            <p>
              <Link to="/forgot-password">Forgot Password?</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
