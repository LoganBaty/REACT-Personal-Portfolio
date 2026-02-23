// src/pages/Contact.jsx
import React from "react";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />

      {/* Page Content */}
      <h1 className="m-4 text-center fs-1 fw-bold">Contact Me</h1>

      <div className="container">
        <h5>Email:</h5>
        <p>loganbaty27@gmail.com</p>

        <h5>Phone:</h5>
        <p>(801)-643-1678</p>
      </div>
    </>
  );
}
