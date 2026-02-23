// src/pages/ProjectDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import Navbar from "../components/Navbar";

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
      <Navbar />

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
            width="800"
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
