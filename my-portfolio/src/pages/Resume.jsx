// src/pages/Resume.jsx
import React from "react";
import Navbar from "../components/Navbar";

export default function Resume() {
  return (
    <>
      <Navbar />

      {/* Page Content */}
      <h1
        style={{
          fontFamily:
            "'Monospaced', Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace"
        }}
        className="m-4 text-center fs-1 fw-bold"
      >
        My Resume
      </h1>

      <div className="container">
        <p className="text-center mx-auto" style={{ width: "50%" }}>
          You can view my resume in another tab or download my resume using the
          buttons below.
        </p>
      </div>

      <div className="container text-center mt-5">
        {/* Download Resume */}
        <a
          href="/LoganBaty-Resume.pdf"
          className="btn btn-outline-dark me-5"
          download
        >
          Download Resume
        </a>

        {/* View Resume */}
        <a
          href="/LoganBaty-Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline-dark"
        >
          View Resume
        </a>
      </div>
    </>
  );
}
