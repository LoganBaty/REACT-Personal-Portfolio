// src/pages/Achievements.jsx
import React from "react";
import Navbar from "../components/Navbar";

export default function Achievements() {
  return (
    <>
      <Navbar />

      {/* Page Content */}
      <div className="container py-5">
        <h1
          className="mb-4 text-center"
          style={{
            fontFamily:
              "'Monospaced', Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace"
          }}
        >
          Achievements
        </h1>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <ul className="list-group list-group-flush shadow-lg">
              <li className="list-group-item py-4">
                <h3 className="mb-1">
                  Presidential Scholarship - Weber State University
                </h3>
                <p className="text-muted mb-0">
                  Rewarded the Presidential Scholarship for GPA and ACT scores.
                </p>
              </li>

              <li className="list-group-item py-4">
                <h3 className="mb-1">Senior Capstone Project</h3>
                <p className="text-muted mb-0">
                  Led a team to build a full-stack grant application system using
                  ASP.NET and SQL Server.
                </p>
              </li>

              <li className="list-group-item py-4">
                <h3 className="mb-1">
                  Frank & Carolyn Coker Computer Science Scholarship
                </h3>
                <p className="text-muted mb-0">
                  Rewarded with this scholarship for academic success as a
                  Computer Science major.
                </p>
              </li>

              <li className="list-group-item py-4">
                <h3 className="mb-1">
                  Bachelor of Science – Computer Science – Weber State University
                </h3>
                <p className="text-muted mb-0">
                  Expected to earn a Bachelor's degree in April 2026.
                </p>
              </li>

              <li className="list-group-item py-4">
                <h3 className="mb-1">
                  Associate of Applied Science – Computer Science – Weber State
                  University
                </h3>
                <p className="text-muted mb-0">
                  Earned with a 3.99 GPA in December 2024.
                </p>
              </li>

              <li className="list-group-item py-4">
                <h3 className="mb-1">
                  Certificate of Proficiency in Programming – Weber State
                  University
                </h3>
                <p className="text-muted mb-0">
                  Earned certificate in December 2023.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
