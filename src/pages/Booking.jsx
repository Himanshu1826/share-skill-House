import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Booking.css";
import { Header } from "../component/Header";

gsap.registerPlugin(ScrollTrigger);

const Booking = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    date: "",
    notes: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    gsap.set(
      ".booking-container, .booking-form input, .booking-form select, .booking-form textarea, .booking-form button",
      { opacity: 0 }
    );

    gsap.to(".booking-container", {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.to(
      ".booking-form input, .booking-form select, .booking-form textarea, .booking-form button",
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.5,
      }
    );
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await fetch("http://localhost:5000/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to save booking.");
      setSubmitted(true);
      setFormData({ name: "", email: "", category: "", date: "", notes: "" });
      setTimeout(() => setSubmitted(false), 3500);
    } catch (error) {
      setError("Booking failed. Please try again.");
      console.error("Booking failed:", error);
    }
  };

  return (
    <>
      <Header />
      <section className="booking-section">
        <div className="booking-container">
          <h2>Book a Mentorship Session</h2>
          <p>
            Connect with expert mentors and schedule your personalized session
            today.
          </p>
          {error && (
            <div style={{ color: "#dc2626", marginBottom: "1rem" }}>
              {error}
            </div>
          )}
          {submitted ? (
            <div className="booking-success">
              ✅<h3>Booking Confirmed!</h3>
              <p>Thank you for booking. We’ll contact you soon.</p>
            </div>
          ) : (
            <form
              className="booking-form"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <label>
                <span className="input-icon">👤</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  required
                />
              </label>
              <label>
                <span className="input-icon">📧</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                />
              </label>
              <label>
                <span className="input-icon">🎯</span>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Skill Category</option>
                  <option>Web Development</option>
                  <option>Design & UI/UX</option>
                  <option>Marketing</option>
                  <option>Data Science</option>
                  <option>Business Strategy</option>
                </select>
              </label>
              <label>
                <span className="input-icon">📆</span>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                <span className="input-icon">📝</span>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Additional Notes (optional)"
                  rows="4"
                />
              </label>
              <button type="submit" className="cta-btn">
                ✨ Confirm Booking
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default Booking;
