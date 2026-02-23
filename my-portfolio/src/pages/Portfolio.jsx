// src/pages/Portfolio.jsx
import React from "react";
import projects from "../data/projects";
import Navbar from "../components/Navbar";

function Portfolio() {
  const section = "Portfolio";

  return (
    <>
      <Navbar />

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
