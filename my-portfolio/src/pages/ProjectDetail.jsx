// src/pages/ProjectDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="container my-5">
        <h1 className="text-center">Project not found</h1>
        <div className="text-center mt-3">
          <Link className="btn btn-outline-secondary" to="/portfolio">
            Return to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Navbar (same as other pages) */}
      <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <a
            style={{ fontFamily: "'Copperplate Gothic Bold', Fantasy" }}
            className="navbar-brand fs-1"
            href="/"
          >
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop"
              alt="logo"
              width="100"
              height="90"
              className="d-inline-block align-text-middle"
            />
            My Portfolio
          </a>

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
              <a className="nav-link" href="/">Home</a>
              <a className="nav-link" href="/resume">Resume</a>
              <a className="nav-link active" href="/portfolio">Portfolio</a>
              <a className="nav-link" href="/achievements">Achievements</a>
              <a className="nav-link" href="/contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Detail content */}
      <div className="container my-5">
        <h1
          style={{
            fontFamily:
              "'Monospaced', Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace"
          }}
          className="text-center fs-1 fw-bold"
        >
          {project.title}
        </h1>

        <br />

        <div className="text-center">
          <img
            src={project.image}
            alt={project.title}
            width="550"
            height="450"
            className="rounded mb-3"
          />
        </div>

        <p>{project.paragraph}</p>

        <Link className="btn btn-outline-secondary btn-sm my-4" to="/portfolio">
          Return to Portfolio
        </Link>
      </div>
    </>
  );
}
