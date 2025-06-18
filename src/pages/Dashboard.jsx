import React, { useEffect, useState } from "react";
import { Header } from "../component/Header";
import "./dashboard.css";

export const Dashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [registrations, setRegistrations] = useState([]);
  const [activeTab, setActiveTab] = useState("bookings");

  useEffect(() => {
    // Fetch bookings
    fetch("http://localhost:5000/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch(() => setBookings([]));

    // Fetch registrations
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setRegistrations(data))
      .catch(() => setRegistrations([]));
  }, []);

  return (
    <>
      <Header />

      {/* Navbar */}
      <nav className="dashboard-navbar">
        <ul>
          <li>
            <button
              className={activeTab === "bookings" ? "active" : ""}
              onClick={() => setActiveTab("bookings")}
            >
              Bookings
            </button>
          </li>
          <li>
            <button
              className={activeTab === "users" ? "active" : ""}
              onClick={() => setActiveTab("users")}
            >
              Users
            </button>
          </li>
        </ul>
      </nav>

      <section className="dashboard-section">
        <div className="dashboard-container">
          <h2>Dashboard</h2>
          <div className="dashboard-grid">
            {activeTab === "bookings" && (
              <div className="dashboard-card">
                <h3>Bookings</h3>
                {bookings.length > 0 ? (
                  <table className="dashboard-table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Service</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map((b, i) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{b.name}</td>
                          <td>{b.date}</td>
                          <td>{b.email}</td>
                          <td>{b.category}</td>
                          <td>{b.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p>No bookings found.</p>
                )}
              </div>
            )}

            {activeTab === "users" && (
              <div className="dashboard-card">
                <h3>Registrations</h3>
                {registrations.length > 0 ? (
                  <table className="dashboard-table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {registrations.map((r, i) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{r.name}</td>
                          <td>{r.email}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p>No registrations found.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
