// src/components/Navbar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  // Helper to highlight the active link
  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <nav
      className="navbar navbar-expand-lg bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link
          style={{ fontFamily: "'Copperplate Gothic Bold', Fantasy" }}
          className="navbar-brand fs-1"
          to="/"
        >
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop"
            alt="logo"
            width="100"
            height="90"
            className="d-inline-block align-text-middle"
          />
          My Portfolio
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse me-5" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto fs-2">
            <Link className={`nav-link ${isActive("/")}`} to="/">
              Home
            </Link>
            <Link className={`nav-link ${isActive("/resume")}`} to="/resume">
              Resume
            </Link>
            <Link
              className={`nav-link ${
                location.pathname.startsWith("/portfolio") ? "active" : ""
              }`}
              to="/portfolio"
            >
              Portfolio
            </Link>
            <Link
              className={`nav-link ${isActive("/achievements")}`}
              to="/achievements"
            >
              Achievements
            </Link>
            <Link className={`nav-link ${isActive("/contact")}`} to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
