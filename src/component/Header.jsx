import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Header.css";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo image added here */}
        <Link
          to="/"
          className="logo"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img
            src="store/logo.png" // Place your logo image in the public folder as 'logo.png'
            alt="Logo"
            style={{
              height: "38px",
              width: "38px",
              objectFit: "contain",
            }}
          />
          SkillShare
        </Link>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/booking" onClick={() => setMenuOpen(false)}>
            Booking
          </Link>
          <Link to="/skills" onClick={() => setMenuOpen(false)}>
            Skills
          </Link>
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="login-btn"
          >
            Login
          </Link>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};
