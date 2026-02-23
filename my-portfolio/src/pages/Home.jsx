// src/pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Main Content */}
      <h1 className="m-4 text-center fs-1 fw-bold">
        Welcome to my Portfolio!
      </h1>

      <div className="container">
        <p className="text-center mx-auto" style={{ width: "50%" }}>
          My name is Logan Baty. I currently am attending Weber State
          University studying Computer Science. Within this online portfolio,
          you can see and download my resume, view some of my software
          projects and their code, view some of my achievements, and see my
          contact information. Thanks for visiting my portfolio!
        </p>
      </div>

      <div className="text-center">
        <img
          src="/images/meOutside.JPEG"
          alt="me"
          width="500"
          height="600"
          className="rounded mb-3"
        />

        <div className="container text-center mb-5">
          <h3 className="pb-4">Here are some quick links:</h3>

          {/* Resume download (you will replace this with your actual file path) */}
          <a
            href="/LoganBaty-Resume.pdf"
            className="btn btn-outline-dark me-5"
            download
          >
            Download Resume
          </a>

          <a
            href="https://github.com/LoganBaty/Logan_Baty_Portfolio_Collection.git"
            className="btn btn-outline-dark"
            target="_blank"
            rel="noreferrer"
          >
            Visit GitHub Repository
          </a>
        </div>
      </div>
    </>
  );
}
