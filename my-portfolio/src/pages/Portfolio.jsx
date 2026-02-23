// src/pages/Portfolio.jsx
import React from "react";
import projects from "../data/projects";

function Portfolio() {
  const section = "Portfolio";

  return (
    <>
      {/* Navbar */}
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

      {/* Page title */}
      <h1
        style={{ fontFamily: "'Monospaced', Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace" }}
        className="m-4 text-center fs-1 fw-bold"
      >
        {section}
      </h1>

      {/* GitHub card */}
      <div className="container">
        <div className="col">
          <div className="card shadow-sm my-4">
            <div className="card-body">
              <h5 className="card-title">GitHub Link - See Project Code</h5>
              <p className="card-text">
                Explore the code for my projects and more on GitHub.
              </p>
              <a
                href="https://github.com/LoganBaty/Logan_Baty_Portfolio_Collection.git"
                className="btn btn-outline-secondary"
                target="_blank"
                rel="noreferrer"
              >
                Visit Repository
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Projects list */}
      {projects && projects.length > 0 ? (
        projects
          .slice()
          .reverse() // mimic "reversed" in Django
          .map((item) => (
            <div className="container" key={item.id}>
              <div className="col">
                <div className="card my-4">
                  <div className="card-body mb-1">
                    <h2
                      style={{
                        fontFamily:
                          "'Monospaced', Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace"
                      }}
                      className="fs-2"
                    >
                      {item.title}
                    </h2>
                    <p>{item.description}</p>
                    <a
                        className="btn btn-outline-secondary mb-4"
                        href={`/portfolio/${item.slug}`}
                    >
                        Learn More About {item.title}
                    </a>

                  </div>
                </div>
              </div>
            </div>
          ))
      ) : (
        <p className="text-center">No {section.toLowerCase()} are available.</p>
      )}

      <div className="my-3"></div>
    </>
  );
}

export default Portfolio;
